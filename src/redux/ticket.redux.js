import axios from "axios"

const SEARCH_SUCCESS="查询成功";
const ERROE_MSG="错误信息";
const SELECTSTATION="SELECTSTATION";

const initState={
	msg:"",
	train_no:"",
	train_type:"",
	start_station: "南宁东",
	end_station:"广州南",
	start_time:"",
	end_time:"",
	run_time:"",
	start_station_type:"",
	end_station_type:"",
	price_list: []
}

function searchSuccess(data){
	return {type:SEARCH_SUCCESS,data}
}

function errorMsg(data){
	return {type:ERROE_MSG,data}
}

function selectS(data){
	return {type:SELECTSTATION,data};
}

export function ticket(state=initState,action){
	switch(action.type){
		case SEARCH_SUCCESS:
			return {...state,msg:""};
		case ERROE_MSG:
			return {...state,msg:action.msg};
		case SELECTSTATION:
			return {...state,...action.data};
		default:
			return state;
	}
}

export function selectStartStationRedux(v){
	return dispatch=>{
		dispatch(selectS(v));
	}
}

export function ticketSearch({start_station,end_station}){
	if(start_station===end_station){
		return errorMsg("始发站和终点站不可相同!");
	}
	
	return dispatch=>{
		axios.post("/ticket/ticketsearch",{start_station,end_station}).then((res)=>{
			if(res.status===200&&res.data.code===0){
				dispatch(searchSuccess(res.data.data));
			}else{
				dispatch(errorMsg(res.data.msg));
			}
		})
	}
}

