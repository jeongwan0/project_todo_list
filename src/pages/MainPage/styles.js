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
`;

export const calendarDiv = css`
  width: 100%;
  height: 90%;
  border: 1px solid black;
  background-color: beige;
`;

export const sideDiv = css`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 20px;
`;

export const midDiv = css`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 30px;
`;

export const calendar = css`
  width: 100%;
  height: 100%;
  border-spacing: 0px;
  table-layout: fixed;
`;

export const thead = css`
  height: 10%;
`;

export const tbody = css`
  width: 90%;
`;

export const week = css`
  background-color: white;
  border: 0.5px solid black;
  text-align: center;
  font-size: 20px;
`;

export const date = css`
  background-color: white;
  border: 0.5px solid black;
  text-align: center;
  font-size: 20px;
`;
