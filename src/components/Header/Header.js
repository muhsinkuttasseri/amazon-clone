// stops while styling

import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
	return (
		<div className="header">
			{/* <img src="/public/assets/amazon.png"    ></img> */}
			<img
				className="header__logo"
				src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
			></img>
			<div className="header__options">
				<span className="header__optionLineOne">Hello</span>
				<span className="header__optionLineTwo">Select your address</span>
			</div>

			<div className="header__search">
				<input className="header__searchInput" type="text"></input>
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<div className="header__options">
					<span className="header__optionLineOne">Hello, Sign In</span>
					<span className="header__optionLineTwo">Account & Lists</span>
				</div>
				<div className="header__options">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__options">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<div className="header__optionsBasket">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo__basketCount">0</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
