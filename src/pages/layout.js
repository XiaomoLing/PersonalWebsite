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
  backgroundColor: 'AliceBlue',
  height: '100%'
}
//, LightCyan, MintCream

/**
 * Layout component used to generate header and footer component
 */
function AppLayout({children, style}) {
  return (
    <Layout style={layoutStyle}>
      <Header style={{
        backgroundColor: 'white',
      }}>
        <AppNavigationBar ></AppNavigationBar>
      </Header>
      <Content style={{...contentStyle, ...style}}>{children}</Content>
      <Footer style={{
        backgroundColor: 'white', // rgb(51, 0, 111)
        minHeight: '8vh',
        padding: "0",
        display: 'flex',
        justifyContent: "center"
      }}> 
        <img
          width={600}
          height = {50}
          src={`${process.env.PUBLIC_URL}/images/UW_Left_Purple_RGB.png`} 
        />
      </Footer>
    </Layout>
  )
}

export default AppLayout;