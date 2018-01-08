//底部导航
import React from "react"
import {Flex,Icon} from "antd-mobile"

import "./footnavlink.css"

class FootNavLink extends React.Component{
	render(){
		return(

				<Flex className="foot-navlink">
			     	<Flex.Item>发时 <Icon type="up" className="arrow-up"/></Flex.Item>
			     	<Flex.Item>历时<Icon type="up" className="arrow-up"/></Flex.Item>
			     	<Flex.Item>到时<Icon type="up" className="arrow-up"/></Flex.Item>
			     	<Flex.Item>票价/余票</Flex.Item>
			    </Flex>
		
		)
	}
}
export default FootNavLink