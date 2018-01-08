//选择席别
import React from "react"
import {Picker,List} from "antd-mobile"

import "./chooseseat.css"

const seatList = [
  [
    {
      label: "不限",
      value: "不限"
    },
    {
      label: "商务座",
      value: "商务座"
    },{
    	label: "特等座",
      value: "特等座"
    },{
    	label: "一等座",
      value: "一等座"
    },{
    	label: "二等座",
      value: "二等座"
    },{
    	label: "高级软卧",
      value: "高级软卧"
    },{
    	label: "软卧",
      value: "软卧"
    },{
    	label: "硬卧",
      value: "硬卧"
    },{
    	label: "软座",
      value: "软座"
    },{
    	label: "硬座",
      value: "硬座"
    }
  ]
];
class ChooseSeat extends React.Component{
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ["不限"],
    visible: false
	}
  render() {
    return (<div>
      <List style={{ backgroundColor: "white" }} className="picker-list">
          <List.Item>
         				<Picker
				          data={seatList}
				          cascade={false}
				          value={this.state.sValue}
				          onChange={val=>this.setState({sValue:val})}
				          onOk={val=>this.setState({sValue:val})}
				          key={this.state.sValue}>
			    				<List.Item/>
        		 		</Picker>
        	</List.Item>
      </List>
    </div>)
  }
}
export default ChooseSeat