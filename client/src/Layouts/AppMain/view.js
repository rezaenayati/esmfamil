import React from 'react';
import PropTypes from 'prop-types';

import packageJson from '../../../package.json';
import Header from '../AppHeader';

class Main extends React.Component {
	render() {
		const { children, toastError, toggleToastError, openLoading, local, toggleToastInfo, toastInfo } = this.props;

		return (
			<div id="outer-container" dir={local === 'fa' ? 'rtl' : 'ltr'}>
				{/* <MobileSideBar
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          right={local === "fa"}
        /> */}
				<div id="page-wrap">
					<div className="z-index-900 sticky-top">
						<Header />
					</div>
					<div className="d-flex">
						<div className="wrapper container d-flex">{children}</div>
					</div>
					{/* <footer className="footer footer-container d-flex justify-content-around">
            <div className="text-center">{`V ${packageJson.version}`}</div>
            <div className="text-center footer-font">
              هیچ حقوقی برای کسی محفوظ نیست. © ۱۴۰۱{" "}
            </div>
          </footer> */}
				</div>
			</div>
		);
	}
}

Main.propTypes = {
	children: PropTypes.element,
	toastError: {
		isOpen: PropTypes.bool,
		message: PropTypes.string,
	},
	toastInfo: {
		isOpen: PropTypes.bool,
		message: PropTypes.string,
	},
	toggleToastError: PropTypes.func.isRequired,
	toggleToastInfo: PropTypes.func.isRequired,
	openLoading: PropTypes.bool,
	local: PropTypes.string.isRequired,
};

Main.defaultProps = {
	children: <div>isEmpty</div>,
	toastError: {
		isOpen: false,
		message: '',
	},
	toastInfo: {
		isOpen: false,
		message: '',
	},
	openLoading: false,
};

export default Main;
