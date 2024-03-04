import React, { useState } from 'react';
import { Layout, Button, theme } from 'antd';  // Importa Button de antd
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import '../Home/Home.css';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { Outlet } from 'react-router-dom';

const { Header, Sider } = Layout;

function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false); // Corrige el nombre de la función

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const{
    token: {colorBgContainer},
  }=theme.useToken();


  return (
    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer}}>
          <Button type="text" className='toggle' onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}/>
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
}

export default Home;
