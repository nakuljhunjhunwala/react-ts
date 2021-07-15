import css from 'styled-jsx/css';
const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,500;1,600&display=swap');
  .menuCard {
    max-height: 0;
    width: 381px;
    box-sizing: border-box;
    padding-left: 90px;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: max-height 300ms linear;
  }

  .active{
    max-height: 300px;
  }
`;
export default styles;
