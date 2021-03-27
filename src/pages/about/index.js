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

  handleClick = e => {
    switch (e.key) {
      case "ABOUT":
        this.props.history.push('/about')
        break;
      case "food":
        this.props.history.push('/food')
        break;
      default:
        this.props.history.push('/')
        break;
    }

    // console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      // ABOUT
      // NEWS
      // PUBLICATIONS
      // PROJECTS
      // TEACHING
      // PEOPLE
      // OPPORTUNITIES
      <AppLayout>
        <Paragraph >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>
        <Paragraph >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>
        <Paragraph >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>
        <Paragraph >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </AppLayout>

      
    );
  }
}

// export default withRouter(AppNavigationBar);
export default About;