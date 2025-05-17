import { useState, useEffect } from "react";
import { Card, Row, Col, Spin, Typography } from "antd";
import "./admin-settibgs.scss";
import {
  SettingOutlined,
  BarsOutlined,
  DashboardOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import type { ComponentType } from "react";
import NCAApis from "../../../shared-components/apis/NeuracodeAIApis";
import { getLocalStorageDataByKey } from "../../../shared-components/utils/helper-functions";
import { OpenNotificationWithIcon } from "../../../shared-components/custom-notification/custom-notification";

const { getAppMenus } = NCAApis;

const { Title } = Typography;

type CardsData = {
  id: string;
  menuId: number;
  menuTitle: string;
  navigateTo: string;
  menuDescription: string;
  icon: string;
  viewFor: string;
};

const iconMap: Record<string, ComponentType> = {
  setting: SettingOutlined,
  BarsOutlined: BarsOutlined,
  dashboard: DashboardOutlined,
  CodeOutlined: CodeOutlined,
};

const AdminSettingsIndex = () => {
  const [settings, setSettings] = useState<CardsData[]>([]);
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
        <p style={{ color: "#000000", fontSize: "17px" }}>
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
                        fontSize: "1rem",
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
                          fontSize: "14px",
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
