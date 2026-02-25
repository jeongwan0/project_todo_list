import { css } from "@emotion/react";
// /** @jsxImportSource @emotion/react */

export const innerDiv = css`
  width: 90%;
  height: 90%;
`;

export const dateDiv = css`
  width: 100%;
  height: 10%;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export const todoDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: aliceblue;
`

export const leftDiv = css`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: end;
  font-size: 30px;
`;

export const rightDiv = css`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 30px;
`;

export const midDiv = css`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
  font-size: 50px;
`;

export const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 30px;
  border: none;
  cursor: pointer;
`;

export const arrowBtn = css`
  width: auto;
  height: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
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
  background-color: antiquewhite;
  width: 400px;
  height: 500px;
`

export const cardSearch = css`
  background-color: aqua;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`

export const cardInput = css`
  background-color: azure;
  width: 90%;
  height: 70%;
  border: none;
  background-color: white;
  padding: 0px 10px;
  &:focus {
    border: 1px solid black;
    outline: none;
  }
  font-size: 16px;
`
export const cardBtn = css`
  height: 70%;
  aspect-ratio:1;

`

export const cardTodos = css`
  background-color: aquamarine;
  width: 100%;
  height: 90%;
`

export const ckbxDiv = css`

`

export const ckbxInput = css`
`

export const ckbxLabel = css`
`