import logo from './logo.svg';
import './index.css';
import Footer from './component/header-footer/Footer';
import Header from "./component/header-footer/Header";
import Home from "./component/include/Home";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>

            <div>
                <p className=''></p>
            </div>
        </div>
    );
}

export default App;
