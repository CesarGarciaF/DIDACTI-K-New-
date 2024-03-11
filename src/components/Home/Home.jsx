import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { AreaChart } from "@tremor/react";
import './Home.css';

const { Header, Sider, Footer } = Layout;

function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [sidebarClass, setSidebarClass] = useState('sidebar');
  const [isSwitched, setIsSwitched] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const cambiarClase = () => {
    setSidebarClass(() =>
      isSwitched ? 'sidebar' : 'sidebar-toggle'
    );
    setIsSwitched(!isSwitched);
  };

  const MyHeader = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const formatPath = currentPath.replace('/home/', '');
  
    return (
      <Header
        style={{ padding: 0, zIndex: 2, color: '#fff'}} className="header flex bg-dark-tremor-brand-faint">
        <div className='buttons-container flex'>
          <div className="btn-toggle">
            <button className='btn' onClick={cambiarClase}>
              <LuMenuSquare />
            </button>
          </div>
          <div className="text">
            <h1>{formatPath}</h1>
          </div>
        </div>
      </Header>
    );
  };
  


  return (
    <div className="allhome">
      <Layout>
        <Sider
          width={200}
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className={`${sidebarClass} sidebar-container`}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton
            darkTheme={darkTheme}
            toggleTheme={toggleTheme}
          />
        </Sider>
        <Layout>
          <MyHeader />
          <Outlet />
          <Footer style={{ textAlign: 'center', background: '#001529', color: 'white', padding: '10px', position: 'fixed', bottom: 0, width: '100%', zIndex: 1}}>
            Ant Design ©2023 Created by XXX UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
