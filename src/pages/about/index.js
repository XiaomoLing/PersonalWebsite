import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Menu } from "antd";
import { Typography } from "antd";
import { Row, Col } from "antd";
import AppLayout from "../layout";
import selfie from "./UW_1391_Edit.JPG"
// import selfie from "./IMG_8880_R3.jpg"

const { Paragraph, Text, Title } = Typography;

const { SubMenu } = Menu;
// const selfie = require('/images/IMG_8880_R3.jpg');

function About() {
	const { innerWidth: width, innerHeight: height } = window;
	return (
		<AppLayout>
			<div
				style={{
					display: "inline",
				}}
			>
				<Title
					level={2}
					style={{
						textAlign: "center",
						paddingTop: "25px",
						paddingBottom: "25px",
					}}
				>
					CIRCUIT Lab | LINGZI WU
				</Title>
				<Paragraph>
				 Welcome to the <Text strong>CIRCUIT</Text> Lab (<Text strong><Text underline>C</Text></Text>ritical <Text strong><Text underline>I</Text></Text>nfrastructure <Text strong><Text underline>R</Text></Text>esilience and <Text strong><Text underline>C</Text></Text>onstruction <Text strong><Text underline>U</Text></Text>nder <Text strong><Text underline>I</Text></Text>nnovation & <Text strong><Text underline>T</Text></Text>echnology), 
				 which explores the intersection
				 of intelligent construction, infrastructure resilience, and community-centered 
				 sustainable urban systems. The lab is committed to addressing complex challenges within 
				 the built environment and is guided by a mission to promote meaningful and lasting 
				 transformations in society through scholarship, teaching, and service.
				</Paragraph>
				{width < 768 ? (
					<>
						<Row justify="space-around">
							<Col>
								<img
									alt="myself"
									width={350}
									src={selfie}
								/>
								<Paragraph></Paragraph>

								<Paragraph>
									<Title level={3}>Lingzi Wu, PhD, PEng, LEED GA</Title>
									<Title level={4}>
										Innovative Problem Solver | Researcher | Educator
									</Title>
									<Text underline>
										<a href="lingwu@uw.edu">lingwu@uw.edu</a>
									</Text><br></br>
								</Paragraph>

								<Paragraph>
								{/* <Title level={5}>Assistant Professor</Title> */}
									<Text strong>Assistant Professor</Text>  <br></br>  
									Department of Construction Management<br></br>

									<Text strong>Adjunct Assistant Professor</Text>  <br></br>  
									Department of Civil and Environmental Engineering<br></br>
									<Text strong>Affiliate Faculty</Text>  <br></br>  
									Interdisciplinary PhD Program in Urban Design and Planning <br></br>
									
									University of Washington
								</Paragraph>

								<Paragraph>
								{/* <Title level={5}>Adjunct Professor</Title> */}
									<Text strong>Adjunct Professor</Text>  <br></br>  
									Department of Civil and Environmental Engineering<br></br>
									University of Alberta, CA
								</Paragraph>

							</Col>
						</Row>
						<Row justify="space-around">
							<Col>
								<Title level={4} style={{ textAlign: "center" }}>
									BRIEF BIOGRAPHY
								</Title>

								<Paragraph>
									I am the founder and director of the <Text strong>CIRCUIT</Text> Lab (<Text strong><Text underline>C</Text></Text>ritical <Text strong><Text underline>I</Text></Text>nfrastructure <Text strong><Text underline>R</Text></Text>esilience and <Text strong><Text underline>C</Text></Text>onstruction <Text strong><Text underline>U</Text></Text>nder <Text strong><Text underline>I</Text></Text>nnovation & <Text strong><Text underline>T</Text></Text>echnology).
									I serve as an Assistant Professor in the Department of Construction
									Management (CM) at the University of Washington (UW). Prior to joining
									UW in September 2022, I served as a postdoctoral fellow in the
									Department of Civil and Environmental Engineering at University of
									Alberta, where I received my MSc and PhD in Construction Engineering
									and Management in 2013 and 2020 respectively.
								</Paragraph>
								<Paragraph>
									My passion for research extends into my everyday life 
									and is embedded in my philosophy of living to learn and learning to live. 
									With a curious mind that drives me to discover new ideas and technologies, 
									I am constantly challenging the status quo to improve myself and the world 
									around me. Through developing state-of-the-art technologies and interdisciplinary 
									methods, my research aims to solve practical challenges and advance the body 
									of knowledge in engineering and management fields, making a significant and 
									visible impact on society and people's daily lives.
								</Paragraph>
								<Paragraph>
									As an educator, I am dedicated to creating a stimulating, inclusive, and 
									equitable learning environment for all my students. My goal is to create a 
									positive, substantial, and sustained influence on how my students think, act, 
									and feel. Teaching and mentoring are a true passion of mine, and the greatest 
									achievement I can imagine is to lhelp my students achieve their full potential.
								</Paragraph>

								<Paragraph>
									My research expertise and teaching interests include: project life
									cycle management, infrastructure resilience, construction informatics, data science,
									machine learning, artificial intelligence, simulation and automation.
								</Paragraph>
							</Col>
						</Row>
					</>
				) : (
					<Row justify="space-around">
						<Col
							span={10}
							style={{
								marginLeft: "5%",
							}}
						>
							<img
								alt="myself"
								width={350}
								src={selfie}
							/>
							<Paragraph></Paragraph>

							<Paragraph>
								<Title level={3}>Lingzi Wu, PhD, PEng, LEED GA</Title>
								<Title level={4}>
									Innovative Problem Solver | Researcher | Educator
								</Title>
								<Text underline>
									<a href="lingwu@uw.edu">lingwu@uw.edu</a>
								</Text>

							</Paragraph>

							<Paragraph>
								{/* <Title level={5}>Assistant Professor</Title> */}
								<Text strong>Assistant Professor</Text>  <br></br>  
								Department of Construction Management<br></br>

								<Text strong>Adjunct Assistant Professor</Text>  <br></br>  
								Department of Civil and Environmental Engineering<br></br>
								<Text strong>Affiliate Faculty</Text>  <br></br>  
								Interdisciplinary PhD Program in Urban Design and Planning <br></br>
									
								University of Washington
							</Paragraph>

							<Paragraph>
								{/* <Title level={5}>Adjunct Professor</Title> */}
								<Text strong>Adjunct Professor</Text>  <br></br>  
								Department of Civil and Environmental Engineering<br></br>
								University of Alberta, CA
							</Paragraph>

						</Col>

						<Col
							span={10}
							style={{
								marginRight: "5%",
							}}
						>
							<Title level={4} style={{ textAlign: "center" }}>
								BRIEF BIOGRAPHY
							</Title>

							<Paragraph>
									I am the founder and director of the <Text strong>CIRCUIT</Text> Lab (<Text strong><Text underline>C</Text></Text>ritical <Text strong><Text underline>I</Text></Text>nfrastructure <Text strong><Text underline>R</Text></Text>esilience and <Text strong><Text underline>C</Text></Text>onstruction <Text strong><Text underline>U</Text></Text>nder <Text strong><Text underline>I</Text></Text>nnovation & <Text strong><Text underline>T</Text></Text>echnology).
									I serve as an Assistant Professor in the Department of Construction
									Management (CM) at the University of Washington (UW). Prior to joining
									UW in September 2022, I served as a postdoctoral fellow in the
									Department of Civil and Environmental Engineering at University of
									Alberta, where I received my MSc and PhD in Construction Engineering
									and Management in 2013 and 2020 respectively.
							</Paragraph>
							<Paragraph>
									My passion for research extends into my everyday life 
									and is embedded in my philosophy of living to learn and learning to live. 
									With a curious mind that drives me to discover new ideas and technologies, 
									I am constantly challenging the status quo to improve myself and the world 
									around me. Through developing state-of-the-art technologies and interdisciplinary 
									methods, my research aims to solve practical challenges and advance the body 
									of knowledge in engineering and management fields, making a significant and 
									visible impact on society and people's daily lives.
							</Paragraph>
							<Paragraph>
									As an educator, I am dedicated to creating a stimulating, inclusive, and 
									equitable learning environment for all my students. My goal is to create a 
									positive, substantial, and sustained influence on how my students think, act, 
									and feel. Teaching and mentoring are a true passion of mine, and the greatest 
									achievement I can imagine is to lhelp my students achieve their full potential.
							</Paragraph>

							<Paragraph>
									My research expertise and teaching interests include: project life
									cycle management, infrastructure resilience, construction informatics, data science,
									machine learning, artificial intelligence, simulation and automation.
							</Paragraph>
						</Col>
					</Row>
				)}
			</div>
		</AppLayout>
	);
}

export default About;
