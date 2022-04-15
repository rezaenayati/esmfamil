/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Constants from '../../Constants';

import Main from '../../Layouts/AppMain';
import Socket from '../../Socket';
import GameEndedRoom from './Containers/gameEnded';
import GameStartedRoom from './Containers/gameStarted';
import InitedRoom from './Containers/inited';
import RoundEndedRoom from './Containers/roundEnded';
import RoundPlayingRoom from './Containers/roundPlaying';

class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.param = window.location.pathname.split('/')[2];
	}

	load = () => {
		Socket.fetchRoom(this.param).then((response) => this.setState({ room: response.room }));
	};

	componentDidMount() {
		this.load();
	}

	render() {
		return (
			<Main>
				<div className="mt-5 w-100">
					{this.props.room.status === Constants.roomStatues.inited && <InitedRoom roomId={this.param} room={this.props.room} />}
					{this.props.room.status === Constants.roomStatues.gameStarted && <GameStartedRoom roomId={this.param} room={this.props.room} />}
					{this.props.room.status === Constants.roomStatues.roundPlaying && <RoundPlayingRoom roomId={this.param} room={this.props.room} />}
					{this.props.room.status === Constants.roomStatues.roundEnded && <RoundEndedRoom roomId={this.param} room={this.props.room} />}
					{this.props.room.status === Constants.roomStatues.gameEnded && <GameEndedRoom roomId={this.param} room={this.props.room} />}
				</div>
			</Main>
		);
	}
}

Room.propTypes = {};

export default Room;
