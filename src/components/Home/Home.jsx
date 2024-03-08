import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { Outlet } from 'react-router-dom';
import './Home.css';

const { Header, Sider, Footer } = Layout;

function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="allhome">
      <Layout>
        <Sider
          width={200}
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className={`sidebar ${collapsed ? 'collapsed' : ''} sidebar-container`}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton
            darkTheme={darkTheme}
            toggleTheme={toggleTheme}
            setCollapsed={setCollapsed}
            collapsed={collapsed}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, zIndex: 2, borderTop: '1px solid #fff' }} className="header" />
          <Outlet />
          <Footer style={{ textAlign: 'center', background: '#001529', color: 'white', padding: '10px', position: 'fixed', bottom: 0, width: '100%', zIndex: 1, borderTop: '1px solid #e8e8e8' }}>
            Ant Design ©2023 Created by XXX UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
