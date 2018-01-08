//列车选择
import React from "react"
import {Checkbox} from "antd-mobile"

import "./carcategory.css"

class CarCategory extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		this.handleChang=this.handleChang.bind(this);
	}
	handleChang(e){
		this.refs.all.className="";
		this.refs.rail.className="";
		this.refs.common.className="";	
		e.target.className="current";
	}
	render(){
		return(
			<div className="car-list">
				<ul>
					<li className="current" onClick={this.handleChang} ref="all">全部</li>
					<li onClick={this.handleChang} ref="rail">高铁/动车</li>
					<li onClick={this.handleChang} ref="common">普通车</li>
					<li><Checkbox.CheckboxItem style={{paddingLeft:"5px"}}>兑换车次</Checkbox.CheckboxItem></li>
				</ul>
			</div>
		)
	}
}

export default CarCategory