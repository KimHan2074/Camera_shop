import logo from './logo.svg';
import './App.css';

// import NavBar from '../splitLayoutTest/NavBar';
// import Footer from '../splitLayoutTest/Footer';
// import Main from '../splitLayoutTest/Main';
// import AboutUs from '../splitLayoutTest/AboutUs';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import Items from '../Items';
import Example from '../Example';
import Member  from '../Member';
import Counter from '../Counter';
import Dtich_hcn from '../Dtich_hcn';
import DisplayData from '../DisplayData';

function One() {
  return <div>Chào bạn</div>
}

function App() {
  return (
    <div div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One></One>
        <h1><One></One></h1>
        <p class="title">
          Hello PNV26
        </p>
      </header> */}
      
{/* Test */}
      {/* <NavBar></NavBar>
      <Main></Main>
      <AboutUs></AboutUs>
      <Footer></Footer> */}

{/* Camera Shop */}
        {/* Header */}
        {/* <Header></Header> */}
        {/* Content */}
        {/* <Content></Content> */}
        {/* Footer */}
        {/* <Footer></Footer> */}

        {/* <Items image="https://img.lovepik.com/free-png/20210923/lovepik-t-shirt-png-image_401190055_wh1200.png" name="Áo thun 1" price="300" />
        <Items image="https://img.lovepik.com/free-png/20210923/lovepik-t-shirt-png-image_401190055_wh1200.png" name="Áo thun 2" price="100" />
        <Items image="https://img.lovepik.com/free-png/20210923/lovepik-t-shirt-png-image_401190055_wh1200.png" name="Áo thun 3" price="200" />
        <Items image="https://cdn.kkfashion.vn/26926-large_default/ao-thun-nu-mau-den-in-hinh-buom-asm16-35.jpg" name="Áo thun 4" price="400" />
        <Items image="https://img.lovepik.com/free-png/20210923/lovepik-t-shirt-png-image_401190055_wh1200.png" name="Áo thun 5" price="240" /> */}
        
        {/* <Example width="500px" height="200px" background="red"/> */}
        {/* <Member></Member> */}
        {/* <Counter></Counter>
        <Dtich_hcn></Dtich_hcn> */}
          <DisplayData></DisplayData>
    </div>
  );
}

export default App;
