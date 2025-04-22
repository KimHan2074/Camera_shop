// import React, { Component } from 'react';
import React, { useState } from 'react';

// class Counter extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     decrementCount = () => {
//         this.setState({ count: this.state.count - 1});
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Giá trị: {this.state.count}</h1>
//                 <button onClick={this.incrementCount}>Tăng</button>
//                 <button onClick={this.decrementCount}>Giảm</button>
//             </div>
//         );
//     }
// }

// export default Counter;

function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Giá trị: {count}</h1>
            <button onClick = {() => setCount(count + 1)}>Tăng</button>
            <button onClick = {() => setCount(count - 1)}>Giảm</button>
        </div>
    );
}
export default Counter;


