import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Health } from '../../components';
import { IStateTree } from '../../store/interfaces';
import { fetchHealthData } from '../../store/health/actions';
import styles from './styles';

const HealthContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const getHealthData = useCallback(() => {
    dispatch(fetchHealthData());
  }, [dispatch]);
  useEffect(() => {
    getHealthData();
  }, [getHealthData]);
  const healthState = useSelector(({ health }: IStateTree) => health);
  return (
    <div className="container">
      <h1>Health Status</h1>
      <Health healthData={healthState}></Health>
      <style jsx={true}>{styles}</style>
    </div>
  );
};

export default HealthContainer;
