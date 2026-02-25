import React, { useState } from 'react'
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

export default function ModalStore({ isModalOpened }) {
  console.log("modalStore.jsx 들어옴")
  const [isModalOpen, setIsModalOpen] = useState(isModalOpened);
  return (
    <>
      {isModalOpen && 
      <div css={s.cardDiv}>
        <div css={s.cardSearch}>
          <input type="text" css={s.cardInput} placeholder="검색어를 입력하세요" />
          <button css={s.cardBtn}><AiOutlineSearch size={"24px"}/></button>
        </div>
        <div css={s.cardTodos}>
          <div css={s.ckbxDiv}>
            <input type="checkbox" id="1" css={s.ckbxInput}/>
            <label htmlFor="1" css={s.ckbxLabel}>할일1</label>
          </div>
        </div>
        <div css={s.cardBtm}>
            <button css={[s.cardCloseBtn, s.hover]} onClick={() => {setIsModalOpen(false)}}>닫기</button>
        </div>
      </div>}
      
    </>
  )
}
