import React from 'react';
import SideBar from './side-bar/side-bar';
import Dashboard from './dashboard/dashboard';

const MainLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', margin: 0, padding: 0 }}>
      <div
        style={{
          width: '230px',
          height: '1210px',
          borderRight: '1px solid #DEDEDF',
          backgroundColor: '#002F6C',
          padding: 0,
          margin: 0,
        }}
      >
        <SideBar />
      </div>

      <div
        style={{
          width: '1210px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: 0,
          margin: 0,
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default MainLayout;
