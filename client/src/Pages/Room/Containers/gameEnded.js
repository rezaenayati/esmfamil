/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Socket from '../../../Socket';

class GameEndedRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: ['name', 'family', 'city', 'country', 'object'],
			duration: 5 * 60 * 1000,
			maxNumber: 3,
		};
		this.param = window.location.pathname.split('/')[2];
	}

	startGame = () => {
		console.log(this.param);
		Socket.startGame(this.param, this.state.categories, this.state.duration, this.state.maxNumber);
	};

	render() {
		return (
			<div className="w-100">
				<div>{this.param}</div>
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">name</th>
							<th scope="col">points</th>
						</tr>
					</thead>
					<tbody>
						{this.props.room &&
							this.props.room.members
								.sort((a, b) => {
									return b.points - a.points;
								})
								.map((v, i) => (
									<tr className={i === 0 ? 'bg-red' : ''}>
										<th scope="row">{i + 1}</th>
										<td>{v.name}</td>
										<td>{v.points}</td>
									</tr>
								))}
					</tbody>
				</table>
			</div>
		);
	}
}

GameEndedRoom.propTypes = {};

export default GameEndedRoom;
