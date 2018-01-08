import axios from "axios"
import io from "socket.io-client"
const socket=io("地址");

const MSG_LIST="获取信息列表";
const MSG_RECV="接收信息";

const initState={
	chatmsg:[],
	unread:0
}

function msgList(msgs){
    return {type:MSG_LIST,data:msgs}
}

function msgRecv(msg){
    return {type:MSG_RECV,data:msg}
}

export function sendMsg(msg){
    return dispatch=>{
        socket.emit("sendmsg",msg);
    }
}

export function recvMsg(){
    return dispatch=>{
        socket.on("recvmsg",(msg)=>{
            dispatch(msgRecv(msg))
        })
    }
}

export function getMsgList(){
    return dispatch=>{
        axios.get("/user/getMsgList").then((res)=>{
            dispatch(msgList(res.data.msgs))
        })
    }
}

export function chat(state=initState,action){
    switch(action.type){
        case MSG_LIST:
            return {...state,chatmsg:action.data,unread:action.data.filter(v=>!v.read).length}
        case MSG_RECV:
            return {...state,chatmsg:[...state.chatmsg,action.data],unread:state.unread+1}
        default:
            return state
    }
}