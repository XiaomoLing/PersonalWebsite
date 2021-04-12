import React from 'react';
import {Layout, } from 'antd'
import AppNavigationBar from '../components/navbar'

const { Header, Footer, Sider, Content } = Layout;
const layoutStyle = {
  minHeight: '100vh',
  width: "100%"
}
const contentStyle = {
  display: 'flex',
  padding: '0 150px',
  justifyContent: "center",
  height: '100%'
}
/**
 * Layout component used to generate header and footer component
 */
function AppLayout({children, style}) {
  return (
    <Layout style={layoutStyle}>
      <Header style={{
        backgroundColor: 'white',
        padding: "0",
        display: 'flex',
        justifyContent: "center"
      }}>
        <AppNavigationBar></AppNavigationBar>
      </Header>
      <Content style={{...contentStyle, ...style}}>{children}</Content>
    </Layout>
  )
}

export default AppLayout;