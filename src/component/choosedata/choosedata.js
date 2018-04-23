//选择日期
import React from "react"
import {List,Calendar} from "antd-mobile"

import "../chooseseat/chooseseat.css"

import enUS from "antd-mobile/lib/calendar/locale/en_US"
import zhCN from "antd-mobile/lib/calendar/locale/zh_CN"

const now = new Date();
const body=document.getElementsByTagName("body")[0];

class ChooseData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			en: false,
			show: false,
			config: {},
			startTime:now.getFullYear()+"-"+((now.getMonth()+1)<10?("0"+(now.getMonth()+1)):(now.getMonth()+1))+"-"+(now.getDate()<10?("0"+now.getDate()):now.getDate())
		};
	}	
	renderBtn(zh, en,config = {},startTime) {
		config.locale = this.state.en ? enUS : zhCN;
		return ( < List.Item onClick = {
			() => {
				body.style.overflowY = "hidden";
				this.setState({
					show: true,
					startTime:now.getFullYear()+"-"+((now.getMonth()+1)<10?("0"+(now.getMonth()+1)):(now.getMonth()+1))+"-"+(now.getDate()<10?"0"+now.getDate():now.getDate()),
					config
				});
			}
		} > {
			this.state.en ? en : zh
		} < /List.Item>
		)
	}
	onConfirm = (startTime) => {
		body.style.overflowY = this.originbodyScrollY;
		this.setState({
			show: false,
			startTime:startTime.getFullYear()+"-"+((startTime.getMonth()+1)<10?("0"+(startTime.getMonth()+1)):(startTime.getMonth()+1))+"-"+(startTime.getDate()<10?("0"+startTime.getDate()):startTime.getDate())
		});
	}
	onCancel = () => {
		body.style.overflowY = this.originbodyScrollY;
		this.setState({
			show: false,
			startTime: now.getFullYear()+"-"+((now.getMonth()+1)<10?("0"+(now.getMonth()+1)):(now.getMonth()+1))+"-"+(now.getDate()<10?("0"+now.getDate()):now.getDate())
		});
	}
	render() {
		this.props.data(this.state.startTime);
		return ( 
			<div className="choose-data">
			{this.renderBtn(this.state.startTime+"","Select Date", {type: "one"})}
				< Calendar {...this.state.config}
				enterDirection="horizontal"
				visible = {this.state.show}
				onCancel = {this.onCancel}
				onConfirm = {this.onConfirm}
				defaultDate = {now}
				minDate = {new Date(+now)}
				maxDate = {new Date(+now +2592000000)}
				/>
			</div>
		)
	}
}

export default ChooseData