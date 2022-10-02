import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Typography } from 'antd';
import AppLayout from '../layout';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
const { Paragraph, Text, Title, Link} = Typography;



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
    
              <Paragraph >
                <Text strong>
                Thank you for your interest in joining our research group!
                </Text>
              </Paragraph>
    
              <Paragraph >
                We are always on the lookout for exceptionally bright and eager students to join our 
                team. I supervise undergraduate, MASc and PhD students in Construction Management 
                at UW. I am looking for students who are:
                <ul>
                  <li>
                    passionate about challenging the status quo; 
                  </li>
                  <li>
                    problem solver; 
                  </li>
                  <li>
                    good communicators; and 
                  </li>
                  <li>
                    independent and critical thinkers.
                  </li>
                </ul>
              </Paragraph>
    
              <Paragraph >
                Graduate Research Assistant (GRA) positions are limited and competitive. 
                Students who pursue and receive funding through outside scholarships or 
                fellowships greatly increase their likelihood of admission. I keep the 
                team moderately sized so that I can work closely with every student in the group.
              </Paragraph>

              <Paragraph >
               If you would like to join our team, please do the following:
                <ol>
                    <li>
                      Review our recent work on this website to ensure it aligns with your research interests.
                    </li>
                    <li>
                      Review information about the programs (
                      <Link href="https://cm.be.uw.edu/students/grad-prof-programs/graduate-admission/" target="_blank">
                      MSc </Link>and <Link href="https://be.uw.edu/academics/phd/admissions-overview/" target="_blank">
                      BE Ph.D</Link>) and be sure you meet all the criteria.
                    </li>
                    <li>
                      Contact Dr. Lingzi Wu by email with:
                        <ol>
                            <li>
                             A subject line of “Prospective Student_Undergrad/MSc/PhD_Firstname Lastname”
                            </li>
                            <li>Your latest CV,</li>
                            <li>Your transcript, and</li>
                            <li>
                             One example of past work (e.g., published/unpublished paper, project, report etc.) Please clearly identify your contribution if there are multiple authors. 
                            </li>
                        </ol>
                      </li>  
                </ol>
              </Paragraph>

              <Paragraph>
                Please note that due to the volume of emails, I am generally unable to acknowledge receipt.
              </Paragraph>
    
              <Divider>
                <Title level={4}>TEAM MEMBER</Title>        
              </Divider>
    
              <Row justify="space-around">
            <Col span={10} style={{
              marginLeft: "5%"
            }}>

              <Paragraph >         
                <Title level={5}>Elnaz Jafari |<em> MSc Student</em><br></br>
                co-supervised</Title>  
               </Paragraph> 

              <Paragraph >  
                <img
                  width={350}
                  src={`${process.env.PUBLIC_URL}/images/KimiGigi Circle.png`} 
                />
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