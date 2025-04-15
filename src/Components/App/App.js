import logo from './logo.svg';
import './App.css';

// import NavBar from '../splitLayoutTest/NavBar';
// import Footer from '../splitLayoutTest/Footer';
// import Main from '../splitLayoutTest/Main';
// import AboutUs from '../splitLayoutTest/AboutUs';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

function One() {
  return <div>Chào bạn</div>
}

function App() {
  return (
    <div className="App">
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
        <Header></Header>
        {/* Content */}
        <Content></Content>
        {/* Footer */}
        <Footer></Footer>
      </div>
  );
}

export default App;
