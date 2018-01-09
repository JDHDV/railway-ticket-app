//订单查询
import React from "react"
import {NavBar,Tabs,Badge,List} from "antd-mobile"

import NavLink from "../../component/navlink/navlink"

const now=new Date();
let day=now.getDay();
let chday="";
switch(day){
	case 1:chday="一";break;
	case 2:chday="二";break;
	case 3:chday="三";break;
	case 4:chday="四";break;
	case 5:chday="五";break;
	case 6:chday="六";break;
	case 7:chday="天";break;
}

class SearchBook extends React.Component{
	render(){
		const tabs=[{title:<Badge>已完成订单</Badge>},{title:<Badge>未完成订单</Badge>}];
		return(
			<div>
				<NavBar mode="dark">订单查询</NavBar>
				<Tabs tabs={tabs}>
					<div>
						<p style={{lineHeight:"20px",background:"#ddd",padding:"10px",margin:"0",lineSpace:"2px"}}>
						    {now.getFullYear()+"年"+((now.getMonth()+1)<10?"0"+(now.getMonth()+1):(now.getMonth()+1))+"月"+(now.getDate()<10?("0"+now.getDate()):now.getDate())+"日"}
						    <span style={{paddingLeft:"10px"}}>{"星期"+chday}</span>
						</p>
						<List>
							<List.Item arrow="horizontal">今日订单</List.Item>
							<List.Item arrow="horizontal">未出行订单</List.Item>
							<List.Item arrow="horizontal">历史订单</List.Item>
							<List.Item arrow="horizontal">今日订单</List.Item>
						</List>
					</div>
					<div>
						<List>
							<List.Item>未完成订单<span>0</span></List.Item>
						</List>
					</div>
				</Tabs>
				<NavLink/>
			</div>
		)
	}
}

export default SearchBook