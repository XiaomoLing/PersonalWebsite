import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import { Image } from 'antd';
import { Divider } from 'antd';
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

          <Divider>
            <Title level={2}>WELCOME TO MY PERSONAL WEBSITE！</Title>        
          </Divider>
          
          <img
            width={200}
            src={`${process.env.PUBLIC_URL}/images/IMG_8880_R3.jpg`} 
          />

          <Paragraph >         
            <Title level={3}>Lingzi Wu, PhD, EIT</Title>
            <Title level={4}>
              Innovative Problem Solver |        
              Researcher |
              Educator
            </Title>
            <Divider />
            <Title level={5}>Postdoctoral Fellow</Title>
            <Text underline><a href="lingzi1@ualberta.ca">lingzi1@ualberta.ca</a></Text>
          </Paragraph> 

          <Paragraph >           
            Hole School of Construction,<br></br>
            Department of Civil and Environmental Engineering,<br></br>
            University of Alberta, AB
          </Paragraph> 


          <Divider>
            <Title level={4}>Brief Biography</Title>
          </Divider>
          <Paragraph >           
            I am currently a postdoctoral fellow in the Department of Civil and Environmental 
            Engineering at University of Alberta.
          </Paragraph> 
          <Paragraph >           
            My passion for research extends far beyond my professional life. It intertwines into
            my everyday life, and is embedded in my life philosophy—live to learn, and learn to live. 
            My curious mind is a relentless engine drives me to discover new ideas, concepts, and technologies, 
            to challenge the status quo, and to improve myself and the world around me. Through developing the 
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
        </div>
        
      </AppLayout>
      
    );
  }
}

// export default withRouter(AppNavigationBar);
export default About;