import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Layout from './Layout'
import Setting from "./Setting";
import Exchange from "./Exchange";
import User from "./User";
import Transaction from "./Transaction";
import Wallet from "./Wallet";

function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Layout />}>
          <Route path="/auth/profile" element={<User />} />
          <Route path="/auth/exchange" element={<Exchange />} />
          <Route path="/auth/setting" element={<Setting />} />
          <Route path="/auth/transaction" element={<Transaction />} />
          <Route path="/auth/wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Dashboard
