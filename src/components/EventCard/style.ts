import css from 'styled-jsx/css';
const styles = css`


  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #272727;
    color: #ffffff;
    /* padding: 2px; */
    font-family: 'Montserrat';
  }

  .primary {
    height: 205px;
    width: 145px;
  }

  .secondary {
    height: 192px;
    width: 249px;
  }

  .imageContainer img {
    height: 100%;
    width: 100%;
  }

  .primary .imageContainer {
    height: 139px;
    width: 145px;
  }

  .secondary .imageContainer {
    height: 140px;
    width: 249px;
  }

  .secondary .textContainer {
    text-align: center;
    width: 100%;
  }

  .primary .textContainer {
    text-align: left;
    width: 100%;
  }

  .date {
    font-size: 12px;
    font-weight: bold;
    margin-top: 3px;
    margin-left: 2px;
    margin-bottom: 0;
  }

  .artist {
    font-size: 9px;
    line-height: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 2px;
    margin-left: 2px;
    margin-bottom: 0;
  }

  .location {
    font-size: 9px;
    line-height: 15px;
    text-transform: uppercase;
    color: #ee6075;
    letter-spacing: 1px;
    margin-top: 3px;
    margin-left: 2px;
    margin-bottom: 0;
  }

  .title {
    font-size: 10px;
    line-height: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    /* margin-top: 3px;
    margin-bottom: 0; */
  }
`;
export default styles;
