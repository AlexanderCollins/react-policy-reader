import React from 'react';


class PolicyReader extends React.Component {

  goto(section_id) {
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
      <span>
        <h1 style={{marginLeft: "20px"}}>{this.props.policy_name}</h1>

        <table style={{wdith: "100%", border: "0px"}}>
          <td style={{display: `${this.props.isMobile ? "none" : ""}`, width: "20%"}}>
          {
            this.props.isMobile ? null :
            <div style={{width: "100%"}}>
              {
                this.props.sections.map((section, index) => {
                  return (
                    <div key={`${section}_${index}`} style={{margin: "30px"}}>
                      <h3 style={{cursor: "pointer"}} onClick={() => {this.goto(`${section}_${index}`)}}>{index + 1}{". "}{section.heading}</h3>
                    </div>
                  )
                })
              }
            </div>
          }
          </td>

          <td>
            <div style={{borderLeft: "1px solid grey", width: "100%"}}>
              {policy}
            </div>
          </td>
          </table>
      </span>
    )
  }
}

export default PolicyReader;
