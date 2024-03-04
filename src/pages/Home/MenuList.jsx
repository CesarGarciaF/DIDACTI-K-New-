import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons';
import { Link, Outlet, Route, Routes } from "react-router-dom";

const MenuList = ({ darkTheme }) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>

            <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                <Link to={"dashboard"}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="grupos" icon={<AppstoreOutlined />}>
                <Link to={"grupo"}>Grupos</Link>
            </Menu.Item>

            <Menu.SubMenu key='cursos' icon={<BarsOutlined />} title="Cursos">
                <Menu.Item key="subtask-1">Curso 1</Menu.Item>
                <Menu.Item key="subtask-2">Curso 2</Menu.Item>
                <Menu.SubMenu key="subcursos" title="Cursos extras">
                    <Menu.Item key="subcurso-1">Sub curso 1</Menu.Item>
                    <Menu.Item key="subcurso-2">Sub curso 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.Item key="planeaciones" icon={<AreaChartOutlined />}>
                <Link to={"planeaciones"}>Planeaciones</Link>
            </Menu.Item>

            <Menu.Item key="patrocinadores" icon={<AreaChartOutlined />}>
                <Link to={"sponsors"}>Patrocinadores</Link>
            </Menu.Item>

            <Menu.Item key="calendario" icon={<PayCircleOutlined />}>
                <Link to={"calendar"}>Calendario</Link>
            </Menu.Item>

            <Menu.Item key="ajustes" icon={<SettingOutlined />}>
                <Link to={"settings"}>Ajustes</Link>
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
