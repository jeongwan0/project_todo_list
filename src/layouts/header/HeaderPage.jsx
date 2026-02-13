import React from 'react'
// /** @jsxImportSource @emotion/react */
import * as s from "./styles" 

export default function HeaderPage() {
  return (
    <header css={s.header}>
      <div css={s.logoDiv}>
        <button css={s.btn}>
          <img alt="logo" />
        </button>
      </div>
      <div css={s.profileDiv}>
        <button css={s.btn}>
          <img alt="profile" />
        </button>
      </div>
    </header>
  )
}
