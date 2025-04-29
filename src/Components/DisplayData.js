import React, { Component } from 'react';
import getData from './Data';

class DisplayData extends Component {

    constructor(props){
        super(props);
        const arr = getData();
        const arr_filtered = arr.filter(item => 
            item.name && item.name === item.name.toUpperCase()
        );
        this.state = { data: arr_filtered };
    }
    
    render() {
        return (
            <div id="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                {this.state.data.map(item => 
                    <div className="card">
                        <img src= {item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.loai}</p>
                        </div>
                  </div>
                )}
            </div>
        );
    }
}

export default DisplayData;

// import React, {useState} from "react";
// function DisplayData() {
//     const arr = getData();
//     const [array] = useState(arr);

//     return(
//         <div id="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
//             {array.map(item => 
//                     <div className="card">
//                         <img src= {item.image} class="card-img-top" alt="..."/>
//                         <div className="card-body">
//                             <h5 className="card-title">{item.name}</h5>
//                             <p className="card-text">{item.loai}</p>
//                         </div>
//                   </div>
//                 )}
//         </div>
//     );
// }
// export default DisplayData;