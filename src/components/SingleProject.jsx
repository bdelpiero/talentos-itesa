import React, { useState } from "react";
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
  const [editableDesc, setEditableDesc] = useState();
  const [editableTime, setEditableTime] = useState("3 Meses");
  const [editableBudget, setEditableBudget] = useState("$50.000");

  /* function projectDescription() {
    db.collection("projects")
      .doc(project.id)
      .set({ description: e.target.value }, { merge: true });
  } */
  return (
    <>
      <Row gutter={[30]}>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Title level={5}>Descripción del Proyecto</Title>

          <Paragraph>{project.description}</Paragraph>

          {/* 
          <TextArea
            defaultValue={project.description}
            onChange={handleChange}
            onPressEnter={projectDescription}
            bordered={false}
            allowClear={true}
            autoSize={false}
          ></TextArea>
 */}
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
          <div style={{display:"flex",justifyContent:"space-between" }}>
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
