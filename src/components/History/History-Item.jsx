import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, body }) => (
  <>
    <h2>{method}</h2>
    <p>{url}</p>
    <p>{body}</p>
  </>
);
HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string,
  method: PropTypes.string.isRequired
};
export default HistoryItem;