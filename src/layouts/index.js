import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Header/>
    <div>
      {children()}
    </div>
  </div>
)

export default Layout;