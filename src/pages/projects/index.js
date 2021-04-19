import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import AppLayout from '../layout';

const { Paragraph, Text } = Typography;
const { Title } = Typography;
const { SubMenu } = Menu;


class Projects extends React.Component {
    state = {
      current: 'mail',
    };
  
    render() {
      const { current } = this.state;
      return (
  
        <AppLayout>
          <div style={{
              // display: 'inline'
            }}>
          
              <div
              id = "Industrial-Projects" 
              style={{
                // display: 'inline'
              }}>
              


              <Title level={5}>Input Modelling    (2016-2017) </Title>
              <Paragraph >
                L., Wu was the leading cost engineer, with responsibilities of tracking project cost, 
                conducting cash flow analysis, monthly forecast, and generating incurred report. 
              </Paragraph>  

              <Title level={5}>NWR (Northwest Redwater Partnership) Sturgeon Refinery  (2015-2016) </Title>
              <Paragraph >
                L., Wu was the project control specialist, in charge of tracking project cost, 
                conducting cash flow analysis, monthly forecast, and generating incurred report. 
              </Paragraph>       
    
            </div>
            <div id = "Research-Projects" 
              style={{
                // display: 'inline'
              }}>
              <Title level={5}>Suncor Fort Hills    (2016-2017) </Title>
              <Paragraph >
                L., Wu was the leading cost engineer, with responsibilities of tracking project cost, 
                conducting cash flow analysis, monthly forecast, and generating incurred report. 
              </Paragraph>  

              <Title level={5}>NWR (Northwest Redwater Partnership) Sturgeon Refinery  (2015-2016) </Title>
              <Paragraph >
                L., Wu was the project control specialist, in charge of tracking project cost, 
                conducting cash flow analysis, monthly forecast, and generating incurred report. 
              </Paragraph>   
            </div>
          </div>
          
          
        </AppLayout>
  
        
      );
    }
  }
  
  
export default Projects;
