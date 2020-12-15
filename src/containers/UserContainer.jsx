import React, { useEffect, useState } from "react";
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
  const [nextPayments, setNextPayments] = useState([]);
  const { logout } = authUser();
  const { Content } = Layout;
  const [item, setItem] = React.useState(1);
  let unsubscribePayments = () => {};

  function hasDuplicates(inputArray) {
    for (let i = 0; i < inputArray.length - 1; i++) {
      // i==1//i==2 //==3
      for (let j = 1; j < inputArray.length; j++) {
        // j==2 // j==3 //
        if (inputArray[i] === inputArray[j]) {
          return true;
        }
      }
    }
    return false;
  }

  // useEffect esta atento a los cambios en el usuario para renderizar el componente nuevamente
  // console.log("se renderiza usercontainer", invitedProject);

  useEffect(() => {
    let invitaciones = db
      .collectionGroup("invitedUser")
      .where("email", "==", currentUser.email);
    // where('status', '==' ,"pending")
    invitaciones
      .get()
      .then((projects) => {
        const newInvitations = [];
        projects.forEach((doc) => {
          if (doc.data().status === "pending") {
            // console.log("entro al if con este status",doc.data().status)
            newInvitations.push(doc.data());
          }
        });
        setInvitedProject({
          invited: newInvitations,
          selected: newInvitations[0],
        });
      })
      .catch((err) => {
        console.log("Error getting projectInvited", err);
      });
    let observer = invitaciones.onSnapshot((cambios) => {
      const newInvitations = [];
      cambios.forEach((doc) => {
        if (doc.data().status === "pending") {
          newInvitations.push(doc.data());
        }
      });
      setInvitedProject({
        invited: newInvitations,
        selected: newInvitations[0],
        observer,
      });
    });
  }, [currentUser]);

  useEffect(() => {
    unsubscribePayments = db
      .collection("payments")
      .where("userId", "==", currentUser.id)
      .where("state", "==", "pending")
      .onSnapshot((querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        const payments = arr
          .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
          .slice(0, 4);

        setNextPayments(payments);
      });
    // return unsubscribe;
  }, [currentUser]);

  const handleLogout = () => {
    unsubscribePayments();
    invitedProject.observer();
    return logout();
  };

  return !currentUser ? (
    <Error404 />
  ) : (
    
    <Layout>
      <Sidebar setItem={setItem} handleLogout={handleLogout} />
      <Layout>
        <Navbar setItem={setItem} />
        <HeaderComponent user={currentUser} setCurrentUser={setCurrentUser} />
        <Content className='content-user'>
          {item == 1 && (
            <>
              <Row className='userCards-row'>
                <CardsFreelancer
                  setItem={setItem}
                  nextPayments={nextPayments}
                />
              </Row>
              <div>
                <PagosFreelance user={currentUser} />
              </div>
            </>
          )}
          {item == 2 && <FreelancerProjectContainer />}
          {item == 5 && <AcceptProject setItem={setItem} />}
        </Content>
      </Layout>
    </Layout>
  );
};
