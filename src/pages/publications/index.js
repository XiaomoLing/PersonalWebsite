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


const { Paragraph, Text, Link } = Typography;
const { Title } = Typography;
const { SubMenu } = Menu;

class Publications extends React.Component {
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
          
          <Divider> <Title level={4}>JOURNAL PAPERS</Title></Divider>
          <Paragraph >
              ElMenshawy M.*, <Text strong>Wu, L.</Text>         
              , Hermann U., Zubick T., Mohamed, Y., & AbouRizk, S., (202x) "Framework for automated planning 
              and scheduling in industrial construction projects using natural language processing, machine learning, 
              and data mining.” <em>Journal of Construction Engineering and Management</em>, 
              [revision and resubmission]. 
              {/* <Link href="https://doi.org/10.1061/JCCEE5.CPENG-6042" target="_blank">
              https://doi.org/10.1061/JCCEE5.CPENG-6042 
              </Link> */}
          </Paragraph> 

          <Paragraph >
              ElMenshawy M.*, <Text strong>Wu, L.</Text>         
              , Zubick T., Mohamed, Y., & AbouRizk, S., (202x) "Ontology for Industrial Construction Projects - 
              An Advanced Work Packaging Perspective.” <em>Journal of Construction Engineering and Management</em>, 
              [revision and resubmission]. 
              {/* <Link href="https://doi.org/10.1061/JCCEE5.CPENG-6042" target="_blank">
              https://doi.org/10.1061/JCCEE5.CPENG-6042 
              </Link> */}
          </Paragraph> 

          <Paragraph >
            <Text strong>Wu, L.</Text>         
              , & Gue, B., (202x) “Do Winter Conditions Affect Construction Labor Productivity? A Case 
              Study from the Northern Climate.” <em>Journal of Construction Engineering and Management</em>, 
              [under review]. 
              {/* <Link href="https://doi.org/10.1061/(ASCE)CP.1943-5487.0001001" target="_blank">
              https://doi.org/10.1061/(ASCE)CP.1943-5487.0001001
              </Link> */}          
          </Paragraph>   
          
          <Paragraph >
              Dong, B.*, Ding, S.*,  <Text strong>Wu, L.</Text>         
              , & Li, X., (202x) "Short-term natural disaster impacts on transportation infrastructure: 
              A Systematic Review.” <em>Reliability Engineering & System Safety</em>, 
              [under review] 
              {/* <Link href="https://doi.org/10.1061/JCCEE5.CPENG-6042" target="_blank">
              https://doi.org/10.1061/JCCEE5.CPENG-6042 
              </Link> */}
          </Paragraph>   

          <Paragraph >
              Nikesha, L., <Text strong>Wu, L.</Text>         
              , & Darko, A., (202x) "APartial least squares structural equation modeling of challenges to 
              existing residential building net zero carbon retrofitting.” <em>Journal of Construction Engineering and Management</em>, 
              [Revision Feb 2025]. 
              {/* <Link href="https://doi.org/10.1061/JCCEE5.CPENG-6042" target="_blank">
              https://doi.org/10.1061/JCCEE5.CPENG-6042 
              </Link> */}
          </Paragraph>                     
          
          <Paragraph >
              Ding S.*, & <Text strong>Wu, L.</Text>   (2025)      
              "Disparities in electric vehicle charging infrastructure distribution: a socio-spatial clustering study 
              in King County, Washington.” <em>Sustainable Cities and Society</em>, 106193. <Link href="https://doi.org/10.1016/j.scs.2025.106193" target="_blank">
              https://doi.org/10.1016/j.scs.2025.106193 </Link>
          </Paragraph>  

          <Paragraph >
              ElMenshawy M.*, <Text strong>Wu, L.</Text>         
              , Gue, B., & AbouRizk, S., (2024) "Automating the fabrication shop scheduling for modularized industrial construction 
              projects using reinforcement learning.” <em>Journal of Computing in Civil Engineering</em>, 
              39(3), 04025013. <Link href="https://doi.org/10.1061/JCCEE5.CPENG-6042" target="_blank">
              https://doi.org/10.1061/JCCEE5.CPENG-6042 
              </Link>
          </Paragraph>   

