import styled from "styled-components";

interface TextProps {
  fontFamily?: string;
  fontSize: number;
  fontWeight?: number;
  lineHeight?: number;
  makeNewLine?: boolean;
}

export const Text = styled.span<TextProps>`
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "NanumSquare")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) => props.fontSize}rem;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : props.fontSize * 1.2)}rem;
  margin-right: 0.5rem;
`;

export const Input = styled.input<TextProps>`
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "NanumSquare")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) => props.fontSize}rem;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : props.fontSize * 1.2)}rem;
  width: ${(props) => (props.makeNewLine ? 70 : 40)}%;
`;
