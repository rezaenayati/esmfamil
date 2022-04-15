/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Socket from '../../../Socket';
import { localizer } from '../../../Utils/localizer';

class RoundPlayingRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: ['name', 'family'],
			duration: 5 * 60 * 1000,
			maxNumber: 3,
		};
		this.param = window.location.pathname.split('/')[2];
	}

	enterWord = (category) => () => {
		Socket.enterWord(this.param, category, this.state[category]);
	};

	endRound = () => {
		Socket.askEndRound(this.param);
	};

	changeCategories = (category) => (evt) => this.setState({ [category]: evt.target.value });

	timer = () => {
		const diffMS = this.props.room.roundDeadline - Date.now();
		const diffS = Math.round(diffMS / 1000);
		const diffM = Math.round(diffS / 60);
		this.setState({ timer: `${diffM} دقیقه ${diffS - diffM * 60} ثانیه` });
	};

	startTimer = () => {
		setInterval(this.timer, 1000);
	};

	render() {
		return (
			<div className="w-100">
				{this.startTimer()}
				<div>آیدی اتاق: {this.param}</div>
				<div>زمان باقی مانده: {this.state.timer}</div>
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">کاربر</th>
							<th scope="col">امتیاز</th>
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
				<div className="w-100 font-large text-center">{this.props.room.currentRound.character}</div>
				<div>
					{this.props.room.categories.map((v) => (
						<div className="d-flex">
							<input onChange={this.changeCategories(v)} className="mt-2 form-control" placeholder={`${localizer(v)} را وارد کنید.`} />
							<button onClick={this.enterWord(v)} type="submit" className="mt-2 btn btn-primary">
								<span>ارسال</span>
							</button>
						</div>
					))}
					<button onClick={this.endRound} type="submit" className="mt-2 btn btn-primary">
						<span>درخواست پایان راند</span>
					</button>
				</div>
			</div>
		);
	}
}

RoundPlayingRoom.propTypes = {};

export default RoundPlayingRoom;
