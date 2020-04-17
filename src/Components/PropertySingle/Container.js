import React from 'react';

export default function Container() {

    return (
        <div class="container">
	<div class="row">

		{/* <!-- Property Description --> */}
		<div class="col-lg-8 col-md-7">
			<div class="property-description">

				{/* <!-- Description --> */}
				<h3 class="desc-headline">Descripción</h3>
				<div class="show-more">
					<p>
						Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Sed fermentum, lorem vitae efficitur imperdiet, neque velit tristique turpis, et iaculis mi tortor finibus turpis.
					</p>

					<p>
						 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.
					</p>

					<p>
						Nam mattis lobortis felis eu blandit. Morbi tellus ligula, interdum sit amet ipsum et, viverra hendrerit lectus. Nunc efficitur sem vel est laoreet, sed bibendum eros viverra. Vestibulum finibus, ligula sed euismod tincidunt, lacus libero lobortis ligula, sit amet molestie ipsum purus ut tortor. Nunc varius, dui et sollicitudin facilisis, erat felis imperdiet felis, et iaculis dui magna vitae diam. Donec mattis diam nisl, quis ullamcorper enim malesuada non. Curabitur lobortis eu mauris nec vestibulum. Nam efficitur, ex ac semper malesuada, nisi odio consequat dui, hendrerit vulputate odio dui vitae massa. Aliquam tortor urna, tincidunt ut euismod quis, semper vel ipsum. Ut non vestibulum mauris. Morbi euismod, felis non hendrerit viverra, nunc sapien bibendum ligula, eget vehicula nunc dolor eu ex. Quisque in semper odio. Donec auctor blandit ligula. Integer id lectus non nibh vulputate efficitur quis at arcu.
					</p>

					<a href="#" class="show-more-button">Ver mas <i class="fa fa-angle-down"></i></a>
				</div>


				{/* <!-- Similar Listings Container --> */}
				<h3 class="desc-headline no-border margin-bottom-35 margin-top-60">Productos Similares</h3>

				{/* <!-- Layout Switcher --> */}

				<div class="layout-switcher hidden"><a href="#" class="list"><i class="fa fa-th-list"></i></a></div>
				<div class="listings-container list-layout">

					{/* <!-- Listing Item --> */}
					<div class="listing-item">

						<a href="#" class="listing-img-container">


							<div class="listing-img-content">
								<span class="listing-price">$17,000</span>
								<span class="like-icon"></span>
							</div>

							<img src="https://arturocalle.vteximg.com.br/arquivos/ids/238348-1200-1598/HOMBRE-CAMISA-10097542-VERDE_1.jpg?v=637130843746300000" alt=""/>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="#">Camisa</a></h4>

								<a href="/property-single" class="details button border">Detalles</a>
							</div>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Arturo Calle</a>
							</div>

						</div>
						{/* <!-- Listing Item / End --> */}

					</div>
					{/* <!-- Listing Item / End --> */}

				</div>
				{/* <!-- Similar Listings Container / End --> */}

			</div>
		</div>
		{/* <!-- Property Description / End --> */}


		{/* <!-- Sidebar --> */}
		<div class="col-lg-4 col-md-5">
			<div class="sidebar sticky right">

				{/* <!-- Widget --> */}
				<div class="widget margin-bottom-30">
					<button class="widget-button with-tip" data-tip-content="Imprimir"><i class="sl sl-icon-printer"></i></button>
					<button class="widget-button with-tip" data-tip-content="Agregar a favoritos"><i class="fa fa-star-o"></i></button>
					<div class="clearfix"></div>
				</div>
				{/* <!-- Widget / End --> */}


				{/* <!-- Widget --> */}
				<div class="widget">

					{/* <!-- Agent Widget --> */}
					<div class="agent-widget">
						<input type="text" placeholder="Tu Correo" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"/>
						<input type="text" placeholder="Tu Celular"/>
						<textarea>Estoy interesado en el Producto [ID 123456] y quisiera saber mas.</textarea>
						<button class="button fullwidth margin-top-5">Enviar Mensaje</button>
					</div>
					{/* <!-- Agent Widget / End --> */}

				</div>
				{/* <!-- Widget / End --> */}

			</div>
		</div>
		{/* <!-- Sidebar / End --> */}

	</div>
</div>
    )
}