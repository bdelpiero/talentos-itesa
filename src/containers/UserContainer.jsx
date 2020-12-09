import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { authUser } from "../../firebase/auth";
import { Layout, Row, Result, Button } from "antd";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";
import PagosFreelace from "../components/PagosFreelace";
import CardsFreelancer from "../components/CardsFreelancer";
import Error404 from "../components/404";
import { useRecoilState } from "recoil";
import { user, projectInvited } from "../atoms/index";
import { db } from "../../firebase/firebase";
import Navbar from "../components/Navbar";
import ContractProject from "../components/ContractProject";
import PendingPayments from "../components/PendingPayments";
const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);

  const { logout } = authUser();
  const history = useHistory();
  const { Content } = Layout;
  const [item, setItem] = React.useState(1);


  // useEffect esta atento a los cambios en el usuario para renderizar el componente nuevamente
  console.log("se renderiza usercontainer",invitedProject)

  useEffect(() => {
    let invitaciones=db.collectionGroup("invitedUser").where('email', '==' ,currentUser.email)
    invitaciones.get()
    .then((projects) => {
      const newInvitations=[]
      projects.forEach((doc)=>{
        newInvitations.push(doc.data())
      })
      setInvitedProject(newInvitations)
    })
    .catch((err) => {
      console.log("Error getting projectInvited", err);
    });
    let observer =invitaciones.onSnapshot((cambios)=>{
      console.log('aqui recivio cambios las invitaciones')
      const newInvitations=[]
          cambios.forEach((doc)=>{
            newInvitations.push(doc.data())
          })
          setInvitedProject({
            invited:newInvitations,
            observer
          })
    })
  }, [currentUser]);


  const handleLogout = () => {
    invitedProject.observer()
    logout();
    history.push("/login");
  };


  return !currentUser ? (
    <Error404 />
  ) : (
    <Layout>
      <Sidebar setItem={setItem} handleLogout={handleLogout} />
      <Layout>
        <Navbar />
        <HeaderComponent user={currentUser} setCurrentUser={setCurrentUser} />
        <Content className='content-user'>
          {item == 1 && (
            <>
              <Row className='userCards-row'>
                <CardsFreelancer setItem={setItem} />
              </Row>
              <Row>
                <PendingPayments />
              </Row>
            </>
          )}
          {item == 5 && (
            <>
              <ContractProject />
            </>
          )}
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Talentos ITESA ©2020 Created by Plataforma 5</Footer> */}
      </Layout>
    </Layout>
  );
};
