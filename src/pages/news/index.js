import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
const { Paragraph, Text,Title } = Typography;
import AppLayout from '../layout';

const { SubMenu } = Menu;

class News extends React.Component {
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
          
          <Title level={3}>Best Paper at MAS 2018</Title>

          <Paragraph >
            <Text strong>
            Lingzi Wu and colleagues awarded Best Paper Award at the 17th International 
            Conference on Modeling and Applied Simulation.
            </Text>
          </Paragraph>

          <Paragraph >
            Congratulations to Lingzi Wu, Mostafa Ali, Estacio Pereira, 
            and Simaan AbouRizk for receiving a Best Paper Award for their 
            paper entitled "Linear Regression and Agent-Based Modeling Approach 
            for Equipment Market Value Prediction" from the 17th International 
            Conference on Modeling and Applied Simulation in Budapest, Hungary!
          </Paragraph>

          <Paragraph >
            The paper proposes a hybrid linear regression and simulation modeling 
            approach for uncovering patterns in historical equipment resale data 
            and to use these data, in consideration of human behavior, to simulation 
            a typical North American equipment auction.
          </Paragraph>
        </div>
        
      </AppLayout>

      
    );
  }
}


export default News;