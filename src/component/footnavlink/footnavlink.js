//底部导航
import React from "react"
import {Flex,Accordion} from "antd-mobile"

import "./footnavlink.css"

class FootNavLink extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		return(
			<div className="foot-navlink">
			<Flex>
			
				<Flex.Item><Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
			        <Accordion.Panel header="发时"></Accordion.Panel>
			    </Accordion>
			    </Flex.Item>
			    <Flex.Item><Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
			        <Accordion.Panel header="历时"></Accordion.Panel>
			    </Accordion>
			    </Flex.Item>
			    <Flex.Item><Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
			        <Accordion.Panel header="到时"></Accordion.Panel>
			    </Accordion>
			    </Flex.Item>
			    <Flex.Item><span>票价</span>/<span>余票</span></Flex.Item>
			    </Flex>
			</div>
		)
	}
}

export default FootNavLink