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

export const calendarDiv = css`
  width: 100%;
  height: 200%;
  border: 1px solid black;
  background-color: beige;
`;

export const sideDiv = css`
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

export const calendar = css`
  width: 100%;
  height: 100%;
  border-spacing: 0px;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const week = css`
  background-color: white;
  border: 0.5px solid black;
  text-align: center;
  font-size: 20px;
  height: 50px;
`;

export const date = css`
  background-color: white;
  border: 0.5px solid black;
  text-align: center;
  font-size: 20px;
  padding: 0;
  vertical-align: middle;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const tdDate = css`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  height: 15%;
  padding-left: 10px;
  font-size: 25px;
`;

export const tdCkbx = css`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  padding: 10px;
  align-items: baseline;
  width: 100%;
  height: 85%;
`;

export const ckbx = css`
  margin-right: 5px;
`;
