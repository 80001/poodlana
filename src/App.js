import "./App.css";
import "./css/styles1.css";
import "./css/styles2.css";
import Header from "./components/header";
import Home from "./components/home";
import Partners from "./components/partners";
import About from "./components/about";
import Press from "./components/press";
import Look from "./components/lookbook";
import Runway from "./components/runway";
import Fashionomics from "./components/fashinomics";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Modal from "./components/modal";
import { useContext, useEffect, useState } from "react";
import { Context } from "./context";

function App() {
    const { modalWallet, modalPayment } = useContext(Context);
    const [showPayment, setShowPayment] = useState(false);
    const [showWallet, setShowWallet] = useState(false);
    useEffect(() => {
        if (modalWallet.status) {
            setShowWallet(true);
        } else if (!modalWallet.status) {
            setShowWallet(false);
        }
        if (modalPayment.status) {
            setShowPayment(true);
        } else if (!modalPayment.status) {
            setShowPayment(false);
        }
    }, [modalWallet, modalPayment]);
    return (
        <div className="App">
            <Header />
            <Home />
            <Partners />
            <About />
            <Press />
            <Look />
            <Runway />
            <Fashionomics />
            <FAQ />
            <Footer />
            {showWallet && <Modal info={modalWallet} />}
            {showPayment && <Modal info={modalPayment} />}
        </div>
    );
}

export default App;
