// /** @jsxImportSource @emotion/react */
import { AiOutlinePlus } from "react-icons/ai";
import * as s from "./styles";
import { dayTodo, addTodo, modifyTodo, deleteTodo } from "../../hooks/useCalender";
import { useUserStore } from "../../../../stores/useUserStore";
import { useMemo, useRef, useState } from "react";

export default function CalenderModal ({isModalOpen, setIsModalOpen, date }) {
  const [isAddingTodo, setIsAddingTodo] = useState(false)
  const {currentYear, currentMonth, selectedDay} = date;
  const addInputRef = useRef(null);
  const selectedDate = `${currentYear}${String(currentMonth).padStart(2, "0")}${String(selectedDay).padStart(
    2,
    "0"
  )}`;
  const [inputVal, setInputVal] = useState({
    addInput : "",
    modifyInput : "",
  })
  const user = useUserStore((s) => s.user)
  const dayTodos = dayTodo(selectedDate, user?.id);
  
  const handleBtnClick = (e) => {
    const name = e.target.name;
    const action = e.currentTarget.dataset.action;
    if (action === "plus") {
      setIsAddingTodo((prev) => !prev);
      requestAnimationFrame(() => addInputRef.current?.focus());
    }
    if (action === "modify") {
      console.log("modify", name)
      // modifyTodo(selectedDate, user?.id, inputVal, false);
      return;
    }
    if (action === "delete") {
      deleteTodo(selectedDate, user?.id, name);
      return;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputVal((prev) => ({
    ...prev,
    [name]: value,
  }));
  }
  
  const activeEnter = (e) => {
    if (e.key !== "Enter" || !e.target.value) return;
    addTodo(selectedDate, user?.id, inputVal.addInput, false);
    initialize()
  }

  const initialize = () => {
    setIsModalOpen(false);
    setIsAddingTodo(false);
    setInputVal({ addInput: "" });
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
                />
                <button data-action="plus" css={s.cardPlusBtn} onClick={handleBtnClick}>
                  <AiOutlinePlus size={"24px"} />
                </button>
              </div>
              <div css={s.cardTodos}>
                {dayTodos.map((todo, index) => (
                  <div css={s.ckbxDiv} key={`todo-${index}`}>
                    <div css={s.inputDiv}>
                      <input
                        type="checkbox"
                        id={`todo-${index}`}
                        css={s.ckbxInput}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div css={s.labelDiv}>
                      <label
                        htmlFor={`todo-${index}`}
                        css={s.ckbxLabel}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {todo.text}
                      </label>
                    <div css={s.btnDiv}>
                      <button
                        data-action="modify"
                        name={index}
                        onClick={handleBtnClick}
                        css={s.ckbxBtn}
                      >
                        수정
                      </button>
                      <button
                        data-action="delete"
                        name={index}
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