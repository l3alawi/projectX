
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
