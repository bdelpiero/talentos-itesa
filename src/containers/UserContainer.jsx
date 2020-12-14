import React, { useEffect,useState } from "react";
import { authUser } from "../../firebase/auth";
import { db } from "../../firebase/firebase";
import { useRecoilState } from "recoil";
import { user, projectInvited } from "../atoms/index";

// COMPONENTES Y CONTAINERS
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";
import Error404 from "../components/404";
import PagosFreelance from "../components/PagosFreelance";
import CardsFreelancer from "../components/CardsFreelancer";
import Navbar from "../components/Navbar";
import AcceptProject from "../components/AcceptProject";
import FreelancerProjectContainer from "../containers/FreelancerProjectsContainer";

// STYLES
import { Layout, Row } from "antd";

export default () => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);
  const [item, setItem] = useState(1);
  const { logout } = authUser();
  const { Content } = Layout;

  useEffect(() => {
    if(currentUser) {
      let invitaciones = db.collectionGroup("invitedUser").where('email', '==' ,currentUser.email)
        invitaciones.get()
        .then((projects) => {
        const newInvitations = []
        projects.forEach((doc) => {
          if(doc.data().status === 'pending') newInvitations.push(doc.data())
        })
        setInvitedProject({invited:newInvitations , selected:newInvitations[0]})
      })
      .catch((err) => {
        console.log("Error getting projectInvited", err);
      })
  
      let observer = invitaciones.onSnapshot((cambios) => {
        const newInvitations = []
            cambios.forEach((doc) => {
              if(doc.data().status === 'pending') newInvitations.push(doc.data())
            })
            setInvitedProject({
              invited:newInvitations,
              selected:newInvitations[0],
              observer
            })
      })
    }
  }, [currentUser]);
  
  const handleLogout = () => {
    invitedProject.observer();
    return logout();
  };
  
  return !currentUser ? ( <Error404 /> ) : (
    <Layout>
      <Sidebar setItem={setItem} handleLogout={handleLogout} />
      <Layout>
        <Navbar setItem={setItem} />
        <HeaderComponent user={currentUser} setCurrentUser={setCurrentUser} />
        <Content className="content-user">
          {item == 1 && (
            <>
              <Row className="userCards-row">
                <CardsFreelancer setItem={setItem} />
              </Row>
              <div >
                <PagosFreelance user={currentUser} />
              </div>
            </>
          )}
          {item == 2 && <FreelancerProjectContainer /> }
          {item == 5 && <AcceptProject setItem={setItem}/> }
        </Content>
      </Layout>
    </Layout>
  );
};
