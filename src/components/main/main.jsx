
import React from 'react';
import './main.css';
import Element from '../element/element.jsx';
import Element0 from '../element0/element0.jsx';
import trajetData from '../../data/trajets.json';
import UserUI from '../userUI/userUI.jsx';

export default class Main extends React.Component {

	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.height = window.innerHeight;
		this.width = window.innerWidth;

	}

	componentDidMount(){
		console.log(this.fibonaci(1000,0,1,true));
		//this.drawRect(100,100,10,10);

		/*this.drawRect(100,100,10,10);
		this.drawRect(100,110,10,10);
		this.drawRect(110,100,20,20);
		this.drawRect(100,120,30,30);*/
		//this.drawRect(102,100,3,3);
		//this.drawRect(100,103,5,5);
		//this.drawRect(105,100,8,8);
		//this.drawRect(100,108,13,13);
		//this.drawRect(113,100,21,21);
	}

	drawRect(x,y,w,h){
		const c = this.refs.myCanvas;
		let ctx = c.getContext("2d");
		ctx.strokeRect(x, y, w, h);
		

	}

   fibonaci(max, x , y, bool){
	let i,j,k;
	if(this.add(x,y) < max){
		i = this.add(x,y);
		j = y;
		if(bool){
			this.drawRect(j,1,i,i);
			bool = false;
		}else{
			this.drawRect(1,j,i,i);
			bool = true;
		}
		
		this.fibonaci(max, y , this.add(x,y),bool);
		console.log(i);
	} else {
		return i;
	}
}

   add(x, y){
	return x + y;
}


	extractTrajetsData(trajetsObj){
		let trajetsElement = [];
		for(let i= 0; i< trajetsObj.trajets.length; i++){
			trajetsElement.push(<Element key={i} className="margin" trajets={trajetData.trajets[i]} />);
		}
		return trajetsElement;
	}

	extractTrajetsData0(trajetsObj){
		let trajetsElement = [];
		for(let i= 0; i< trajetsObj.trajets.length; i++){
			trajetsElement.push(<Element0 key={i} className="margin" trajets={trajetData.trajets[i]} />);
		}
		return trajetsElement;
	}


	render(){
		let trajetsElement = this.extractTrajetsData0(trajetData);
		return(
		<div>
			<canvas className="canvas" ref="myCanvas" width={this.width} height={this.height}></canvas>
			<div className="columns">
				<div className="column is-3">
				<UserUI />
				</div>
				<div className="column is-7">
				<div className="marginButtom">{trajetData.trajets.length} résultats</div>
					<Element0  />
				</div>
				<div className="column is-2">

				</div>
			</div>
		</div>
		)
	}
}
