import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import browserCookie from "browser-cookies"
import {loginOutSubmit} from "../../redux/user.redux"
import {NavBar,Icon,List,WhiteSpace,Button,WingBlank} from "antd-mobile"

@connect(state=>state.user,{loginOutSubmit})
class AboutPerson extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		this.handleBack=this.handleBack.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	handleBack(){
		this.props.history.push("./aboutme");
	}
	handleClick(){
		this.props.history.push("./addpeople");
	}
	render(){
		return this.props.user?(
			<div className="about-person">
				<NavBar mode="dark" icon={<Icon type="left" onClick={this.handleBack}/>}>{this.props.name}</NavBar>
				<WhiteSpace size="lg" style={{background:"#ddd"}}/>
				<List>
					<List.Item arrow="horizontal" onClick={this.handleClick}>常用联系人</List.Item>
					<List.Item arrow="horizontal">送票地址</List.Item>
					<List.Item arrow="horizontal">个人资料</List.Item>
					<List.Item arrow="horizontal">密码修改</List.Item>
					<List.Item arrow="horizontal">邮箱修改</List.Item>
				</List>
				<WhiteSpace size="lg"/>
				<WingBlank>
					<Button type="primary" onClick={this.LoginOut}>退出当前用户</Button>
				</WingBlank>
			</div>
		):(<Redirect to={this.props.redirectTo}/>)
	}
}

export default AboutPerson
