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
const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [projectI, setProjectI] = useRecoilState(projectInvited);

  const { logout } = authUser();
  const history = useHistory();
  const { Content } = Layout;
  const [item, setItem] = React.useState(1);

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  function hasDuplicates(inputArray) {
    
  for (let i=0; i<inputArray.length-1; i++){ // i==1//i==2 //==3
    for (let j=1; j<inputArray.length; j++){ // j==2 // j==3 // 
      if (inputArray[i] === inputArray[j]){
        return true 
      }
    }
  } 
  return false
  }


  // useEffect esta atento a los cambios en el usuario para renderizar el componente nuevamente

  useEffect(() => {
    if (currentUser.projectInvited) {
      return db
        .collection("projects")
        .doc(currentUser.projectInvited)
        .get()
        .then((project) => {
          console.log("Document data:", project.data());
          setProjectI(project.data());
        })
        .catch((err) => {
          console.log("Error getting document", err);
        });
    } else {
      setProjectI({});
    }
  }, [currentUser]);

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
              <Row className='admin-row'>
                <CardsFreelancer setItem={setItem} />
              </Row>
              <Row>
                <PagosFreelace />
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
