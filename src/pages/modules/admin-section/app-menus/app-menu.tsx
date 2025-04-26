import {
  Button,
  Modal,
  Table,
  TableColumnsType,
  // TableProps,
  Tag,
} from "antd";
import "./app-menus.scss";
import { useEffect, useState } from "react";
import NCAApis from "../../../../shared-components/apis/NeuracodeAIApis";
import { OpenNotificationWithIcon } from "../../../../shared-components/custom-notification/custom-notification";
import AppMenuForm from "./app-menu-form";

const { getAppMenus } = NCAApis;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const AppMenus = () => {
  const [data, SetData] = useState([]);
  const [open, SetOpen] = useState(false);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    getAppMenus("admin")
      .then((res) => {
        if (res?.data) {
          const _data = res.data;
          SetData(_data);
        }
      })
      .catch((e) => {
        OpenNotificationWithIcon("error", e?.response?.data.message);
        console.log(2222, e);
      });
  };
  const [paginationConfig, setPaginationConfig] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50", "100"],
  });
  const columns: TableColumnsType<DataType> = [
    {
      title: "MenuId",
      dataIndex: "menuId",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
      width: "10%",
    },
    {
      title: "Menu Title",
      dataIndex: "menu",
      width: "10%",
    },
    {
      title: "Menu Description",
      dataIndex: "menuDescription",
      width: "10%",
    },
    {
      title: "Navigate To",
      dataIndex: "navigateTo",
      width: "10%",
    },
    {
      title: "View For",
      dataIndex: "viewFor",
      width: "10%",
      render: (viewFor) => {
        let color = viewFor === "admin" ? "geekblue" : "green";

        return (
          <Tag color={color} key={viewFor}>
            {viewFor.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Icon",
      dataIndex: "icon",
      width: "10%",
    },
  ];

  // const onChange: TableProps<DataType>["onChange"] = (
  //   pagination,
  //   filters,
  //   sorter,
  //   extra
  // ) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };

  const handlePagination = (data: any, sorter = {}, filter = {}) => {
    console.log(sorter, filter);
    setPaginationConfig({
      ...paginationConfig,
      current: data.current,
      pageSize: data?.pageSize,
    });
  };

  return (
    <>
      <div className="appMenus" style={{ minHeight: "100vh" }}>
        <div
          style={{
            paddingTop: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              margin: "30px",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ color: "#00246B" }}>App Menus </h4>
            <Button
              onClick={() => {
                SetOpen(true);
              }}
              style={{ fontFamily: "sans-serif" }}
              type="primary"
            >
              Add App Menu
            </Button>
          </div>
          <Table
            style={{ width: "90%", background: "#fff", padding: "1%" }}
            columns={columns}
            dataSource={data}
            onChange={handlePagination}
            pagination={paginationConfig}
            showSorterTooltip={{ target: "sorter-icon" }}
            scroll={{ x: 900, y: 360 }}
          />

          <Modal
            title="Add/Update the form"
            centered
            onCancel={() => {
              SetOpen(false);
            }}
            open={open}
            footer={[
              <Button
                key="back"
                onClick={() => {
                  SetOpen(false);
                }}
              >
                Cancel
              </Button>
            ]}
            // confirmLoading={confirmLoading}
          >
            <AppMenuForm submitType='Save' />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AppMenus;
