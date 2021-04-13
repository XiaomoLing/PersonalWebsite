import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import { Image } from 'antd';
import AppLayout from '../layout';

const { Paragraph, Text, Title } = Typography;


const { SubMenu } = Menu;

class About extends React.Component {
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
          <Image
            width={200}
            src= "/images/IMG_8880_R3.jpg"
          />
          <Title level={2}>Lingzi Wu, PhD, EIT</Title>
          <Title level={4}>Postdoctoral Fellow</Title>


          <Text underline> lingzi1@ualberta.ca </Text>
          <Paragraph >           
            Hole School of Construction,
          </Paragraph>           
          <Paragraph >             
            Department of Civil and Environmental Engineering,
          </Paragraph>
          <Paragraph >           
            University of Alberta, AB
          </Paragraph> 
        </div>
        
      </AppLayout>

      
    );
  }
}

// export default withRouter(AppNavigationBar);
export default About;