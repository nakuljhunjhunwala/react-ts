import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';

const Footer = (): // { }: IProps
JSX.Element => (
  <>
    <div className="container">
      <div className="copyright">© YOURGIX 2021</div>
      <div className="social">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path
            id="Path_1009"
            data-name="Path 1009"
            d="M-3.75-30H7.5V-40.313H3.75V-45H7.5v-3.75a5.624,5.624,0,0,1,5.625-5.625h3.75v4.688H15c-1.034,0-1.875-.1-1.875.937V-45h4.688l-1.875,4.688H13.125V-30H18.75a3.754,3.754,0,0,0,3.75-3.75v-22.5A3.754,3.754,0,0,0,18.75-60H-3.75a3.753,3.753,0,0,0-3.75,3.75v22.5A3.754,3.754,0,0,0-3.75-30"
            transform="translate(7.5 60.001)"
            fill="#fff"
          />
        </svg>
        <br />
        <br />
        <svg id="Group_1620" data-name="Group 1620" xmlns="http://www.w3.org/2000/svg" width="30" height="30.001" viewBox="0 0 30 30.001">
          <g id="Group_1551" data-name="Group 1551" transform="translate(8.128 8.115)">
            <path
              id="Path_1005"
              data-name="Path 1005"
              d="M-8.517,0A6.878,6.878,0,0,0-15.4,6.879a6.878,6.878,0,0,0,6.878,6.878A6.878,6.878,0,0,0-1.638,6.879,6.878,6.878,0,0,0-8.517,0m0,11.343a4.463,4.463,0,0,1-4.464-4.464A4.464,4.464,0,0,1-8.517,2.414,4.464,4.464,0,0,1-4.052,6.879a4.462,4.462,0,0,1-4.465,4.464"
              transform="translate(15.395)"
              fill="#fff"
            />
          </g>
          <g id="Group_1552" data-name="Group 1552">
            <path
              id="Path_1006"
              data-name="Path 1006"
              d="M-21.186-.094c-2.76-.129-9.6-.122-12.359,0A8.965,8.965,0,0,0-39.84,2.332c-2.885,2.885-2.516,6.772-2.516,12.474,0,5.835-.325,9.632,2.516,12.473,2.9,2.895,6.84,2.516,12.474,2.516,5.78,0,7.775,0,9.818-.787,2.779-1.079,4.876-3.562,5.081-8.024.13-2.761.122-9.6,0-12.359-.247-5.266-3.073-8.46-8.72-8.72m4.369,25.465c-1.891,1.891-4.515,1.722-10.585,1.722-6.25,0-8.756.092-10.585-1.741-2.106-2.1-1.725-5.462-1.725-10.566,0-6.906-.708-11.88,6.222-12.235,1.592-.056,2.061-.075,6.07-.075l.056.038c6.661,0,11.887-.7,12.2,6.232.071,1.581.087,2.056.087,6.059,0,6.177.116,8.7-1.742,10.566"
              transform="translate(42.372 0.189)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div className="externalLink">
        <ul>
          <li>IMPRESSUM</li>
          <li>DATENSCHUTZERKLÄRUNG</li>
          <li>AGB</li>
        </ul>
      </div>
    </div>
    <style jsx={true}>{styles}</style>
  </>
);

export default Footer;
