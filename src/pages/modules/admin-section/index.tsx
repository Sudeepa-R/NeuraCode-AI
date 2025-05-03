import { useState, useEffect } from "react";
import { Card, Row, Col, Spin, Typography } from "antd";
import "./admin-settibgs.scss";
import {
  SettingOutlined,
  UserOutlined,
  DashboardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import type { ComponentType } from "react";
import NCAApis from "../../../shared-components/apis/NeuracodeAIApis";
import { getLocalStorageDataByKey } from "../../../shared-components/utils/helper-functions";
import { OpenNotificationWithIcon } from "../../../shared-components/custom-notification/custom-notification";

const { getAppMenus } = NCAApis;

const { Title } = Typography;

// Dummy data for admin settings
const dummySettings = [
  {
    id: "1",
    menuId: 1,
    menuTitle: "User Management",
    navigateTo: "/admin/users",
    menuDescription: "Manage user accounts and permissions",
    icon: "user",
    viewFor: "Admin",
  },
  {
    id: "2",
    menuId: 2,
    menuTitle: "App Menu",
    navigateTo: "/appMenu",
    menuDescription: "Configure system-wide settings",
    icon: "setting",
    viewFor: "Super Admin",
  },
  {
    id: "3",
    menuId: 3,
    menuTitle: "Dashboard",
    navigateTo: "/admin/dashboard",
    menuDescription: "View system analytics and metrics",
    icon: "dashboard",
    viewFor: "Admin",
  },
  {
    id: "4",
    menuId: 4,
    menuTitle: "Reports",
    navigateTo: "/admin/reports",
    menuDescription: "Generate and view reports",
    icon: "file-text",
    viewFor: "Manager",
  },
];

// Define the icon mapping with proper typing
const iconMap: Record<string, ComponentType> = {
  setting: SettingOutlined,
  user: UserOutlined,
  dashboard: DashboardOutlined,
  "file-text": FileTextOutlined,
};

const AdminSettingsIndex = () => {
  const [settings, setSettings] = useState(dummySettings);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    fetch();
  }, []);

  const fetch = () => {
    const _role = getLocalStorageDataByKey("data")?.user.role;
    getAppMenus(_role)
      .then((res) => {
        if (res?.data) {
          setSettings(res?.data);
        }
      })
      .catch((err) => {
        OpenNotificationWithIcon("error", err?.response?.data.message);
      });
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || SettingOutlined; // Fallback to SettingOutlined
    return <IconComponent />;
  };

  return (
    <div className="mt-5 adminSettings">
      <div style={{ padding: "24px", minHeight: "89vh" }}>
        <Title style={{ color: "#36454F" }} level={2}>
          Welcome to Admin Settings
        </Title>
        <p style={{ color: "#000000", fontSize: "19px" }}>
          The Admin Settings page centralizes essential controls for user
          management, security settings, system customization, and operational
          maintenance.
        </p>
        {loading ? (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {Array.isArray(settings) &&
              settings?.map((setting) => (
                <Col xs={24} sm={12} md={8} lg={6} key={setting.id}>
                  <Card
                    className="adminSettingsCrads"
                    hoverable
                    onClick={() => (window.location.href = setting.navigateTo)}
                    style={{
                      minHeight: "180px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2rem",
                        margin: "5px 0",
                      }}
                    >
                      {getIcon(setting.icon)}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2rem",
                        margin: "5px 0",
                      }}
                    >
                      <Title level={4} style={{ margin: "0 0 0 8px" }}>
                        {setting.menuTitle}
                      </Title>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2rem",
                        margin: "5px 0",
                      }}
                    >
                      <p
                        style={{
                          color: "#888",
                          fontSize: "16px",
                          textAlign: "center",
                        }}
                      >
                        {setting.menuDescription}
                      </p>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default AdminSettingsIndex;
