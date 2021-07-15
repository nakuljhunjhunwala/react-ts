import css from 'styled-jsx/css';
const styles = css`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,500;1,600&display=swap');

  .container {
    display: flex;
    height: 245px;
    width: 427px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #272727;
    color: #ffffff;
    padding: 15px;
    font-family: 'Montserrat';
    
  }
  .heading{
    height: 20px;
    width: 100%;
    margin: 0;
    /* margin-top: 10px; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 2px;
  }

  .heading p{
margin-left: 10px;
  }

.amount{
text-align: center;
}
  .amount p{
font-size: 50px;
line-height: 61px;
margin: 10px;
  }

  .amount span{
font-size: 12px;
color: #99999F;
margin: 0;
  }

.percentage {
display: flex;
align-items: center;
}

.percentage p{
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  margin-left: 10px;
}

.increment{
  color: #FF9A44;
}

.decrement{
  color: #EE6075;
}

`;
export default styles;
