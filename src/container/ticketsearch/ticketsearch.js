//车票预订
import React from "react"
import {connect} from "react-redux"
import {Switch,Route} from "react-router-dom"

import {ticketSearch,selectStartStationRedux} from "../../redux/ticket.redux"
import {NavBar,List,WingBlank,WhiteSpace,Button,Flex,Checkbox} from "antd-mobile"

import "./ticketsearch.css"
import Food from "../food/food"
import Clock from "../clock/clock"
import Service from "../service/service"
import NavLink from "../../component/navlink/navlink"
import ChooseSeat from "../../component/chooseseat/chooseseat"
import ChooseTime from "../../component/choosetime/choosetime"
import ChooseData from "../../component/choosedata/choosedata"
import CarCategory from "../../component/carcategory/carcategory"
import IconNavLink from "../../component/iconnavlink/iconnavlink"

@connect(state=>{
	return {
		state:state.ticket
	}
},{ticketSearch,selectStartStationRedux})
class TicketSearch extends React.Component{
	constructor(props){
		super(props);
		this.state={
			train_no:"",
			train_type:"",
			start_station: "南宁东",
			end_station:"广州南",
			start_time:"",
			end_time:"",
			run_time:"",
			start_station_type:"",
			end_station_type:"",
			price_list: [],
			isStudent:true
		}
		
		this.handleSearch=this.handleSearch.bind(this);
		this.handleAddress=this.handleAddress.bind(this);
		this.handleChat=this.handleChat.bind(this);
		this.handleChangeStation=this.handleChangeStation.bind(this);
		this.handleChangeStu=this.handleChangeStu.bind(this);
		this.handleDate=this.handleDate.bind(this);
	}

	handleDate(params){
	    console.log(params);
    }
	handleSearch(){
		this.props.history.push("./searchresult");
	}
	handleAddress(v){
        this.props.history.push("./addresssearch");
		if(v==="start"){
			this.props.selectStartStationRedux({start_station:"start"});
		}
		if(v==="end"){
			this.props.selectStartStationRedux({end_station:"end"});
		}
	}
	handleChat(){
		this.props.history.push("./chat");
	}
	handleChangeStation(){
		var start=this.props.state.start_station;
		var end=this.props.state.end_station;
		this.props.state.start_station=end;
		this.props.state.end_station=start;
		console.log(this.props.state.start_station);
		console.log(this.props.state.end_station);
	}
	handleChangeStu(){
		this.setState({
			isStudent:!this.state.isStudent
		})
	}	
	render(){
		const iconNavList=[{
			path:"/clock",
			text:"正晚点",
			icon:"clock",
			component:Clock,
			hide:this.props.type==="clock"
		},{
			path:"/service",
			text:"温馨服务",
			icon:"service",
			component:Service,
			hide:this.props.type==="service"
		},{
			path:"/food",
			text:"订餐服务",
			icon:"food",
			component:Food,
			hide:this.props.type==="food"
		},{
			path:"/bookcar",
			text:"约车",
			icon:"bookcar",
			component:null,
			hide:this.props.type==="bookcar"
		}];
		
		return(
			<div className="ticket-search">
				<NavBar mode="dark" key={require("./img/talk.png")} rightContent={[
      				<List.Item thumb={require("./img/talk.png")} key="2" className="icon-talk" style={{background:"transparent"}} onClick={this.handleChat}/>]}>
						车票预订
				</NavBar>
				<Switch>{
					iconNavList.map(val=>(<Route path={val.path} component={val.component} key={val.text}/>))}
				</Switch>
				<IconNavLink data={iconNavList} style={{paddingTop:20}}/>
				
				<WhiteSpace/>
				<WingBlank>
					<List >
						<Flex className="address-list">
							<Flex.Item onClick={()=>{this.handleAddress("start")}}>{this.props.state.start_station}</Flex.Item>
							<Flex.Item onClick={this.handleChangeStation}><img src={require("./img/change.png")} alt="" className="icon_change"/></Flex.Item>
							<Flex.Item onClick={()=>{this.handleAddress("end")}}>{this.props.state.end_station}</Flex.Item>
						</Flex>
					</List>
					<List className="time-list">
						<Flex>
							<Flex.Item>出发日期</Flex.Item>
							<Flex.Item>出发时间</Flex.Item>
						</Flex>
						<Flex>
							<Flex.Item><ChooseData data={this.handleDate}/></Flex.Item>
							<Flex.Item><ChooseTime/></Flex.Item>
						</Flex>
					</List>
					<List className="time-list">
						<div className="seat">席别</div>						
						<Flex>
							<Flex.Item><ChooseSeat/></Flex.Item>
							<Flex.Item><Checkbox.CheckboxItem checked={!this.state.isStudent} onChange={this.handleChangeStu}>学生</Checkbox.CheckboxItem></Flex.Item>
						</Flex>
					</List>
					
					<WhiteSpace size="lg"/>
		
					<CarCategory/>
					
					<WhiteSpace size="lg"/>
					{this.props.msg?(<p className="error-msg">{this.props.msg}</p>):null}
					<Button type="primary" onClick={this.handleSearch}>查询</Button>
				</WingBlank>
				<NavLink/>
				
				
			</div>
		)
	}
}

export default TicketSearch

//{!this.state.isStudent?(<div className="isStu-mask">
//				   <div className="mask-container">
//				      <div className="mask-content">
//				      	<p>购买学生票?</p>
//				      	<p>若优惠卡次数已使用结束,是否同意补全票价?</p>
//				      </div>
//				      <div className="mask-btn">
//					      <Button type="primary" inline onClick={this.handleChangeStu}>取消</Button>
//					      <Button type="primary" inline >确定</Button>
//				      </div>
//				   </div>
//				</div>):null}