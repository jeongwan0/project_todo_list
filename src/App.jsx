import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { css, Global } from "@emotion/react";

function App() {
  console.log("App.jsx 들어옴");

  const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }

    body {
      overflow-y: auto;
    }

    #root {
      width: 100%;
      min-height: 100vh;
    }

    @font-face {
      font-family: "OngleipParkDahyeon";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2")
        format("woff2");
      font-weight: normal;
      font-display: swap;
    }

    div,
    p,
    a,
    button,
    input {
      font-family: OngleipParkDahyeon;
      color: #111;
    }

    td,
    th {
      box-sizing: border-box;
    }

    table {
      table-layout: fixed;
      border-collapse: collapse;
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
