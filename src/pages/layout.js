import React from 'react';
import {Layout, } from 'antd'
import AppNavigationBar from '../components/navbar'

const {Content} = Layout

const layoutStyle = {
  minHeight: '100vh',
  width: "100%"
}
const contentStyle = {
  display: 'flex',
  height: '100%'
}
/**
 * Layout component used to generate header and footer component
 */
function AppLayout({children, style}) {
  return (
    <Layout style={layoutStyle}>
    <AppNavigationBar ></AppNavigationBar>
    <Content style={{...contentStyle, ...style}}>{children}</Content>
    </Layout>
  )
}

export default AppLayout;