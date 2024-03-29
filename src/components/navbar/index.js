import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./navbar.css";
import { Menu } from "antd";
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
			case "TEAM":
				this.props.history.push("/team");
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
			<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="center">
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
				<Menu.Item key="TEAM">TEAM</Menu.Item>
			</Menu>
		);
		
	}
}

export default withRouter(AppNavigationBar);
// export default AppNavigationBar;
