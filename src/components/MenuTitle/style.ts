import css from 'styled-jsx/css';
const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,500;1,600&display=swap');

  .menuTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 59px;
    width: 423px;
    margin-left: -20px;
    padding: 15px;
    padding-left: 110px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .menuTitle svg {
    transition: transform 150ms linear;
  }

  .menuTitle p {
    font-size: 22px;
    font-weight: bold;
  }

  .menuTitle:hover {
    background-color: #000000;
  }

  /* .menuTitle:hover svg {
    transform: rotate(90deg);
  } */

  .active {
    background-color: #000000;
  }

  .active svg {
    transform: rotate(90deg);
  }

`;
export default styles;
