import css from 'styled-jsx/css';
const styles = css`
  .button {
    border: 0px;
    border-radius: 0px;
    box-shadow: none;
    cursor: pointer;
    flex: 0 0 auto;
    padding: 5px 10px;
    margin: 15px;
    font-family: "Montserrat";
    letter-spacing: 50;
  }

  .primary {
    background: linear-gradient(rgb(255, 154, 68), rgb(252, 96, 118));
    color: black;
  }

  .medium {
    height: 32px;
    width: 149px;
    font-size: 15px;
    line-height: 19px;
  }

  .large {
    height: 32px;
    width: 199px;
    font-size: 15px;
    line-height: 19px;
  }

  .upper {
  text-transform: uppercase;
  }

  .lower{
text-transform: lowercase;
  }

  .capitalize{
    text-transform: capitalize;
  }


`;
export default styles;
