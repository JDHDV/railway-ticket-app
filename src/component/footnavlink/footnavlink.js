//底部导航
import React from "react"
import {Flex,Accordion} from "antd-mobile"

import "./footnavlink.css"

class FootNavLink extends React.Component{
	constructor(props){
		super(props);
		this.state={
			StarSort:true,
			EndSort:true,
			price:true,
			newArr:[]
		};
		
		this.handleStartSort=this.handleStartSort.bind(this);
		this.handleStartReverse=this.handleStartReverse.bind(this);
		this.handleEndSort=this.handleEndSort.bind(this);
		this.handleEndReverse=this.handleEndReverse.bind(this);
		this.handlePriceTicket=this.handlePriceTicket.bind(this);
		this.handleSpareTicket=this.handleSpareTicket.bind(this);
		this.sort2=this.sort2.bind(this);
	}
	
	//按照发时排序
	handleStartSort(){
		this.props.data.sort(function(a,b){
			var value1=a.start_time;
			var value2=b.start_time;
			return value2-value1;
		})
		
		// console.log(JSON.stringify(this.props.data))
// 	   if(this.state.StarSort){
// 		   (this.props.data).sort(this.sort2("start_time"),false);
// 		   this.state.StarSort=false;
// 	   }else{
// 		   (this.props.data).sort(this.sort2("start_time"),true);
// 		   this.state.StarSort=true;
// 	   }
// 	   console.log(JSON.stringify(this.props.data));
	   
	}
	//发时，倒序
	handleStartReverse(){
		
	}
	
	//按照到时排序
	handleEndSort(){
		
	}
	//到时，倒序
	handleEndReverse(){
		
	}
	
	//票价或余票排序
	handlePriceTicket(){
		
	}
	
	//余票
	handleSpareTicket(){
		
	}
	
	sort2(attr,rev){
		if(rev==undefined){
			rev=1
		}else{
			rev=rev?1:-1
		}
		
		return function(a,b){
			a=a[attr];
			b=b[attr];
			if(a<b){
				return rev*-1;
			}
			if(a>b){
				return rev*1;
			}
			return 0;
		}
	}
	
// 	sort(prop){
// 		return function(a,b){
// 			var val1=a[prop];
// 			var val2=b[prop];
// 			return val1-val2;
// 		}
// 	}
	
	render(){
		// console.log(this.props.data)
		return(
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
			    <Flex.Item onClick={this.handlePriceTicket}><span>票价</span>/<span>余票</span></Flex.Item>
			    </Flex>
			</div>
		)
	}
}

export default FootNavLink