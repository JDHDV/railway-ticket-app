//正晚点
import React from "react"
import {NavBar,Icon,SegmentedControl,WingBlank,WhiteSpace,List,InputItem,Button} from "antd-mobile"

import "./clock.css"

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.handleAddress=this.handleAddress.bind(this);
	}
	handleAddress(){
		this.props.history.push("./addresssearch");
	}
	render(){
		return(
			<div>
				<NavBar mode="dark" icon={<Icon type="left" />}>正晚点查询</NavBar>
				<WhiteSpace/>
				<WingBlank>
			   		<SegmentedControl values={["到达","出发"]} style={{height:"40px",width:"200px",margin:"0px auto"}}/>
			   		<WhiteSpace size="lg"/>
			   		<List>
			   			<InputItem placeholder="请输选择车站" onFocus={this.handleAddress}>车站</InputItem>
			   			<InputItem placeholder="请输入车次">车次</InputItem>
			   		</List>
			   		<WhiteSpace size="lg"/>
			   		<WhiteSpace size="lg"/>
			   		<Button type="primary">查询</Button>
			   		<WhiteSpace size="lg"/>
			   		<div className="hint">
			   			<p><i>*</i>温馨提示</p>
			   			<p>1.本查询仅提供过去1小时和未来3小时内列车正晚点信息.</p>
			   			<p>2.本功能及查询结果仅作为参考,准确信息以车站公告为准.</p>
			   		</div>
			   	</WingBlank>
			</div>
		)
	}
}

export default Clock