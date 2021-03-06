import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Layout/Header.js";
import { useState } from "react";
import {
	BrowserRouter,
	BrowserRouter as Router,
	HashRouter,
	Route,
	Routes,
} from "react-router-dom";
import NavBar from "./components/Layout/NavBar.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BankSummary from "./components/BankFunctions/BankSummary.js";
import Functions from "./components/BankFunctions/Functions.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider.js";
import UserContextProvider from "./store/UserContextProvider.js";
import BankCard from "./components/BankFunctions/BankCard.js";
import CreateAccount from "./components/BankFunctions/CreateAccount.js";
import Withdraw from "./components/BankFunctions/Withdraw.js";
import Deposit from "./components/BankFunctions/Deposit.js";
import Home from "./components/BankFunctions/Home.js";
import Login from "./components/BankFunctions/Login.js";
import Register from "./components/BankFunctions/Register";
import AllData from "./components/BankFunctions/AllData.js";
import BankServices from "./components/BankFunctions/BankServices.js";
import classes from "./components/UI/Card.module.css";
import { Container } from "react-bootstrap";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<>
			<div>
				<UserContextProvider>
					<CartProvider>
						{cartIsShown && <Cart onClose={hideCartHandler} />}
						<Header onShowCart={showCartHandler} />
						<NavBar />
						<Functions />
					</CartProvider>
				</UserContextProvider>
			</div>
			<div>
				<div className={classes.bankcard} style={{ padding: "20px" }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/CreateAccount" element={<CreateAccount />} />
						<Route path="/deposit" element={<Deposit />} />
						<Route path="/withdraw" element={<Withdraw />} />
						<Route path="/alldata" element={<AllData />} />
						<Route path="/bankservices" element={<BankServices />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
				<ToastContainer />
			</div>
		</>
	);
}

export default App;
