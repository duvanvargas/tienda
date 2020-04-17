import React from 'react';
import Container from './Container';

export default function Search(props) {
	return (
		<section class="search margin-bottom-50">
			<div class="container">
				<div class="row">
					<div class="col-md-3">

						{/* <!-- Title --> */}
						<h3 class="search-title">Buscar</h3>

						{/* <!-- Form --> */}
						<div class="main-search-box no-shadow">


							{/* <!-- Row With Forms --> */}
							<div class="row with-forms">

								{/* <!-- Status --> */}
								<div class="col-md-12">
									<select data-placeholder="Any Status" class="chosen-select-no-single" >
										<option>Marca</option>
										<option>For Sale</option>
										<option>For Rent</option>
									</select>
								</div>

								{/* <!-- Property Type --> */}
								<div class="col-md-12">
									<select data-placeholder="Any Type" class="chosen-select-no-single" >
										<option>Color</option>
										<option>Apartments</option>
										<option>Houses</option>
										<option>Commercial</option>
										<option>Garages</option>
										<option>Lots</option>
									</select>
								</div>

								{/* <!-- Main Search Input --> */}
								<div class="col-md-12">
									<input type="text" placeholder="Enter address e.g. street, city or state" value="" />
								</div>
								<div class="col-md-12">
									<button class="button">Search</button>
								</div>

							</div>
							{/* <!-- Row With Forms / End --> */}
						</div>
						{/* <!-- Box / End --> */}
					</div>
					<div class="col-md-9">
						<Container />
					</div>
				</div>
			</div>
		</section>
	)
}