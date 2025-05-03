import { Button, Form, Input, Select } from "antd";
import { useEffect } from "react";

type FieldType = {
  menuTitle: string;
  menuDescription: string;
  navigateTo: string;
  viewFor: string;
  icon: string;
};

const AppMenuForm = (props: any) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (props.EditMenu) {
      onFill();
    }
  });

  const onFill = () => {
    const data = props.EditMenuItemData;
    form.setFieldsValue({
      icon: data.icon,
      key: data.key,
      menuTitle: data.menuTitle,
      menuDescription: data.menuDescription,
      viewFor: data.viewFor,
      navigateTo: data.navigateTo,
    });
  };
  const saveData = (data: any) => {
    const _data = { menuId: props?.EditMenuItemData?.menuId, ...data };
    props.saveAppmenuItems(_data);
  };
  return (
    <>
      <Form
        name="appMenuForm"
        layout="vertical"
        form={form}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        // initialValues={{ remember: true }}
        onFinish={saveData}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
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
          rules={[
            { required: true, message: "Please input manu Description!" },
          ]}
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
          {/* <Input /> */}
          <Select
            showSearch
            placeholder="Select View For"
            // onChange={handleChange}
            options={[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
            ]}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Icon"
          name="icon"
          rules={[{ required: true, message: "Please input menu Icon!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" loading={props.loading}>
            {props.submitType}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AppMenuForm;
