import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children, local } = this.props;
        return (
            <div className={local === 'fa' ? 'right d-flex' : 'left d-flex'}>
                {children}
            </div>
        );
    }

}

Text.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any.isRequired,
    local: PropTypes.string.isRequired,
};

export default Text;
