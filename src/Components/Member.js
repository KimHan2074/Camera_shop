import React, { Component } from 'react';

class Member extends Component {
    constructor(props){
        super(props);
        this.state = { 
            name: 'Nguyễn Tuấn Hải', 
            age: 25
         };
    }
    render() {
        return (
            <div>
                <h1>Tên của bạn là: {this.state.name}</h1>
                <h1>Tuổi của bạn năm nay là: {this.state.age}</h1>
            </div>
        );
    }
}

export default Member;