//订单查询
import React from "react"
import {NavBar,Tabs,Badge,List} from "antd-mobile"

import NavLink from "../../component/navlink/navlink"

class SearchBook extends React.Component{
	render(){
		const tabs=[{title:<Badge>已完成订单</Badge>},{title:<Badge>未完成订单</Badge>}];
		return(
			<div>
				<NavBar mode="dark">订单查询</NavBar>
				<Tabs tabs={tabs}>
					<div>
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