import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, method, body, onChange, onSubmit }) => {
    return (
        <section>
            <form onSubmit={onSubmit}>
                <input type='text' name='url' placeholder='URL' value={url} onChange={onChange} />
                <section>
                    <div>
                        <input type ='radio' id='get' name='method' value='GET' checked={method === 'GET'} onChange={onChange} />
                        < label htmlFor='get'>GET</label>

                        <input type ='radio' id='post' name='method' value='POST' checked={method === 'POST'} onChange={onChange} />
                        < label htmlFor='post'>POST</label>

                        <input type ='radio' id='put' name='method' value='PUT' checked={method === 'PUT'} onChange={onChange} />
                        < label htmlFor='put'>PUT</label>

                        <input type ='radio' id='delete' name='method' value='DELETE' checked={method === 'DELETE'} onChange={onChange} />
                        < label htmlFor='delete'>DELETE</label>
                    </div>
                    <textarea placeholder='Raw JSON Body' name='body' value={body} onChange={onChange} />
                    <br />
                    <button data-testid='send-button'>Send Request</button>
                </section>
            </form>
        </section>
    );
};

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Controls;