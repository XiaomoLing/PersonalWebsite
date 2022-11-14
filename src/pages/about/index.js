import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import AppLayout from '../layout';

const { Paragraph, Text, Title } = Typography;


const { SubMenu } = Menu;
// const selfie = require('/images/IMG_8880_R3.jpg');

class About extends React.Component {

  render() {
    return (

      <AppLayout>
        <div style={{
          display: 'inline'
        }}>
          <Title level={2} style={{
            textAlign: "center", 
            paddingTop: "25px",
            paddingBottom: "25px",
          }}>LINGZI WU | RESEARCH GROUP</Title> 
          
          <Row justify="space-around">
            <Col span={10} style={{
              marginLeft: "5%"
            }}>
              <img
                width={200}
                src={`${process.env.PUBLIC_URL}/images/IMG_8880_R3.jpg`} 
              />
              <Paragraph ></Paragraph>        
              
              <Paragraph >         
                <Title level={3}>Lingzi Wu, PhD, EIT，LEED GA</Title>
                <Title level={4}>
                  Innovative Problem Solver |        
                  Researcher |
                  Educator
                </Title>

                <Title level={5}>Assistant Professor</Title>
                <Text underline><a href="lingwu@uw.edu">lingwu@uw.edu</a></Text>
              </Paragraph> 

              <Paragraph >           
                Department of Construction Management<br></br>
                College of Built Environments<br></br>
                University of Washington
              </Paragraph> 
            </Col>

            <Col span = {10} style={{
              marginRight: "5%"
            }}>
              
              <Title level={4} style={{textAlign: "center"}}>BRIEF BIOGRAPHY</Title>
              
              <Paragraph >           
               I’m an Assistant Professor with the Department of Construction Management (CM) at the University of 
               Washington (UW). Prior to joining UW in September 2022, I served as a postdoctoral fellow in the 
               Department of Civil and Environmental Engineering at University of Alberta, where I received my 
               MSc and PhD in Construction Engineering and Management in 2013 and 2020 respectively.
              </Paragraph> 
              <Paragraph >           
                My passion for research extends far beyond my professional life. It intertwines into
                my everyday life, and is embedded in my life philosophy—live to learn, and learn to live. 
                My curious mind is a relentless engine drives me to discover new ideas, concepts, and technologies, 
                to challenge the status quo, and to improve myself and the world around me. Through developing 
                state-of-art technologies (e.g., simulation, automation, and smart sensors), and adapting 
                interdisciplinary methods (e.g., machine learning, artificial intelligence, and data analytics), 
                my research is expected to solve practical challenges, advance the body of knowledge in engineering 
                and management field, thus making a significant and visible impact on society and the daily lives 
                of people. 
              </Paragraph> 
              <Paragraph >           
                I love teaching and mentoring: My goal is to design a stimulating, inclusive, and equitable learning 
                environment for every mind, and create a positive, substantial, and sustained influence on how my 
                students think, act, and feel. To participate in their journey actively and positively, towards 
                their personal and professional goals, is the greatest achievement I could ever imagine.
              </Paragraph> 

              <Paragraph >           
                My research expertise and teaching interests include: project life cycle management, construction 
                sustainability, resilient design, machine learning and artificial intelligence, construction informatics, 
                data analytics, simulation and automation.
              </Paragraph> 
            </Col>
          </Row>
        </div>
        
      </AppLayout>
      
    );
  }
}

export default About;