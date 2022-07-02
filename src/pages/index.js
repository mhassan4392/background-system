import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Home from "./home";

// Layout

import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import AppFooter from "../Layout/AppFooter/";
import AdministratorManagement from "./system/administratorManagement";
import RoleManagement from "./system/roleManagement";
import Inquiry from "./orders/inquiry";
import MemberList from "./management/memeberList";
import TransferList from "./management/TransferList";
import DailyReportManagement from "./management/dailyReportManagement";
import MonthlyReportManagement from "./management/monthlyReportManagement";

const Index = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Components */}

          {/* Home */}

          <Route path={`/home`} component={Home} />

          {/* System */}
          <Route
            path={`/system/administrator-management`}
            component={AdministratorManagement}
          />
          <Route path={`/system/role-management`} component={RoleManagement} />

          {/* Management */}
          <Route path={`/management/member-list`} component={MemberList} />
          <Route path={`/management/transfer-list`} component={TransferList} />
          <Route
            path={`/management/daily-report-management`}
            component={DailyReportManagement}
          />
          <Route
            path={`/management/monthly-report-management`}
            component={MonthlyReportManagement}
          />

          {/* Orders */}
          <Route path={`/orders/inquiry`} component={Inquiry} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Index;
