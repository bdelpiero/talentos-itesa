import React from "react";
import { Layout, Row, Card } from "antd";
import { authUser } from "../../firebase/auth";
import Briefing from "../../views/briefing.svg";

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

                <Card
                  className="admin-cards"
                  style={{ background: "whitesmoke", border: "none" }}
                >
                  <img src={Briefing} className="icono-sider" />
                  {/* <div className="admin-button">
                    <h4 style={{ color: "#9e39ff" }}>Crear proyecto nuevo</h4>
                  </div> */}
                  <NewProjectContainer />
                </Card>


                <AddPaymentContainer />
                <ResumeContainer />
              </Row>
              <Row>
                <PendingPayments />
              </Row>
            </>
          )}
          {item == 2 && <AllProjectsContainer />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminDashboard;
