import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
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
    <Layout >
<Sider
  width={200} /* Ajusta según tus necesidades */
  collapsed={collapsed}
  collapsible
  trigger={null}
  theme={darkTheme ? 'dark' : 'light'}
  className={`sidebar ${collapsed ? 'collapsed' : ''}`}
>        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} setCollapsed={setCollapsed} collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='header'>
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
}

export default Home;
