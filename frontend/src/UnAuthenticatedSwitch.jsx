import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Login from './pages/Login';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlertBanner from './components/AlertBanner';
import UnAuthenticatedAppHeader from './components/UnAuthenticatedAppHeader';

export default function UnAuthenticatedSwitch({ showAlert, setShowAlert }) {
  console.log('UnAuthenticatedSwitch',showAlert);

  return (
    <main>
      <div style={{
        position: 'fixed',
        top: 0,
        maxWidth: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: '100',
        width: '100%',
      }}>
        {showAlert && <AlertBanner setShowAlert={setShowAlert} />}
        <UnAuthenticatedAppHeader
          showAlert={showAlert}
          setShowAlert={setShowAlert} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box',
          width: '100%',
          minHeight: 'calc(100vh - 64px)', // Assuming the header height is 64px
        }}
      >

        <Routes>
          {/* <Route path="/about" element={<Login />} /> */}
          <Route path="/home" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </main>
  );
}
