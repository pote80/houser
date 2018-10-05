import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wizard from './Component/Wizard/Wizard'
import Dashboard from './Component/Dashboard/Dashboard'

export default (
    <Switch>
      <Route component={ Dashboard } exact path="/" />
      <Route component={ Wizard } path="/wizard" />
    </Switch>
  )