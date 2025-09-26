import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
