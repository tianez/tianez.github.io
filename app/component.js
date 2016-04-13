'use strict'

import React from 'react';
import './component.css';
import './component.less';

module.exports = React.createClass({
	getInitialState() {
		return {
			// 让我们保持追踪看看我们给项点了多少次赞
			likes: 1222,
		};
	},
    render() {
        var owner = this.props.owner;
        var task = this.props.task;
        var likes = this.state.likes;
        return <div className='TodoItem'>
            <span className='TodoItem-owner'>{owner}</span>
            <span className='TodoItem-task'>{task}</span>
            <span className='TodoItem-likes'>{likes}</span>
            <span className='TodoItem-like' onClick={this.like}>Like</span>
            <span className='T2' onClick={this.like}>Like</span>
        </div>;
    },
    like() {
        this.setState({
            likes: this.state.likes + 1
        });
    },
});