import styled from "styled-components";

export const ProfileImageContainer = styled.div`
  position: absolute;
  left: 7%;
  width: 30%;
`;

export const ProfileImage = styled.img`
  -webkit-user-drag: none;
  box-sizing: border-box;
  width: 100%;
  border-radius: 50%;
  border: 5px solid lightblue;
`;

export const Overlay = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  margin: 5px;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0;
  color: white;
  font-size: 1.6rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.7;
  }
  transition: 0.5s;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 42%;
  text-align: left;
`;
