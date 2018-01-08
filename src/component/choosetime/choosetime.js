//选择时间
import React from "react"
import {Picker,List} from "antd-mobile"

const timeList = [
  [
    {
	    label: "00:00-24:00",
	    value: "00:00-24:00"
    },
    {
     	label: "00:00-06:00",
      	value: "00:00-06:00"
    },{
       	label: "06:00-12:00",
     	value: "06:00-12:00"
    },{
    	label:"12:00-18:00",
      	value: "12:00-18:00"
    },{
    	label: "18:00-24:00",
     	value: "18:00-24:00"
    }
  ]
];
class ChooseTime extends React.Component{
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ["00:00-24:00"],
    visible: false
  };
  render() {
  	const imgUrl=require("./img/clock.png");
    return (<div>
      <List style={{backgroundColor:"white"}} className="picker-list">
          <List.Item>
         		<Picker  data={timeList} cascade={false}  value={this.state.sValue}
				      onChange={val=>this.setState({sValue:val})}
				      onOk={val=>this.setState({sValue:val})}
				      key={this.state.sValue}>
			    		<List.Item thumb={imgUrl}/>
        		</Picker>
        	</List.Item>
      </List>
    </div>)
  }
}
export default ChooseTime