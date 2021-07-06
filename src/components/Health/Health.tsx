import React, { useState } from 'react';

import Button from '../Button';
import { FormattedMessage } from 'react-intl';
import { IProps } from './interface';
import { InterfaceHealthData } from '../../store/health/models';
import { getAuthServerHealth } from '../../services/auth';
import messages from './messages';
import styles from './styles';

const Health = ({ healthData }: IProps): JSX.Element => {
  const [health, setHealth] = useState<InterfaceHealthData>(healthData);

  const handleClick = async () => {
    try {
      const data = await getAuthServerHealth();
      setHealth(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container">
      <div className="health--data">
        <pre>
          <code>{JSON.stringify(health, null, 2)}</code>
        </pre>
      </div>
      <div className="health--check-health">
        <Button onClick={handleClick} fullWidth>
          <FormattedMessage {...messages.checkHealth} />
        </Button>
      </div>
      <style jsx={true}>{styles}</style>
    </div>
  );
};
export default Health;
