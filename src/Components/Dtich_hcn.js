// import React, {useState} from "react";

// function Dtich_hcn (){
//     const [width, setWidth] = useState(0);
//     const [height, setHeight] = useState(0);
//     const [area, setArea] = useState(0);

//     const CalculatedArea = () => {
//         setArea(width * height);
//     }
    
//     return (
//         <div style={{padding: '20px'}}>
//             <h1>Calculate Rectangle Area</h1>
//             <div style={{marginBottom: '20px'}}>
//                 <label>Chiều dài: </label>
//                 <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Width" />
//             </div>
            
//             <div style={{marginBottom: '20px'}}>
//                 <label>Chiều rộng: </label>
//                 <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
//             </div>
            
//             <button style={{backgroundColor: 'blue'}} onClick={CalculatedArea}>Calculate Area</button>
//             <p>Area: {area}</p>
//         </div>
//     );
// }

// export default Dtich_hcn;

import React, { Component } from 'react';

class Dtich_hcn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            width: 0, 
            height: 0, 
            area: 0 
        };
    }

    handleCalculateArea = () => { 
        this.setState({ area: this.state.width * this.state.height });
    }

    handleWidthChange = (e) => {
        this.setState({ width: Number(e.target.value) })
    };

    handleHeightChange = (e) => {
        this.setState({ height: Number(e.target.value) })
    };

    render() {
        return (
            <div style={{padding: '20px'}}>
                <h1>Calculate Rectangle Area</h1>
                <div style={{marginBottom: '20px'}}>
                    <label>Chiều dài: </label>
                    <input type="number" value={this.state.width} onChange={this.handleWidthChange} placeholder="Width" />
                </div>
            
                <div style={{marginBottom: '20px'}}>
                    <label>Chiều rộng: </label>
                    <input type="number" value={this.state.height} onChange={this.handleHeightChange} placeholder="Height" />
                </div>
                
                <button style={{backgroundColor: 'blue'}} onClick={this.handleCalculateArea}>Calculate Area</button>
                <p>Area: {this.state.area}</p>
            </div>
        );
    }
}

export default Dtich_hcn;