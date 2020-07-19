import React, { useState } from "react";
import * as S from "./styles";
import { useDrop, DropTargetMonitor } from "react-dnd";
import axios from "axios";
import AddAPhotoIcon from "@material-ui/icons/AddPhotoAlternate";

function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcKoYYi%2FbtqFNrSIkUk%2FaMdpM2RERGXDU8oAuHl501%2Fimg.png"
  );
  const setFile = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
      axios
        .post("http://34.64.212.45/upload", img)
        .then((res) => {
          setImageUrl(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <>
      <S.ProfileImage src={imageUrl} />
      <S.Overlay>
        <AddAPhotoIcon style={{ color: "lightgray", fontSize: 60 }} />
        <S.Input type="file" accept="image/*" onChange={(e) => setFile(e)} />
      </S.Overlay>
    </>
  );
}

export default ImageUploader;
