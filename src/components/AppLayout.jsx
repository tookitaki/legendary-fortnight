import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styled from 'styled-components/macro';
import { getLoginDetails } from '../selectors/login';
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PATH from '../constants/path';
import { logoutUser } from '../actions/login';
import Box from './Box';

const { Header, Content, Footer, Sider } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  onLogout = () => {
    const { dispatchLogoutUser, history } = this.props;
    dispatchLogoutUser();
    history?.push(PATH.defaultPath);
  };

  render() {
    const { collapsed } = this.state;
    const { login, children } = this.props;
    const { name } = login;
    return (
      <LayoutContainer>
        <TopBar width={48}>
          <FontAwesomeIcon icon="coffee" />
          <div className="logo" />
          <HeaderMenuContainer theme="dark" mode="horizontal">
            <UserMenuItem key="1">{name}</UserMenuItem>
          </HeaderMenuContainer>
        </TopBar>
        <Layout>
          <SideBar
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}>
            <SideBarMenuContainer theme="dark" mode="inline">
              <MenuItem key="1" icon={<HomeIcon />}>
                {' '}
                Home{' '}
              </MenuItem>
              <MenuItem
                onClick={this.onLogout}
                key="2"
                icon={<LogoutOutlined />}>
                {' '}
                Log out{' '}
              </MenuItem>
            </SideBarMenuContainer>
          </SideBar>
          <SiteLayout>
            <SiteLayoutBackground />
            {collapsed ? (
              <SiteContentCollapsed>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {children}
                </Box>
                <SiteFooter>
                  <b>Copyright</b> Tookitaki Technologies Pvt Ltd © 2021 |
                </SiteFooter>
              </SiteContentCollapsed>
            ) : (
              <SiteContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {children}
                </Box>
                <SiteFooter>
                  <b>Copyright</b> Tookitaki Technologies Pvt Ltd © 2021 |
                </SiteFooter>
              </SiteContent>
            )}
          </SiteLayout>
        </Layout>
      </LayoutContainer>
    );
  }
}

const LayoutContainer = styled(Layout)`
  &&& {
    overflow: hidden;
  }
`;

const TopBar = styled(Header)`
  &&& {
    background-color: #222e44;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100vw;
  }
`;

const SideBar = styled(Sider)`
  &&& {
    background-color: #222e44;

    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
  }
`;

const HeaderMenuContainer = styled(Menu)`
  &&& {
    background-color: #222e44;
    margin-left: 75vw;
  }
`;

const SideBarMenuContainer = styled(Menu)`
  &&& {
    background-color: #222e44;
    padding-top: 75px;
  }
`;

const UserMenuItem = styled(Menu.Item)`
  &&& {
    font-size: 14px;
    color: #fff;
    :hover {
      background-color: #21b4bd;
    }
  }
`;

const MenuItem = styled(Menu.Item)`
  &&& {
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

const SiteLayout = styled(Layout)`
  &&& {
    background: #fff;
    margin-left: 70px;
    width: 100%;
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
    height: 30px;
    padding: 8px;
  }
`;

const SiteContent = styled(Content)`
  &&& {
    margin-left: 150px;
    margin-right: 25px;
  }
`;

const SiteContentCollapsed = styled(Content)`
  &&& {
    margin: 0 16px;
  }
`;

const mapStateToProps = (state) => ({
  login: getLoginDetails(state)
});

const mapDispatchToProps = {
  dispatchLogoutUser: logoutUser
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppLayout)
);
