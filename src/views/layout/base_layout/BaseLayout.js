import React from 'react';
import styles from './base_layout.module.css'
import sideBarStyles from './sidebar.module.css'
import SideBar from './sidebar/SideBar.js';
import { Outlet } from 'react-router-dom';

const BaseLayout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
        <div className={sideBarStyles.sidebarWrapper}>
          <SideBar/>
        </div>
        <div className={styles.contentContainer}>
          <Outlet/>
        </div>
        <footer>
        </footer>
    </div>
  );
};

export default BaseLayout;