import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import AppLayout from '../layout';
import { Divider } from 'antd';

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
              id =  "Research-Projects"
              style={{
                // display: 'inline'
              }}>

              <Divider>
                <Title level={4}>RESEARCH PROJECTS</Title>        
              </Divider>

              <Title level={5}>Input Modelling   (2016-2017) </Title>
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
            <div id =  "Industrial-Projects"
              style={{
                // display: 'inline'
              }}>
              <Divider>
                <Title level={4}>INDUSTRIAL PROJECTS</Title>        
              </Divider>
             
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
              
              <Title level={5}>Brion Energy's MacKay River Commercial Project (MRCP)  (2015) </Title>
              <Paragraph >
                L., Wu was the project control specialist in the area of change management. Her responsibilities 
                included: initiating RFI (request for information), identifying extra work or scope change, 
                conducting field estimation, composing change request, processing change order, and 
                increasing/decreasing the total contractual value. 
              </Paragraph>   

              <Title level={5}>Shell Albian Sands MRM RC1 Project  (2014-2015) </Title>
              <Paragraph >
                L., Wu was the project control specialist, in charge of tracking project cost, 
                conducting cash flow analysis, monthly forecast, and generating incurred report. 
              </Paragraph>   

              <Title level={5}>Kearl Oil Sands Expansion Project  (2013-2014) </Title>
              <Paragraph >
                L., Wu was the project control specialist, in charge of project productivity control. 
                Her responsibilities included monitoring project progress, conducting field progress audits, 
                collect and analyze field data, prepare presentations, and compose internal and external 
                reports to distribute among shareholders.
              </Paragraph>   

            </div>
          </div>
          
          
        </AppLayout>
  
        
      );
    }
  }
  
  
export default Projects;
