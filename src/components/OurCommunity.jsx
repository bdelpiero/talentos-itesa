import React, { useState } from "react";
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
import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

export const OurCommunity = ({
  currentUsers,
  onChange,
  onFinishSearch,
  usersPerPage,
  users,
  handlePageChange,
  isLoading,
  setCurrentUsers,
  filterByColumn,
  filterByState,
  currentPage,
}) => {
  const pageNumbers = Math.ceil(currentUsers.length / usersPerPage);

  const actividadOptions = (
    <div className='ourCommunity-filterButtons'>
      <button onClick={(e) => filterByColumn(e, "freelancerType")}>
        developer
      </button>
      <button onClick={(e) => filterByColumn(e, "freelancerType")}>
        designer
      </button>
      <button onClick={(e) => filterByColumn(e, "freelancerType")}>all</button>
    </div>
  );
  const estadoOptions = (
    <div className='ourCommunity-filterButtons'>
      <button onClick={(e) => filterByColumn(e, "projectInvited")}>
        En Proyecto
      </button>
      <button onClick={(e) => filterByColumn(e, "projectInvited")}>
        Libre
      </button>
      <button onClick={(e) => filterByColumn(e, "projectInvited")}>all</button>
    </div>
  );

  return (
    <>
      <List
        size='large'
        header={
          <>
            <Form onFinish={onFinishSearch}>
              <Input
                style={{ marginBottom: "1rem" }}
                onChange={onChange}
                placeholder='Buscar freelancer por nombre o email'
              />
            </Form>
            <Row>
              <Col xs={2} sm={2} md={2} lg={2}>
                {" "}
              </Col>

              <Col xs={5} sm={5} md={5} lg={5}>
                <h3>NOMBRE</h3>
              </Col>
              <Col xs={5} sm={5} md={5} lg={5}>
                <Dropdown overlay={actividadOptions}>
                  <div className='ourCommunity-dropDown'>
                    <h3>ACTIVIDAD</h3>
                    <DownOutlined />
                  </div>
                </Dropdown>
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                <h3>EMAIL</h3>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <Dropdown overlay={estadoOptions}>
                  <div className='ourCommunity-dropDown'>
                    <h3>ESTADO</h3>
                    <DownOutlined />
                  </div>
                </Dropdown>
              </Col>
              <Col xs={1} sm={1} md={1} lg={1}></Col>
            </Row>
          </>
        }
        bordered
        dataSource={users}
        renderItem={(item) => (
          <>
            <Row style={{ padding: "16px 26px" }}>
              <Col xs={2} sm={2} md={2} lg={2}>
                <Avatar src={item.avatar} />
              </Col>

              <Col xs={5} sm={5} md={5} lg={5}>
                <h4>{item.name + " " + item.lastName}</h4>
              </Col>

              <Col xs={5} sm={5} md={5} lg={5}>
                <h4>{item.freelancerType}</h4>
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                <h4>{item.email}</h4>
              </Col>
              {item.projectInvited !== "" ? (
                <Col xs={4} sm={4} md={4} lg={4}>
                  <Tag color='red'>En Proyecto</Tag>
                </Col>
              ) : (
                <Col xs={4} sm={4} md={4} lg={4}>
                  <Tag color='green'>Libre</Tag>
                </Col>
              )}
              <Col xs={1} sm={1} md={1} lg={1}>
                <DownloadOutlined id='download-icon' />
              </Col>
            </Row>
          </>
        )}
      />
      <Pagination
        style={{ display: "flex", justifyContent: "flex-end", padding: 20 }}
        current={currentPage}
        onChange={(page, pageSize) => handlePageChange(page, pageSize)}
        pageSize={usersPerPage}
        total={currentUsers.length}
      />
    </>
  );
};
