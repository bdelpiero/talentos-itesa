import React from "react";
import { Layout, Row} from "antd";
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



function AdminDashboard({logout,history}) {
  const { Content } = Layout;

  const [item, setItem] = React.useState(1);

  return (
    <Layout>
      <Sidebar setItem={setItem} logout={logout}       history={history}/>
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
          {item == 2 && (
              <AllProjectsContainer />
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminDashboard;
