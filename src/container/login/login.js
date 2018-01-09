//登录
import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {login} from "../../redux/user.redux"
import {NavBar,Button,List,InputItem,WhiteSpace,WingBlank,Flex} from "antd-mobile"

import "./login.css"
import Logo from "../../component/logo/logo"

@connect(state=>{return state.user},{login})
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:"",
			pwd:""
		}
		this.Register=this.Register.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
	}
	handleLogin(){
		this.props.login(this.state);
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	Register(){
		this.props.history.push("./register");
	}
	render(){
		return(
			<div className="login-container">
				{this.props.redirectTo&&this.props.redirectTo!=="/login"?<Redirect to={this.props.redirectTo}/>:null}
				<NavBar mode="dark">登录</NavBar>
				<Logo/>
				<p>欢迎登录</p>
				<WhiteSpace />
				<WingBlank>
					<List>
						<InputItem  placeholder="用户名/账号" style={{borderRadius:"30px",background:"rgba(0,0,0,.1)",lineHeight:"44px",paddingLeft:"20px"}} onChange={(val)=>this.handleChange("user",val)} 
	           />
	           			<WhiteSpace size="lg"/>
	         			<InputItem  placeholder="密码" type="password"  style={{borderRadius:"30px",background:"rgba(0,0,0,.1)",lineHeight:"44px",paddingLeft:"20px"}} onChange={(val)=>this.handleChange("pwd",val)}
	          />	       
					</List>	
					
					<WhiteSpace/>
						{this.props.msg?(<p className="error-msg">{this.props.msg}</p>):null}
					<WhiteSpace/>
					
					<div className="btn-container">
						<Flex>
							<Flex.Item>
								<Button type="primary" onClick={this.handleLogin}>登录</Button>
							</Flex.Item>
							<Flex.Item>
								<Button type="primary" onClick={this.Register}>注册</Button>
							</Flex.Item>
						</Flex>
					</div>
				</WingBlank>
			</div>
		)
	}
}

export default Login