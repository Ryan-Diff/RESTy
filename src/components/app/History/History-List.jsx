import React from 'react';
import PropTypes from  'prop-types';
import HistoryItem from './History-Item';

const HistoryList = ({ histories }) => {
    const historyElements = histories.map(history => (
        <li key={`${history.method}+${history.url}`}>
            <HistoryItem method={history.method} url={history.url} body={history.body} />
        </li>
    ));

    return (
        <ul>
            <li>History</li>
            {historyElements}
        </ul>
    );
 };  

    HistoryList.propTypes = {
        histories: PropTypes.arrayOf(PropTypes.shape({
            histories: PropTypes.string.isRequired,
            body: PropTypes.string,
            method: PropTypes.string.isRequire
        })).isRequired
    };

    export default HistoryList;

