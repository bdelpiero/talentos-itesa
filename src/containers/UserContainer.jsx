import React, {useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { authUser } from "../../auth/auth";
import { Layout, Row, Col } from "antd";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";
import PagosFreelace from "../components/PagosFreelace";
import CardsFreelancer from "../components/CardsFreelancer";
import Error404 from '../components/404'
import { useRecoilState } from "recoil";
import { user,projectInvited } from "../atoms/index";
import {db} from '../../firebase/firebase'



const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [projectI, setProjectI] = useRecoilState(projectInvited);

  const { logout } = authUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

// useEffect esta atento a los cambios en el usuario para renderizar el componente nuevamente

  useEffect(() => {
    if(currentUser.invited){
      return db.collection('projects').doc(currentUser.invited).get()
    .then(project => {
     
    console.log('Document data:', project.data());
    setProjectI(project.data())
  
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
    }else{
      setProjectI({})

    }
  }, [currentUser]);


  return !currentUser ? <Error404/> :
   (
    <Layout>
      <Sider className="sider-user" justify="center">
        <Sidebar handleLogout={handleLogout} />
      </Sider>
      <Layout>
        <Header className="header-user">
          <HeaderComponent user={currentUser}/>
        </Header>
        <Content
          className="content-user" 
          xs={24} sm={12} md={8}
        >
          <Row
            className="content-row"
            gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}
            justify="space-around"
            align="middle"
          >
            <CardsFreelancer/>
          </Row>

          
          <Row className="content-row"
           gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}
           justify="space-around"
            align="middle">
              
            <PagosFreelace />
          </Row>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Talentos ITESA ©2020 Created by Plataforma 5</Footer> */}
      </Layout>
    </Layout>
  );
};
