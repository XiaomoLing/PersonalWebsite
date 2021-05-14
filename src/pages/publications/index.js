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
            <Text strong>Wu, L.</Text>         
              , Li, Z., & AbouRizk, S., “Automating common data pre-processing steps for improved data-driven 
              decision-support in industrial construction.” <em>Journal of Computing in Civil Engineering</em>, [Under Review]
          </Paragraph>   

          <Paragraph >
            <Text strong>Wu, L.</Text>
            , Ji, W., Feng, B., Hermann U., & AbouRizk, S. “Intelligent Data-Driven Approach for Enhancing 
            Preliminary Resource Planning in Industrial Construction.” <em>Automation in Construction</em>,  [Revised and Resubmitted]
          </Paragraph>
          <em></em>
          <Paragraph >
            Ali, M., Mohamed, E., 
            <Text strong>Wu, L.</Text>,
             & AbouRizk, S. “A generic framework for simulation-based optimization using HLA.” 
             <em>Annals of Operations Research</em>, [Under Review]
          </Paragraph>

          <Paragraph >
            <Text strong>Wu, L.</Text>,
             & AbouRizk, S. (2021) “A numerical-based approach for updating simulation input in real time” 
             <em>Journal of Computing in Civil Engineering</em>, 35(2), 04020067. 
             <Link href="https://doi.org/10.1061/(ASCE)CP.1943-5487.0000948" target="_blank">
              https://doi.org/10.1061/(ASCE)CP.1943-5487.0000948
             </Link>
          </Paragraph>

          <Paragraph >
             <Text strong>Wu, L.</Text>,
             Ji, W., & AbouRizk, S. (2020). “Bayesian inference with Markov chain Monte Carlo–based numerical 
             approach for input model updating.” <em>Journal of Computing in Civil Engineering</em>, 34(1), 04019043.              
             <Link href="https://doi.org/10.1061/(ASCE)CP.1943-5487.0000862" target="_blank">
              https://doi.org/10.1061/(ASCE)CP.1943-5487.0000862
             </Link>                       
          </Paragraph>

          <Paragraph >
            Pereira, E., Ali, M.,
            <Text strong>Wu, L.</Text>,
             & AbouRizk, S. (2019). “Distributed simulation-based analytics approach for enhancing safety 
             management systems in industrial construction” <em>Journal of Construction Engineering and Management</em> , 
             146(1), 04019091.   
             <Link href="https://doi.org/10.1061/(ASCE)CO.1943-7862.0001732" target="_blank">
               https://doi.org/10.1061/(ASCE)CO.1943-7862.0001732
             </Link>
          </Paragraph>

          <Divider> <Title level={4}>CONFERENCE PAPERS</Title></Divider>

          <Paragraph >
          < Text strong>Wu, L.</Text>,
             & AbouRizk, S. (2021) “Towards construction’s digital future: a roadmap for enhancing data value” 
             9th CSCE International Construction Specialty Conference, Niagara Falls, Canada [In Press] 
          </Paragraph>

          <Paragraph >
            <Text strong>Wu, L.</Text>,
             Li, Z., & AbouRizk, S. (2020) “Automation in extraction and sharing information between BIM and 
             project management database” International Conference on Construction and Real Estate Management 
             (ICCREM), Stockholm, Sweden. 
             <Link href="https://doi.org/10.1061/9780784483237.005" target="_blank">
             https://doi.org/10.1061/9780784483237.005
             </Link>
          </Paragraph>  

          <Paragraph >
            Li, Y., Xu, S., <Text strong>Wu, L.</Text>,
            AbouRizk, S., Tae, K., & Lei Z. (2019) “A generic simulation model for selecting fleet size in snow 
            plowing operations” Proceedings of the Winter Simulation Conference (WSC), National Harbor, MD, US. 
            <Link href="https://doi.org/10.1109/WSC40007.2019.9004954" target="_blank">
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
              (pp. 1596-1605). 
            <Link href="https://doi.org/10.1061/9780784413517.163" target="_blank">
            https://doi.org/10.1061/9780784413517.163
            </Link> 
          </Paragraph>  

          <Divider> <Title level={4}>SOFTWARE PACKAGES</Title></Divider>

          <Paragraph >
            Li, Z., 
            <Text strong>Wu, L.</Text>,
              & AbouRizk, S., LongestCommonSubstring, (2019), GitHub repository
            , <Link href="https://github.com/Chrisfufu/LongestCommonSubString" target="_blank">
            https://github.com/Chrisfufu/LongestCommonSubString
            </Link>, Zenodo,  
            <Link href="https://doi.org/10.5281/zenodo.4057067" target="_blank">
            https://doi.org/10.5281/zenodo.4057067
            </Link>                    
          </Paragraph>

          <Paragraph >
            <Text strong>Wu, L.</Text>,
             & AbouRizk, S., Detect3DRelation, (2020), GitHub repository
            , <Link href="https://github.com/XiaomoLing/Detect3DRelation" target="_blank">
             https://github.com/XiaomoLing/Detect3DRelation
            </Link>, Zenodo 
            <Link href="https://doi.org/10.5281/zenodo.4058576 " target="_blank">
            https://doi.org/10.5281/zenodo.4058576 
            </Link>              
          </Paragraph>

        </div>
        
      </AppLayout>
      
    );
  }
}


export default Publications;