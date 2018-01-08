import React from "react"
import BScroll from "better-scroll"

class Scroll extends React.Component{
	constructor(props){
		super(props);
		this.state={
			probeType:{
				type:Number,
				default:1
			},
			click:{
				type:Boolean,
				default:true
			},
			data:{
				type:Array,
				default:null
			},
			listenScroll:{
				type:Boolean,
				default:false
			}
		};
	}
	scroll(){
		setTimeout(()=>{
	        this._initScroll()
	    },20)
	}
	_initScroll(){
		if(!this.refs.wrapper){
			return;
		}
		this.scroll=new BScroll(this.refs.wrapper,{
			probeType:this.probeType,
			click:this.click
		})
		if(this.listenScroll){
			this.scroll.on("scroll",(pos)=>{
				this.$emit("scroll",pos)
			})
		}
	}
	
	refresh(){
		this.scroll&&this.scroll.refresh();
	}
	scrollTo(){
		this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments);
	}
	scrollToElement(){
		this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)
	}
	data(){
		setTimeout(()=>{
            this.refresh()
        },20)
	}
	render(){
		return(
			<div ref="wrapper">
				
			</div>
		)
	}
}
export default Scroll