import {combineReducers} from "redux"
import {user} from "./redux/user.redux"
import {ticket} from "./redux/ticket.redux"
import {chatuser} from "./redux/chatuser.redux"
//import {chat} from "./redux/chat.redux"

export default combineReducers({user,ticket,chatuser})
