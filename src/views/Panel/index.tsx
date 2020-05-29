import React, { useState } from "react";
import * as S from "./styles";

interface PanelProps {
  isShowing: boolean;
}

function Panel({ isShowing }: PanelProps) {
  return (
    <>
      <S.Container isShowing={isShowing}></S.Container>
    </>
  );
}

export default Panel;
