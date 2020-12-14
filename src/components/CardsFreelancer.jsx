import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { user, projectInvited } from "../atoms/index";
import CardsNextPayments from "./CardsNextPayments";
import CardsOferts from "./CardsOferts";

// STYLES
import { Button, Card } from "antd";
import { Typography } from "antd";
import MiBancoContainer from "../containers/MiBancoContainer";

const { Title } = Typography;

export default ({ setItem }) => {
  const [currentUser, serCurrentUser] = useRecoilState(user);
  const [invitedProject, setInvitedProject] = useRecoilState(projectInvited);

  return (
    <>
      {/* CARD OFERTA DE PROYECTO */}
      {invitedProject && (
        <CardsOferts
          inviteds={invitedProject}
          setInvitedProject={setInvitedProject}
          setItem={setItem}
        />
      )}

      {/* CARD PROXIMO PAGO */}
      <CardsNextPayments />

      {/* CARD MI BANCO */}
      <Card className='freelancer-cards'>
        <Title level={5} id='title-freelancer-card'>
          MI BANCO
        </Title>
        <p id='subtittle-freelancer-card'>CBU/Alias</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.alias}</p>
        <p id='subtittle-freelancer-card'>TITULAR</p>
        <p id='text-freelancer-card'>{currentUser.bankDetails.accountName}</p>
        <p id='subtittle-freelancer-card'>BANCO</p>
        <div className='container-freelancer-button'>
          <p id='text-freelancer-card'>{currentUser.bankDetails.bankName} </p>
          <MiBancoContainer />
        </div>
      </Card>
    </>
  );
};
