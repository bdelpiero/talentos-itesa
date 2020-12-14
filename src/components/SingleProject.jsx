import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import {
  Row,
  Col,
  Typography,
  Menu,
  Dropdown,
  List,
  Avatar,
  Button,
  Input,
  Form,
} from "antd";
import {
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
  DownOutlined,
  DeleteOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import InviteProjectContainer from "../containers/InviteProjectContainer";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export const SingleProject = ({
  delUserFromProject,
  project,
  projectUsersData,
}) => {
  const [editableDesc, setEditableDesc] = useState(project.description);
  const [editableTime, setEditableTime] = useState(project.term);
  const [editableBudget, setEditableBudget] = useState(project.budget);

  function projectDescription(editableDesc) {
    db.collection("projects").doc(project.id).set(
      {
        description: editableDesc,
        term: editableTime,
        budget: editableBudget,
      },
      { merge: true }
    );
  }
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
          <Paragraph
            editable={{
              onChange: setEditableBudget,
            }}
          >
            {editableBudget}
          </Paragraph>
          <Button
            onClick={() =>
              projectDescription(editableDesc, editableTime, editableBudget)
            }
          >
            Aceptar
          </Button>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title level={5}>
              Freelancers en proyecto{" "}
              {/* <UserAddOutlined className="single-icon add-user" /> */}
            </Title>{" "}
            <InviteProjectContainer proyecto={project} />
          </div>

          <List
            itemLayout="horizontal"
            dataSource={projectUsersData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.name}
                  description={item.freelancerType}
                />
                <DeleteOutlined
                  onClick={() => delUserFromProject(item.id)}
                  className="single-icon"
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
