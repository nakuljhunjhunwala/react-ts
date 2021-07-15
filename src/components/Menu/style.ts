import css from 'styled-jsx/css';
const styles = css`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,500;1,600&display=swap');

  .container {
    position: relative;
    display: flex;
    max-height: 972px;
    max-width: 423px;
    min-height:  972px;
    min-width: 423px;
    flex-direction: column;
    background-color: #383737;
    padding: 20px;
    color: #ffffff;
    font-family: 'Montserrat';
    box-sizing: border-box;
    overflow: hidden;
    z-index: 2;
  }
  .container .headerContent,.para{
    margin-left: 90px;
  }
  .headerContent{
    height: 60px;
    display: flex;
    /* margin-top: 50px; */
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  .avatar{
    height: 57;
    width: 57;
    border-radius: 50%;
    overflow: hidden;
  }

.dividerLine{
  margin-left: -20px;
}

.para p{
font-size: 12px;
font-weight: bold;
}

.mainMenu{
height: max-content;

margin-top: 10px;
box-sizing: border-box;
}


.menuCardList {
    list-style-type: none;
    font-size: 16px;
    font-weight: bold;
  }

  .menuCardList li {
    cursor: pointer;
    padding: 10px;
    padding-left: 0;
  }


`;
export default styles;
