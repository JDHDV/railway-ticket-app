//常用联系人
import React from "react"
import {NavBar,Icon,SearchBar,List,Checkbox,Flex} from "antd-mobile"

import "./addperson.css"

const CheckboxItem = Checkbox.CheckboxItem;
class AddPerson extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		this.handleAddPeron=this.handleAddPeron.bind(this);
		
	}
	handleAddPeron(){
		this.props.history.push("./addpeople");
	}
	render(){
		return(
			<div className="add-person">
				<NavBar mode="dark" icon={<Icon type="left"/>} rightContent={<span onClick={this.handleAddPeron}>添加</span>}>常用联系人</NavBar>
				<SearchBar placeholder="搜索" maxLength={8} showCancelButton="true" 
				cancelText={<img src={require("./img/add.png")} alt="" className="icon_add" onClick={this.handleAddPeron}/>}/>
				<List>
					<List.Item>当前用户</List.Item>
					<CheckboxItem>
						<Flex>
							<Flex.Item>ddd</Flex.Item>
							<Flex.Item>ddd</Flex.Item>
							<Flex.Item>ddd</Flex.Item>
						</Flex>
					</CheckboxItem>
				</List>
			</div>
		) 
	}
}

export default AddPerson