import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import MetisMenu from "react-metismenu";

import { MainNav, SystemSettings, ManagementNav, OrdersNav } from "./NavItems";

class Nav extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        {/* <h5 className="app-sidebar__heading">PRO VERSION</h5>
        <div className="metismenu vertical-nav-menu">
          <ul className="metismenu-container">
            <li className="metismenu-item">
              <a
                className="metismenu-link"
                href="https://dashboardpack.com/theme-details/architectui-dashboard-react-pro"
                target="_blank"
              >
                <i className="metismenu-icon pe-7s-diamond"></i>
                Upgrade to PRO
              </a>
            </li>
          </ul>
        </div> */}
        <h5 className="app-sidebar__heading">Panel</h5>
        <MetisMenu
          content={MainNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Settings</h5>
        <MetisMenu
          content={SystemSettings}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Management</h5>
        <MetisMenu
          content={ManagementNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Orders</h5>
        <MetisMenu
          content={OrdersNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
