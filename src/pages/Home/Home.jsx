import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { Outlet } from 'react-router-dom';
import './Home.css';

const { Header, Sider } = Layout;

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
    <div className="sidebar-container">
      <Layout >
      <Sider
        width={200} 
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'}
        className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} setCollapsed={setCollapsed} collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='header'>
        </Header>
        <Outlet />
      </Layout>
    </Layout>
    </div>
  );
}

export default Home;