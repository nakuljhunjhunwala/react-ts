import css from 'styled-jsx/css';
const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,500;1,600&display=swap');

  .container {
    display: flex;
    height: 53px;
    width: 358px;
    background-color: #101010;
    font-family: 'Montserrat';
    border-bottom: #707070 1px solid;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .indexNo {
    height: 53px;
    width: 54px;
    background-color: #272727;
  }

  .indexNo p {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
  }

  .userName {
    width: 304px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .avatar {
    position: absolute;
    height: 54px;
    width: 54px;
    background-color: #fff;
    border-radius: 50%;
    left: -22px;
    overflow: hidden;
  }

  .avatar img {
    height: 54px;
    width: 54px;
  }

  .userName p {
    font-size: 13px;
    color: #fff;
    font-weight: bold;
    margin-left: 44px;
  }

  .userName svg{
    position: absolute;
    right: 20px;
  }
`;
export default styles;
