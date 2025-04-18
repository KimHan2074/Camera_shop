import React, { Component } from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

class Content extends Component {

    render() {
        return (
            <div id="content">
                <LeftContent></LeftContent>
                
                <RightContent></RightContent>
            </div>
        );
    }
}

export default Content;