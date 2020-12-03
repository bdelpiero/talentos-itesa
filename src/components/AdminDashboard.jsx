import React from "react";
import { Layout, Row } from "antd";
import { authUser } from "../../firebase/auth";

// COMPONENTS & CONTAINERS
import InviteContainer from "../containers/InviteContainer";
import AddPaymentContainer from "../containers/AddPaymentContainer";
import NewProjectContainer from "../containers/NewProjectContainer";
import Sidebar from "./Sidebar";
import HeaderComponent from "./Header";
import ResumeContainer from "../containers/ResumeContainer";
import PendingPayments from "./PendingPayments";
import AllProjectsContainer from "../containers/AllProjectsContainer";
import Navbar from "../components/Navbar";
import { SingleProject } from "../components/SingleProject";
import { OurCommunity } from "./OurCommunity";

function AdminDashboard({ handleLogout }) {
  const { Content } = Layout;

  const [item, setItem] = React.useState(1);

  return (
    <Layout>
      <Sidebar setItem={setItem} handleLogout={handleLogout} />
      <Layout>
        <Navbar />
        <HeaderComponent />
        <Content className="content-user">
          {item == 1 && (
            <>
              <Row className="admin-row">
                <InviteContainer />
                <NewProjectContainer />
                <AddPaymentContainer />
                <ResumeContainer />
              </Row>
              <Row>
                <PendingPayments />
              </Row>
            </>
          )}
          {item == 2 && <AllProjectsContainer setItem={setItem} />}
          {item == 3 && <SingleProject />}
          {item == 5 && <OurCommunity />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminDashboard;
