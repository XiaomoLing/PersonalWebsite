import React from "react";
import { Layout } from "antd";
import AppNavigationBar from "../components/navbar";
const { Header, Footer, Sider, Content } = Layout;
const { innerWidth: width, innerHeight: height } = window;

console.log("width", width);
const layoutStyle = {
	minHeight: "100vh",
	maxWidth: "100vw",
};
const contentStyle = {
	display: "flex",
	padding: `${width < 768 ? "0px 20px" : "0px 150px"}`,
	justifyContent: "center",
	backgroundColor: "AliceBlue",
	height: "100%",
};
//, LightCyan, MintCream

/**
 * Layout component used to generate header and footer component
 */
function AppLayout({ children, style }) {
	return (
		<Layout style={layoutStyle}>
			<Header
				style={{
					backgroundColor: "white",
				}}
			>
				<AppNavigationBar></AppNavigationBar>
			</Header>
			<Content style={{ ...contentStyle, ...style }}>{children}</Content>
			<Footer
				style={{
					backgroundColor: "white", // rgb(51, 0, 111)
					minHeight: "8vh",
					padding: "0",
					display: "flex",
					justifyContent: "center",
					paddingTop: "20px",
					paddingBottom: "20px",
				}}
			>
				<img
					alt="footer"
					style={{
						maxWidth: "600px",
						width: "90vw",
					}}
					src={`${process.env.PUBLIC_URL}/images/UW_Left_Purple_RGB.png`}
				/>
			</Footer>
		</Layout>
	);
}

export default AppLayout;
