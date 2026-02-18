import { css } from "@emotion/react";

export const header = css`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #30364f;
  display: flex;
  justify-content: center;
`;

export const innerDiv = css`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const logoDiv = css`
  width: auto;
  height: 75%;
  aspect-ratio: 1 / 1;
  border: 1px solid black;
`;

export const btn = css`
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const profileDiv = css`
  width: auto;
  height: 75%;
  aspect-ratio: 1 / 1;
  border: 1px solid black;
`;
