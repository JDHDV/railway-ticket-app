//确认支付
import React from "react"
import {Radio,NavBar,WingBlank,List,Button,WhiteSpace,Icon} from "antd-mobile"

import "./payment.css"

class Payment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value: 0
		};
		this.handlePayMoney=this.handlePayMoney.bind(this);
		this.handleBack=this.handleBack.bind(this);
	}
	handlePayMoney(){
		this.props.history.push("/result");
	}
	handleBack(){
		this.props.history.push("/confirmorder");
	}
	onChange = (value) => {
	    this.setState({
	      value,
	    });
	 };

	render(){
		const {value} = this.state;
		const data=[
	      { value:0,label:"支付宝"},
	      { value:1,label:"淘宝"},
	      { value:2,label:"建设银行"},
	      { value:3,label:"农业银行"},
	      { value:4,label:"工商银行"},
	    ];

		return(
			<div>
				<NavBar mode="dark" icon={<Icon type="left" onClick={this.handleBack}/>}>支付订单</NavBar>
				<WingBlank>
					<p>请选择银行卡</p>
					<List>
					 {data.map(i => (
						<List.Item key={i.label}><Radio className="my-radio" key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}</Radio></List.Item>
						))}
					</List>
					<WhiteSpace size="lg"/>
					<Button type="primary" onClick={this.handlePayMoney}>确认支付</Button>
				</WingBlank>
			</div>
		)
	}
}

export default  Payment