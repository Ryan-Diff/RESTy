import React, { Component } from 'react';
import HistoryList from '../History/History-List';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import { fetchApi } from '../../Services/Fetch-API';

export default class RESTy extends Component {
    state = {
        url: '',
        method: '',
        body: '',
        histories: [],
        display: {}
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.handleFetch();

        return this.setState({
            histories: [...this.state.histories, {
                url: this.state.url,
                method: this.state.method,
                body: this.state.body,
                key: `${this.state.url}+${this.state.method}`
            }]
        });
    }

    handleFetch = () => {
        const { url, method, body } = this.state;
        return fetchApi(url, method, body)
            .then(res => this.setState({ display: res }));
    }

    render() {
        const { url, method, body, display, histories } = this.state;

        return(
            <>
                <section>
                    <div>
                        <header>PLacement Header</header>
                        <HistoryList histories={histories} />
                    </div>

                    <div>
                        <Controls
                        url={url}
                        method={method}
                        body={body}
                        onSubmit={this.handleSubmit}
                        onChange={this.handleChange} />
                        <Display display={display} />
                    </div>
                </section>
            </>
        )
    }
}
