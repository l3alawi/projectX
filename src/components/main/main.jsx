
import React from 'react';
import './main.css';
import Element from '../element/element.jsx';
import trajetData from '../../data/trajets.json';
import UserUI from '../userUI/userUI.jsx';

export default class Main extends React.Component {

	extractTrajetsData(trajetsObj){
		let trajetsElement = [];
		for(let i= 0; i< trajetsObj.trajets.length; i++){
			trajetsElement.push(<Element key={i} className="margin" trajets={trajetData.trajets[i]} />);
		}
		return trajetsElement;
	}


	render(){
		let trajetsElement = this.extractTrajetsData(trajetData);
		return(
		<div>
			<div className="columns">
				<div className="column is-4">
				<UserUI />
				</div>
				<div className="column is-6">
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
