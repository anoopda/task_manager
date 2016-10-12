import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Column from './column.jsx';
export default class Taskwrapper extends React.Component{

constructor(){
super();
	this.state= ({data:[],loading:false});
}

componentWillMount() {
this.setState({data:[],loading:false});
 console.log("entered will");
	$.ajax({
    url: "http://localhost:8085/json/list.json",
    dataType: "json",
    success : function(val){
    console.log("entered did mount");
    console.log(this.state.loading);	
     this.setState({data:val,loading:true});
    }.bind(this)
	});     
}




render(){		
				console.log("entered render");
				if(!this.state.loading){
					console.log("loading");
					return <div>loading</div>
				
				}
				if(this.state.loading)
				{
				console.log(this.state.data);
				return(
				<section className ="task_wrapprer">
					<Column id="todo" data={this.state.data}/>
					<Column id="inprogress" data={this.state.data}/>
					<Column id="qa_ready" data={this.state.data}/>
					<Column id= "qa_failed" data={this.state.data}/>
					<Column id="accepted" data={this.state.data}/>
					<Column id="closed" data={this.state.data}/>
				</section>
				);
	
				}
			}



}

ReactDOM.render(<Taskwrapper/>, document.getElementById('app'));

