//确认订单
import React from "react"
import {NavBar,List,WingBlank,Button,WhiteSpace,Flex} from "antd-mobile"

import "./confirmorder.css"

class ConfirmOrder extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		
		this.handleAddPeople=this.handleAddPeople.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	handleAddPeople(){
		this.props.history.push("./addpeople");
	}
	handleSubmit(){
		this.props.history.push("./submitorder");
	}
	
	render(){
		return(
			<div>
				<NavBar mode="dark">
					确认订单
				</NavBar>
				
				<NavBar className="data-nav" leftContent="前一天" rightContent="后一天">NavBar</NavBar>
				
				<Flex className="choose-seat-list">
					<Flex.Item>
						<List>
							<List.Item>商务</List.Item>
							<List.Item>2张</List.Item>
							<List.Item>￥11</List.Item>
						</List>
					</Flex.Item>
					<Flex.Item>
						<List>
							<List.Item>一等</List.Item>
							<List.Item>2张</List.Item>
							<List.Item>￥11</List.Item>
						</List>
					</Flex.Item>
					<Flex.Item>
						<List>
							<List.Item>二等</List.Item>
							<List.Item>2张</List.Item>
							<List.Item>￥11</List.Item>
						</List>
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