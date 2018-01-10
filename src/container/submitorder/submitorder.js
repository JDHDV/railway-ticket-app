//支付订单
import React from "react"
import {NavBar,Icon,Flex,WingBlank,List,Button,WhiteSpace} from "antd-mobile"
import "./submitorder.css"

class SubmitOrder extends React.Component{
	constructor(props){
		super(props);
		this.state={
			minutes:"29",
			seconds:"59"
		};
		this.handlePay=this.handlePay.bind(this);
		this.handleBack=this.handleBack.bind(this);
	}
	handlePay(){
		this.props.history.push("/payment")
	}
	handleBack(){
		this.props.history.push("./searchresult");
	}
	render(){
		return(
			<div className="submit-order">
				<NavBar mode="dark" icon={<Icon type="left" onClick={this.handleBack}/>}>确认支付</NavBar>
				<div className="date">
					<span className="drive">单程</span>:
					<span className="year">2018</span>年
					<span className="month">1</span>月
					<span className="data">2</span>日
				</div>
				<WingBlank>
					<List>
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
					</List>
					<WhiteSpace size="lg"/>
					<Flex>
						<Flex.Item>杨洋</Flex.Item>
						<Flex.Item>450*********4561</Flex.Item>
						<Flex.Item>二代身份证</Flex.Item>
					</Flex>
					<WhiteSpace/>
					<Flex>
						<Flex.Item><span className="person-type">成人</span>票</Flex.Item>
						<Flex.Item>二等座</Flex.Item>
						<Flex.Item><span className="carriage-num num">14</span>车</Flex.Item>
						<Flex.Item className="num">15B</Flex.Item>
						<Flex.Item className="num">245元</Flex.Item>
					</Flex>
					<WhiteSpace/>
					<p style={{width:"95%",margin:"0 auto"}}>
						<span>成功:
						  <span className="success-num">1</span>张
						</span>
						<span style={{float:"right"}}>总票价:<span className="money-all" >245元</span></span>
					 </p>
					<WhiteSpace size="lg"/>
					<div style={{position:"relative"}}>
						<Button type="primary" onClick={this.handlePay}>立即支付</Button>
						<div style={{lineHeight:"47px",height:"47px",position:"absolute",left:"75%",top:"0px",zIndex:"3"}}>
							<img src={require("./img/clock.png")} alt="" style={{float:"left",marginTop:"11px"}}/>
							<p style={{marginTop:"2px",paddingLeft:"5px",color:"#fff",float:"left"}}>
								<span>{this.state.minutes}</span>:
								<span>{this.state.seconds}</span>
					        </p>
						</div>
						<WhiteSpace/>
						<Button type="primary">购买保险</Button>
						<WhiteSpace/>
						<Button type="primary">购买返程</Button>
						<WhiteSpace/>
						<Button type="primary">送票上门</Button>
						<WhiteSpace/>
						<Button className="cancel">取消订单</Button>
					</div>
				</WingBlank>
			</div>
		)
	}
}
//icon={()}
export default SubmitOrder