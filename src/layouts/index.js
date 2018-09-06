import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    {children()}
  </div>
)

export default Layout;