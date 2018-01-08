//订餐服务
import React from "react"
import {NavBar,List} from "antd-mobile"

class Food extends React.Component{
	render(){
		
	const saoUrl=require("./img/saoyisao.png");
	
	return(
			<div>
				<NavBar mode="dark" rightContent={[
       <List.Item thumb={saoUrl} className="icon-saoyisao" 
       style={{background:"transparent"}}/>]}>订餐</NavBar>
			</div>
		)
	}
}

export default Food