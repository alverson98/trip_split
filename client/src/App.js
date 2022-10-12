import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ExpenseForm from "./components/ExpenseForm";
import AddJoinForms from "./components/AddJoinForms";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="container">
        {/* <Header /> */}
        <Navbar />
        <ExpenseForm />
        <Routes>
          <Route path="/mytrips" element={<MyTrips />} />
          <Route path="/onetrip" element={<OneTrip />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/finaltripsplit" element={<FinalTripSplit />} />
          <Route path="/addjointrip" element={<AddJoinTrip />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>

    <div className="container">
      {/* <Header /> */}
      <Navbar />
      <ExpenseForm />
      <AddJoinForms />
      <Feed />
      <Footer />
    </div>

  );
}

export default App;

// My trips, one trip, login, sign up, final trip split, add/join page
