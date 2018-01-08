import React from "react"
import {NavBar,Icon,Result,WingBlank} from "antd-mobile"

class PayResult extends React.Component{
	render(){
		return(
			<div>
				<NavBar mode="dark" icon={<Icon type="left"/>}>交易成功</NavBar>
				<WingBlank>
				    <div className="sub-title">支付成功</div>
					<Result
					    img={<img src={require("./img/pay.png")}  alt="" />}
					    title="支付成功"
					    message={<div>998.00元 <del>1098元</del></div>}/>
				</WingBlank>
			</div>
		)
	}
}
export default PayResult
