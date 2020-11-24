import React from "react";
import {} from "@ant-design/icons";
import Briefing from "../../views/briefing.svg";
import { Modal, Button, Card } from "antd";
function NewProject() {
  return (
    <div className="Modal">
      <Card className="admin-cards">
        <Briefing className="icono-sider" />
        <h3 style={{ color: "#9e39ff" }}>Invitar perfiles</h3>
      </Card>
    </div>
  );
}

export default NewProject;
