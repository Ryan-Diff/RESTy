import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method }) => (
    <>
        <h2>{method}</h2>
        <p>{url}</p>
    </>
);

HistoryItem.propTypes = {
    url:PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
};

export default HistoryItem; 
