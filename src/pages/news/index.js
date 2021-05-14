import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import AppLayout from '../layout';
import { Carousel } from 'antd';
import { Divider } from 'antd';

const { Paragraph, Text,Title } = Typography;
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

          <Divider>
            <Title level={4}>NEWS</Title>        
          </Divider>
          <Title level={5}>Best Paper at MAS 2018</Title>

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

          <Divider>
            <Title level={4}>AWARDS</Title>        
          </Divider>

          <Title level={5}>Alberta Graduate Excellence Scholarship ($12,000)...................................................................................2020</Title>
          <Title level={5}>Ledcor Graduate Scholarship in Construction Engineering and Management ($2,500)...................2020</Title>
          <Title level={5}>Queen Elizabeth II Graduate Scholarship – Doctoral Level ($7,500).......................................................2018</Title>
          <Title level={5}>Outstanding Undergraduate Student Award ($4,000)...............................................................................2008</Title>
          <Title level={5}>Tianjin University Outstanding Student Award ($1,000).............................................................2007 & 2008</Title>

          {/* <Carousel effect="fade">
            <div>
              <h3>1 Lingzi Wu and colleagues awarded Best Paper Award at the 17th International 
                    Conference on Modeling and Applied Simulation.
              </h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Carousel> */}

        </div>
        
      </AppLayout>

      
    );
  }
}


export default News;