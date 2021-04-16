import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import AppLayout from '../layout';
import { Divider } from 'antd';

const { Paragraph, Text } = Typography;
const { Title } = Typography;
const { SubMenu } = Menu;

class Teaching extends React.Component {
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
          

          <Title level={1}>Teaching Philosophy</Title>

          <Paragraph >
            When I look back, over 10 years after completing my undergraduate degree, I can hardly remember 
            any formulas that I learned over those 4 years. One message, however, survived—“I don’t expect you 
            to memorize this formula, but I hope when you run into problems, you know what tool solves it and 
            where to find it”. It was one of the two things I remembered for that entire course—this candid message 
            and the course title Field Theory and Complex Functions. Yet this simple message has since motivated me 
            to overcome technical challenges and witnessed me growing into an excellent scholar, instructor, and leader. 
          </Paragraph>
          <Paragraph >
            Realizing this—the fact that I don’t remember much taught in undergraduate—is liberating, and alarming 
            at the same time, as it led to a series of questions:
          </Paragraph>
        
          <Title level={3}>What role do I play as an educator? </Title>
          <Paragraph >
            Early in my education, I became aware of various teaching approaches, particularly their effects on my 
            learning outcomes. In recent years, as I started teaching and coaching (both in higher education and in
            skiing) I became familiar with different learning preferences (visual, aural, verbal, physical, etc.).
            Most importantly, I learned to monitor class dynamics, evaluate students’ learning outcome through 
            assorted formative assessments, and carry out reflective and reflexive practices in my class. As such, 
            I slowly but deliberately acquired my teaching toolbox—a variety of active learning exercises and teaching 
            techniques (such as using graphs, charts, and videos, moderating in-class discussions, organizing student 
            presentations, etc.)—to enrich students’ learning experience.  
          </Paragraph>     

