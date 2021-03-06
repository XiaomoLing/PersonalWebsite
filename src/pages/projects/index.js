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

              <Title level={5}>Construction's Digital Future: Smart Data-Driven Decision Support Systems (2017-Current) </Title>
              <Paragraph >
                I have implemented various modeling techniques (e.g. discrete event simulation, distributed 
                simulation (or High Level Architecture), agent-based modeling) and machine learning 
                algorithms in developing data-driven decision support systems (DSS) to improve specific areas 
                of construction practices, including but are not limited to, safety management, equipment 
                management, preliminary resource planning, and estimating.
              </Paragraph>       

              <Title level={5}>Real-time Input Modeling for Data-Driven Simulation in Construction (2017-2019) </Title>
              <Paragraph >
                Modeling construction processes empowers practitioners to simulate and evaluate 
                possible project outcomes based on various conditions. Nevertheless, rigid parameters, 
                structure, and assumptions limit simulations??? application to mostly the planning stage. 
                I systematically studied the way we model simulation inputs and proposed two methods in 
                enabling real-time input model calibration for simulation. 
              </Paragraph>  

              <Title level={5}>Automating Data Preprocessing in Enhancing Construction Digitalization (2019-2020)</Title>
              <Paragraph >
                Reflecting the highly-fragmented environment, construction data are segmented (stored in 
                separate databases), noisy, and messy, thus constantly require tedious manual manipulation 
                to a cleaner form for any data-driven decision support system. I developed a generic framework 
                to automatically merge data generated from various origins without easily identifiable 
                relationships to a tidy format, and supply to a wide range of applications in real-time.
.
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
                L., Wu was the project control specialist, in charge of productivity management and change 
                management. Her responsibilities included: monitoring project progress, conducting field 
                progress audits, collect and analyze field data, identifying extra work or scope change, 
                and conducting true-up estimates.
              </Paragraph>   
              
              <Title level={5}>Brion Energy's MacKay River Commercial Project (MRCP)  (2015) </Title>
              <Paragraph >
                L., Wu was the project control specialist in the area of change management. Her responsibilities 
                included: initiating RFI (request for information), identifying and estimating extra work or scope change, 
                composing change request, processing change order, and increasing/decreasing the total contractual value. 
              </Paragraph>   

              <Title level={5}>Shell Albian Sands MRM RC1 Project  (2014-2015) </Title>
              <Paragraph >
                L., Wu was the project control specialist, in charge of subcontract administration. Her 
                responsibility included preparing RFP (request for proposal) package, tracking subcontractor 
                LEMs (Labor, Equipment, and Material), progress and invoices, conducting subcontractor progress 
                audit, prepare subcontract cost forecast, and draft subcontract revisions.  
              </Paragraph>   

              <Title level={5}>Kearl Oil Sands Expansion Project  (2013-2014) </Title>
              <Paragraph >
                L., Wu was the project control specialist, in charge of project productivity control. 
                Her responsibilities included monitoring project progress, conducting field progress audits, 
                collect and analyze field data, prepare presentations, and compose internal and external 
                reports to distribute among shareholders. Additionally, she drafted closeout report for the 
                project, summarized lessons learned, and made recommendations & suggestions for future 
                project improvement.

              </Paragraph>   

            </div>
          </div>
          
          
        </AppLayout>
  
        
      );
    }
  }
  
  
export default Projects;
