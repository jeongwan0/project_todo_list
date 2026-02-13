import React from 'react'
// /** @jsxImportSource @emotion/react */
import * as s from "./styles" 

export default function MainPage() {
  console.log("MainPage.jsx 들어옴")
  return (
    <>
      <div css={s.dateDiv}></div>
      <div css={s.mainDiv}></div>
    </>
  )
}
