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

	$.ajax({
    url: "http://localhost:8085/json/list.json",
    dataType: "json",
    success : function(val){
     this.setState({data:val,loading:true});
    }.bind(this)
	});     
}





render(){		
				
				if(!this.state.loading){
				
					return <div>loading</div>
				
				}
				if(this.state.loading)
				{
			
				return(
				<section className ="task_wrapprer">
					<Column id={"todo"}  name={"Todo"} data={this.state.data.todo}/>
					<Column id={"inprogress"} name={"In Progress"} data={this.state.data.qafailed}/>
					<Column id={"qa_ready"}  name={"QA Ready"} data={this.state.data.inprogress}/>
					<Column id={"qa_failed"} name ={"QA FAiled"} data={this.state.data.qaready}/>
					<Column id={"accepted"} name={"Accepted"} data={this.state.data.accepted}/>
					<Column id={"closed"}  name ={"Closed"} data={this.state.data.close}/>
				
				</section>
				);
	
				}
			}
}

ReactDOM.render(<Taskwrapper/>, document.getElementById('app'));
