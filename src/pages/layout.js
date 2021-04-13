import React from 'react';
import {Layout, } from 'antd'
import AppNavigationBar from '../components/navbar'
// import { cyan } from '@ant-design/colors';
import { Image } from 'antd';
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
// const footerStyle = {
//   backgroundColor: 'white',
//   padding: "0",
//   display: 'flex',
//   justifyContent: "center"
// }

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
        <AppNavigationBar ></AppNavigationBar>
      </Header>
      <Content style={{...contentStyle, ...style}}>{children}</Content>
      <Footer style={{
        backgroundColor: 'white',
        minHeight: '8vh',
        padding: "0",
        display: 'flex',
        justifyContent: "center"
      }}> 
        <Image
          width={200}
          src= "/images/UA-1C-TINT.png"
          preview = {false}
        />
      </Footer>
    </Layout>
  )
}

export default AppLayout;