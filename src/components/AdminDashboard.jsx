import React from "react";
import { Layout, Row, Card } from "antd";
import Briefing from "../../views/briefing.svg";
import UserLogo from "../../views/man.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { user, projectInvited, pagos, allUsersState } from "../atoms/index";

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
import AllPaymentsContainer from "../containers/AllPaymentsContainer";

function AdminDashboard({ handleLogout }) {
  const { Content } = Layout;
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [item, setItem] = React.useState(1);
  const [project, setProject] = React.useState({});
  const [selectedUser, setSelectedUser] = React.useState({});

  const users = useRecoilValue(allUsersState);
  const paymentsInAtom = useRecoilValue(pagos);
  const pendingPayments = paymentsInAtom.pending.map((payment) => {
    const usuario = users.filter((user) => user.id == payment.userId)[0];
    const newPayment = { ...payment, user: usuario };
    return newPayment;
  });

  return (
    <Layout>
      <Sidebar setItem={setItem} handleLogout={handleLogout} />
      <Layout>
        <Navbar setItem={setItem} />
        <HeaderComponent item={item} project={project} />
        <Content className='content-user'>
          {item == 1 && (
            <>
              <Row className='admin-row'>
                <Card
                  className='admin-cards'
                  style={{ background: "whitesmoke", border: "none" }}>
                  <img src={UserLogo} className='admin-card-icon ' />
                  <InviteContainer />
                </Card>

                <Card
                  className='admin-cards'
                  style={{ background: "whitesmoke", border: "none" }}>
                  <img src={Briefing} className='admin-card-icon' />
                  <NewProjectContainer />
                </Card>
                <Card
                  className='admin-cards'
                  style={{ background: "whitesmoke", border: "none" }}>
                  <img src={Briefing} className='admin-card-icon' />
                  {/* <p className='invite-button-text'> Ingresar un pago </p> */}
                  <AddPaymentContainer pendingPayments={pendingPayments} />
                </Card>
                <ResumeContainer />
              </Row>
              <PendingPayments
                setItem={setItem}
                pendingPayments={pendingPayments}
                user={currentUser}
              />
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
          {item == 7 && <AllPaymentsContainer users={users} />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminDashboard;
