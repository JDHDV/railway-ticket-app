//拦截请求
import axios from "axios"
import {Toast} from "antd-mobile"

axios.interceptors.request.use((config)=>{
	Toast.loading("正在加载中...",0);
	return config;
})

axios.interceptors.request.use((config)=>{
	setTimeout(()=>{
		Toast.hide();
	},500)
	return config;
})
