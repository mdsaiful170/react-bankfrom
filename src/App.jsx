import { useState } from "react";
import "./App.css";
import BalancefromsSection from "./component/balance/Balancefrom";
import BalancehistorySection from "./component/balance/Balancehistory";
import HeaderText from "./component/balance/HeaderText";
import TotalbalanceSection from "./component/balance/Totalbalance";
import TotalCostsection from "./component/balance/Totalcost";
import FromScction from "./component/from/From";
import HeaderSection from "./component/header/header";
import DateSection from "./component/header/Date";

function App() {
  const [mainBalances, setBalance] = useState([]);

  const AddBalance = (balance) => {
    setBalance([...mainBalances, balance]);
  };

  const CalculateTotalBalance = () => {
    return mainBalances.reduce((total, value) => total + value.amount, 0);
  };

  const CalculatTotaDiposit = () => {
    return mainBalances
      .filter((TotalDiposit) => TotalDiposit.amount > 0)
      .reduce((total, value) => total + value.amount, 0);
  };
  const CalculateTotalCost = () => {
    return mainBalances
      .filter((totalCost) => totalCost.amount < 0)
      .reduce((total, value) => total + value.amount, 0);
  };

  return (
    <>
    <DateSection />
      <HeaderSection />
      <FromScction />
      <HeaderText />
      <TotalbalanceSection totalBalance={CalculateTotalBalance()} />
      <TotalCostsection
        cost={CalculateTotalCost()}
        diposit={CalculatTotaDiposit()}
      />
      <BalancefromsSection balance={AddBalance} />
      <BalancehistorySection mainbalance = {mainBalances} />
    </>
  );
}

export default App;
