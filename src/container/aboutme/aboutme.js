//关于我的
import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import browserCookie from "browser-cookies"
import {loginOutSubmit} from "../../redux/user.redux"
import {NavBar,List,WhiteSpace,Badge,Button,WingBlank} from "antd-mobile"

import "./aboutme.css"
import NavLink from "../../component/navlink/navlink"

@connect(state=>state.user,{loginOutSubmit})
class AboutMe extends React.Component{
	constructor(props){
		super(props);
		this.LoginOut=this.LoginOut.bind(this);
	}
	LoginOut(){
		browserCookie.erase("userid");
		this.props.loginOutSubmit()
	}
	render(){
		const userInfo1=[{
			text:"手机检验"
		},{
			text:"我的订餐"
		}]
		const userInfo2=[{
			value:"出行向导"
		},{
			value:"温馨服务"
		},{
			value:"信息服务"
		}]
		return this.props.user?(
			<div className="about-me">
				<NavBar mode="dark" className="about-me-header">关于我的</NavBar>
				<div className="about-me-container">
					<List>
						<List.Item arrow="horizontal">{this.props.name}</List.Item>
						{userInfo1.map(v=>(<List.Item arrow="horizontal" key={v.text}>{v.text}</List.Item>))}
						
					</List>
					<WhiteSpace size="lg" style={{background:"#ddd"}}/>
					<List>
						{userInfo2.map(v=>(<List.Item arrow="horizontal" key={v.value}>{v.value}</List.Item>))}
					</List>
					<WhiteSpace size="lg" style={{background:"#ddd"}}/>
					<List>
						<List.Item arrow="horizontal" extra={<Badge text="new"/>}>旅行休闲</List.Item>
					</List>
					<WhiteSpace size="lg" style={{background:"#ddd"}}/>
					<List>
						<List.Item arrow="horizontal">系统通知</List.Item>
						<List.Item arrow="horizontal">关于</List.Item>
					</List>
					<WhiteSpace size="lg"/>
					<WingBlank>
					 <Button type="primary" onClick={this.LoginOut}>退出登录</Button>
					</WingBlank>
				</div>
				<NavLink/>
			</div>
		):(<Redirect to={this.props.redirectTo}/>)
	}
}

export default AboutMe