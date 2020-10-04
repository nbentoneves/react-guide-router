import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {

    state = {
        title: null,
        id: null
    }

    componentDidMount() {
        console.log("did mount");
        this.parseTitle();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.id) {
            if (this.state.id !== this.props.match.params.id) {
                console.log("did update");
                this.parseTitle();
            }
        }
    }

    parseTitle = () => {
        const searchParam = this.props.location.search;
        const params = queryString.parse(this.props.location.search)
        this.setState({
            title: params['title'],
            id: this.props.match.params.id
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;