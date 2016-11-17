import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



export default class Cards extends React.Component{

render(){


	return(
			<div className=" tiles mdl-card  mdl-card--border through mdl-shadow--16dp mdl-card__supporting-text mdl-card__actions"
			id={this.props.id}
		draggable="true" onDragStart={this.drag}>
							<div>{this.props.id}</div>
							<div>{this.props.version}</div>
							<div>{this.props.content}</div>
			</div>
		 );



}

drag(e){
   e.dataTransfer.setData("text",e.target.id);

}

}