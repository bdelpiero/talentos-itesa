import React from "react";
import { Card, Col, Row } from 'antd';

export default()=>{
  return (
  <div className="site-card-wrapper">
      <Col span={8}>
        <Card className='bodyCard'title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card className='bodyCard' title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card className='bodyCard' title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
  </div>
  )
  }
