//查询结果页
import React from "react"
import {connect} from "react-redux"
import {ticketSearch,selectStartStationRedux} from "../../redux/ticket.redux"
import {NavBar,Icon,Popover,Flex,List,Accordion,WhiteSpace} from "antd-mobile"

import "./searchresult.css"
import "./footnavlink.css"

const Item = Popover.Item;
const dataObj=require("./data/data.js");
const dataArr=dataObj.default.data;


@connect(state=>{
	return {
		state:state.ticket
	}
},{ticketSearch,selectStartStationRedux})
class SearchResult extends React.Component{
	constructor(props){
		super(props);
		this.state={
			train_no:"",
			train_type:"",
			start_station:"",
			end_station:"",
			start_time:"",
			end_time:"",
			run_time:"",
			start_station_type:"",
			end_station_type:"",
			price_list: [],
			stuShow:false,
			data:"",
			arr:[],
			newArr:[],
			index:0,
			price:false,
			StarSort:true
		}
		this.handleBack=this.handleBack.bind(this);
		this.handleTouchEnd=this.handleTouchEnd.bind(this);
		this.getCookie=this.getCookie.bind(this);
		this.beforeData=this.beforeData.bind(this);
		this.afterData=this.afterData.bind(this);
		this.handleBeforeData=this.handleBeforeData.bind(this);
		this.handleAfterData=this.handleAfterData.bind(this);
		this.handleStartSort=this.handleStartSort.bind(this);
		this.handleEndSort=this.handleEndSort.bind(this);
		this.handlePricTick=this.handlePricTick.bind(this);
		this.test=this.test.bind(this);

		var data=this.getCookie("data");
		this.state.data=data;
		
		var start=this.getCookie("start");
		var end=this.getCookie("end");
		
		for(var i=0;i<dataArr.length;i++){
			if(dataArr[i].start_station.indexOf(start)>-1&&dataArr[i].end_station.indexOf(end)>-1){
				this.state.arr.push(dataArr[i]);
			}
		}
	}
	
	componentDidMount() {
		this.timerID = setInterval(() =>this.test(),1000);
	}
			
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	state = {
	    visible: false,
	    selected:""
	}
	
	onSelect = (opt) => {
	    this.setState({
		    visible:false,
		    selected: opt.props.value
	    });
	}
	
	handleVisibleChange = (visible) => {
	    this.setState({
	    	visible
	    });
	}
	
	handleBack(){
		this.props.history.push("./ticketsearch");
	}
	
	handleTouchEnd(){
		this.props.history.push("./confirmorder");
	}
	handleBeforeData(){
		this.beforeData(this.state.data);
	}
	handleAfterData(){
		this.afterData(this.state.data);
	}
	
	test(){
		this.setState({
      newArr: this.state.arr
    });
	}
	handleStartSort(){
			this.state.arr.reverse(function(a,b){
				var value1=a.start_time;
				var value2=b.start_time;
				return value1-value2;
			})
	}
	
	handleEndSort(){
		console.log(111)
		this.state.arr.reverse(function(a,b){
			var value1=a.end_time;
			var value2=b.end_time;
			return value1-value2;
		})
		console.log(JSON.stringify(this.state.arr))
	}
	handlePricTick(){
		if(!this.state.price){
			this.setState({
				price:true
			})
		}else{
			this.setState({
				price:false
			})
		}
	}
	//前一天
	beforeData(date){
	   var date=date.split('-'),
     today = new Date().setFullYear(+date[0], +date[1]-1, +date[2]),
     yesterday = new Date(today - 24 * 60 * 60 * 1000);
     var y = yesterday.getFullYear();
     var m = yesterday.getMonth() + 1;
     var d = yesterday.getDate();
     if(m<10){
       m = '0'+m;  
     }
     if(d<10){
          d = '0'+d;
     }
		 
		 var data=y+'-'+m+'-'+d;
		 this.setState({
			 data:data
		 })
	}
	
	//后一天
	afterData(date){
		 var date=date.split('-'),
		 today = new Date().setFullYear(+date[0], +date[1]-1, +date[2]),
		 yesterday = new Date(today + 24 * 60 * 60 * 1000);
		 var y = yesterday.getFullYear();
		 var m = yesterday.getMonth() + 1;
		 var d = yesterday.getDate();
		 if(m<10){
		 	m = '0'+m;  
		 }
		 if(d<10){
		 		d = '0'+d;
		 }
		 
		 var data=y+'-'+m+'-'+d;
		 this.setState({
		 	data:data
		 })
	}
	
