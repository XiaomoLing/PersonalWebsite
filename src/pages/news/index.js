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

const { Paragraph, Text,Title,Link } = Typography;
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
          <Title level={5}>Appointed as an Assistant Specialty Editor in <em>Journal of Construction Engineering and Management</em> -- Mar 2023</Title>

          <Paragraph >
            Lingzi Wu was selected as a as an Assistant Specialty Editor effective March 20, 2023
            in the Project Planning and Design Specialty Area for the ASCE 
            <em> Journal of Construction Engineering and Management </em>(JCEM).
            {/* The announcement can be found <Link href="https://www.deansequityandinclusioninitiative.com/" target="_blank">
            here</Link>. */}
          </Paragraph>
          
          <Title level={5}>Appointed as an Adjunct Professor in Department of Civil and Environmental Engineering at University of Alberta -- Jan 2023</Title>

          <Title level={5}>Fellow for the 2022 Deans Equity and Inclusion Initiative (DEII) Cohort -- July, 2022</Title>

          <Paragraph >
            Lingzi Wu was nominated and selected as a fellow for the 2022 Deans Equity 
            and Inclusion Initiative (DEII) Cohort. DEII seek to nurture a diverse 
            population of emerging scholars teaching and researching the built environment 
            to advance socio-ecological and spatial justice, equity, and inclusion. 
            More information can be found <Link href="https://www.deansequityandinclusioninitiative.com/" target="_blank">
            here</Link>.
          </Paragraph>

          <Title level={5}>College of Built Environment (UW) Welcomes New Cohort of Faculty -- March, 2022</Title>
          <Paragraph >
            Lingzi Wu will join this esteemed cohort of new interdisciplinary faculty to the 
            College of Built environment at the University of Washington. 
            Read about each of the full-time tenure-track faculty <Link href="https://be.uw.edu/blog/2022/04/13/cbe-welcomes-new-cohort-of-faculty/?mkt_tok=MTMxLUFRTy0yMjUAAAGDwrv2_fFh5AO-zCOH415AqI64BFS__bD2pdo1DMMOwSKnmPxnY4jOg1UYVcZ9JGDWzaxJeMz5met-tl1_NVgDr16LGapgrpIQS-3Qt4_KObfQhjc" target="_blank"> 
            here</Link>.   
          </Paragraph>      
 
          <Title level={5}>AI4Society Grants Awarded –- Feb, 2022</Title>
          <Paragraph >
            The <Link href="https://ai4society.ca/" target="_blank">
            AI4Society</Link> (University of Alberta) announced that Simaan AbouRizk, 
            distinguished university professor of Construction Engineering and Management, 
            Lingzi Wu, postdoctoral fellow in the Department of Construction Engineering 
            and Management, and Ildar Akhmetov, Assistant Lecturer in the Department of 
            Computing Science, have received a $10,080 award to study construction supply 
            chain analysis on forecasting the demand for small equipment, tools, and consumables 
            for industrial construction projects <Link href="https://forum.ai4society.ca/index.php/P-Apps30:Main" target="_blank">
            (P-Apps30)</Link>.

          </Paragraph>


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
            The paper proposes a hybrid linear regression and simulation modeling 
            approach for uncovering patterns in historical equipment resale data 
            and to use these data, in consideration of human behavior, to simulation 
            a typical North American equipment auction.
          </Paragraph>

          <Divider>
            <Title level={4}>AWARDS</Title>        
          </Divider>

          <Title level={5}>ASCE Outstanding Reviewer, <em>Journal of Construction Engineering and Management</em>, 2021 & 2022</Title>        
          <Title level={5}>Alberta Graduate Excellence Scholarship ($12,000), 2020</Title>
          <Title level={5}>Ledcor Graduate Scholarship in Construction Engineering and Management ($2,500), 2020</Title>
          <Title level={5}>Queen Elizabeth II Graduate Scholarship – Doctoral Level ($7,500), 2018</Title>
          <Title level={5}>Outstanding Undergraduate Student Award ($4,000), 2008</Title>
          <Title level={5}>Tianjin University Outstanding Student Award ($1,000), 2007 & 2008</Title>

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