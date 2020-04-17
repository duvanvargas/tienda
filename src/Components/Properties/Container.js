import React from 'react';
import LISTING01 from '../../images/listing-01.jpg'

export default function Container() {
    return (
        <div class="container">
	<div class="row fullwidth-layout">

		<div class="col-md-12">

			{/* <!-- Sorting / Layout Switcher --> */}
			<div class="row margin-bottom-15">

				<div class="col-md-6">
					{/* <!-- Sort by --> */}
					<div class="sort-by">
						<label>Ordenar por:</label>

						<div class="sort-by-select">
							<select data-placeholder="Default order" class="chosen-select-no-single" >
								<option>Menor precio</option>
								<option>Mayor precio</option>
							</select>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- Layout Switcher -->? */}
					<div class="layout-switcher">
						<a href="#" class="list"><i class="fa fa-th-list"></i></a>
						<a href="#" class="grid"><i class="fa fa-th-large"></i></a>
						<a href="#" class="grid-three"><i class="fa fa-th"></i></a>
					</div>
				</div>
			</div>


			{/* <!-- Listings --> */}
			<div class="listings-container list-layout">

				{/* <!-- Listing Item --> */}
				<div class="listing-item">

					<a href="/property-single" class="listing-img-container">

						<div class="listing-badges">
							<span class="featured">Nuevo</span>
							<span>10%</span>
						</div>

						<div class="listing-img-content">
							<span class="listing-price">$100.000 COP </span>
							<span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
						</div>

						<div class="listing-carousel">
							<div><img src="https://arturocalle.vteximg.com.br/arquivos/ids/238348-1200-1598/HOMBRE-CAMISA-10097542-VERDE_1.jpg?v=637130843746300000" alt=""/></div>
						</div>
					</a>

					<div class="listing-content">

						<div class="listing-title">
							<h4><a href="/property-single">Camisa Semi-formal</a></h4>

							<a href="/property-single" class="details button border">Detalles</a>
						</div>

						<ul class="listing-details">
							<li>3 Colores</li>
						</ul>

						<div class="listing-footer">
							<a href="#"><i class="fa fa-user"></i> David Strozier</a>
							<span><i class="fa fa-calendar-o"></i> 1 day ago</span>
						</div>

					</div>

				</div>
				{/* <!-- Listing Item / End --> */}
			</div>
			{/* <!-- Listings Container / End --> */}

			<div class="clearfix"></div>
			{/* <!-- Pagination --> */}
			<div class="pagination-container margin-top-20">
				<nav class="pagination">
					<ul>
						<li><a href="#" class="current-page">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li class="blank">...</li>
						<li><a href="#">22</a></li>
					</ul>
				</nav>

				<nav class="pagination-next-prev">
					<ul>
						<li><a href="#" class="prev">Previous</a></li>
						<li><a href="#" class="next">Next</a></li>
					</ul>
				</nav>
			</div>
			{/* <!-- Pagination / End --> */}

		</div>

	</div>
</div>
    )
}