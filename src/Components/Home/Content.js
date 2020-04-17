import React from 'react';

export default function Content () {
    return (
        <div class="container">
	<div class="row">

		<div class="col-md-12">
			<h3 class="headline margin-bottom-25 margin-top-65">Nuevos Productos</h3>
		</div>


		<div class="col-md-12">
			<div class="carousel">


					<div class="carousel-item">
					<div class="listing-item">

						<a href="/property-single" class="listing-img-container">

							<div class="listing-badges">
								<span>Nuevo</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$100.000 COP</span>
								<span class="like-icon with-tip" data-tip-content="Agregar a favoritos"></span>
							</div>

							<div class="listing-carousel">
								<div><img src="https://arturocalle.vteximg.com.br/arquivos/ids/240226-800-1065/HOMBRE-PANTALON-10092048-AZUL_1.jpg" alt=""/></div>
								<div><img src="images/listing-01b.jpg" alt=""/></div>
								<div><img src="images/listing-01c.jpg" alt=""/></div>
							</div>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="/property-single">Pantalon</a></h4>
							</div>

							{/* <ul class="listing-features">
								<li>Construcción <span>530 m&sup2;</span></li>
								<li>Recámaras <span>2</span></li>
								<li>Baños <span>1</span></li>
							</ul> */}

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i>Arturo Calle</a>
							</div>

						</div>

					</div>
				</div>

			</div>
		</div>

	</div>
</div>
    )
}