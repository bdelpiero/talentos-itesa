import React, { useEffect, useState } from "react";
import {
  useHistory,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  useRouteMatch,
} from "react-router-dom";
import { authUser } from "../../auth/auth";
import { Layout, Row, Col } from "antd";

// COMPONENTS & CONTAINERS
import Error404 from "../components/404";
import AdminDashboard from "../components/AdminDashboard";
import Sidebar from "../components/Sidebar";
import AllProjectsContainer from "../containers/AllProjectsContainer";
import Header from "../components/Header"

function AdminDashboardContainer() {
  const { logout, currentUser } = authUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  const { Header, Footer, Sider, Content } = Layout;

  let { path } = useRouteMatch();
  console.log("---esto es path -----", path);
  return !currentUser ? (
    <Error404 />
  ) : (
    <>
      <Layout>
        <Sider className="sider-user">
          <Sidebar handleLogout={handleLogout} />
        </Sider>

        <Switch>
          <Route path={`${path}/projects`} component={AllProjectsContainer} />
          <Route path={`${path}`} component={AdminDashboard} />
        </Switch>
      </Layout>
    </>
  );
}

export default AdminDashboardContainer;
