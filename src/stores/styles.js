import { css } from "@emotion/react";
// /** @jsxImportSource @emotion/react */

export const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 30px;
  border: none;
  cursor: pointer;
`;

export const hover = css`
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const cardDiv = css`
  border: 1px solid #111;
  width: 400px;
  height: 500px;
  position: absolute;
  background-color: white;
`

export const cardSearch = css`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`

export const cardInput = css`
  width: 90%;
  height: 70%;
  border: none;
  background-color: white;
  padding: 0px 10px;
  border: 1px solid #111;
  outline: none;
  font-size: 16px;
`

export const cardBtn = css`
  height: 70%;
  aspect-ratio:1;
  border: 1px solid #111;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 30px;
  border: 1px solid #111;
  border-left: none;
  cursor: pointer;
`

export const cardTodos = css`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  padding: 10px;
`

export const ckbxDiv = css`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  border: 1px solid #111;
`

export const ckbxInput = css`
  height: 100%;
  width: 16px;
  cursor: pointer;
`

export const ckbxLabel = css`
  height: 100%;
  width: 90%;
  display: flex;
  padding: 0px 10px;
  font-size: 20px;
  align-items: center;
  cursor: pointer;
`

export const cardBtm = css`
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  padding: 0px 10px;
`

export const cardCloseBtn = css`
  width: 50px;
  height: 50%;
  background-color: white;
  border: 1px solid black;
`

export const cardDiv2 = css`
  border: 1px solid #111;
  width: 500px;
  height: 600px;
  background-color: darkblue;
`