import React, { useState } from "react";
import { useHistory, Route, Switch, useRouteMatch} from "react-router-dom";
import { authUser } from "../../firebase/auth";

// SYTYLES
import { Layout } from "antd";

// COMPONENTS & CONTAINERS
import Error404 from "../components/404";
import AdminDashboard from "../components/AdminDashboard";
import Sidebar from "../components/Sidebar";
import AllProjectsContainer from "../containers/AllProjectsContainer";
import HeaderComponent from "../components/Header"
import Navbar from '../components/Navbar'

function AdminDashboardContainer() {
  const { logout, currentUser } = authUser();
  const { Header, Content } = Layout;
  const history = useHistory();
  const { path } = useRouteMatch();

  return !currentUser ? (
    <Error404 />
  ) : (
      <Layout>
        <Sidebar logout={logout} history={history}/>
        <Layout>
          <Navbar/>
          <Header className="header-user">
            <HeaderComponent />
          </Header>
          <Content>
            <Switch>
              <Route path={`${path}/projects`} component={AllProjectsContainer} />
              <Route path={`${path}`} component={AdminDashboard} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
}

export default AdminDashboardContainer;