import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { css, Global } from "@emotion/react";

function App() {
  console.log("App.jsx 들어옴")

  const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    #root {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    }
  `

  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
