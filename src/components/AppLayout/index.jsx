import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import './AppLayout.css';

const { Header, Content, Footer, Sider } = Layout;

export const AppLayout = ({ children, }) => {
  return (
    <Layout>
      <Sider
        className="sidebar"
      >
        <div className="logo" />
        <Menu className="sidebar-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item className="sidebar-menu-item" key="1" icon={<HomeOutlined className="sidebar-icon" />}>
          </Menu.Item>
          <Menu.Item className="sidebar-menu-item" key="2" icon={<EyeOutlined className="sidebar-icon" />}>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {children ? children : null}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}