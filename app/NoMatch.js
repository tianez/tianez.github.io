'use strict';
import React from 'react';
const App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {
                    key: 'containter',
                    id: 'body'
                },
                '没有发现对应的页面！'
            )
        )
    }
})
module.exports = App;