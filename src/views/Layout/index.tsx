import React, { useState } from "react";
import * as S from "./styles";
import Fab from "@material-ui/core/Fab";
import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";
import Panel from "../Panel";

function Layout({}) {
  const [isPannelOn, setIsPannelOn] = useState(false);
  return (
    <>
      <S.MenuButton isPannelOn={isPannelOn}>
        <Fab
          size="small"
          style={{ background: isPannelOn ? "#ee554d" : "#aaa", transition: "1s" }}
          onClick={() => setIsPannelOn(!isPannelOn)}
        >
          <S.BurgerContainer>
            <Burger isOpen={isPannelOn} style={{ fontSize: "0.5rem" }} />
          </S.BurgerContainer>
        </Fab>
      </S.MenuButton>
      <Panel isShowing={isPannelOn} />
    </>
  );
}

export default Layout;
