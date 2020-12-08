import React from "react";
import {
  List,
  Typography,
  Divider,
  Row,
  Col,
  Checkbox,
  Tag,
  Avatar,
  Input,
  Form,
  Dropdown,
  Button,
  Menu,
  Pagination,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

export const OurCommunity = ({
  currentUsers,
  onChange,
  onFinishSearch,
  usersPerPage,
  users,
  handlePageChange,
  isLoading,
}) => {
  const pageNumbers = Math.ceil(currentUsers.length / usersPerPage);
  console.log("NUMERO DE USERS", pageNumbers, currentUsers.length);
  return (
    <>
      <List
        size="large"
        header={
          <>
            <Form onFinish={onFinishSearch}>
              <Input
                style={{ marginBottom: "1rem" }}
                onChange={onChange}
                placeholder="Buscar freelancer por nombre o email"
              />
            </Form>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1}></Col>

              <Col xs={5} sm={5} md={5} lg={5}>
                <h3>Nombre</h3>
              </Col>
              <Col xs={8} sm={8} md={8} lg={8}>
                <h3>Tipo de freelancer</h3>
              </Col>
              <Col xs={5} sm={5} md={5} lg={5}>
                <h3>Email</h3>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <h3>Estado</h3>
              </Col>
            </Row>
          </>
        }
        bordered
        dataSource={users}
        renderItem={(item) => (
          <>
            <List.Item>
              <Col xs={1} sm={1} md={1} lg={1}>
                <Avatar src={item.avatar} />
              </Col>

              <Col xs={5} sm={5} md={5} lg={5}>
                <h3>{item.name + " " + item.lastName}</h3>
              </Col>

              <Col xs={4} sm={4} md={4} lg={4}>
                <h3>{item.freelancerType}</h3>
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                <h3>{item.email}</h3>
              </Col>
              {item.projectInvited !== "" ? (
                <Col xs={4} sm={4} md={4} lg={4}>
                  <Tag color="red">En Proyecto</Tag>
                </Col>
              ) : (
                <Col xs={4} sm={4} md={4} lg={4}>
                  <Tag color="green">Libre</Tag>
                </Col>
              )}
              <Col xs={1} sm={1} md={1} lg={1}>
                <DownloadOutlined id="download-icon" />
              </Col>
            </List.Item>
          </>
        )}
      />
      <Pagination
        onChange={(page, pageSize) => handlePageChange(page, pageSize)}
        pageSize={usersPerPage}
        defaultCurrent={1}
        total={currentUsers.length}
      />
    </>
  );
};
