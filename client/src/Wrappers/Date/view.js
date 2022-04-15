import React from 'react';
import PropTypes from 'prop-types';
import { formatJdate } from '../../Utils/dateStuff';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { date, local } = this.props;
        return (
            <div dir="rtl">
                {formatJdate(date)}
            </div>
        );
    }

}

Date.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    date: PropTypes.any.isRequired,
    local: PropTypes.string.isRequired,
};

export default Date;
