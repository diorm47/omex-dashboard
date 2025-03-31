import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import OverviewPage from "./pages/overview/overview";
import Sidebar from "./components/side-bar/sidebar";
import StackingPage from "./pages/stacking/stacking";
import FarmingPage from "./pages/farming/farming";
import SwapPage from "./pages/swap/swap";
import LiqudityPage from "./pages/liquidity/liquidity";
// import WalletProvider from "./providers/wallet-provider";

// bbb6d833f06f9bf83eae9b77da490629
// tiVXHHs5cPJxGzOG1bZql6LCpnkyrIW4

function App() {
  return (
    // <WalletProvider>
      <Router>
        <div className="main_wrapper">
          <NavBar />
          <div className="page_wrapper container">
            
            <Sidebar />
            <div className="page_content">
              <Routes>
                <Route path="/" element={<OverviewPage />} />
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/stacking" element={<StackingPage />} />
                <Route path="/farming" element={<FarmingPage />} />
                <Route path="/swap" element={<SwapPage />} />
                <Route path="/liqudity" element={<LiqudityPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    // </WalletProvider> 
  );
}

export default App;
