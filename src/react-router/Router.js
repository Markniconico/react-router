import React, { Component } from 'react';
import PropTypes from 'prop-types';
import context from './RouterContext';
import pathMatch from './matchPath';

export default class Router extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    state = {};

    contextValue = {};

    componentDidMount() {
        this.unListen = this.contextValue.history.listen((location, action) => {
            this.setState({});
        });
    }

    componentWillUnmount() {
        this.unListen();
    }

    render() {
        console.log('root router render');
        this.contextValue.history = this.props.history;
        this.contextValue.location = this.props.history.location;
        this.contextValue.match = pathMatch('/', this.props.history.location.pathname);
        return <context.Provider value={this.contextValue}>{this.props.children}</context.Provider>;
    }
}