          <Paragraph >
            <Text strong>Wu, L.</Text>         
              , Mohamed, E., Jafari, P., & AbouRizk, S., (2023) "Machine learning-based Bayesian framework 
              for interval estimate of Unsafe-Event Prediction in Construction.” <em>Journal of Construction Engineering 
                and Management</em>, 149(11), 04023118. <Link href="https://doi.org/10.1061/JCEMD4.COENG-13549" target="_blank">
                https://doi.org/10.1061/JCEMD4.COENG-13549
              </Link>
          </Paragraph>   
          
          <Paragraph >
            <Text strong>Wu, L.</Text>         
              , Li, Z., & AbouRizk, S., (2022) “Automating common data integration for improved data-driven 
              decision-support in industrial construction.” <em>Journal of Computing in Civil Engineering</em>, 36(2), 04021037. <Link href="https://doi.org/10.1061/(ASCE)CP.1943-5487.0001001" target="_blank">
              https://doi.org/10.1061/(ASCE)CP.1943-5487.0001001
              </Link>
              
          </Paragraph>   

          <Paragraph >
            <Text strong>Wu, L.</Text>
            , Ji, W., Feng, B., Hermann U., & AbouRizk, S. (2021) “Intelligent Data-Driven Approach for Enhancing 
            Preliminary Resource Planning in Industrial Construction.” <em>Automation in Construction</em>, 130, 103846. <Link href="https://doi.org/10.1016/j.autcon.2021.103846" target="_blank">
            https://doi.org/10.1016/j.autcon.2021.103846
            </Link>
          </Paragraph>
          <em></em>
{/*           <Paragraph >
            Ali, M., Mohamed, E., 
            <Text strong>Wu, L.</Text>,
             & AbouRizk, S. “A generic framework for simulation-based optimization using HLA.” 
             <em>Annals of Operations Research</em>, [Under Review]
          </Paragraph> */}

          <Paragraph >
            <Text strong>Wu, L.</Text>,
             & AbouRizk, S. (2021) “Numerical-based approach for updating simulation input in real time” 
             <em>Journal of Computing in Civil Engineering</em>, 35(2), 04020067. <Link href="https://doi.org/10.1061/(ASCE)CP.1943-5487.0000948" target="_blank">
              https://doi.org/10.1061/(ASCE)CP.1943-5487.0000948
             </Link>
          </Paragraph>

          <Paragraph >
             <Text strong>Wu, L.</Text>,
             Ji, W., & AbouRizk, S. (2020). “Bayesian inference with Markov chain Monte Carlo–based numerical 
             approach for input model updating.” <em>Journal of Computing in Civil Engineering</em>, 34(1), 04019043. <Link href="https://doi.org/10.1061/(ASCE)CP.1943-5487.0000862" target="_blank">
              https://doi.org/10.1061/(ASCE)CP.1943-5487.0000862
             </Link>                       
          </Paragraph>

          <Paragraph >
            Pereira, E., Ali, M.,
            <Text strong> Wu, L.</Text>,
             & AbouRizk, S. (2019). “Distributed simulation-based analytics approach for enhancing safety 
             management systems in industrial construction” <em>Journal of Construction Engineering and Management</em> , 
             146(1), 04019091. <Link href="https://doi.org/10.1061/(ASCE)CO.1943-7862.0001732" target="_blank">
                https://doi.org/10.1061/(ASCE)CO.1943-7862.0001732
             </Link>
          </Paragraph>

          <Divider> <Title level={4}>CONFERENCE PAPERS</Title></Divider>

          <Paragraph >
              Dong, B.*, Zhou, C.*, Gue, B., Li, X., & <Text strong>Wu, L.</Text>, (2025)
              "Impacts identification of supplier reliability on project duration in heavy industrial construction supply chain using discrete event simulation"
              Joint CSCE Construction Specialty - CRC Conference 2025, July 28-31, 2025, Montreal, CA
             {/* <em>Proceedings of the 2022 Winter Simulation Conference</em>, 2409-2420. <Link href="https://doi.org/10.1109/WSC57314.2022.10015329" target="_blank">
             https://doi.org/10.1109/WSC57314.2022.10015329  */}
             {/* </Link>  */}
          </Paragraph>

