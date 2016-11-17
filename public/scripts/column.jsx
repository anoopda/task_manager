import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Cards from './cards.jsx';
var IScroll = require('iscroll');

const Card = ({
	id,
	version,
	content
}) => {
	return (
		
			
			<Cards id={id} version={version} content={content}/> 
		
	)


}



export default class Column extends React.Component{
	constructor(props) {
		super(props);
		
		this.node = undefined;
		this.iscroll = undefined;

		this.state = {
			contentHeight: 0
		}
	}

	componentWillMount() {
		this.setState({
			contentHeight: this.props.data.length * 200 + 10
		})
	}

	componentDidMount(){
		this.iscroll = new IScroll(this.node, {
			mouseWheel: true,
			scrollbars: true,
			disableMouse: true
			
		})	
	}

	componentWillUnmount() {
		this.iscroll.destroy();
	}


	
	




	
	render(){
		const { id, name, data } = this.props;

		return(
			<div className ="columns" id={ id }  >
				<h2 className="myclass mdl-card__title mdl-card__title-text">{ name }</h2>

				<div className="wrapper" ref={node => this.node = node}onDrop={this.drop} onDragOver={this.allowDrop}>
					<div className="scroller" style={{ height: this.state.contentHeight }} >
						{
							data.map((item, index) => <Card key={index} id={item.id} version={item.version} content={item.content} />)
						}
					</div>
				</div>
			</div>
		);
	}

allowDrop(e){
	console.log("allow drop");
	e.preventDefault();
}

drop(e){
	e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    console.log("drop");
}


}
