//底部导航
import React from "react"
import {List,Flex} from "antd-mobile"
import {withRouter} from "react-router-dom"

import "./navlink.css"

@withRouter
class NavLink extends React.Component{
	constructor(props){
		super(props);
		this.handleBook=this.handleBook.bind(this);
		this.handleAbout=this.handleAbout.bind(this);
		this.handleTicket=this.handleTicket.bind(this);
		this.handleBusiness=this.handleBusiness.bind(this);
	}
	handleTicket(){
		this.props.history.push("/ticketsearch");
	}
	handleAbout(){
		this.props.history.push("/aboutme");
	}
	handleBusiness(){
		this.props.history.push("/businessservice");
	}
	handleBook(){
		this.props.history.push("/searchbook");
	}
	render(){
		return(
			<div className="footer-navlink">
				<List>
					<Flex>
						<Flex.Item onClick={this.handleTicket}>车票预订</Flex.Item>
						<Flex.Item onClick={this.handleBusiness}>商旅服务</Flex.Item>
						<Flex.Item onClick={this.handleBook}>订票查询</Flex.Item>
						<Flex.Item onClick={this.handleAbout}>关于我的</Flex.Item>
					</Flex>
				</List>
			</div>
		)
	}
}

export default NavLink;