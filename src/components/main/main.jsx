
import React from 'react';
import './main.css';
import Element from '../element/element.jsx';
import Element0 from '../element0/element0.jsx';
import trajetData from '../../data/trajets.json';
import UserUI from '../userUI/userUI.jsx';
import Create from '../create/create.jsx';
import Search from '../search/search.jsx';

export default class Main extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			create: false,
			search: false,
			villeD: "",
			villeF: ""
		};
		this.createTrajet = this.createTrajet.bind(this);
		this.hideCreateTrajet = this.hideCreateTrajet.bind(this);
		this.createSearch = this.createSearch.bind(this);
		this.hideSearch = this.hideSearch.bind(this);
		this.search = this.search.bind(this);
	}

	componentWillMount(){
		this.height = window.innerHeight;
		this.width = window.innerWidth;

	}

	componentDidMount(){

	}

	createTrajet(){
		if(this.state.search){
			this.setState({
			search:false
		});

		}
		this.setState({
			create:true
		})
	}

	hideCreateTrajet(){
		this.setState({
			create:false
		})
	}

	createSearch(){
		if(this.state.create){
			this.setState({
			create:false
		});
	}
			this.setState({
			search:true
		})
}
	hideSearch(){
		this.setState({
			search:false
		})
	}

	search(depart,arrivee){
		this.setState({
			villeD: depart,
			villeF:arrivee
		})
	}


	extractTrajetsData0(trajetsObj,depart,arrivee,dateD,dateF,time,prix){
		let trajetsElement = [];
		trajetData.trajets.forEach(function(e,index){
			if(e.trajet.from.city.toUpperCase().includes(depart.toUpperCase()) && e.trajet.to.city.toUpperCase().includes(arrivee.toUpperCase())){
				trajetsElement.push(<div key={index} className="animated bounceInDown" style={{animationDelay: index/7 + "s"}}><Element0 trajets={e} /></div>);
			}

		})
		return trajetsElement;

		//<canvas className="canvas" ref="myCanvas" width={this.width} height={this.height}></canvas>
	}

	showCreateElement(){
		if(this.state.create){
			return <Create hide={this.hideCreateTrajet} />
		}else{
			return ""
		}
	}

	showSearchElement(){
		if(this.state.search){
			return <Search hide={this.hideSearch} search={this.search} />
		}else{
			return ""
		}
	}


	render(){
		let trajetsElement = this.extractTrajetsData0(trajetData,this.state.villeD,this.state.villeF);
		return(
		<div>

			<div className="columns">
				<div className="column is-3">
				<UserUI create={this.createTrajet} search={this.createSearch} />
				</div>
				<div className="column is-7">
				<div className="marginButtom">{trajetData.trajets.length} résultats</div>
					{this.showCreateElement()}
					{this.showSearchElement()}
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
