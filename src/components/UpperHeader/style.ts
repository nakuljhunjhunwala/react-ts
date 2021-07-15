import css from 'styled-jsx/css';
const styles = css`
  .container {
    /* position: absolute; */
    display: flex;
    height: 108px;
    width: 100%;
    align-items: center;
    background-color: #101010;
    justify-content: space-between;
    color: #ffffff;
    box-sizing: border-box;
    font-family: 'Montserrat';
    /* padding-left: 425px; */
    top: 0;
    z-index: 1;
  }
  .searchBar {
    display: flex;
    flex: 0.4;
    justify-content: center;
    align-items: center;
  }

.logo{
  height: 100%;
  width: 423px;
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
}

.grey{
  background-color: #383737;
}

  .searchBar input {
    /* width: 588px; */
    width: 90%;
    background-color: transparent;
    border: 0;
    border-bottom: #727272 1px solid;
    color: #ffffff;
    font-size: 28px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 2px;
    font-weight: lighter;
    font-family: 'Montserrat';
  }

  .searchBar label {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .searchBar svg {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .searchBar input:focus {
    outline: none;
  }

  .links {
    display: flex;
    flex: 0.6;
    justify-content: center;
    align-items: center;
  }

  .links ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .links a {
    text-decoration: none;
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
  }
`;
export default styles;