	getCookie(name){
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))  return unescape(arr[2]);
		else return null;
	}
  
	render(){
		return(
			<div className="search-result">
				<div>
				    <NavBar  mode="dark"  icon={<Icon type="left" onClick={this.handleBack}/>}
		       			rightContent={
		          			<Popover  overlayClassName="fortest"
			            		visible={this.state.visible}
			            		overlay={[
			             				 (<Item key="4" value="刷新" icon={(<img src={require("./img/load.png")} alt="" className="icon-refresh" />)} data-seed="logId">刷新</Item>),
					              (<Item key="5" value="special" icon={(<img src={require("./img/shaixuan.png")} alt=""/>)} style={{ whiteSpace:"nowrap" }}>筛选</Item>),
					              (<Item key="6" value="button ct" icon={(<img src={require("./img/down.png")} alt=""/>)}>
					                <span style={{ marginRight: 5 }}>保存本地</span>
					              </Item>),(<Item key="7" value="button ct" icon={(<img src={require("./img/share.png")} alt=""/>)}>
					                <span style={{ marginRight: 5 }}>分享好友</span>
					              </Item>)
					            ]}
					            align={{
					              overflow: {adjustY:0,adjustX:0},
					              offset: [-10,0],
					            }}
					            onVisibleChange={this.handleVisibleChange}
					            onSelect={this.onSelect}>
					            <div style={{
						              height: "100%",
						              padding: "0 15px",
						              marginRight: "-15px",
						              display: "flex",
						              alignItems: "center",
						            }}>
						            <Icon type="ellipsis" />
					            </div>
					        </Popover>}>
			       		{this.getCookie("start")?this.getCookie("start"):this.props.state.start_station}<img src={require("./img/arror.png")} alt="" style={{width:"32px",height:"15px"}}/>{this.getCookie("end")?this.getCookie("end"):this.props.state.end_station} {this.getCookie("stu")?'(学生)':''}
								
			        </NavBar>		      
		     	</div>
		     
			    
			    
					<NavBar className="data-nav test" leftContent={<span onClick={this.handleBeforeData}>前一天</span>} rightContent={<span onClick={this.handleAfterData}>后一天</span>}>
		     		<span style={{fontSize:"12px"}}>{this.getCookie("data")?this.getCookie("data"):this.state.data}</span>
		     	</NavBar>

					{this.state.newArr.map(val=>(
				<Accordion key={this.state.index++}>
			        <Accordion.Panel header={(
			        	<List className="train-list" onTouchEnd={this.handleTouchEnd}>
				     		<List.Item>
				     			<Flex className="result-list">
				     				<Flex.Item>
				     					{val.train_no}
				     				</Flex.Item>
				     				<Flex.Item>
				     					<List.Item multipleLine onClick={() => {}}>{val.start_station}<List.Item.Brief>{val.start_time}</List.Item.Brief></List.Item>
				     				</Flex.Item>
										
										
				     				<Flex.Item className="result-info-list">
											<p><img src={require("./img/ticket.png")} alt=""/></p>
											<p><img src={require("./img/arrow-right.png")} alt=""/></p>
											<p>{val.run_time}</p>
				     				</Flex.Item>
				     				<Flex.Item className="result-info-list">
				     					<List.Item multipleLine onClick={() => {}}>{this.getCookie("end")?this.getCookie("end"):this.props.state.end_station} <List.Item.Brief>{val.end_time}</List.Item.Brief>
		        </List.Item>
				     				</Flex.Item>
				     			</Flex>
				     		</List.Item>
				     		<WhiteSpace size="lg"/ >
				     		<List.Item className="seat-category-list">
				     			<Flex className="seat-list">
									{val.price_list.map(v=>(
										<Flex.Item key={this.state.index++}>
											{v.price_type}:{this.state.price?(v.price+"￥"):(v.num+"张")}
										</Flex.Item>
									))}
				     			</Flex>
				     		</List.Item>
			     		</List>
			        )}>
			            <List>
				            <List.Item>
				            	<Flex className="train-info-title">
				            		<Flex.Item>站序</Flex.Item>
				            		<Flex.Item>站名</Flex.Item>
				            		<Flex.Item>到时</Flex.Item>
				            		<Flex.Item>发时</Flex.Item>
				            		<Flex.Item>停留</Flex.Item>
				            	</Flex>
				            </List.Item>
				            <List.Item>
				            	<Flex className="tranin-info-content">
				            		<Flex.Item>1</Flex.Item>
				            		<Flex.Item>北京</Flex.Item>
				            		<Flex.Item>----</Flex.Item>
				            		<Flex.Item>13:45</Flex.Item>
				            		<Flex.Item>----</Flex.Item>
				            	</Flex>
				            </List.Item>
			            </List>
			      	</Accordion.Panel>
			    </Accordion>
					))}
					
					
					<div className="foot-navlink">
					<Flex>
						<Flex.Item  onClick={this.handleStartSort}><Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
							<Accordion.Panel header="发时"></Accordion.Panel>
						</Accordion>
						</Flex.Item>
						<Flex.Item><Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
							<Accordion.Panel header="历时"></Accordion.Panel>
						</Accordion>
						</Flex.Item>
						<Flex.Item  onClick={this.handleEndSort}><Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
							<Accordion.Panel header="到时"></Accordion.Panel>
						</Accordion>
						</Flex.Item>
						<Flex.Item onClick={this.handlePricTick}>
						       <span className={this.state.price?"curr":""}>票价</span>/<span className={this.state.price?"":"curr"}>余票</span>
						</Flex.Item>
						</Flex>
					</div>
			</div>
		)
	}
}

export default SearchResult
