import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/I/61sFLI3FYBL._SX3000_.jpg"
					alt="not found"
				/>
				<div className="home__row">
					<Product
						p_id={12458455}
						title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400) "
						price={29.99}
						image="https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_SY200_.jpg"
						rating={5}
					/>
					<Product
						p_id={12458455}
						title="The power of your subconsious mind"
						price={29.99}
						image="https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UL480_QL65_.jpg"
						rating={5}
					/>

					{/* product */}
				</div>
				<div className="home__row">
					<Product
						p_id={12458455}
						title="The power of your subconsious mind"
						price={29.99}
						image="https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SY200_.jpg"
						rating={5}
					/>
					<Product
						p_id={12458455}
						title="The power of your subconsious mind"
						price={29.99}
						image="https://m.media-amazon.com/images/I/61brDD8JILL._AC_SY200_.jpg"
						rating={5}
					/>
					<Product
						p_id={12458455}
						title="The power of your subconsious mind"
						price={29.99}
						image="https://m.media-amazon.com/images/I/819PJ0EPdkL._AC_SY200_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					{/* product */}
					<Product
						p_id={12458455}
						title="The power of your subconsious mind"
						price={29.99}
						image="https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UL480_QL65_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
