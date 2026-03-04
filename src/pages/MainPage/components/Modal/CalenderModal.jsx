// /** @jsxImportSource @emotion/react */
import { AiOutlineSearch } from "react-icons/ai";
import * as s from "./styles";

export default function CalenderModal ({isModalOpen, setIsModalOpen, date }) {
  const {currentYear, currentMonth, selectedDay} = date;
    return (
      <>
        {isModalOpen && (
          <div
            css={s.cardBackground}
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <div css={s.cardDiv} onClick={(e) => e.stopPropagation()}>
              <div css={s.cardDate}>
                {currentYear}.{currentMonth}.{selectedDay}
              </div>
              <div css={s.cardSearch}>
                <input
                  type="text"
                  css={s.cardInput}
                  placeholder="검색어를 입력하세요"
                />
                <button css={s.cardSearchBtn}>
                  <AiOutlineSearch size={"24px"} />
                </button>
              </div>
              <div css={s.cardTodos}>
                <div css={s.ckbxDiv}>
                  <input
                    type="checkbox"
                    id="1"
                    css={s.ckbxInput}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="1"
                    css={s.ckbxLabel}
                    onClick={(e) => e.stopPropagation()}
                  >
                    할일1
                  </label>
                </div>
                <div css={s.ckbxDiv}>
                  <input
                    type="checkbox"
                    id="2"
                    css={s.ckbxInput}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="2"
                    css={s.ckbxLabel}
                    onClick={(e) => e.stopPropagation()}
                  >
                    할일2
                  </label>
                </div>
              </div>
              <div css={s.cardBtm}>
                <button
                  css={[s.cardCloseBtn, s.hover]}
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };