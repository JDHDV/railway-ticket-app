//车站选择
import React from "react";
import {NavBar,Icon,SearchBar,WhiteSpace,List} from "antd-mobile";
import {connect} from 'react-redux';
import {selectStartStationRedux} from '../../redux/ticket.redux.js';

import "./addresssearch.css";

const addressData=require("./data/addressData.json");

@connect(
    state=>{
		return {
			state:state.ticket
		}
	},
    {selectStartStationRedux}
)
class AddressSearch extends React.Component{
	constructor(props){
		super(props);
		this.state={
			listGroup:[],
			display:"none",
			show:"none"
		}	
        
		this.handleBack=this.handleBack.bind(this);
		this.onShortcutTouchStart=this.onShortcutTouchStart.bind(this);
		this.handleScroll=this.handleScroll.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.selectStation=this.selectStation.bind(this);
	}
	//返回箭头
	handleBack(){
		if(this.props.state.start_station==="start"){
			this.props.selectStartStationRedux({start_station:"南宁东"});
		}
		if(this.props.state.end_station==="end"){
			this.props.selectStartStationRedux({end_station:"广州南"});
		}
		this.props.history.push("./ticketsearch");
	}
	//点击跳转到相应分组
	onShortcutTouchStart(e){
	    var anchorIndex = e.target.getAttribute("index");
	    var sumHeight=0;
	    var sum=0;
	    var listGroup=this.state.listGroup;
		if(anchorIndex===0){
			sumHeight=0;
			sum=0;
		}else{
			for(var i=0;i<anchorIndex;i++){
				sumHeight+=(listGroup[i].props.children.length)*44;
			}
			sum=sumHeight+anchorIndex*40;
		}
		this.refs.container.scrollTop=sum;
	}
	//滑动
	handleScroll(){
	    let clientHeight = this.refs.container.clientHeight; //可视区域高度
	    let scrollTop  = this.refs.container.scrollTop;  //滚动条滚动高度
	    let scrollHeight = this.refs.container.scrollHeight; //滚动内容高度
	    if((clientHeight+scrollTop)===(scrollHeight)){//如果滚动到底部
	    	this.setState({
	    		show:"block"
	    	})
	    } 
	   //滑动到一定距离，小火箭显示
	    if(scrollTop>=500){
	    	this.setState({
	    		display:"block"
	    	})
	    }else if(scrollTop<500){
	    	this.setState({
	    		display:"none"
	    	})
	    } 
	}
	//模糊查询
	handleChange(val){
		console.log(val);
	}
	//选择站点
	selectStation(v){
		if(this.props.state.start_station==="start"){
			this.props.selectStartStationRedux({start_station:v});
			this.props.history.push("./ticketsearch");
		}
		if(this.props.state.end_station==="end"){
			this.props.selectStartStationRedux({end_station:v});
			this.props.history.push("./ticketsearch");
		}
		
	}
	render(){		
		return(
			<div className="address-search" ref="container" 
			     onScroll={this.handleScroll}>
				<div className="address-search-header">
					<NavBar mode="dark" icon={<Icon type="left" onClick={this.handleBack}/>}>车站选择</NavBar>
					<WhiteSpace/>
					<SearchBar placeholder="请输入城市/车站名" maxLength={8} onChange={(val)=>this.handleChange(val)} ref={(searchInput)=>{this.searchInput=searchInput}}/>
				</div>
				
				<div className="station-container">
					<div className="station-list-right">
						<ul>
							{addressData.map(val=>(<li index={val.index} key={val.index} onClick={this.onShortcutTouchStart}>{val.title}</li>))}
						</ul>
					</div>
					<div className="station-list">
						{addressData.map(val=>(<List renderHeader={val.title}  key={val.title} ref={(list)=>{this.state.listGroup.push(list);}}>
							{val.items.map(v=>(<List.Item key={v} onClick={()=>{this.selectStation(v)}}>{v}</List.Item>))}
						</List>))}
					</div>
				</div>
				
                <div className="back-top" style={{display:this.state.display}}>
              		<img src={require("./img/top.png")} alt="" onClick={()=>{this.refs.container.scrollTop="0"}} ref="backTop"/>
				</div>
				<p className="no-more" style={{display:this.state.show}}>没有更多数据啦~</p>
			</div>
		)
	}
}

export default AddressSearch