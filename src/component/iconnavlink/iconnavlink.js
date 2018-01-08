//图标导航
import React from "react"
import {TabBar} from "antd-mobile"
import {withRouter} from "react-router-dom"

import "./iconnavlink.css"

@withRouter
class IconNavLink extends React.Component{
	render(){
		const IconNavList=this.props.data.filter(val=>!val.hide);
		return(
			<div className="icon-navlink">
				<TabBar>
					{IconNavList.map(val=>(
						<TabBar.Item className="icon-item" key={val.path} title={val.text}  icon={{uri:require(`./img/${val.icon}.png`)}}
						/>))}
				</TabBar>
			</div>
		)
	}
}
export default IconNavLink