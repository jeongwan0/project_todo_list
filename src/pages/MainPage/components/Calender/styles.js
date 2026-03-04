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
  background-color: beige;
`;

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
`;

export const midDate = css`
  width: auto;
  height: 100%;
  background: transparent;
  font-size: 50px;
  border: none;
  cursor: pointer;
`

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

export const calendar = css`
  width: 100%;
  height: 100%;
  border-spacing: 0px;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const week = css`
  background-color: white;
  text-align: center;
  font-size: 20px;
  height: 50px;
`;

export const weeks = (weeksLength) => css`
  background-color: white;
  text-align: center;
  font-size: 20px;
  height: ${weeksLength === 4 ? "25%" : weeksLength === 5 ? "20%" : "16.6667%"};
`;

export const date = css`
  background-color: white;
  border: 0.5px solid #555;
  text-align: center;
  font-size: 20px;
  padding: 0;
`;

export const hover = css`
  &:hover {
    background-color: #f9f9f9;
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

export const disabled = css`
  background-color: #eee;
`;

export const ckbx = css`
  margin-right: 5px;
`;

export const cardBackground = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background-color: rgb(238, 238, 238, 0.7);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cardDiv = css`
  border: 1px solid #111;
  width: 400px;
  height: 500px;
  background-color: white;
`;

export const cardDate = css`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: end;
  justify-content: center;
  font-size: 30px;
`

export const cardSearch = css`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const cardInput = css`
  flex: 1;
  height: 60%;
  border: none;
  background-color: white;
  padding: 0px 10px;
  border: 1px solid #111;
  outline: none;
  font-size: 16px;
`;

export const cardSearchBtn = css`
  height: 60%;
  aspect-ratio: 1;
  border: 1px solid #111;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 30px;
  border: 1px solid #111;
  border-left: none;
  cursor: pointer;
`;

export const cardTodos = css`
  width: 100%;
  height: 70%;
  padding: 10px;
`;

export const ckbxDiv = css`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  border: 1px solid #111;
  margin-bottom: 5px;
`;

export const ckbxInput = css`
  height: 100%;
  width: 16px;
  cursor: pointer;
`;

export const ckbxLabel = css`
  height: 100%;
  width: 90%;
  display: flex;
  padding-left: 10px;
  font-size: 20px;
  align-items: center;
  cursor: pointer;
`;

export const cardBtm = css`
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  padding: 0px 10px;
`;

export const cardCloseBtn = css`
  width: 50px;
  height: 50%;
  background-color: white;
  border: 1px solid black;
`;

export const cardDiv2 = css`
  border: 1px solid #111;
  width: 500px;
  height: 600px;
  background-color: darkblue;
`;
