import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Typography } from 'antd';
import AppLayout from '../layout';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
const { Paragraph, Text, Title } = Typography;



class Team extends React.Component {
    state = {
        current: 'mail',
      };

      render() {
        const { current } = this.state;
        return (
    
          <AppLayout>
            <div style={{
              display: 'inline'
            }}>
    
              <Divider>
                <Title level={4}>WE ARE HIRING!</Title>        
              </Divider>
                    
              {/* <Title level={5}>Best Paper at MAS 2018</Title> */}
    
              <Paragraph >
                <Text strong>
                Thank you for your interest in joining our research group!
                </Text>
              </Paragraph>
    
              <Paragraph >
                 We are always on the lookout for exceptionally bright and eager students to join our 
                team. I supervise undergraduate, MASc and PhD students in Construction Management 
                at UW. I am looking for students who are:

                     1. passionate about challenging the status quo;

                     2. driven by problem solving;

                     3. good communicators; and

                     4. independent and creative thinkers.

              </Paragraph>
    
              <Paragraph >
                Graduate Research Assistant (GRA) positions are limited and competitive. 
                Students who pursue and receive funding through outside scholarships or 
                fellowships greatly increase their likelihood of admission. I keep the 
                team moderately sized so that I can work closely with every student in the group.

              </Paragraph>

              <Paragraph >
               If you would like to join our team, please do the following:

              </Paragraph>



    
              <Divider>
                <Title level={4}>TEAM MEMBER</Title>        
              </Divider>
    
              <Row justify="space-around">
            <Col span={10} style={{
              marginLeft: "5%"
            }}>
              <img
                width={350}
                src={`${process.env.PUBLIC_URL}/images/KimiGigi Circle.png`} 
              />
              <Paragraph ></Paragraph>        
              
              <Paragraph >         
                <Title level={5}>Kimi and Gigi |<em> Happiness Coordinators </em></Title>        

              </Paragraph> 


            </Col>

            <Col span = {10} style={{
              marginRight: "5%"
            }}>
              
              <img
                width={350}
                src={`${process.env.PUBLIC_URL}/images/KimiGigi Circle.png`} 
              />
              <Paragraph ></Paragraph>        
              
              <Paragraph >                
                <Title level={5}>Mammoet and Riceball |<em> Team Supervisors </em></Title>
              </Paragraph>
              

            </Col>
          </Row>

    
              
 

    
            
            </div>
            
          </AppLayout>
    
          
        );
      }
}
export default Team;