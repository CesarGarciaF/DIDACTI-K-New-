import React from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  const handleToggleTheme = () => {
    toggleTheme();
  };


  return (
    <div className='toggle-theme-btn' style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        className={`toggle ${darkTheme ? 'dark-theme' : 'light-theme'}`}
        onClick={handleToggleTheme}
        icon={darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
        style={{ marginTop: '8px' }}
      />
    </div>


  );
};

export default ToggleThemeButton;