          <Paragraph > 
            Nevertheless, I believe my role as an educator is more than assisting students to succeed in a course 
            or a program, rather it is to set them up to thrive in the rest of their life journeys. As an old Chinese 
            saying goes, “Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a 
            lifetime.” Beyond engaging my students through diverse learning activities, I have been focusing my 
            teaching on designing sustained, significant and positive learning experiences through 1) motivating 
            self-directed learning, 2) nurturing self-directed learning skills, and 3) encouraging inclusivity and 
            diversity. Upon graduation, I hope my students will not only obtain a set of hard skills as a trained 
            engineer, but also a set of soft skills that will support them navigating through any storms their future 
            life imposes. 
          </Paragraph> 

          <Title level={5}>Motivation to learn </Title>        
          <Paragraph >
            A journey of a thousand miles begins with one single step—motivation. Without it, any journey remains 
            only a dream. My own experience, both as a student and as an instructor, suggests that lack of motivation
            is often attributed to mismatches of learning and teaching goals. As an instructor, I strive to clearly 
            convey, in both my syllabus and in my class, my teaching philosophy, course objectives and expected learning 
            outcomes. By relating these learning outcomes to their daily life, to the world, and especially to their 
            future careers, I expect to develop long-lasting and self-sustaining motivation in my students. 
          </Paragraph>

          <Paragraph >
            Additionally, I am fully aware that “every student is a person who is becoming”  —they each have their own personal and career goals. I will maintain honest two-way communication with all students and create an open and positive learning environment, where they feel comfortable to ask questions and seek help. I will actively listen to their concerns and needs, in adjusting my courses content to accommodate a broader interest. By building trust and mutual understanding, I expect to encourage inquiring minds, connect with students with diverse backgrounds and various career goals, thus achieving this critical first step—motivation to learn. 
          </Paragraph>

          <Title level={5}>Ability to learn: soft and hard skills  </Title>        
          <Paragraph >
            Today, any factual content is easily and near-instantaneously accessible to students via diverse devices. 
            Rapidly changing technology and society challenge educators to focus on fostering a set of soft skills 
            including life-long learning, interpersonal skills, ethics, and integrity, that will support our students 
            to continue their “thousand-mile journeys” with confidence after graduation. 
          </Paragraph>           
          <Paragraph >         
            First, I will continue to organize my lecture materials in a logical and systematic manner that focuses 
            on non-obvious linkages and hidden principles beneath the scattered knowledge areas—demonstrating how to 
            gather meaningful understanding from available factual content. Additionally, I will innovate in how I 
            deliver lectures, conduct assessments, and develop courses, aiming at nurturing critical soft skills through 
            the training of hard skills. For instance, developing group projects to encourage collaborative work; 
            designing open-book exams to assess problem-solving skills; bringing in peer review of assignments to train 
            critical thinking skills; and introducing workshops where students can practice their presentation skills 
            through teaching each other on their chosen/assigned topic—as the Latin principle Docendo discimus: “The 
            best way to learn is to teach”. 
          </Paragraph>

          <Title level={5}>Diversity and inclusivity  </Title>        
          <Paragraph >
            I was the black sheep growing up. Conscious of how different I was has made me respect and appreciate the 
            uniqueness of everyone around me. Further, being a ski instructor in a world-class ski resort for the past 
            3 years has trained me to quickly recognize each student’s strengths and weaknesses, assess their learning 
            curves, and develop specific lesson plans to assist them to achieve their personal goals. As a mentor and 
            leader, I aim at seeing everyone as who they are beneath their appearance and helping them realize their 
            potentials.
            During my 5 years working in the construction industry, I heard numerous empty rhetoric about equity, 
            inclusion, and diversity, while I witnessed and personally experienced the frustration of a glass ceiling. 
            This experience deeply bothered me and urged me back to the higher education system, where I believe a 
            change can truly happen. I will watch out for discursive and systemic barriers to equity and inclusion in 
            the teaching environments, and use them as teaching moments through my practice.
          </Paragraph>    

          <Title level={3}>What role does higher education play in our society?  </Title>
          <Paragraph >
            More than simply assisting in the aggregation, development, and sharing of knowledge, I believe higher education plays a significant role in a democratic society: in educating informed and responsible citizens, thus ensuring a robust democracy. As one component of the higher education system, my influence on my students starts from setting a strong and positive example. To train my students to be accountable, I will be candid and deliver reliably; to cultivate a lifelong learning habit, I will demonstrate my dedication through continuous professional development activities; to encourage inclusivity and diversity, I am committed to helping them find their own identities and expressions of self and voices.  

          </Paragraph>
          <Title level={3}>Conclusion</Title>

          <Paragraph >
            Like any skill, it takes practices and deliberate effort to achieve excellence. My teaching and mentoring, like my personality, reflect a passion for lifelong learning. I look forward to overcoming challenges and achieving excellence as I pursue my academic career. 
          </Paragraph>

          <Divider> </Divider>
          <Title level={1}>Teaching & Mentoring </Title>
          <Title level={3}>Guest Lecturer </Title>
          <Paragraph >

            Program Evaluation and Review Technique  (Mar 2021) <br></br>
            Introduction to Technology-Based Startups  (Mar 2021 & Nov 2020) <br></br>
            Construction Drawings and Specifications   (Feb 2021) <br></br>
            Assessing Technology and Market Risk Associated with a Technology-Based Startup   (Aug 2020)<br></br>
            Customer Discovery Process for Technology-Based Startups       (Jul 2020) <br></br>
            Introduction to Project Management              (Apr 2021 & May 2020) <br></br>
            CIV E 606 Design and Analysis of Construction Operation       (Apr 2020 ) <br></br>
            CIV E 303 Construction Project Management        (Mar 2018) <br></br>

          </Paragraph>
          <Title level={3}>Teaching Assistant </Title>
          <Paragraph >
            CIV E 606 Design and Analysis of Construction Operation       (2019 Winter) <br></br>
            CIV E 303 Project Management       (2018 Winter)
          </Paragraph>

          <Title level={3}>Coaching </Title>
          <Title level={5}>Ski Instructor </Title>
          <Paragraph >
            Part-time Ski instructor at Banff Sunshine Village Ski Resort    (2018 to Current) 
          </Paragraph>

          <Title level={3}>Mentoring</Title>
          <Title level={5}>Mentor for Graduate Research Students    (Current)    </Title>

          <Title level={5}>Supervisor for Undergraduate Research Students    (2019)    </Title>
          <Paragraph >
            Students: Zuofu Li*, and Baoli Feng* <br></br>
             * underrepresented populations 
          </Paragraph>   
          <Title level={5}>Supervisor for WISEST (Women in Scholarship, Engineering, Science and Technology) Summer Research Program   (2018) </Title>
          <Paragraph >
            Students: Alex Barber-Cross 
          </Paragraph>             

        </div>
        
      </AppLayout>

      
    );
  }
}


export default Teaching;