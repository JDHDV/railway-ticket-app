//确认订单
import React from "react"
import {NavBar,Icon,List,WingBlank,Button,WhiteSpace,Flex} from "antd-mobile"

import "./confirmorder.css"

class ConfirmOrder extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		
		this.handleAddPeople=this.handleAddPeople.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleBack=this.handleBack.bind(this);
		
	}
	handleAddPeople(){
		this.props.history.push("./addpeople");
	}
	handleSubmit(){
		this.props.history.push("./submitorder");
	}
	handleBack(){
		this.props.history.push("./searchresult");
	}
	render(){
		return(
			<div className="confirm-order">
				<NavBar mode="dark" icon={<Icon type="left" onClick={this.handleBack}/>}>
					确认订单
				</NavBar>
				
				<NavBar className="data-nav" leftContent="前一天" rightContent="后一天">NavBar</NavBar>
				
				<Flex className="choose-ticket-info">
					<Flex.Item>
						<p className="font">广州南</p>
						<p className="text-color"><span className="startTime">15:22</span>出发</p>
						<p><span className="icon_start">始</span><span>深圳</span></p>
					</Flex.Item>
					<Flex.Item>
						<p className="font text-color">K1208</p>
						<p><img src={require("./img/arrow.png")} alt=""/></p>
						<p className="long-time">14小时43分钟</p>
					</Flex.Item>
					<Flex.Item>
						<p className="font">南宁东</p>
							<p className="text-color"><span className="endTime">06:05</span>到达</p>
							<p><span className="icon_end">终</span><span>昆明</span></p>
					</Flex.Item>
				</Flex>
				
				<Flex className="choose-seat-list">
					<Flex.Item>
						<p>商务</p>
						<p className="num">2张</p>
						<p>￥<span>11</span></p>
					</Flex.Item>
					<Flex.Item>
						<p>一等</p>
						<p className="num">2张</p>
						<p>￥<span>11</span></p>
					</Flex.Item>
					<Flex.Item>
					    <p>二等</p>
						<p className="num">2张</p>
						<p>￥<span>11</span></p>
					</Flex.Item>
				</Flex>
				
				<List className="add-people">
					<List.Item className="add-text" thumb={(<img src={require("./img/add.png")} alt=""/>)} onClick={this.handleAddPeople}>
						添加乘客
					</List.Item>
				</List>
				
				<WingBlank>
					<List>
						<List.Item arrow="horizontal">选座服务</List.Item>
					</List>
					<WhiteSpace/>
					<Button type="primary" onClick={this.handleSubmit}>提交订单</Button>
					<div>
						<p><i>*</i>温馨提示</p>
						<p>长按成人类型的乘车人,可以自动添加同行儿童类型p的乘车人.</p>
					</div>
				</WingBlank>
			</div>
		)
	}
}
export default ConfirmOrder