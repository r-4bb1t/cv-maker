import React, { useState } from "react";
import * as S from "./styles";
import Fab from "@material-ui/core/Fab";

function Layout({}) {
  const [isPannelOn, setIsPannelOn] = useState(false);
  return (
    <>
      <S.MenuButton>
        <Fab
          size="medium"
          style={{ background: "#ee554d" }}
          onClick={() => setIsPannelOn(!isPannelOn)}
        >
          {/* <Hamburger active={isPannelOn} type="spin" /> */}
        </Fab>
      </S.MenuButton>
    </>
  );
}

export default Layout;
