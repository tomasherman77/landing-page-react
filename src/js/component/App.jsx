import React from "react";
import CardComponent from "./Card.jsx";
import JumbotronComponent from "./Jumbotron.jsx";
import NavbarComponent from "./Navbar.jsx";
import FooterComponent from "./Footer.jsx";

const AppComponent = () => {
    return (
        <div className="container-fluid p-0">
			<NavbarComponent />
			<div className="container mb-5">
				<JumbotronComponent />
			</div>
			<div className="container mb-5">
				<div className="row">
					<CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
				</div>
			</div>
            <FooterComponent />
		</div>


    )
}

export default AppComponent