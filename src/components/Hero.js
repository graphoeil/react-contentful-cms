// Imports
import React from "react";
import hero from "../assets/hero.svg";

// Component
const Hero = () => {

	// Return
	return(
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Atque velit suscipit corporis animi saepe iure eius 
						repellendus minus, totam, eum, vero ut veritatis ! 
						Consequuntur labore sequi ratione sit nam voluptas !
					</p>
				</div>
				<div className="img-container">
					<img src={ hero } alt="woman and the browser" className="img"/>
				</div>
			</div>
		</section>
	);

};

// Export
export default Hero;