/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Socket from '../../../Socket';
import { localizer } from '../../../Utils/localizer';

class RoundEndedRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			points: {},
			isSubmitted: false,
			character: '',
		};
		this.param = window.location.pathname.split('/')[2];
	}

	startRound = () => {
		Socket.startRound(this.param, this.state.character);
	};

	pointWord = () => {
		Socket.pointWord(this.param, this.state.points).then(() => this.setState({ isSubmitted: true }));
	};

	changePoints = (category, memberId) => (evt) =>
		this.setState({ points: { ...this.state.points, [memberId]: { ...this.state.points[memberId], [category]: evt.target.value } } });

	changeCharacter = (evt) => this.setState({ character: evt.target.value });

	render() {
		return (
			<div className="w-100">
				<div>{this.param}</div>
				<div className="w-100 font-large text-center">{this.props.room.rounds[this.props.room.rounds.length - 1].character}</div>
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">
								<div className="d-flex justify-content-around">
									<div className="mt-auto mb-auto">بازیکن</div>
								</div>
							</th>
							{this.props.room &&
								this.props.room.categories.map((v, i) => (
									<th scope="col">
										<div className="d-flex justify-content-around">
											<div className="mt-auto mb-auto">{localizer(v)}</div>
										</div>
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{this.props.room &&
							this.props.room.members.map((v, i) => (
								<tr>
									<th scope="row">{i + 1}</th>
									<th scope="row">
										<div className="d-flex justify-content-around">
											<div className="mt-auto mb-auto">{v.name}</div>
										</div>
									</th>
									{this.props.room &&
										this.props.room.categories.map((c, i) => (
											<>
												<td>
													<div className="d-flex justify-content-around">
														<div className="mt-auto mb-auto">
															{JSON.stringify(this.props.room.rounds[this.props.room.rounds.length - 1][v.id][c].value)}
														</div>
														<div className="row">
															<input
																onChange={this.changePoints(c, v.id)}
																className="mt-2  w-10 form-control"
																placeholder={'امتیاز'}
															/>
															{/* <button onClick={this.pointWord(c, v.id)} type="submit" className="mt-2 btn btn-primary">
																<span>ارسال</span>
															</button> */}
														</div>
													</div>
												</td>
											</>
										))}
								</tr>
							))}
					</tbody>
				</table>
				{!this.state.isSubmitted && (
					<button onClick={this.pointWord} type="submit" className="mt-2 btn btn-primary">
						<span>ثبت امتیازها</span>
					</button>
				)}
				{this.state.isSubmitted && (
					<div className="row">
						<input onChange={this.changeCharacter} className="mt-2  w-10 form-control" placeholder={'حرف'} />
						<button onClick={this.startRound} type="submit" className="mt-2 btn btn-primary">
							<span>راند بعدی</span>
						</button>
					</div>
				)}
			</div>
		);
	}
}

RoundEndedRoom.propTypes = {};

export default RoundEndedRoom;
