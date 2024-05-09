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

const { Paragraph, Text, Link } = Typography;
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


              <Title level={5}>Analyzing the Impact and Mitigation Strategies of Transportation Electrification on Seattle’s Gentrification (2024) </Title>
              <Paragraph >
                Collaborating with <Link href="https://re.be.uw.edu/people/vince-wang/" target="_blank"> Prof. Vince Wang </Link> and 
                and <Link href="https://seattle.gov/city-light" target="_blank"> Seattl City Light</Link> , 
                this project aims to evaluate the comprehensive impacts of transporation electrification on Seattle's low-income communities
                and evaluate potential policy supports to mitigate the negative impacts, such as displacement.
              </Paragraph>


              <Title level={5}>Advancing Construction Safety through Large Language Model (LLM) Field-Level Risk Assessment (2024) </Title>
              <Paragraph >
                Collaborating with <Link href="https://apps.ualberta.ca/directory/person/qipei" target="_blank"> Prof. Qipei Mei </Link> and 
                and <Link href="https://www.pcl.com/us/en/who-we-are/our-offices/edmonton-industrial-management" target="_blank"> PCL Industrial Management</Link> , 
                this project aims to enhance the field-level risk assessment by utilization of a Large Language Model. Successful project 
                completion will yield a fine-tuned LLM, showcasing its capability to automate task analysis and provide insightful responses to risk-related queries. 
              </Paragraph>


              <Title level={5}>Construction Claims and Project Delivery Methods (2024) </Title>
              <Paragraph >
                Funded by <Link href="https://ipda.ca/" target="_blank"> the Integrated Project Delivery Alliance (IPDA) </Link> 
                and <Link href="https://www.cca-acc.com/" target="_blank"> Canadian Construction Association (CCA)</Link> , this project
                aims to unveil the relationship between the increased (or decreased) risks of construction claims resulting from 
                different project delivery methods, with a particular focus on the distinction between collaborative and traditional 
                delivery methods.
              </Paragraph>


              <Title level={5}> VDC Engineering Time Study (2023-2025) </Title>
              <Paragraph >
                As Virtual Design and Construction (VDC) practices evolve and become more common across the US, Mechanical, 
                Electrical and Plumbing (MEP) trades struggle with benchmarking for VDC engineering work. 
                Funded by MCAA, NECA, and SMACNA, this project aims to understand current industry practices and develop ways 
                to assess unproductive time as well as valuable time spent in coordination.
              </Paragraph>

              <Title level={5}>Construction Claims and Project Delivery Methods (2024) </Title>
              <Paragraph >
                Funded by <Link href="https://ipda.ca/" target="_blank"> the Integrated Project Delivery Alliance (IPDA) </Link> 
                and <Link href="https://www.cca-acc.com/" target="_blank"> Canadian Construction Association (CCA)</Link> , this project
                aims to unveil the relationship between the increased (or decreased) risks of construction claims resulting from 
                different project delivery methods, with a particular focus on the distinction between collaborative and traditional 
                delivery methods.
              </Paragraph>  

              <Title level={5}>PacTrans WSDOT Summer High School Transportation Camp (2023 & 2024) </Title>
              <Paragraph >
                Hosted at WSU in Pullman from July 24th to 29th and at the UW in Seattle from August 13th to 18th, the summer camps 
                offer a transformative learning experience that provides high school students with a glimpse into a wide range of 
                topics in transportation such as urban planning, traffic safety, supply chain logistics, and the future of connected 
                and autonomous vehicles. More information can be found <Link href="https://watransportation.camp/" target="_blank">
                here</Link>.
              </Paragraph>  

              <Title level={5}>Innovative Tool for Owners: Owner Typology Assessment and Project Delivery Method Considerations (2022 – 2023) </Title>
              <Paragraph >
                This project aims to develop a digital tool for owners to assess their decision-making profile and 
                understand the challenges and alignments between this profile and project delivery for improved 
                selection and management of project delivery methods. This tool improves the selection process 
                as it allows individual owners to select 
                delivery methods that best align with their organization’s communication and decision-making 
                structure and organizational culture, while also providing the ability for owners to predict 
                areas of tension within their selected project delivery method that they can then plan for and 
                manage in advance. This will inspire the development of innovative project management approaches that target 
                organizational tensions. More information can be found <Link href="https://boat.be.uw.edu/" target="_blank">
                here</Link>.
              </Paragraph>  

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
                structure, and assumptions limit simulations’ application to mostly the planning stage. 
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
