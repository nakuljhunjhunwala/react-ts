import css from "styled-jsx/css";
import { theme } from "../../config";

const {
  colors: { Green_1 },
} = theme;

export default css`
  .helloWorld {
    color: ${Green_1};
    background-color: black;
  }
`;
