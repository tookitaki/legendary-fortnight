import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import {
  HomeOutlined,
  EyeOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const SideBar = styled(Sider)`
  background-color: #222e44 !important;
  width: 70px !important;
  min-width: 70px !important;

  overflow: auto !important;
  height: 100vh !important;
  position: fixed !important;
  left: 0 !important;
`;

const MenuContainer = styled(Menu)`
  background-color: #222e44 !important;
  width: 70px !important;
  padding-top: 55px !important;
`;

const MenuItem = styled(Menu.Item)`
  width: 70px !important;
  height: 45px !important;
  :hover {
    background-color: #21b4bd !important;
  }
`;

const HomeIcon = styled(HomeOutlined)`
  font-size: 20px !important;
`;

const EyeIcon = styled(EyeOutlined)`
  font-size: 20px !important;
`;

const SiteLayout = styled(Layout)`
  background: #fff;
  margin-left: 200px;
`;

const SiteLayoutBackground = styled(Header)`
  background: #fff !important;
  padding: 0 !important;
`;

const SiteFooter = styled(Footer)`
  text-align: center !important;
`;

const SiteContent = styled(Content)`
  margin: 24px 16px 0 !important;
  overflow: initial !important;
`;

export const AppLayout = ({ children, }) => {
  return (
    <Layout>
      <SideBar
      >
        <MenuContainer theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <MenuItem key="1" icon={<HomeIcon />}>
          </MenuItem>
          <MenuItem key="2" icon={<EyeIcon />}>
          </MenuItem>
        </MenuContainer>
      </SideBar>
      <SiteLayout>
        <SiteLayoutBackground />
        <SiteContent>
          {children ? children : null}
        </SiteContent>
        <SiteFooter>Ant Design ©2018 Created by Ant UED</SiteFooter>
      </SiteLayout>
    </Layout>
  );
}