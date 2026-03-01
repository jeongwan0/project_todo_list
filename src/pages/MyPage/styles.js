import { css } from "@emotion/react";
// /** @jsxImportSource @emotion/react */

export const mainDiv = css`
  width: 560px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const profileDiv = css`
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const imgBtn = css`
  aspect-ratio: 1 / 1;
  height: 50%;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid black;
  overflow: hidden;
`;

export const profileImg = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const textDiv = css`
  width: 100%;
  height: 20%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const nickNameText = css`
  font-size: 26px;
`;

export const idText = css`
  font-size: 18px;
  color: #555;
`;

export const changeDiv = css`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  border-collapse: collapse;
  border: 1px solid black;
`;

export const innerDiv = css`
  width: 100%;
  height: auto;
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  border-bottom: 1px solid #666;
`;

export const content1 = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 20px;
`;

export const content2 = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  padding-left: 15px;
  align-items: center;
  font-size: 20px;
`;

export const changeInput = css`
  font-size: 20px;
  box-sizing: border-box;
  padding: 0 0;
  border: 1px solid #000;
  outline: none;
  background: #fff;

  &[readonly] {
    background: transparent;
    border-color: transparent;
  }
`;

export const content3 = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  padding-right: 10px;
  align-items: center;
`;

export const changeBtn = css`
  width: 70%;
  height: 40%;
  background-color: white;
  border: none;
  outline: 1px solid black;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const innerDdayDiv = css`
  width: 100%;
  height: auto;
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr 160px;
  border-bottom: 1px solid #666;
`;

export const marginLeft = css`
  margin-left: 5px;
`;

export const deleteUserDiv = css`
  border: none;
`;
