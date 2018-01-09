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
		this.handleChange=this.handleChange.bind(this);
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
	handleChange(e){
		this.bookTicket.className="am-flexbox-item";
		this.busiService.className="am-flexbox-item";
		this.searchBook.className="am-flexbox-item";
		this.aboutMe.className="am-flexbox-item";
		e.target.className="am-flexbox-item current";
	}
	render(){
		return(
			<div className="footer-navlink">
				<List>
					<Flex>
						<Flex.Item onTouchEnd={this.handleTicket} onClick={this.handleChange} ref={(bookTicket=>{this.bookTicket=bookTicket})}>车票预订</Flex.Item>
						<Flex.Item  onTouchEnd={this.handleBusiness} onClick={this.handleChange} ref={(busiService=>{this.busiService=busiService})}>商旅服务</Flex.Item>
						<Flex.Item  onTouchEnd={this.handleBook} onClick={this.handleChange} ref={(searchBook=>{this.searchBook=searchBook})}>订票查询</Flex.Item>
						<Flex.Item  onTouchEnd={this.handleAbout} onClick={this.handleChange} ref={(aboutMe=>{this.aboutMe=aboutMe})}>关于我的</Flex.Item>
					</Flex>
				</List>
			</div>
		)
	}
}
export default NavLink;