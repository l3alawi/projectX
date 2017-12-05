
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

	}


	extractTrajetsData0(trajetsObj){
		let trajetsElement = [];
		for(let i= 0; i< trajetData.trajets.length; i++){
			trajetsElement.push(<div className="animated bounceInDown" style={{animationDelay: i/3 + "s"}}><Element0 key={i} trajets={trajetData.trajets[i]} /></div>);
		}
		return trajetsElement;

		//<canvas className="canvas" ref="myCanvas" width={this.width} height={this.height}></canvas>
	}


	render(){
		let trajetsElement = this.extractTrajetsData0(trajetData);
		return(
		<div>

			<div className="columns">
				<div className="column is-3">
				<UserUI />
				</div>
				<div className="column is-7">
				<div className="marginButtom">{trajetData.trajets.length} résultats</div>
					{trajetsElement}
				</div>
				<div className="column is-2">

				</div>
			</div>
		</div>
		)
	}
}









// Golden Ratio


// 	drawRect(x,y,w,h){
// 		const c = this.refs.myCanvas;
// 		let ctx = c.getContext("2d");
// 		ctx.strokeRect(x, y, w, h);
//
//
// 	}
//
//    fibonaci(max, x , y, bool){
// 	let i,j,k;
// 	if(this.add(x,y) < max){
// 		i = this.add(x,y);
// 		j = y;
// 		if(bool){
// 			this.drawRect(j,1,i,i);
// 			bool = false;
// 		}else{
// 			this.drawRect(1,j,i,i);
// 			bool = true;
// 		}
//
// 		this.fibonaci(max, y , this.add(x,y),bool);
// 		console.log(i);
// 	} else {
// 		return i;
// 	}
// }
//
//    add(x, y){
// 	return x + y;
// }
