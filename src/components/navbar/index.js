import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./navbar.css";
import { Menu } from "antd";
import {
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const { SubMenu } = Menu;

class AppNavigationBar extends React.Component {
	state = {
		current: "mail",
	};

	handleClick = (e) => {
		switch (e.key) {
			case "ABOUT":
				this.props.history.push("/about");
				break;
			case "NEWS":
				this.props.history.push("/news");
				break;
			case "PUBLICATIONS":
				this.props.history.push("/publications");
				break;
			case "TEACHING":
				this.props.history.push("/teaching");
				break;
			case "IndProject":
				this.props.history.push("/projects#Industrial-Projects");
				break;
			case "ResProject":
				this.props.history.push("/projects#Research-Projects");
				break;
			default:
				this.props.history.push("/");
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
			<div className="center">
				<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
					<Menu.Item key="ABOUT">ABOUT</Menu.Item>
					<Menu.Item key="NEWS">NEWS</Menu.Item>
					<Menu.Item key="PUBLICATIONS" >
						PUBLICATIONS
					</Menu.Item>
					<SubMenu key="PROJECTS"  title="PROJECTS">
						<Menu.Item key="ResProject">
							<Link to="/projects#Research-Projects">Research Projects</Link>
						</Menu.Item>
						<Menu.Item key="IndProject">
							<Link to="/projects#Industrial-Projects">Industrial Projects</Link>
						</Menu.Item>
					</SubMenu>
					<Menu.Item key="TEACHING">TEACHING</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default withRouter(AppNavigationBar);
// export default AppNavigationBar;
