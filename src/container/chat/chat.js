import React from "react"
import {NavBar,Icon} from "antd-mobile"

class Chat extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		
		this.handleBack=this.handleBack.bind(this);
	}
	handleBack(){
		this.props.history.push("./ticketsearch");
	}
	render(){
		return(
			<div>
				<NavBar mode="dark" icon={<Icon type="left" onClick={this.handleBack}/>}>
					<img src={require("./img/chat.png")} alt=""/>
				</NavBar>
			</div>
		)
	}
}
export default Chat