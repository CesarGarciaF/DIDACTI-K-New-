import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { Outlet } from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";
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

  React.useEffect(() => {
    console.log('Clase actual:', sidebarClass);
  }, [sidebarClass]);

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
          <Header style={{ padding: 0, background: colorBgContainer, zIndex: 2, borderTop: '1px solid #fff' }} className="header">
            <div className='buttons-container'>
              <div className="text">
              </div>
              <div className="btn-toggle">
                <button className='btn' onClick={cambiarClase}>
                  <LuMenuSquare />
                </button>
              </div>
            </div>
          </Header>
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
