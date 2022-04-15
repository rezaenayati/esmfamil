/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Socket from '../../../Socket';

class GameStartedRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			character: '',
		};
		this.param = window.location.pathname.split('/')[2];
	}

	startRound = () => {
		Socket.startRound(this.param, this.state.character);
	};

	changeCharacter = (evt) => this.setState({ character: evt.target.value });

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
							this.props.room.members.map((v, i) => (
								<tr>
									<th scope="row">{i + 1}</th>
									<td>{v.name}</td>
									<td>{v.points}</td>
								</tr>
							))}
					</tbody>
				</table>
				<div className="row">
					<input onChange={this.changeCharacter} className="mt-2  w-10 form-control" placeholder={'حرف'} />
					<button onClick={this.startRound} type="submit" className="mt-2 btn btn-primary">
						شروع راند {this.props.room.roundNumber + 1}
					</button>
				</div>
			</div>
		);
	}
}

GameStartedRoom.propTypes = {};

export default GameStartedRoom;
