//公共方法
export function getRedirectPath({type,name}){
	//根据用户信息返回跳转地址
//	let url =(name!=="")?"/adult":"/children";
    let url="/ticketsearch";
//	if(!name){
//		url+="info"
//	}
	return url;
}
