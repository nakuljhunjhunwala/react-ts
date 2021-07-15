import { HealthContainer, Home } from '../containers';
import { Route, Switch } from 'react-router-dom';

import React from 'react';
import { routes } from '../config';
import { Button } from '../components';
import EventCard from '../components/EventCard';
import PerformanceCard from '../components/PerformanceCard';
import MoneyBag from '../components/Icons/MoneyBag';
import Ticket from '../components/Icons/Ticket';
import Decrement from '../components/Icons/Derement';
import Eye from '../components/Icons/Eye';
import UserCardGrid from '../components/UserCardGrid';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import UpperHeader from '../components/UpperHeader';

const Router = (): JSX.Element => (
  <Switch>
    <Route path={routes.test}>
      <div style={{ backgroundColor: "#101010", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0', margin: "0", boxSizing: "border-box" }}>
        <Button primary size="medium" letterCase="upper">
          Hello
        </Button>

        <EventCard imgSrc="https://picsum.photos/143/139" primary date="22.06.2021" artist="TIGER ROGER" location="LIVE aus BERLIN" />

        <EventCard imgSrc="https://picsum.photos/143/139" secondary title="TIGER ROGER / OPENING TOUR" />

        <PerformanceCard title="EINNAHMEN" titleIcon={<MoneyBag />} amount="15.385 €" amountPara="Für den ausgewählten Zeitraum" percentageType="increment" percentage="+ 22 %" />

        <UserCardGrid />
        <div style={{ position: "relative", marginTop: "100px", width: "100%" }}>
          <UpperHeader />
          <Menu userName="Hallo Tiger Rogers" />
          <Footer />
        </div>

      </div>
    </Route>
    <Route path={routes.home} component={Home} />
    <Route path={routes.health} component={HealthContainer} />
  </Switch>
);

export default Router;
