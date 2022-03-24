
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Meta from "./Meta";
import Claim from "./Claim";
import Launchpad from "./Launchpad";
import Active from "./Active";
import Upcoming from "./Upcoming";
import Claims from "./Claims";
import Landingpage from "./Landingpage";
import Form from "./Form";
import Stake from "./Stake/Stake";
import { store } from "./Redux/store";
// import { connectToWallet } from "./connection/wallet/connector";

function App() {
  // connectToWallet()

  console.log(store.getState());
   async function connectToWallet() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return { accountAddress: account };
  }
  connectToWallet()
  return (
    <>
    <div style={{overflow:'hidden'}}>
      <Routes>
        <Route exact path="/" element={<Landingpage />}></Route>
        <Route exact path="/meta" element={<Meta />}></Route>
        <Route exact path="/upcoming" element={<Upcoming />}></Route>
        {/* <Route exact path='/landingpage' element={< Landingpage />}></Route>   */}
        <Route exact path="/launchpad" element={<Launchpad />}></Route>
        <Route exact path="/form" element={<Form />}></Route>
        <Route exact path="/claim" element={<Claim />}></Route>
        <Route exact path="/claims" element={<Claims />}></Route>
        <Route exact path="/active" element={<Active />}></Route>
        <Route exact path="/stake" element={<Stake />}></Route>
      </Routes>
      </div>

      {/* <Header />
  <Launch />
  <Launchcard />  */}
    </>
  );
}

export default App;