          <Paragraph >
              Ding, S.*, & <Text strong>Wu, L.</Text>, (2025)
              “Analyzing public electric vehicle charging distribution and urban socio-spatial characteristics using geographically weighted machine learning” 
              ASCE International Conference on Computing in Civil Engineering, i3ce 2025, May 11-14, 2025, New Orleans, LA
             {/* <em>Proceedings of the 2022 Winter Simulation Conference</em>, 2409-2420. <Link href="https://doi.org/10.1109/WSC57314.2022.10015329" target="_blank">
             https://doi.org/10.1109/WSC57314.2022.10015329  */}
             {/* </Link>  */}
          </Paragraph>

          <Paragraph >
              Bramono, N.,  <Text strong>Wu, L.</Text>, & Lee, H. W., (2025)
              “Examining the risk-responsiveness levels of the US building codes for healthier and safer building practices.” 
              CIB World Building Congress WBC2025 Conference, May 19-23, 2025, Purdue
             {/* <em>Proceedings of the 2022 Winter Simulation Conference</em>, 2409-2420. <Link href="https://doi.org/10.1109/WSC57314.2022.10015329" target="_blank">
             https://doi.org/10.1109/WSC57314.2022.10015329  */}
             {/* </Link>  */}
          </Paragraph>

          <Paragraph >
              Wang, X., Wang Y., & <Text strong>Wu, L.</Text> , (2025)
              “Engaging high school students in a DOT-funded summer camp to promote transportation engineering majors and careers” 
              2025 ASEE American Society for Engineering Education Annual Conference, June 22-25, Montreal, CA 
              {/* <em>Proceedings of the 2023 Canadian Society of Civil Engineering Annual Conference</em>,  */}
              {/* <Link href="https://doi.org/10.1007/978-3-031-62170-3_17" target="_blank">
              https://doi.org/10.1007/978-3-031-62170-3_17  
              </Link>  */}
          </Paragraph>
          
          <Paragraph >
              Zhao, X.*, Mehta, M.*, Sethi, F.*, Gue, B., Mei, Q., & <Text strong>Wu, L.</Text> , (2025)
              “RAG-Enhanced safety information retrieval for construction: integration of large language models with domain-specific information” 
              ISARC 2025: 42nd International Symposium on Automation and Robotics in Construction 
              {/* <em>Proceedings of the 2023 Canadian Society of Civil Engineering Annual Conference</em>,  */}
              {/* <Link href="https://doi.org/10.1007/978-3-031-62170-3_17" target="_blank">
              https://doi.org/10.1007/978-3-031-62170-3_17  
              </Link>  */}
          </Paragraph>

          <Paragraph >
              Dong, B.*, <Text strong>Wu, L.</Text>, & Li, X., (2024)
              “Short-term disaster impacts on transportation infrastructures: A review of emerging technologies” 
              ASCE International Conference on Computing in Civil Engineering, i3ce, July 28-31, 2024, Pittsburgh
             {/* <em>Proceedings of the 2022 Winter Simulation Conference</em>, 2409-2420. <Link href="https://doi.org/10.1109/WSC57314.2022.10015329" target="_blank">
             https://doi.org/10.1109/WSC57314.2022.10015329  */}
             {/* </Link>  */}
          </Paragraph>

          <Paragraph >
              Borjigin, O.,  <Text strong>Wu, L.</Text>, & Dossick, C. S., (2024)
              “Virtual Design and Construction Time Study Schema Development” 
              ASCE International Conference on Computing in Civil Engineering, i3ce, July 28-31, 2024, Pittsburgh
             {/* <em>Proceedings of the 2022 Winter Simulation Conference</em>, 2409-2420. <Link href="https://doi.org/10.1109/WSC57314.2022.10015329" target="_blank">
             https://doi.org/10.1109/WSC57314.2022.10015329  */}
             {/* </Link>  */}
          </Paragraph>

          <Paragraph >
              ElMenshawy M.*, <Text strong>Wu, L.</Text>, Hermann U., Zubick T., & AbouRizk, S., (2024)
              “An advanced work packaging inspired ontology for industrial construction projects” 
              The 20th conference of the International Society for Computing in Civil and Building Engineering, ICCCBE, Aug 25-28, 2024, Montreal 
             {/* <em>Proceedings of the 2022 Winter Simulation Conference</em>, 2409-2420. <Link href="https://doi.org/10.1109/WSC57314.2022.10015329" target="_blank">
             https://doi.org/10.1109/WSC57314.2022.10015329  */}
             {/* </Link>  */}
          </Paragraph>


