//电话号码验证
import React from "react"
import {List,InputItem,Toast } from "antd-mobile"

import "./phoneinput.css"

class PhoneInput extends React.Component {
	state = {
	    hasError: false,
	    value: ""
	}
	onErrorClick = () => {
	   	if (this.state.hasError) {
	      Toast.info("Please enter 11 digits");
	    }
	}
  	onChange = (value) => {
    if (value.replace(/\s/g, "").length < 11) {
      this.setState({
        hasError: true,
      })
    }else {
      this.setState({
        hasError: false
      })
    }
    this.setState({
      value
    })
    if(value.length>=13){
    	this.props.phoneOnChange(value);
    }
  }
  	
  render() {
    return (
      <div>
        <List>
          <InputItem
            type="phone"
            placeholder="请输入您的手机号码"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
        </List>
      </div>
    )
  }
}

export default PhoneInput