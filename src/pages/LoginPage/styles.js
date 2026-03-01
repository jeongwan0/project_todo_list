import { css } from "@emotion/react";
// /** @jsxImportSource @emotion/react */

export const mainDiv = css`
  width: 560px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const titleDiv = css`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 35px;
`;

export const inputDiv = css`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const idpwDiv = css`
  width: 100%;
  height: 30%;
  display: grid;
  grid-template-columns: 48px 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const idpwText = css`
  margin: 0;
  text-align: right;
  justify-content: end;
  align-items: center;
  margin-right: 10px;
  font-size: 24px;
  cursor: text;
`;

export const idpwInput = css`
  width: 100%;
  height: 50%;
  padding-left: 5px;
  color: black;
  display: flex;
  justify-content: end;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

export const idpwBtn = css`
  aspect-ratio: 1 / 1;
  height: 40%;
  position: absolute;
  right: 0px;
  background-color: rgb(255, 255, 255, 0);
  border: none;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const btnDiv = css`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logsigninBtn = css`
  width: 30%;
  height: 40%;
  font-size: 20px;
  background-color: white;
  border: 1px solid rgb(85, 85, 85, 0.5);
`;

export const hover = css`
  &:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }
`;
