import css from 'styled-jsx/css';
const styles = css`

  .container {
    display: flex;
    height: 86px;
    /* width: 1960px; */
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color:#101010;
    color: #ffffff;
    padding: 5px;
    box-sizing: border-box;
    font-family: 'Montserrat';
    border-top: #525252 1px solid;
  }

  .container div{
    display: flex;
    justify-content: center;
  }

  .copyright{
    flex: .3;
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
  }

  .social{
    flex: .3;
  align-items: center;
  box-sizing: border-box;
  }

  .social svg{
    margin-left: 40px;
  }

  .externalLink{
    flex:.4;
  }

  .externalLink ul{
    width: 60%;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .externalLink li{
    font-size: 12px;
    font-weight: bold;
   
  }

`;
export default styles;
