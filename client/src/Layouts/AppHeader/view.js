/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, NavLink, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import Text from '../../Wrappers/Text';
import { localizer } from '../../Utils/localizer';
import supportIcon from '../../Assets/Icons/icons8-online-support-64.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	get getstate() {
		return this.state;
	}

	logout = () => {
		const { handleLogout } = this.props;
		handleLogout();
	};

	changeLocal = () => {
		const { changeLocal, local } = this.props;
		if (local === 'en') {
			changeLocal('fa');
		}
		if (local === 'fa') {
			changeLocal('en');
		}
		this.render();
	};

	render() {
		const { isAuthenticated, local, superuser } = this.props;
		const PrivateHeader = () => (
			<Navbar className="app-header justify-content-between" expand="lg">
				<NavbarBrand>
					<NavLink href="/" className="text-white hide-in-md">
						{localizer('headerTitle')}
					</NavLink>
				</NavbarBrand>
				<div className="d-flex justify-content-between">
					<UncontrolledDropdown className="w-max-content" right inNavbar>
						<DropdownToggle className="text-white d-flex align-center pr-0 pl-0" nav>
							<img src={supportIcon} alt="" className="support-icon mr-1 ml-1" />
							<Text>{superuser}</Text>
						</DropdownToggle>
						<DropdownMenu right={local !== 'fa'} className="min-width-0">
							<DropdownItem className="" onClick={this.changeLocal}>
								<div className="text-center">{local === 'fa' ? 'en' : 'فا'}</div>
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem className="" onClick={this.logout}>
								<div className="text-center">{localizer('logout')}</div>
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</div>
			</Navbar>
		);
		const PublicHeader = () => (
			<Navbar className="app-header">
				<NavbarBrand>
					<NavLink className="text-white cursor-hand" href="/">
						اسم فامیل آنلاین
					</NavLink>
				</NavbarBrand>
				{/* <NavLink className="text-white cursor-hand" onClick={this.changeLocal}>
					<Text>{local === 'fa' ? 'en' : 'فا'}</Text>
				</NavLink> */}
			</Navbar>
		);
		return (
			<div className="app-header">
				<PublicHeader />
			</div>
		);
	}
}

Header.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	handleLogout: PropTypes.func.isRequired,
	changeLocal: PropTypes.func.isRequired,
	local: PropTypes.string.isRequired,
	superuser: PropTypes.string.isRequired,
};

export default Header;
