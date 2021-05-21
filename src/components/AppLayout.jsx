import { Layout, Menu } from 'antd';
import styled from 'styled-components/macro';
import { HomeOutlined, EyeOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export const AppLayout = ({ children }) => {
  return (
    <Layout>
      <SideBar width={70}>
        <MenuContainer theme="dark" mode="inline">
          <MenuItem key="1" icon={<HomeIcon />}></MenuItem>
          <MenuItem key="2" icon={<EyeIcon />}></MenuItem>
        </MenuContainer>
      </SideBar>
      <SiteLayout>
        <SiteLayoutBackground />
        <SiteContent>{children}</SiteContent>
        <SiteFooter>Ant Design ©2018 Created by Ant UED</SiteFooter>
      </SiteLayout>
    </Layout>
  );
};

const SideBar = styled(Sider)`
  &&& {
    background-color: #222e44;
    width: 70px;
    min-width: 70px;

    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
  }
`;

const MenuContainer = styled(Menu)`
  &&& {
    background-color: #222e44;
    padding-top: 55px;
  }
`;

const MenuItem = styled(Menu.Item)`
  &&& {
    width: 70px;
    height: 45px;
    :hover {
      background-color: #21b4bd;
    }
  }
`;

const HomeIcon = styled(HomeOutlined)`
  &&& {
    font-size: 20px;
  }
`;

const EyeIcon = styled(EyeOutlined)`
  &&& {
    font-size: 20px;
  }
`;

const SiteLayout = styled(Layout)`
  &&& {
    background: #fff;
    margin-left: 70px;
  }
`;

const SiteLayoutBackground = styled(Header)`
  &&& {
    background: #fff;
    padding: 0;
  }
`;

const SiteFooter = styled(Footer)`
  &&& {
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
`;

const SiteContent = styled(Content)`
  &&& {
    margin: 24px 16px 0;
    overflow: initial;
  }
`;
