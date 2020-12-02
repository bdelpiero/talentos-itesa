import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Menu,
  Dropdown,
  List,
  Avatar,
  Button,
} from "antd";
import {
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
  DownOutlined,
  DeleteOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const data = [
  {
    title: "Juan Garrido",
  },
  {
    title: "Chino San",
  },
  {
    title: "Bruno DelP",
  },
  {
    title: "Armando Rico",
  },
  {
    title: "Williams Saya",
  },
  {
    title: "Millas Marcos",
  },
];
export const SingleProject = () => {
  const [editableDesc, setEditableDesc] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum culpa, reprehenderit eius cumque labore in ducimus odio, corrupti sapiente perspiciatis vero recusandae aspernatur deleniti totam rerum porro est cum doloremque."
  );
  const [editableTime, setEditableTime] = useState("3 Meses");
  const [editableBudget, setEditableBudget] = useState("$50.000");

  return (
    <>
      <Row gutter={[30]}>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Title level={5}>Descripción del Proyecto</Title>
          <Paragraph editable={{ onChange: setEditableDesc }}>
            {editableDesc}
          </Paragraph>
          <Title level={5}>Duración</Title>
          <Paragraph editable={{ onChange: setEditableTime }}>
            {editableTime}
          </Paragraph>
          <Title level={5}>Presupuesto</Title>
          <Paragraph editable={{ onChange: setEditableBudget }}>
            {editableBudget}
          </Paragraph>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          {/* "VER POR QUE CON EL TEXTO SE PUEDE OCUPAR EL 100% DE LA PANTALLA EN
          CELULAR, ARREGLAR ESTE DETALLE" */}
          <Title level={5}>
            Freelancers en proyecto{" "}
            <UserAddOutlined className="single-icon add-user" />
          </Title>{" "}
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Developer"
                />
                <DeleteOutlined className="single-icon" />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
