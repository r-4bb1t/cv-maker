import React, { useState, useCallback } from "react";
import * as S from "./styles";
import { useDrop, DropTargetMonitor } from "react-dnd";
import AddAPhotoIcon from "@material-ui/icons/AddPhotoAlternate";

function ImageUploader() {
  const setFile = (e) => {
    console.log(e.target.files);
  };
  return (
    <>
      <S.ProfileImage src="https://pbs.twimg.com/profile_images/1100253079096705025/beJ45nd4_400x400.jpg" />
      <S.Overlay>
        <AddAPhotoIcon style={{ color: "lightgray", fontSize: 60 }} />
        <S.Input type="file" accept="image/*" onChange={(e) => setFile(e)} />
      </S.Overlay>
    </>
  );
}

export default ImageUploader;
