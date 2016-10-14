import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
var IScroll = require('iscroll');
export default class Column extends React.Component{



componentDidUpdate(){
	
 var wrapper = this.refs.scroll;
 var myScroll = new IScroll(wrapper,{ 
 	mouseWheel: true,
    scrollbars: true
})
 

}



render(){			

			
				 var arr = this.props.data;
				

	return(
			<div className ="columns" ref="scroll" id={this.props.id} >
					<h2 className=" mdl-card__title mdl-card__title-text">{this.props.name}</h2>
					{
         	 			arr.map(function(value,key) {
          				return<div className=" tiles mdl-card  mdl-card--border mdl-shadow--2dp through mdl-shadow--16dp mdl-card__supporting-text mdl-card__actions" id={value.id} key={key} ><div>{value.id}</div><div>{value.version}</div><div>{value.content}</div></div>
          					
          			})
        
					}		
			</div>

		  );
		
		

	}
	


}
