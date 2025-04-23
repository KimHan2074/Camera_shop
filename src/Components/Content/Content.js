import React, { Component } from 'react';
import LeftContent from './LeftContent';
// import RightContent from './RightContent';
import RightContent_Function from './RightContent_Function';
class Content extends Component {

    render() {
        return (
            <div id="content">
                <LeftContent></LeftContent>
                
                <RightContent_Function></RightContent_Function>
            </div>
        );
    }
}

export default Content;