// /** @jsxImportSource @emotion/react */
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import * as s from "./styles";
import {
  dayTodo,
  addTodo,
  modifyTodo,
  deleteTodo,
  toggleTodoDone,
} from "../../../../hooks/useCalendar";
import { useUserStore } from "../../../../stores/useUserStore";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CalendarModal({
  isModalOpen,
  setIsModalOpen,
  date,
  loadMonthTodos,
}) {
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const { currentYear, currentMonth, selectedDay } = date;
  const addInputRef = useRef(null);
  const modifyInputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const selectedDate = `${currentYear}${String(currentMonth).padStart(2, "0")}${String(
    selectedDay,
  ).padStart(2, "0")}`;
  const [inputVal, setInputVal] = useState({
    addInput: "",
    modifyInput: "",
    addDone: false,
  });
  const user = useUserStore((s) => s.user);
  const isLogin = !!user;
  const [dayTodos, setDayTodos] = useState([]);
  const navigate = useNavigate();

  const loadTodos = async () => {
    if (!isLogin) {
      setDayTodos([]);
      return;
    }

    try {
      const data = await dayTodo(selectedDate, user?.id);
      setDayTodos(data);
    } catch (error) {
      console.error(error);
      setDayTodos([]);
    }
  };

  useEffect(() => {
    if (isModalOpen && !isLogin) {
      alert("로그인 후 이용해 주세요.");
      navigate("/login");
    }
  }, [isModalOpen, isLogin, navigate]);

  useEffect(() => {
    if (!isModalOpen || !isLogin) return;
    loadTodos();
  }, [isModalOpen, isLogin, selectedDate, user?.id]);

  useEffect(() => {
    if (editingTodoId !== null) {
      modifyInputRef.current?.focus();
    }
  }, [editingTodoId]);

  const modalOpenInit = () => {
    setIsAddingTodo(false);
    setInputVal((prev) => ({
      ...prev,
      addInput: "",
      addDone: false,
    }));
  };

  const handleBtnClick = async (e) => {
    const name = e.currentTarget.name;
    const action = e.currentTarget.dataset.action;

    if (action === "plus") {
      if (inputVal.addInput.trim()) {
        await addTodo(
          selectedDate,
          user?.id,
          inputVal.addInput,
          inputVal.addDone,
        );
        await loadTodos();
        await loadMonthTodos();
        modalOpenInit();
        return;
      }

      setIsAddingTodo((prev) => {
        const next = !prev;
        if (next) {
          requestAnimationFrame(() => addInputRef.current?.focus());
        }
        return next;
      });
      return;
    }

    if (action === "modify") {
      const todoId = Number(name);
      const targetTodo = dayTodos.find((todo) => todo.id === todoId);

      if (!targetTodo) return;

      if (editingTodoId === todoId) {
        if (!inputVal.modifyInput.trim()) return;

        try {
          await modifyTodo(
            todoId,
            inputVal.modifyInput,
            targetTodo.done,
            selectedDate,
            user?.id,
          );

          await loadTodos();
          await loadMonthTodos();
          setEditingTodoId(null);
          setInputVal((prev) => ({
            ...prev,
            modifyInput: "",
          }));
        } catch (error) {
          console.error("수정 실패", error);
          alert("수정에 실패했습니다.");
        }
        return;
      }

      setEditingTodoId(todoId);
      setInputVal((prev) => ({
        ...prev,
        modifyInput: targetTodo.content,
      }));
      return;
    }

    if (action === "delete") {
      const isDelete = window.confirm("정말 삭제하시겠습니까?");
      if (!isDelete) return;

      try {
        await deleteTodo(Number(name));
        await loadTodos();
        await loadMonthTodos();
      } catch (error) {
        console.error("삭제 실패", error);
        alert("삭제에 실패했습니다.");
      }
      return;
    }
  };

  const filteredTodos = dayTodos.filter((todo) =>
    (todo.content ?? "").toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputVal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const activeEnter = async (e) => {
    if (e.key !== "Enter" || !e.target.value.trim()) return;

    await addTodo(selectedDate, user?.id, inputVal.addInput, inputVal.addDone);
    await loadTodos();
    await loadMonthTodos();
    modalOpenInit();
  };

  const initialize = () => {
    setIsModalOpen(false);
    setIsAddingTodo(false);
    setEditingTodoId(null);
    setSearchText("");
    setInputVal({
      addInput: "",
      modifyInput: "",
      addDone: false,
    });
  };

  return (
    <>
      {isModalOpen && (
        <div css={s.cardBackground} onClick={initialize}>
          <div css={s.cardDiv} onClick={(e) => e.stopPropagation()}>
            <div css={s.cardDate}>
              {currentYear}.{currentMonth}.{selectedDay}
            </div>
            <div css={s.cardSearch}>
              <input
                type="text"
                css={s.cardInput}
                placeholder="검색어를 입력하세요"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                data-action="plus"
                css={s.cardPlusBtn}
                onClick={handleBtnClick}
              >
                {isAddingTodo ? (
                  <AiOutlineCheck size={"20px"} />
                ) : (
                  <AiOutlinePlus size={"24px"} />
                )}
              </button>
            </div>
            <div css={s.cardTodos}>
              {filteredTodos.map((todo) => (
                <div css={s.ckbxDiv} key={`${selectedDate}-${todo.id}`}>
                  <div css={s.inputDiv}>
                    <input
                      type="checkbox"
                      id={`todo-${todo.id}`}
                      checked={todo.done}
                      css={s.ckbxInput}
                      onClick={(e) => e.stopPropagation()}
                      onChange={async (e) => {
                        e.stopPropagation();
                        await toggleTodoDone(todo.id, !todo.done);
                        await loadTodos();
                        await loadMonthTodos();
                      }}
                    />
                  </div>
                  <div css={s.labelDiv}>
                    {editingTodoId === todo.id ? (
                      <input
                        type="text"
                        id={`todo-${todo.id}`}
                        name="modifyInput"
                        css={s.modifyInput}
                        value={inputVal.modifyInput}
                        onChange={handleInputChange}
                        ref={modifyInputRef}
                      />
                    ) : (
                      <label
                        htmlFor={`todo-${todo.id}`}
                        css={s.ckbxLabel}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {todo.content}
                      </label>
                    )}

                    <div css={s.btnDiv}>
                      <button
                        data-action="modify"
                        name={todo.id}
                        onClick={handleBtnClick}
                        css={s.ckbxBtn}
                      >
                        {editingTodoId === todo.id ? "완료" : "수정"}
                      </button>

                      <button
                        data-action="delete"
                        name={todo.id}
                        onClick={handleBtnClick}
                        css={s.ckbxBtn}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {isAddingTodo && (
                <div css={s.ckbxDiv} key={`${selectedDate}-todo-add`}>
                  <div css={s.inputDiv}>
                    <input
                      type="checkbox"
                      id={`todo-add`}
                      css={s.ckbxInput}
                      onClick={(e) => e.stopPropagation()}
                      checked={inputVal.addDone}
                      onChange={(e) =>
                        setInputVal((prev) => ({
                          ...prev,
                          addDone: e.target.checked,
                        }))
                      }
                    />
                  </div>
                  <div css={s.labelDiv}>
                    <input
                      type="text"
                      name="addInput"
                      css={s.addInput}
                      onClick={(e) => e.stopPropagation()}
                      ref={addInputRef}
                      placeholder="할 일을 입력하세요"
                      onKeyDown={(e) => activeEnter(e)}
                      onChange={handleInputChange}
                      value={inputVal.addInput}
                    />
                  </div>
                </div>
              )}
            </div>
            <div css={s.cardBtm}>
              <button css={[s.cardCloseBtn, s.hover]} onClick={initialize}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