          <Paragraph >
              ElMenshawy M.*, <Text strong>Wu, L.</Text>, Gue B., & AbouRizk, S., (2024)
              “Exploring the potential of reinforcement learning in pipe spool scheduling in industrial projects” 
              ISARC 2024: 41st International Symposium on Automation and Robotics in Construction, Jun 3-4, 2024, Lille, France
              <em>Proceedings of ISARC 2024: 41st International Symposium on Automation and Robotics in Construction</em>, <Link href="https://doi.org/10.22260/ISARC2024/0125" target="_blank">
              https://doi.org/10.22260/ISARC2024/0125  
              </Link> 
          </Paragraph>


          <Paragraph >
              Li K., & <Text strong>Wu, L.</Text>, (2023)
              “Monte Carlo-enabled dynamic multiple-criteria decision analysis for selecting sustainable construction methods: a wind farm case study” 
              Canadian Society of Civil Engineering Annual Conference 2023 
              <em>Proceedings of the 2023 Canadian Society of Civil Engineering Annual Conference</em>, <Link href="https://doi.org/10.1007/978-3-031-62170-3_17" target="_blank">
              https://doi.org/10.1007/978-3-031-62170-3_17  
              </Link> 
          </Paragraph>
          
          <Paragraph >
             Karim, R. M., Brian G., <Text strong>Wu, L.</Text>, & Mohamed, Y., (2023) 
             “Job labour-hour forecasting for a pipe spool fabrication shop using data mining” 
             Canadian Society of Civil Engineering Annual Conference 2023             
             <em>Proceedings of the 2023 Canadian Society of Civil Engineering Annual Conference</em>, 2409-2420. <Link href="https://doi.org/10.1007/978-3-031-61503-0_32" target="_blank">
             https://doi.org/10.1007/978-3-031-61503-0_32
             </Link> 
          </Paragraph>
          <Paragraph >
             Jafari, E., <Text strong>Wu, L.</Text>, Brian G., Malak, E. H., & AbouRizk, S., (2023) 
             “Construction supply chain analysis on forecasting the demand for small equipment, tools, and consumables for industrial construction projects” 
             Canadian Society of Civil Engineering Annual Conference 2023             
             <em>Proceedings of the 2023 Canadian Society of Civil Engineering Annual Conference</em>, <Link href="https://doi.org/10.1007/978-3-031-61499-6_2" target="_blank">
             https://doi.org/10.1007/978-3-031-61499-6_2  
             </Link> 
          </Paragraph>

          <Paragraph >
          < Text strong>Wu, L.</Text>,
             Li K., & AbouRizk, S. “System dynamics of construction supply chain management in industrial modularized construction projects” 
             <em>Proceedings of the 2022 Winter Simulation Conference</em>, 2409-2420. <Link href="https://doi.org/10.1109/WSC57314.2022.10015329" target="_blank">
             https://doi.org/10.1109/WSC57314.2022.10015329 
             </Link> 
          </Paragraph>

          <Paragraph >
             Ali, M., Mohamed, E., 
          < Text strong>Wu, L.</Text>,
             Li K., & AbouRizk, S. (2022) “A generic framework for simulation-based optimization using high-level architecture” 
             <em>Proceedings of the 21st International Conference on Modelling and Applied Simulation (MAS), 19th International Multidisciplinary 
              Modeling & Simulation Multiconference</em>, 2724-0037. <Link href="https://doi.org/10.46354/i3m.2022.mas.005" target="_blank">
             https://doi.org/10.46354/i3m.2022.mas.005  
             </Link> 
          </Paragraph>

          <Paragraph >
          < Text strong>Wu, L.</Text>,
             & AbouRizk, S. (2023) “Towards construction’s digital future: a roadmap for enhancing data value” 
             <em>Proceedings of the Canadian Society of Civil Engineering Annual Conference 2021</em>, 225-238. <Link href="https://doi.org/10.1007/978-981-19-1029-6_17" target="_blank">
             https://doi.org/10.1007/978-981-19-1029-6_17 
             </Link> 
          </Paragraph>

          <Paragraph >
            <Text strong>Wu, L.</Text>,
             Li, Z., & AbouRizk, S. (2020) “Automation in extraction and sharing information between BIM and 
             project management databases” International Conference on Construction and Real Estate Management 
             (ICCREM), Stockholm, Sweden. <Link href="https://doi.org/10.1061/9780784483237.005" target="_blank">
             https://doi.org/10.1061/9780784483237.005
             </Link>
          </Paragraph>  

