/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { withRouter } from 'react-router-dom';

import Main from '../../Layouts/AppMain';
import Socket from '../../Socket';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roomId: '',
			name: '',
		};
	}

	createNewRoom = () => {
		console.log(this.state);
		Socket.createRoom(this.state.name).then((response) => this.props.history.push(`/room/${response.roomId}`));
	};

	joinRoom = () => {
		console.log(this.state);
		Socket.joinRoom(this.state.roomId, this.state.name).then(() => this.props.history.push(`/room/${this.state.roomId}`));
	};

	changeRoomId = (evt) => this.setState({ roomId: evt.target.value });

	changeName = (evt) => this.setState({ name: evt.target.value });

	render() {
		return (
			<Main>
				<div className="w-100">
					<input onChange={this.changeName} className="mt-2 form-control" placeholder={'نام خود را وارد کنید.'} />
					<button onClick={this.createNewRoom} type="submit" className="mt-2 btn btn-primary">
						ساخت اتاق جدید
					</button>
					<hr />
					<input onChange={this.changeName} className="mt-2 form-control" placeholder={'نام خود را وارد کنید.'} />
					<input onChange={this.changeRoomId} className="mt-2 form-control" placeholder={'شماره اتاق را وارد کنید.'} />
					<button onClick={this.joinRoom} type="submit" className="mt-2 btn btn-primary">
						ورود
					</button>
				</div>
			</Main>
		);
	}
}

Home.propTypes = {};

export default withRouter(Home);
