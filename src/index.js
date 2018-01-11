import React from "react"
import ReactDom from "react-dom"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux"
import {BrowserRouter,Route,Switch} from "react-router-dom"

import "./config"
import "./index.css"
import reducer from "./reducer"

import Chat from "./container/chat/chat"
import Clock from "./container/clock/clock"
import Login from "./container/login/login"

import PayResult from "./container/result/result"
import Payment from "./container/payment/payment"
import AboutMe from "./container/aboutme/aboutme"
import Register from "./container/register/register"
import AddPerson from "./container/addperson/addperson"
import AddPeople from "./container/addpeople/addpeople"
import AuthRouter from "./component/authrouter/authrouter"
import SearchBook from "./container/searchbook/searchbook"
import SubmitOrder from "./container/submitorder/submitorder"
import TicketSearch from "./container/ticketsearch/ticketsearch"
import SearchResult from "./container/searchresult/searchresult"
import ConfirmOrder from "./container/confirmorder/confirmorder"
import AboutPerson from "./container/aboutperson/aboutperson"
import AddressSearch from "./container/addresssearch/addresssearch"
import BusinessService from "./container/businessservice/businessservice"

const store=createStore(reducer,compose(
	applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():f=>f
))
ReactDom.render(
	(
				
		<Provider store={store}>
			<BrowserRouter>
				<div className="box">
					<AuthRouter/>
					<Switch>
						<Route path="/" exact component={Login}/>
						<Route path="/login" component={Login}/>
						<Route path="/register" component={Register}/>
						
						<Route path="/chat" component={Chat}/>
						<Route path="/clock" component={Clock}/>
						<Route path="/result" component={PayResult}/>
						<Route path="/payment" component={Payment}/>
						<Route path="/aboutme" component={AboutMe}/>
						<Route path="/addperson" component={AddPerson}/>
						<Route path="/addpeople" component={AddPeople}/>
						<Route path="/searchbook" component={SearchBook}/>
						<Route path="/aboutperson" component={AboutPerson}/>
						<Route path="/submitorder" component={SubmitOrder}/>
						<Route path="/confirmorder" component={ConfirmOrder}/>
						<Route path="/searchresult" component={SearchResult}/>
						<Route path="/ticketsearch" component={TicketSearch}/>
						<Route path="/addresssearch" component={AddressSearch}/>
						<Route path="/businessservice" component={BusinessService}/>		
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	),document.getElementById("root")
)
