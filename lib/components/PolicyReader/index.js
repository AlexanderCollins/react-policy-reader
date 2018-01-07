import React from 'react';
import { Col, Row } from 'react-bootstrap';


export default class PolicyReader extends React.PureComponent {

    goto = (section_id) => {
        if( document.getElementById(section_id) ) {
            document.getElementById(section_id).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
          });
        }
    }

    render() {
        const policy = this.props.sections.map((section, section_index) => {
            return (
                <div id={`${section}_${section_index}`} key={`${section}_${section_index}`} style={{margin: "30px", marginBottom: "150px"}}>
                    {
                        this.props.isMobile ? <h4><span style={{color: "grey", fontStyle: "bold", marginRight: "50px"}}>{section_index + 1}.</span> {section.heading}</h4> :
                            <h1><span style={{color: "grey", fontStyle: "bold", marginRight: "50px"}}>{section_index + 1}.</span> {section.heading}</h1>
                    }
                    {
                        section.content.map((paragraph, paragraph_index) => {
                            return <p style={{fontSize: `${this.props.isMobile ? "15" : "25"}px`, marginTop: "25px"}} key={`${section}_p_${paragraph_index}`}><span style={{color: "grey", fontStyle: "bold", marginRight: "50px"}}>{section_index + 1}.{paragraph_index}</span> {paragraph}</p>
                        })
                    }
                </div>
            )
        })


        if(this.props.isMobile) {
            return <div>{policy}</div>
        }

        return (
            <div>
                <h1>{this.props.policy_name}</h1>
                <Row>
                    {this.props.isMobile ? null : <div style={{position: "fixed"}}>
                        {
                            this.props.sections.map((section, index) => {
                                return (
                                    <div key={`${section}_${index}`} style={{margin: "30px"}}>
                                        <h3 style={{cursor: "pointer"}} onClick={() => {this.goto(`${section}_${index}`)}}>{index + 1}{". "}{section.heading}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>}
                    {this.props.isMobile ? null : <Col xs={4}></Col>}
                    <Col xs={this.props.isMobile ? 12 : 8} style={{borderLeft: "1px solid grey"}}>
                        {policy}
                    </Col>
                </Row>
            </div>
        )
    }
}
