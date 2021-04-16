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
          <img
            width={200}
            src={`${process.env.PUBLIC_URL}/images/IMG_8880_R3.jpg`} 
          />
          <Divider />
          <Paragraph >         
            <Title level={2}>Lingzi Wu, PhD, EIT</Title>
            <Title level={4}>Postdoctoral Fellow</Title>
            <Text underline><a href="lingzi1@ualberta.ca">lingzi1@ualberta.ca</a></Text>
          </Paragraph> 

          <Paragraph >           
            Hole School of Construction,<br></br>
            Department of Civil and Environmental Engineering,<br></br>
            University of Alberta, AB
          </Paragraph> 


          <Divider>Brief Biography </Divider>
          <Paragraph >           
            Recently defended my PhD in Construction Engineering and Management at the University of Alberta, 
            I am transitioning into my new role as a postdoctoral fellow in world’s foremost Simulation Lab lead 
            by Dr. Simaan AbouRizk. Prior to my PhD studies, I was a project coordinator/site engineer on a 
            variety of construction projects for 5 years. I experienced the challenges, difficulties, and 
            frustrations of day-to-day construction practices, which led me to return to academic research where 
            I can apply my research skills to improve the construction industry and better my community.
          </Paragraph> 
        </div>
        
      </AppLayout>
      
    );
  }
}

// export default withRouter(AppNavigationBar);
export default About;