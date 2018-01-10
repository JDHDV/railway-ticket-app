//商旅服务
import React from "react"
import {NavBar,List,WingBlank,WhiteSpace} from "antd-mobile"

import "./businessservice.css"
import NavLink from "../../component/navlink/navlink"

class BusinessService extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		this.handleChat=this.handleChat.bind(this);
	}
	handleChat(){
		this.props.history.push("./chat");
	}
	render(){
		const talkUrl=require("./img/talk.png");
		return(
			<div>
				<NavBar mode="dark" rightContent={[
       <List.Item thumb={talkUrl} key="busi" className="icon-talk" style={{background:"transparent"}} onClick={this.handleChat}/>]}>商旅服务</NavBar>
       			<WhiteSpace size="lg"/>
       			<WingBlank>
       				<div className="service-list">
       					<img src={require("./img/food.jpg")} alt=""/>
       					<div className="service-icon">
	       					<span className="icon-food">
	       						<img src={require("./img/icon-food.png")} alt=""/>
	       					</span>
	       					<p className="service-text">.订餐服务.</p>
       					</div>
       				</div>
       				<WhiteSpace size="lg"/>
       				<div className="service-list">
       					<img src={require("./img/car.jpg")} alt=""/>
       					<div className="service-icon">
	       					<span className="icon-food">
	       						<img src={require("./img/icon-car.png")} alt=""/>
	       					</span>
	       					<p className="service-text">.约车服务.</p>
       					</div>
       				</div>	
       				<WhiteSpace size="lg"/>
       				<div className="service-list">
       					<img src={require("./img/idcard.jpg")} alt=""/>
       					<div className="service-icon">
	       					<span className="icon-food">
	       						<img src={require("./img/icon-idcard.png")} alt=""/>
	       					</span>
	       					<p className="service-text">.信用卡服务.</p>
	       					<img src={require("./img/icon-hot.png")} alt="" style={{width:"30px",height:"30px",position:"absolute",right:"10px",top:"5px"}}/>
       					</div>
       				</div>	
       			</WingBlank>
       			<NavLink/>
			</div>
		)
	}
}

export default BusinessService