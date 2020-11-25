import React from "react";
import {} from "@ant-design/icons";
import Briefing from "../../views/briefing.svg";
import { Modal, Button, Card } from "antd";
function NewProject() {
  return (
    <div className="Modal">
      <Card className="admin-cards">
        <Briefing className="icono-sider" />
        <div className="admin-button">
          <h4 style={{ color: "#9e39ff" }}>Crear un proyecto nuevo</h4>
        </div>
      </Card>
    </div>
  );
}

export default NewProject;
