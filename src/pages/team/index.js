import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./index.css";

import { Typography } from "antd";
import AppLayout from "../layout";
import { Divider } from "antd";
import { Row, Col } from "antd";
const { Paragraph, Text, Title, Link } = Typography;
// import KimiGigi from "./"

const { innerWidth: width, innerHeight: height } = window;
class Team extends React.Component {
	state = {
		current: "mail",
	};

	render() {
		const { current } = this.state;
		return (
			<AppLayout>
				<div
					style={{
						display: "inline",
					}}
				>
					<Divider>
						<Title level={4} style={{ whiteSpace: `${width < 768 ? "normal" : ""}` }}>
							JOIN US TODAY TO MAKE AN IMPACT!
						</Title>
					</Divider>

					<Paragraph>
						The CIRCUIT lab is fueled by a dynamic mission: tackling complex challenges in our built environments and 
						driving meaningful and lasting change in our society. We are at the forefront of <Text strong>smart construction,  
						resilient infrastructure, and sustainable urban systems, </Text>combining cutting-edge technology with forward-thinking solutions. 
						Our work is supported by a diverse range of funding from state and federal agencies, private industries, 
						and foundations, reflecting the broad impact and real-world relevance of our research.
					</Paragraph>


					<Paragraph>
						<Text strong>
							Thank you for your interest in joining our research lab!
						</Text>
					</Paragraph>

					<Paragraph>
						We are always on the lookout for exceptionally bright and eager students
						to join our team. I supervise undergraduate, MSc and PhD students in
						Construction Management, Civil & Environmental Engineering, Urban Design & Planning,
						and Computing Science at both UW and UofA. I am looking for students who are:
						<ul>
							<li>passionate about challenging the status quo;</li>
							<li>problem solver;</li>
							<li>good communicators; and</li>
							<li>independent and critical thinkers.</li>
						</ul>
					</Paragraph>

					<Paragraph>
						Graduate Research Assistant (RA) positions are limited and competitive.
						Students who pursue and receive funding through outside scholarships or
						fellowships greatly increase their likelihood of admission. I keep the
						team moderately sized so that I can work closely with every student in the
						lab.
					</Paragraph>

					<Paragraph>
						If you would like to join our lab, please do the following:
						<ol>
							<li>
								Review our recent work on this website to ensure it aligns with your
								research interests.
							</li>
							<li>
								Review information about these programs (
								<Link
									href="https://cm.be.uw.edu/students/grad-prof-programs/graduate-admission/"
									target="_blank"
								>
									MSc{", "}
								</Link>
								
								<Link
									href="https://urbdp.be.uw.edu/admissions/phd/"
									target="_blank"
								>
									UDP PhD{", "}
								</Link>

								<Link
									href="https://www.ce.washington.edu/future/grad/phd"
									target="_blank"
								>
									CEE PhD{" "}
								</Link>

								and{" "}
								<Link
									href="https://be.uw.edu/academics/phd/admissions-overview/"
									target="_blank"
								>
									BE PhD
								</Link>
								) and be sure you meet all the criteria of any program.
							</li>
							<li>
								Contact Dr. Lingzi Wu by email with:
								<ol>
									<li>
										A subject line of “Prospective Student_Undergrad/MSc/PhD_Firstname
										Lastname”
									</li>
									<li>Your latest CV,</li>
									<li>Your transcript, and</li>
									<li>
										One example of past work (e.g., published/unpublished paper, project,
										report etc.) Please clearly identify your contribution if there are
										multiple authors.
									</li>
								</ol>
							</li>
						</ol>
					</Paragraph>

					<Paragraph>
						Please note that due to the volume of emails, I am generally unable to
						acknowledge receipt.
					</Paragraph>

					<Divider>
						<Title level={4}>CURRENT LAB MEMBER</Title>
					</Divider>


					<Row justify="space-around">

						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							<div className="shiqibg"></div>

							<Paragraph style={{ marginTop: "20px" }}>
								<Title level={5} style={{ textAlign: "center" }}>
									Shiqi Ding |<em> UDP PhD </em>
									<br></br>
									Supervise
								</Title>
							</Paragraph>
						</Col>

						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							{/* <Avatar
								size={250}
								style={{ borderRadius: "20%" }}
								shape="square"
								icon={<UserOutlined />}
							/> */}
							<div className="amirabg"></div>


							<Paragraph style={{ marginTop: "20px" }}>
								<Title level={5} style={{ textAlign: "center" }}>
									Amira Saleh |<em> PhD</em>
									<br></br>
									Co-Supervise (UofA)
								</Title>
							</Paragraph>
						</Col>

						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							<div className="beixuanbg"></div>

							<Paragraph style={{ marginTop: "20px" }}>
								<Title level={5} style={{ textAlign: "center" }}>
									Beixuan Dong |<em> PhD</em>
									<br></br>
									Co-Supervise (UofA)
								</Title>
							</Paragraph>
						</Col>

					</Row>
					
					<Row justify="space-around">
						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							{/* <Avatar
								size={250}
								style={{ borderRadius: "20%" }}
								shape="square"
								icon={<UserOutlined />}
							/> */}
							<div className="karlabg"></div>
							<Paragraph>
								<Title level={5} style={{ textAlign: "center" }}>
								Karla Villarreal |<em> CMMS </em>
								<br></br>
								Supervise								
								</Title>
							</Paragraph>
						</Col>
						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
						<Avatar
								size={250}
								style={{ borderRadius: "20%" }}
								shape="square"
								icon={<UserOutlined />}
						/>
							{/* <div className="xxx"></div> */}
							<Paragraph>
								<Title level={5} style={{ textAlign: "center" }}>
									Yu-Chen Chu |<em> UDP PhD</em>
									<br></br>
									Co-Supervise 
								</Title>
							</Paragraph>

						</Col>

						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							{/* <Avatar
								size={250}
								style={{ borderRadius: "20%" }}
								shape="square"
								icon={<UserOutlined />}
							/> */}

							<div className="seanbg"></div>
							<Paragraph>
								
								<Title level={5} style={{ textAlign: "center" }}>
									Sean Zhao |<em> BE PhD</em>
									<br></br>
									Supervise through a funded research project
								</Title>
							</Paragraph>

						</Col>

					</Row>
					<Row justify="space-around">

						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							<div className="zuofubg"></div>
							<Paragraph style={{}}>
								<Title level={5} style={{ textAlign: "center" }}>
									Zuofu (Chris) Li |<em> Website Developer </em>
								</Title>
							</Paragraph>
						</Col>


						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							<div className="kimigigibg"></div>
							<Paragraph>
								<Title level={5} style={{ textAlign: "center" }}>
									Kimi and Gigi |<em> CIRCUIT Lab Happiness Coordinators </em>
								</Title>
							</Paragraph>
						</Col>
					</Row>
					<Divider>
						<Title level={4}>FORMER STUDENTS</Title>
					</Divider>

					
					
					<Paragraph>
					<Text strong>
							Zachary M. Drennan |<em> MUP</em>
							<br></br>
					</Text>		
					Supervised through a funded research project	
					</Paragraph>

					<Paragraph>
					<Text strong>
							Shaojia Fan |<em> CMMS</em>
							<br></br>
					</Text>		
					Supervised	
					</Paragraph>

					<Paragraph>
					<Text strong>
							Mohamed Elmenshawy |<em> PhD</em>
							<br></br>
					</Text>		
					Co-supervised	
					</Paragraph>

					<Paragraph>
					<Text strong>
							Advik Mehta |<em> CS Undergraduate</em>
							<br></br>
					</Text>		
					Co-supervised	
					</Paragraph>

					<Paragraph>
					<Text strong>
							Falak Sethi |<em> CS Undergraduate</em>
							<br></br>
					</Text>		
					Co-supervised	
					</Paragraph>


					<Paragraph>											
						<Text strong>
							Shaojia Fan and Mingwan Zhang |<em> MLA Students</em>
							<br></br>
						</Text>
						Co-supervised on their MLA Graduate Project
					</Paragraph>						
					<Paragraph>
						<Text strong>
							Elnaz Jafari |<em> MSc</em>
							<br></br>
						</Text>
						Co-supervised
					</Paragraph>					
					
					<Paragraph>
						<Text strong>
							Sean (Xianxiang) Zhao |<em> CMMS</em>
							<br></br>
						</Text>
						Supervised through a funded research project
					</Paragraph>

					<Paragraph>
						<Text strong>
							Xiang Mao |<em> MEng Student</em>
							<br></br>
						</Text>
						Co-supervised
					</Paragraph>

					<Paragraph>
						<Text strong>
							Kunkun Li |<em> MEng Student</em>
							<br></br>
						</Text>
						Co-supervised
					</Paragraph>

					<Paragraph>
						<Text strong>
							Zuofu Li |<em> Undergraduate Research Student</em>
							<br></br>
						</Text>
						Co-supervised
					</Paragraph>

					<Paragraph>
						<Text strong>
							Baoli Feng |<em> Undergraduate Research Student</em>
							<br></br>
						</Text>
						Co-supervised
					</Paragraph>

					<Paragraph>
						<Text strong>
							Alex Barber-Cross |<em> Grade 11</em> <br></br>
						</Text>
						WISEST (Women in Scholarship, Engineering, Science and Technology) Summer
						Research Program (2018)
					</Paragraph>
				</div>
			</AppLayout>
		);
	}
}
export default Team;
