import React from "react";
import { Layout, Row, Card } from "antd";
import { authUser } from "../../firebase/auth";
import Briefing from "../../views/briefing.svg";
import UserLogo from "../../views/man.svg";

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
import { OurCommunityContainer } from "../containers/OurCommunityContainer";

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
                <Card
                  className="admin-cards"
                  style={{ background: "whitesmoke", border: "none" }}
                >
                  <img src={UserLogo} className="admin-card-icon " />
                  <InviteContainer />
                </Card>

                <Card
                  className="admin-cards"
                  style={{ background: "whitesmoke", border: "none" }}
                >
                  <img src={Briefing} className="admin-card-icon" />
                  <NewProjectContainer />
                </Card>
                <Card
                  className="admin-cards"
                  style={{ background: "whitesmoke", border: "none" }}
                >
                  <img src={Briefing} className="admin-card-icon" />
                  {/* <p className='invite-button-text'> Ingresar un pago </p> */}
                  <AddPaymentContainer />
                </Card>
                <ResumeContainer />
              </Row>
              <Row>
                <PendingPayments />
              </Row>
            </>
          )}
          {item == 2 && <AllProjectsContainer setItem={setItem} />}
          {item == 3 && <SingleProject />}
          {item == 5 && <OurCommunityContainer />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminDashboard;
