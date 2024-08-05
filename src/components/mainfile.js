import React from "react";
import "./mainfile.css";
import { PieChartApp } from "./PieChart/piechart";
import { Expensewallet } from "./expensewallet/expensewallet";
import { Wallet } from "./walletballance/walletballance";
import { Recenttranscations } from "./transcation/transcation";
import { MyTopExpense } from "./myexpense/Expense";

function MyExpenseTracker() {
  return (
    <div className="mainBody">
      Expense tracker
      <div className="maincontent">
        <Wallet />
        <Expensewallet />
        <PieChartApp />;
      </div>
      <div className="secondContent">
        <Recenttranscations />
        <MyTopExpense />
      </div>
    </div>
  );
}
export default MyExpenseTracker;
