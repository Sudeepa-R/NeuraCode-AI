import {
  Button,
  Modal,
  Table,
  TableColumnsType,
  // TableProps,
  Popconfirm,
  Tag,
  Tooltip,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./app-menus.scss";
import { useEffect, useState } from "react";
import NCAApis from "../../../../shared-components/apis/NeuracodeAIApis";
import { OpenNotificationWithIcon } from "../../../../shared-components/custom-notification/custom-notification";
import AppMenuForm from "./app-menu-form";

const { getAppMenus, saveAppMenus, deleteAppMenu, getAppMenusById } = NCAApis;

interface DataType {
  menuId: number;
  menuTitle: string;
  menuDescription: string;
  navigateTo: string;
  addrviewForess: string;
  icon: string;
}

const AppMenus = () => {
  const [data, SetData] = useState([]);
  const [open, SetOpen] = useState(false);
  const [dataById, SetDataById] = useState({});
  const [loading, SetLoading] = useState(true);
  const [EditMenu, SetEditMenu] = useState(false);
  useEffect(() => {
    fetch();
  }, []);

  const saveAppmenuItems = (data: any) => {
    SetLoading(true);
    saveAppMenus(data)
      .then((res: any) => {
        if (res?.status === 200 || res?.status === 201) {
          OpenNotificationWithIcon(
            "success",
            "App menu created/updated successfully!!"
          );
          SetLoading(false);
          handleCloseModal();
          fetch();
        }
      })
      .catch((e: any) => {
        SetLoading(false);
        OpenNotificationWithIcon("error", e?.response?.data.message);
      });
  };

  const handleCloseModal = () => {
    setTimeout(() => {
      SetOpen(false);
    }, 200);
  };

  const fetch = () => {
    getAppMenus("admin")
      .then((res) => {
        if (res?.data) {
          const _data = res.data;
          SetLoading(false);
          SetData(_data);
        }
      })
      .catch((e) => {
        OpenNotificationWithIcon("error", e?.response?.data.message);
        SetLoading(false);
      });
  };
  const [paginationConfig, setPaginationConfig] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50", "100"],
  });

  const getAppMenusByMenuId = (record: any) => {
    const menuId = record?.menuId || 0;
    getAppMenusById(menuId)
      .then((res) => {
        if (res?.data) {
          SetDataById(res.data);
          SetEditMenu(true);
          SetOpen(true);
        }
      })
      .catch((e) => {
        SetLoading(false);
        OpenNotificationWithIcon("error", e?.response?.data.message);
      });
  };

  const handleDelete = (menuId: number) => {
    SetLoading(true);
    deleteAppMenu(menuId)
      .then((res) => {
        if (res?.status === 200 || res?.status === 201) {
          OpenNotificationWithIcon(
            "success",
            "App menu deleted successfully!!"
          );
          fetch();
          SetLoading(false);
        }
      })
      .catch((e) => {
        SetLoading(false);
        OpenNotificationWithIcon("error", e?.response?.data.message);
      });
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "MenuId",
      dataIndex: "menuId",
      key: "menuId",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.menuId - b.menuId,
      width: "10%",
    },
    {
      title: "Menu Title",
      dataIndex: "menuTitle",
      key: "menuTitle",
      width: "10%",
    },
    {
      title: "Menu Description",
      dataIndex: "menuDescription",
      key: "menuDescription",
      width: "10%",
    },
    {
      title: "Navigate To",
      dataIndex: "navigateTo",
      key: "navigateTo",
      width: "10%",
    },
    {
      title: "View For",
      dataIndex: "viewFor",
      key: "viewFor",
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
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: "10%",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <Tooltip title="Edit menu">
            <Button
              onClick={() => getAppMenusByMenuId(record)}
              size="small"
              variant="link"
            >
              <EditOutlined />
            </Button>
          </Tooltip>
          <Popconfirm
            title="Delete the menu"
            description="Are you sure to delete this menu?"
            onConfirm={() => {
              handleDelete(record.menuId);
            }}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete menu">
              <Button variant="link" size="small">
                <DeleteOutlined style={{ color: "red" }} />
              </Button>
            </Tooltip>
          </Popconfirm>
        </div>
      ),
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
            loading={loading}
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
              SetEditMenu(false);
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
              </Button>,
            ]}
            // confirmLoading={confirmLoading}
          >
            <AppMenuForm
              submitType="Save"
              EditMenu={EditMenu}
              EditMenuItemData={dataById}
              saveAppmenuItems={saveAppmenuItems}
              loading={loading}
            />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AppMenus;
