//查询结果页
import React from "react"
import {NavBar,Icon,Popover,Flex,List,Accordion,WhiteSpace} from "antd-mobile"

import "./searchresult.css"
import FootNavLink from "../../component/footnavlink/footnavlink"

const Item = Popover.Item;

class SearchResult extends React.Component{
	constructor(props){
		super(props);
		this.state={
			train_no:"",
			train_type:"",
			start_station: "",
			end_station:"",
			start_time:"",
			end_time:"",
			run_time:"",
			start_station_type:"",
			end_station_type:"",
			price_list: []
		}
		this.handleBack=this.handleBack.bind(this);
		this.handleTouchEnd=this.handleTouchEnd.bind(this);
	}
	state = {
	    visible: false,
	    selected:""
	};
	onSelect = (opt) => {
	    this.setState({
		    visible:false,
		    selected: opt.props.value
	    });
	};
	handleVisibleChange = (visible) => {
	    this.setState({
	    	visible
	    });
	};
  	handleBack(){
  		this.props.history.push("./ticketsearch");
  	}
  	handleTouchEnd(){
		this.props.history.push("./confirmorder");
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
		             				 (<Item key="4" value="刷新" icon={(<img src={require("./img/load.png")} alt="" className="icon-refresh"/>)} data-seed="logId">刷新</Item>),
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
	          </Popover>
	        }>
			        NavBar
			      </NavBar>		      
		     	</div>
		     	
			    <FootNavLink/>
			    
		     	<NavBar className="data-nav" leftContent="前一天" rightContent="后一天">NavBar</NavBar>

				<Accordion >
			        <Accordion.Panel header={(
			        	<List className="train-list" onTouchEnd={this.handleTouchEnd}>
				     		<List.Item>
				     			<Flex className="result-list">
				     				<Flex.Item>
				     					G13
				     				</Flex.Item>
				     				<Flex.Item>
				     					<List.Item multipleLine onClick={() => {}}>北京西 <List.Item.Brief>13:45</List.Item.Brief></List.Item>
				     				</Flex.Item>
				     				<Flex.Item className="result-info-list">
										<p><img src={require("./img/ticket.png")} alt=""/></p>
										<p><img src={require("./img/arrow-right.png")} alt=""/></p>
										<p>111</p>
				     				</Flex.Item>
				     				<Flex.Item className="result-info-list">
				     					<List.Item multipleLine onClick={() => {}}>上海虹桥 <List.Item.Brief>13:45</List.Item.Brief>
		        </List.Item>
				     				</Flex.Item>
				     			</Flex>
				     		</List.Item>
				     		<WhiteSpace size="lg"/ >
				     		<List.Item className="seat-category-list">
				     			<Flex className="seat-list">
				     				<Flex.Item>
				     					商务:1张
				     				</Flex.Item>
				     				<Flex.Item>
				     					商务:1张
				     				</Flex.Item>
				     				<Flex.Item>
				     					商务:1张
				     				</Flex.Item>
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
			</div>
		)
	}
}

export default SearchResult
