import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import React from 'react';
import messages from './messages';
import styles from './styles';

const Home = (): JSX.Element => {
  return (
    <div className="helloWorld">
      <FormattedMessage {...messages.helloWorld} />
      <Link to="/health">health</Link>
      <style jsx={true}>{styles}</style>
    </div>
  );
};

export default Home;
