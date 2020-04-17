import React from 'react';
import imageLogo from '../images/logo.png'

import {Link} from 'react-router-dom';


export default function Navbar(){
    return (
        <div id="header">
		<div class="container">
			<div class="left-side">
				<div id="logo">
					<a href="/"><img src={imageLogo} alt=""/></a>
				</div>
				<div class="mmenu-trigger">
					<button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>
				</div>

				<nav id="navigation" class="style-1">
					<ul id="responsive">

						<li><Link to = "/">Inicio</Link></li>
						<li><Link to = "/properties">Productos</Link></li>
						{/* <li><Link to = "we">Nosotros</Link></li>
						<li><Link to = "/contact">Contacto</Link></li> */}

					</ul>
				</nav>
				<div class="clearfix"></div>

			</div>

			<div class="right-side">
				<div class="header-widget">
					<a href="#" class="button border">Publica tu Producto</a>
				</div>
			</div>

		</div>
	</div>
    );
}