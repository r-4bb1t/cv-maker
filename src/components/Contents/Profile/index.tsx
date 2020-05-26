import React, { useState } from "react";
import * as S from "./styles";
import TextInput from "../../Units/TextInput";
import ImageUploader from "../../Units/ImageUploader";

function Profile({}) {
  return (
    <>
      <S.ProfileImageContainer>
        <ImageUploader />
      </S.ProfileImageContainer>
      <S.TextContainer>
        <TextInput init={"개발자는 영어로 DogFootRuler"} fontFamily={"InkLipquid"} fontSize={1.5} makeNewLine={true} />
        <TextInput init={"개발자"} fontSize={3} fontWeight={800} makeNewLine={false} />
        <TextInput init={"DogFootRuler"} fontSize={2.5} fontWeight={400} makeNewLine={true} />
        <TextInput init={"Phone"} fontSize={1} fontWeight={800} lineHeight={1.5} makeNewLine={false} />
        <TextInput init={"010.0000.0000"} fontSize={1} fontWeight={400} makeNewLine={true} />
        <TextInput init={"Email"} fontSize={1} fontWeight={800} lineHeight={1.5} makeNewLine={false} />
        <TextInput init={"010.0000.0000"} fontSize={1} fontWeight={400} makeNewLine={true} />
        <TextInput init={"Github"} fontSize={1} fontWeight={800} lineHeight={1.5} makeNewLine={false} />
        <TextInput init={"010.0000.0000"} fontSize={1} fontWeight={400} makeNewLine={true} />
        <TextInput init={"Blog"} fontSize={1} fontWeight={800} lineHeight={1.5} makeNewLine={false} />
        <TextInput init={"010.0000.0000"} fontSize={1} fontWeight={400} makeNewLine={true} />
      </S.TextContainer>
    </>
  );
}

export default Profile;
