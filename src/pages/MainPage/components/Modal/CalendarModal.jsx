// /** @jsxImportSource @emotion/react */
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import * as s from "./styles";
import { dayTodo, addTodo, modifyTodo, deleteTodo, toggleTodoDone } from "../../../../hooks/useCalendar";
import { useUserStore } from "../../../../stores/useUserStore";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CalendarModal ({ isModalOpen, setIsModalOpen, date, setTick }) {
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const {currentYear, currentMonth, selectedDay} = date;
  const addInputRef = useRef(null);
  const modifyInputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const selectedDate = `${currentYear}${String(currentMonth).padStart(2, "0")}${String(selectedDay).padStart(
    2,
    "0"
  )}`;
  const [inputVal, setInputVal] = useState({
    addInput : "",
    modifyInput : "",
    addDone: false,
  })
  const user = useUserStore((s) => s.user)
  const isLogin = !!user;
  const dayTodos = isLogin ? dayTodo(selectedDate, user?.id) : [];
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen && !isLogin) {
      alert("로그인 후 이용해 주세요.")
      navigate("/login");
    }
  }, [isModalOpen, isLogin, navigate, setIsModalOpen]);

  useEffect(() => {
    if (editingIndex !== null) {
      modifyInputRef.current?.focus();
    }
  }, [editingIndex]);
  
  const modalOpenInit = () => {
    setIsAddingTodo(false);
    setInputVal((prev) => ({
      ...prev,
      addInput: "",
      addDone: false,
    }));
  };

  const handleBtnClick = (e) => {
    const name = e.currentTarget.name;
    const action = e.currentTarget.dataset.action;
    const checked = e.currentTarget.checked

    if (action === "plus") {
      if (inputVal.addInput) {
        addTodo(selectedDate, user?.id, inputVal.addInput, inputVal.addDone);
        setTick((prev) => prev + 1);
        modalOpenInit()
      };

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
      if (editingIndex === Number(name)) {
        modifyTodo(
          selectedDate,
          user?.id,
          Number(name),
          inputVal.modifyInput,
          checked
        );
        setTick((prev) => prev + 1);
        setEditingIndex(null);
        setInputVal((prev) => ({
          ...prev,
          modifyInput: "",
        }));
        return;
      }
      setEditingIndex(Number(name));
      setInputVal((prev) => ({
        ...prev,
        modifyInput: dayTodos[Number(name)].text,
      }));
      return;
    }
    if (action === "delete") {
      const isDelete = window.confirm("정말 삭제하시겠습니까?");
      if (!isDelete) return;

      deleteTodo(selectedDate, user?.id, Number(name));
      setTick((prev) => prev + 1);
      return;
    }
  };

  const filteredTodos = dayTodos
    .map((todo, index) => ({ todo, originalIndex: index }))
    .filter(({ todo }) =>
      todo.text.toLowerCase().includes(searchText.toLowerCase())
    );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputVal((prev) => ({
    ...prev,
    [name]: value,
  }));
  }
  
  const activeEnter = (e) => {
    if (e.key !== "Enter" || !e.target.value) return;

    addTodo(selectedDate, user?.id, inputVal.addInput, inputVal.addDone);
    setTick((prev) => prev + 1);
    modalOpenInit()
  }

  const initialize = () => {
    setIsModalOpen(false);
    setIsAddingTodo(false);
    setEditingIndex(null);
    setSearchText("");
    setInputVal({
      addInput: "",
      modifyInput: "",
      addDone: false,
    });
  }
  
    return (
      <>
        {isModalOpen && (
          <div
            css={s.cardBackground}
            onClick={initialize}
          >
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
                <button data-action="plus" css={s.cardPlusBtn} onClick={handleBtnClick}>
                  {isAddingTodo ? <AiOutlineCheck size={"20px"} /> : <AiOutlinePlus size={"24px"} />}
                </button>
              </div>
              <div css={s.cardTodos}>
                {filteredTodos.map(({ todo, originalIndex }) => (
                  <div css={s.ckbxDiv} key={todo.id}>
                    <div css={s.inputDiv}>
                      <input
                        type="checkbox"
                        id={`todo-${todo.id}`}
                        checked={todo.done}
                        css={s.ckbxInput}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          e.stopPropagation();
                          toggleTodoDone(selectedDate, user?.id, originalIndex);
                          setTick((prev) => prev + 1);
                        }}
                      />
                    </div>
                    <div css={s.labelDiv}>
                      {editingIndex === originalIndex ? (
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
                          {todo.text}
                        </label>
                      )}

                      <div css={s.btnDiv}>
                        <button
                          data-action="modify"
                          name={originalIndex}
                          onClick={handleBtnClick}
                          css={s.ckbxBtn}
                        >
                          {editingIndex === originalIndex ? "완료" : "수정"}
                        </button>

                        <button
                          data-action="delete"
                          name={originalIndex}
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
                  <div css={s.ckbxDiv} key={`todo-add`}>
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
                <button
                  css={[s.cardCloseBtn, s.hover]}
                  onClick={initialize}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };