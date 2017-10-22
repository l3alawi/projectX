
import React from 'react';
import Element from '../element/element.jsx';

export default class Main extends React.Component {
	render(){
		return(
		<div>
			<div className="columns">
				<div className="column is-3">

				</div>
				<div className="column is-6">
					<Element />
				</div>
				<div className="column is-3">

				</div>
			</div>
		</div>
		)
	}
}
