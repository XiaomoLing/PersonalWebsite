import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
const { Paragraph, Text } = Typography;
import AppLayout from '../layout';

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
          <Paragraph >
            Lingzi Wu, PhD, EIT
          </Paragraph>
          <Paragraph >
            Postdoctoral Fellow,
          </Paragraph>

          <Paragraph >           
            lingzi1@ualberta.ca,
          </Paragraph>           
          <Paragraph >            
            Hole School of Construction, 
            Department of Civil and Environmental Engineering,
            University of Alberta, AB
          </Paragraph>

        </div>
        
      </AppLayout>

      
    );
  }
}

// export default withRouter(AppNavigationBar);
export default About;