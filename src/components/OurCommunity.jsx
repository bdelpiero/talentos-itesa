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
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const data = [
  {
    id: "CD01",
    name: "Marcos Millas",
    imgUrl:
      "https://lh3.googleusercontent.com/-6dFTP1fBhFZlQnv6niT5My0ncNEw2to_vzd8-g3yja8vINfnUygXnEhnvbq9eDqmGASJw=s113",
    amount: "$50.000",
    date: "2/12/2020",
    state: "Libre",
  },
  {
    id: "CD02",
    name: "Christian Chen",
    imgUrl:
      "https://lh3.googleusercontent.com/AnIEaMexdcBlx0f67Kf2Uh2zJKrlF7zBCtmn846-3PGLi9ekJphbIZlyq4TuPeBYQcqL_H0=s85",
    amount: "$50.000",
    date: "2/12/2020",
    state: "Libre",
  },
  {
    id: "CD03",
    name: "Armando Rico",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    amount: "$50.000",
    date: "2/12/2020",
    state: "En Proyecto",
  },
  {
    id: "CD04",
    name: "Bruno del Piero",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    amount: "$50.000",
    date: "2/12/2020",
    state: "En Proyecto",
  },
  {
    id: "CD05",
    name: "Williams Saya",
    imgUrl:
      "https://lh3.googleusercontent.com/7mWD5VYjzZK3HHUcBDzS9fwTR7cOYws5IGrT3bFC-vUB4B5JP0Jx4QPsw-IzktRMNr8S=s85",
    amount: "$50.000",
    date: "2/12/2020",
    state: "En Proyecto",
  },
  {
    id: "CD06",
    name: "Juan Garrido",
    imgUrl:
      "https://lh3.googleusercontent.com/JeIEfp7-YVWGLDPifXZ0WBJ6sHXao61Yx1smN2g7lBGvoe11bWEuHR8xfZvTyZb_fjcWeA=s85",
    amount: "$50.000",
    date: "2/12/2020",
    state: "Libre",
  },
];

export const OurCommunity = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <List
        size="large"
        header={
          <>
            <Title level={5}>Income</Title>
            <Row>
              <Col xs={2} sm={2} md={2} lg={2}>
                <></>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
                <h3>#</h3>
              </Col>
              <Col xs={1} sm={1} md={1} lg={1}>
                <h3></h3>
              </Col>
              <Col xs={5} sm={5} md={5} lg={5}>
                <h3>Nombre</h3>
              </Col>
              <Col xs={5} sm={5} md={5} lg={5}>
                <h3>Amount</h3>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <h3>Fecha</h3>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <h3>Estado</h3>
              </Col>
            </Row>
          </>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Col xs={2} sm={2} md={2} lg={2}>
              <Checkbox onChange={onChange}></Checkbox>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}>
              <h3>{item.id}</h3>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Avatar src={item.imgUrl} />
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
              <h3>{item.name}</h3>
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
              <h3>{item.amount}</h3>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <h3>{item.date}</h3>
            </Col>
            {item.state === "En Proyecto" ? (
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
        )}
      />
      {/* {data.map((data) => {
        return (
          <Row>
            <Col xs={2} sm={2} md={2} lg={2}>
              <Checkbox onChange={onChange}></Checkbox>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}>
              <h3>{data.id}</h3>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Avatar src={data.imgUrl} />
            </Col>

            <Col xs={5} sm={5} md={5} lg={5}>
              <h3>{data.name}</h3>
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
              <h3>{data.amount}</h3>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <h3>{data.date}</h3>
            </Col>
            {data.state === "En Proyecto" ? (
              <Col xs={4} sm={4} md={4} lg={4}>
                <Tag color="red">En Proyecto</Tag>
              </Col>
            ) : (
              <Col xs={4} sm={4} md={4} lg={4}>
                <Tag color="green">Libre</Tag>
              </Col>
            )}
          </Row>
        );
      })} */}
    </>
  );
};
