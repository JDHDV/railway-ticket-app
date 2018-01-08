//添加乘车人
import React from "react"
import {NavBar,Icon,List,InputItem,Modal,Radio,DatePicker} from "antd-mobile"

import "./addpeople.css"

const RadioItem = Radio.RadioItem;

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

class AddPeople extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	    modal1: false,
	    value:0,
	    sex:"男"
	  };
	  
	}
	state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
  }

	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}	
	onChange = (value) => {
	    this.setState({
	      value
	    });
	};
	showModal = key => (e) => {
	  e.preventDefault();
	  this.setState({
	    [key]: true,
	  });
	}
	onClose = key => () => {
	  this.setState({
	    [key]: false,
	  });
	}
	
	onWrapTouchStart = (e) => {
	  if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
	    return;
	  }
	  const pNode = closest(e.target, '.am-modal-content');
	  if (!pNode) {
	    e.preventDefault();
	  }
	}

	render(){
		return(
			<div className="addpeople">
				<div className="navbar">
					<NavBar mode="dark"  icon={<Icon type="left" />}
 rightContent="完成">添加乘车人</NavBar>
				</div>
				
				<div className="container">
	 				<List>
	 					<List.Item className="list-title">基本信息</List.Item>
	 					<InputItem placeholder="请输入真实姓名，以便购票">姓名:</InputItem>
	 					<InputItem onClick={this.showModal("modal1")} value={this.state.sex}>性别:</InputItem>
	 					<Modal visible={this.state.modal1}
				          transparent
				          maskClosable={false}
				          onClose={this.onClose("modal1")}
				          footer={[{ text: "Ok", onPress: () => {this.onClose("modal1")(); } }]}
				          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
						>
				          <div style={{ height:100,overflow:"scroll"}}>
				            <RadioItem checked={this.state.sex==="男"} onChange={(val)=>this.handleChange("sex","男")}>男</RadioItem>
						        <RadioItem checked={this.state.sex==="女"} onChange={(val)=>this.handleChange("sex","女")}>女</RadioItem>
				          </div>
				    </Modal>
	
	 					<DatePicker mode="date" className="born-data" value={this.state.date} onChange={date =>this.setState({date})}>
				      <List.Item>出生日期:</List.Item>
				    </DatePicker>

	 					<InputItem value="中国CHINA">国家地区:</InputItem>
	 					<InputItem value="二代身份证">证件类型:</InputItem>
	 					<InputItem placeholder="请准确完整填写">证件号码:</InputItem>
	 					<InputItem value="成人">旅客类型:</InputItem>
	 				</List>
	 				<List>
	 					<List.Item className="list-title">联系方式</List.Item>
	 					<InputItem>手机号码:</InputItem>
	 					<InputItem>固定电话:</InputItem>
	 					<InputItem>电子邮件:</InputItem>
	 					<InputItem>地址:</InputItem>
	 					<InputItem>邮编:</InputItem>
	 				</List>
	 				<div className="footer">
	 					<p><span>*</span>温馨提示</p>
	 					<p>互联网售票实行实名制,请准确填写乘车人基本信息.</p>
	 				</div>
 				</div>
			</div>
		)
	}
}

export default AddPeople