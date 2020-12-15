import React from "react";
import { Layout, Row, Card } from "antd";
import Briefing from "../../views/briefing.svg";
import UserLogo from "../../views/man.svg";
import { useRecoilState } from "recoil";
import { user, projectInvited } from "../atoms/index";

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
import { SingleProjectContainer } from "../containers/SingleProjectContainer";
import { OurCommunityContainer } from "../containers/OurCommunityContainer";
import { SingleUserContainer } from "../containers/SingleUserContainer";

function AdminDashboard({ handleLogout }) {
  const { Content } = Layout;
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [item, setItem] = React.useState(1);
  const [project, setProject] = React.useState({});
  const [selectedUser, setSelectedUser] = React.useState({});

  return (
    <Layout>
      <Sidebar setItem={setItem} handleLogout={handleLogout} />
      <Layout>
        <Navbar setItem={setItem} />
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
              <PendingPayments user={currentUser} />
            </>
          )}
          {item == 2 && (
            <AllProjectsContainer setItem={setItem} setProject={setProject} />
          )}
          {item == 3 && <SingleProjectContainer project={project} />}
          {item == 5 && (
            <OurCommunityContainer
              setItem={setItem}
              setSelectedUser={setSelectedUser}
            />
          )}
          {item == 6 && <SingleUserContainer selectedUser={selectedUser} />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminDashboard;
