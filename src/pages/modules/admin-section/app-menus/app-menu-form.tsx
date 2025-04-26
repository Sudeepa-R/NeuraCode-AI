import { Button, Form, Input } from "antd";

type FieldType = {
  menuTitle: string;
  menuDescription: string;
  navigateTo: string;
  viewFor: string;
  icon: string;
};

const AppMenuForm = (props:any) => {
  return (
    <>
      <Form
        name="appMenuForm"
        layout="vertical"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Title"
          name="menuTitle"
          rules={[{ required: true, message: "Please input menu Title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="menuDescription"
          rules={[{ required: true, message: "Please input manu Description!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Navigate To"
          name="navigateTo"
          rules={[{ required: true, message: "Please input manu navigateTo!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="ViewFor"
          name="viewFor"
          rules={[{ required: true, message: "Please input menu ViewFor!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Icon"
          name="icon"
          rules={[{ required: true, message: "Please input menu Icon!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            {props.submitType}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AppMenuForm;
