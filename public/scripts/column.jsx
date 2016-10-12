import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
export default class Column extends React.Component{


render(){
				 var arr = this.props.data.todo;

	return(
			<div className ="columns">
				
					{
					
					
         	 			arr.map(function(value) {
          				return<section className="tiles"><div>{value.id}</div><div>{value.version}</div><div>{value.content}</div></section>
          					
          			})
        


					}	
				
				

			</div>

		  );
		
		}



}
