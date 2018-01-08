import React from "react"
import axios from "axios"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

import {loadDate} from "../../redux/user.redux"

//权限验证
@withRouter
@connect(state=>state.user,{loadDate})
class AuthRouter extends React.Component{
	componentDidMount(){
		const publicList=["/login","/register"];
		const pathname=this.props.location.pathname;
		if(publicList.indexOf(pathname)>-1){
			return null;
		}
		//获取用户数据
		axios.get("/user/info").then((res)=>{
			if(res.status===200){
				if(res.data.code===0){
					//有登录信息
					this.props.loadDate(res.data.data);
				}else{
					//没有登录信息
					this.props.history.push("/login");
				}
			}
		})
	}
	render(){return(null)}
}

export default AuthRouter