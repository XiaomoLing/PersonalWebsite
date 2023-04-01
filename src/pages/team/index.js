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
						<Text strong>
							Thank you for your interest in joining our research group!
						</Text>
					</Paragraph>

					<Paragraph>
						We are always on the lookout for exceptionally bright and eager students
						to join our team. I supervise undergraduate, MASc and PhD students in
						Construction Management at UW. I am looking for students who are:
						<ul>
							<li>passionate about challenging the status quo;</li>
							<li>problem solver;</li>
							<li>good communicators; and</li>
							<li>independent and critical thinkers.</li>
						</ul>
					</Paragraph>

					<Paragraph>
						Graduate Research Assistant (GRA) positions are limited and competitive.
						Students who pursue and receive funding through outside scholarships or
						fellowships greatly increase their likelihood of admission. I keep the
						team moderately sized so that I can work closely with every student in the
						group.
					</Paragraph>

					<Paragraph>
						If you would like to join our team, please do the following:
						<ol>
							<li>
								Review our recent work on this website to ensure it aligns with your
								research interests.
							</li>
							<li>
								Review information about the programs (
								<Link
									href="https://cm.be.uw.edu/students/grad-prof-programs/graduate-admission/"
									target="_blank"
								>
									MSc{" "}
								</Link>
								and{" "}
								<Link
									href="https://be.uw.edu/academics/phd/admissions-overview/"
									target="_blank"
								>
									BE Ph.D
								</Link>
								) and be sure you meet all the criteria.
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
						<Title level={4}>TEAM MEMBER</Title>
					</Divider>

					<Row justify="space-around">
						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							<div className="MiriamCcarita"></div>

							<Paragraph style={{}}>
								<Title level={5} style={{ textAlign: "center" }}>
									Miriam Ccarita Cruz |<em> MSc </em>
									<br></br>
									Supervised
								</Title>
							</Paragraph>
							{/* <div className="seanZhao"></div>
							<Paragraph style={{ marginTop: "20px" }}>
								<Title level={5} style={{ textAlign: "center" }}>
									Sean Zhao |<em> MSc</em>
									<br></br>
									co-supervised
								</Title>
							</Paragraph> */}
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

							<Paragraph style={{ marginTop: "20px" }}>
								<Title level={5} style={{ textAlign: "center" }}>
									Amanda Worthy |<em> PhD</em>
									<br></br>
									Independent study advised
								</Title>
							</Paragraph>
						</Col>

						<Col
							xl={8}
							md={12}
							xs={24}
							style={{ justifyContent: "center", display: "grid" }}
						>
							<div className="mingwanbg"></div>
							<Paragraph style={{}}>
								<Title level={5} style={{ textAlign: "center" }}>
									Mingwan Zhang |<em> MLA </em>
									<br></br>
									Co-supervised
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
							<div className="shaojiabg"></div>
							<Paragraph>
								<Title level={5} style={{ textAlign: "center" }}>
									Shaojia Fan |<em> MLA</em>
									<br></br>
									Co-supervised
								</Title>
							</Paragraph>

						</Col>

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
									Kimi and Gigi |<em> Happiness Coordinators </em>
								</Title>
							</Paragraph>
						</Col>
					</Row>

					<Divider>
						<Title level={4}>FORMER STUDENTS</Title>
					</Divider>

					
					<Paragraph>
						<Text strong>
							Elnaz Jafari |<em> MSc Student</em>
							<br></br>
						</Text>
						co-supervised
					</Paragraph>					
					
					<Paragraph>
						<Text strong>
							Sean (Xianxiang) Zhao |<em> MSc Student</em>
							<br></br>
						</Text>
						Supervised through a funded research project
					</Paragraph>

					<Paragraph>
						<Text strong>
							Xiang Mao |<em> MEng Student</em>
							<br></br>
						</Text>
						co-supervised
					</Paragraph>

					<Paragraph>
						<Text strong>
							Kunkun Li |<em> MEng Student</em>
							<br></br>
						</Text>
						co-supervised
					</Paragraph>

					<Paragraph>
						<Text strong>
							Zuofu Li |<em> Undergraduate Research Student</em>
							<br></br>
						</Text>
						co-supervised
					</Paragraph>

					<Paragraph>
						<Text strong>
							Baoli Feng |<em> Undergraduate Research Student</em>
							<br></br>
						</Text>
						co-supervised
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
