//注册
import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {register} from "../../redux/user.redux"
import {NavBar,Icon,Button,List,InputItem,WhiteSpace,WingBlank,Accordion,Radio} from "antd-mobile"

import "./register.css"
import Logo from "../../component/logo/logo"
import PhoneInput from "../../component/phoneinput/phoneinput"

const RadioItem=Radio.RadioItem;

@connect(state=>{
	return state.user
},{register})
class Register extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:"",
			pwd:"",
			repeatpwd:"",
			name:"",
			idcardtype:"idcard",
			idcardnum:"",
			email:"",
			phone:"",
			type:"adult"
		}
		this.handleBack=this.handleBack.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
	}
	phoneOnChange(val){
		this.setState({
			phone:val
		});
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}	
	handleRegister(){
		this.props.register(this.state);
	}
	handleBack(){
		this.props.history.push("/login");
	}
	render(){
		return(
			<div className="register">
				{this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
				<WhiteSpace />
				<NavBar mode="light" icon={<Icon type="left" onClick={this.handleBack}/>}
></NavBar>
				<WingBlank>
					<List>
						
						<Logo/>
						
						<InputItem placeholder="用户名设置成功后不可修改" onChange={(val)=>this.handleChange("user",val)}>
	            			用户名
	         			</InputItem>
	         			
	         			<InputItem placeholder="6-20位字母、数字或符号" type="password" onChange={(val)=>this.handleChange("pwd",val)}>
	            			登录密码
	         			</InputItem>
	         			
	         			<InputItem placeholder="再次输入您的登录密码" type="password" onChange={(val)=>this.handleChange("repeatpwd",val)}>
	         				确认密码
	         			</InputItem>
	         			
	         			<InputItem placeholder="请输入您的姓名" onChange={(val)=>this.handleChange("name",val)}>姓名</InputItem>
	         			
	      				<Accordion>
	      					<Accordion.Panel header="证件类型">
					            <List className="my-list">
					            	<RadioItem checked={this.state.idcardtype==="idcard"} onChange={(val)=>this.handleChange("idcardtype","idcard")}>二代身份证</RadioItem>
					                <RadioItem checked={this.state.idcardtype==="hmpass"} onChange={(val)=>this.handleChange("idcardtype","hmpass")}>港澳通行证</RadioItem>
					                <RadioItem checked={this.state.idcardtype==="tpass"} onChange={(val)=>this.handleChange("idcardtype","tpass")}>台湾通行证</RadioItem>
					                <RadioItem checked={this.state.idcardtype==="passport"} onChange={(val)=>this.handleChange("idcardtype","passport")}>护照</RadioItem>
					            </List>
					        </Accordion.Panel>	
	      				</Accordion>
	      				
	      				<InputItem placeholder="请输入您的证件号码" onChange={(val)=>this.handleChange("idcardnum",val)}>证件号码</InputItem>
	      				
	      				<InputItem placeholder="请正确填写邮箱地址" onChange={(val)=>this.handleChange("email",val)}>邮箱</InputItem>
	      				
	      				<PhoneInput phoneOnChange={this.phoneOnChange.bind(this)}/>
	      				
	      				<Accordion>
	      					<Accordion.Panel header="旅客类型">
					            <List className="my-list">
					            	<RadioItem checked={this.state.type==="adult"}		            onChange={(val)=>this.handleChange("type","adult")}>成人</RadioItem>
					                <RadioItem checked={this.state.type==="children"} onChange={(val)=>this.handleChange("type","children")}>儿童</RadioItem>
					                <RadioItem checked={this.state.type==="student"} onChange={(val)=>this.handleChange("type","student")}>学生</RadioItem>
					                <RadioItem checked={this.state.type==="soldier"} onChange={(val)=>this.handleChange("type","soldier")}>残疾军人、伤残人民警察</RadioItem>
					            </List>
					        </Accordion.Panel>	
	      				</Accordion>
					</List>
					<WhiteSpace/>
					{this.props.msg?(<p className="error-msg">{this.props.msg}</p>):null}
					<WhiteSpace/>
					
					<Button type="primary" onClick={this.handleRegister}>注册</Button>
					
				</WingBlank>
			</div>
		)
	}
}

export default Register