          <Paragraph >
            Li, Y., Xu, S., <Text strong>Wu, L.</Text>,
            AbouRizk, S., Tae, K., & Lei Z. (2019) “A generic simulation model for selecting fleet size in snow 
            plowing operations” Proceedings of the Winter Simulation Conference (WSC), National Harbor, MD, US. <Link href="https://doi.org/10.1109/WSC40007.2019.9004954" target="_blank">
             https://doi.org/10.1109/WSC40007.2019.9004954
            </Link>          
          </Paragraph>           

          <Paragraph >
            <Text strong>Wu, L.</Text>,
             Ali, M., Pereira, E., & AbouRizk, S. (2018) “Linear regression and agent-based modeling approach for 
             equipment market value prediction” Proceedings of the 17th International Conference on Modeling and 
             Applied Simulation, Budapest, Hungary. 
             <Text strong> * Best Paper Award</Text>
          </Paragraph>  

          <Paragraph >
            <Text strong>Wu, L.</Text>,  
             Mohamed, Y., Taghaddos, H., & Hermann, R. (2014). “Analyzing scaffolding needs for industrial construction
              sites using historical data.” Construction Research Congress 2014: Construction in a Global Network 
              (pp. 1596-1605). <Link href="https://doi.org/10.1061/9780784413517.163" target="_blank">
            https://doi.org/10.1061/9780784413517.163
            </Link> 
          </Paragraph>  

          <Divider> <Title level={4}>SOFTWARE PACKAGES</Title></Divider>

          <Paragraph >
            Zhao, X., Dimitrov, D., Osburn, L., Dossick, C., Cheng, R., & <Text strong>Wu, L.</Text>,(2023), 
            Building Owners Assessment Tool, University of Washington: Seattle, WA, <Link href="https://boat.be.uw.edu/" target="_blank">
            https://boat.be.uw.edu/
            </Link>                  
          </Paragraph>


          <Paragraph >
            Li, Z., 
            <Text strong>Wu, L.</Text>,
              & AbouRizk, S., LongestCommonSubstring, (2019), GitHub repository, <Link href="https://github.com/Chrisfufu/LongestCommonSubString" target="_blank">
            https://github.com/Chrisfufu/LongestCommonSubString
            </Link>
             , Zenodo, <Link href="https://doi.org/10.5281/zenodo.4057067" target="_blank">
            https://doi.org/10.5281/zenodo.4057067
            </Link>                    
          </Paragraph>

          <Paragraph >
            <Text strong>Wu, L.</Text>,
             & AbouRizk, S., Detect3DRelation, (2020), GitHub repository, <Link href="https://github.com/XiaomoLing/Detect3DRelation" target="_blank">
             https://github.com/XiaomoLing/Detect3DRelation
            </Link>
             , Zenodo, <Link href="https://doi.org/10.5281/zenodo.4058576 " target="_blank">
             https://doi.org/10.5281/zenodo.4058576 
            </Link>              
          </Paragraph>

          <Divider> <Title level={4}>TECHNICAL REPORTS</Title></Divider>

          <Paragraph >
          <Text strong>Wu, L.</Text>,  
            Wang, Y., & Manawadu, A., (2024). <em>2024 Washington Summer High School Transportation Camp Program Report</em>,
            University of Washington: Seattle, WA
          </Paragraph>

          <Paragraph >
          <Text strong>Wu, L.</Text>,  
            Wang, Y., & Li, J., (2023). <em>PacTrans-WSDOT Summer High School Transportation Camp Program Report</em>,
            University of Washington: Seattle, WA
          </Paragraph>

          <Paragraph >
          <Text strong>Wu, L.</Text>,  
             Mao, X., & Gue, B., (2022). <em>Do winter conditions affect labor productivities? a case study</em>,
             Hole School of Construction Engineering, University of Alberta: Edmonton, Alberta
          </Paragraph>

 
          <Paragraph >
            AbouRizk, S., Hammad A., Hattab, M., E.,           
          <Text strong> Wu, L.</Text>,  
             Eltahan A., & Nomir, M., (2022). <em>Impact of Qualifications-Based Selection of Engineering Services on Project Outcomes</em>,
             Hole School of Construction Engineering, University of Alberta: Edmonton, Alberta
          </Paragraph>

        </div>
        
      </AppLayout>
      
    );
  }
}


export default Publications;