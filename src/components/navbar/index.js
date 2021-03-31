import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './navbar.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;

class AppNavigationBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    switch (e.key) {
      case "ABOUT":
        this.props.history.push('/about')
        break;
      case "NEWS":
        this.props.history.push('/')
        break;
      case "PUBLICATIONS":
        this.props.history.push('/')
        break;
      case "PROJECTS":
        this.props.history.push('/')
        break;
      case "TEACHING":
        this.props.history.push('/')
        break;
      // case "OPPORTUNITIES":
      //   this.props.history.push('/')
      //   break;
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
      <div className = "center">
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="ABOUT" >
            ABOUT
          </Menu.Item>
          <Menu.Item key="NEWS" >
            NEWS
          </Menu.Item>
          <Menu.Item key="PUBLICATIONS"  icon={<AppstoreOutlined />}>
            PUBLICATIONS
          </Menu.Item>
          <Menu.Item key="PROJECTS"  icon={<AppstoreOutlined />}>
            PROJECTS
          </Menu.Item>
          <SubMenu key="PROJECTS" icon={<SettingOutlined />} title="PROJECTS">

            <Menu.Item key="IndProject">Industrial Projects</Menu.Item>
            <Menu.Item key="ResProject">Research Projects</Menu.Item>

            {/* <Menu.ItemGroup title="Research Project">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup> */}
          </SubMenu>
          {/* <SubMenu key="ResProject" icon={<SettingOutlined />} title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu> */}
          <Menu.Item key="TEACHING"  >
            TEACHING
          </Menu.Item>

          {/* what is the follow? */}
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </div>
      
    );
  }
}

export default withRouter(AppNavigationBar);
// export default AppNavigationBar;