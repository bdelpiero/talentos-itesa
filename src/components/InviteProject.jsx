// import React from "react";
// import { CloseCircleOutlined } from "@ant-design/icons";
// import UserLogo from "../../views/man.svg";
// import { Modal, Button, Row, Col, Input, Form, DatePicker, Select } from "antd";

// const { Option } = Select;
// const { RangePicker } = DatePicker;

// function InviteProject({
//   handleChange,
//   closeModal,
//   success,
//   openModal,
//   modal,
// }) {
//   return (
//     <div className="Modal">
//       <Button className="modal-button" onClick={openModal}>
//         {" "}
//         INVITAR
//       </Button>

//       <Modal
//         visible={modal}
//         centered="true"
//         cancelButtonProps={{ hidden: true }}
//         okButtonProps={{
//           hidden: true,
//         }}
//         onCancel={closeModal}
//         closeIcon={<CloseCircleOutlined className="close-button" />}
//         bodyStyle={{ color: "#9e39ff" }}
//         width={1000}
//       >
//         <>
//         <Form>
//           <div style={{width:"70%", marginLeft:'38px'}}>
//             <h1>Asignar Proyecto</h1>
//             <h5 style={{ color: "grey" }}>NOMBRE DEL PROYECTO</h5>

//             <Form.Item>
//                   <Select
//                     placeholder="Seleccione Proyecto"
//                     allowClear
//                   >
//                     <Option value="male"> ITESA 2020 </Option>
//                   </Select>
//                   </Form.Item>
//           </div>

//             <br />
//             <div>
//               <h5 style={{width:"70%", marginLeft:'38px',color: "grey" }}>NOMBRE DEL PROYECTO</h5>
//               <Row>
//                 <Col span={1} style={{ justifyItems: "center" }}></Col>
//                 <Col span={3} style={{ alignContent: "center" }}>
//                   <h6> Perfil </h6>
//                 </Col>
//                 <Col span={3}>
//                   <h6> Plazos </h6>
//                 </Col>
//                 <Col span={3}>
//                   <h6> Servicios</h6>
//                 </Col>
//                 <Col span={3}>
//                   <h6> Cuota 1 </h6>
//                 </Col>
//                 <Col span={3}>
//                   <h6> Cuota 2</h6>
//                 </Col>
//                 <Col span={3}>
//                   <h6> Cuota 3</h6>
//                 </Col>
//                 <Col>
//                   <h6> Cuota 4</h6>
//                 </Col>
//               </Row>
//             </div>
//             <div>
//               <Row>
//                 <Col span={1}>
//                   <input type="checkbox" />
//                 </Col>
//                 <Col span={3}>
//                 <Form.Item>
//                   <Select
//                     placeholder="Perfil"
//                     allowClear
//                   >
//                     <Option value="male">Nano</Option>
//                   </Select>
//                   </Form.Item>
//                 </Col>
//                 <Col span={3}>
//                 <Form.Item>
//                   <RangePicker placeholder='Plazo'/>
//                   </Form.Item>
//                 </Col>
//                 <Col span={3}>
//                 <Form.Item>
//                   <Select
//                     placeholder="Servicio"
//                     allowClear
//                   >
//                     <Option value="male">Developer</Option>
//                     <Option value="female">Disigner</Option>
//                   </Select>
//                   </Form.Item>
//                 </Col>
//                 <Col span={3}>
//                   <Form.Item>
//                     <Input></Input>
//                   </Form.Item>
//                 </Col>
//                 <Col span={3}>
//                   <Form.Item>
//                   <Input></Input>
//                   </Form.Item>
//                 </Col>
//                 <Col span={3}>
//                   <Form.Item>
//                   <Input></Input>
//                   </Form.Item>
//                 </Col>
//                 <Col span={3}>
//                   <Form.Item>
//                   <Input></Input>
//                   </Form.Item>
//                 </Col>
//               </Row>
//             </div>
//             <Row>
//             <div className="modal-input" >
//               <button className="ok-button" type="submit">
//                 Add a Row
//               </button>
//             </div>
//             </Row>
//             <div className="modal-input">
//               <button className="ok-button" type="submit">
//                 CONFIRMAR
//               </button>
//             </div>
//           </Form>
//         </>
//       </Modal>
//     </div>
//   );
// }

// export default InviteProject;

import React, { useContext, useState, useEffect, useRef } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import {
  Modal,
  Button,
  Table,
  Input,
  Popconfirm,
  Form,
  DatePicker,
  Select,
} from "antd";

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default class InviteProject extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Perfil",
        dataIndex: "perfil",
        width: "30%",
        editable: true,
      },
      {
        title: "Plazos",
        dataIndex: "plazos",
        editable: true,
      },
      {
        title: "Servicios",
        dataIndex: "servicios",
        editable: true,
      },
      {
        title: "Cuota 1",
        dataIndex: "cuota1",
        editable: true,
      },
      {
        title: "Cuota 2",
        dataIndex: "cuota2",
        editable: true,
      },
      {
        title: "Cuota 3",
        dataIndex: "cuota3",
        editable: true,
      },
      {
        title: "Cuota 4",
        dataIndex: "cuota4",
        editable: true,
      },

    ];
    this.state = {
      dataSource: [
        {
          key: "0",
          perfil:'1 ',
          servicios:'1 ',
          plazos:'1 ',
          cuota1:' 1',
          cuota2:' 1',
          cuota3:' 1',
          cuota4:' 1',
        },
      ],
      count: 2,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete(key) {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  }
  handleAdd() {
    const { count, dataSource } = this.state;
    const newData = {
          key: "0",
          perfil:'perfil de usuario',
          servicios:null,
          plazos:' ',
          cuota1:" ",
          cuota2:' 1',
          cuota3:' 1',
          cuota4:' 1',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  handleSave(row) {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  }
  // JUSTO ANTES DEL RENDER --------------------

  // COMIENZA EL RENDER /////
  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    // COMIENZA EL RETURN ------
    const { handleChange, closeModal, success, openModal, modal } = this.props;
    return (
      <div className="Modal">
        <Button className="modal-button" onClick={openModal}>
          {" "}
          INVITAR
        </Button>

        <Modal
          visible={modal}
          centered="true"
          cancelButtonProps={{ hidden: true }}
          okButtonProps={{
            hidden: true,
          }}
          onCancel={closeModal}
          closeIcon={<CloseCircleOutlined className="close-button" />}
          bodyStyle={{ color: "#9e39ff" }}
          width={1000}
        >
          <div>
            <Form>
              <div style={{ width: "70%", marginLeft: "38px" }}>
                <h1>Asignar Proyecto</h1>
                <h5 style={{ color: "grey" }}>NOMBRE DEL PROYECTO</h5>

                <Form.Item>
                  <Select placeholder="Seleccione Proyecto" allowClear>
                    <Option value="male"> ITESA 2020 </Option>
                  </Select>
                </Form.Item>
              </div>

              <Table
                components={components}
                rowClassName={() => "editable-row"}
                bordered
                dataSource={dataSource}
                columns={columns}
              />
              <div style={{ float: "right" }}>
                <Button className="modal-button" onClick={this.handleAdd}>
                  Add a row
                </Button>
              </div>
            </Form>
          </div>
          <br />
        </Modal>
      </div>
    );
  }
}
