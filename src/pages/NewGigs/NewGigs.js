import React, { useState } from 'react';
import SideNav from '../../presentational/SideNav/SideNav';
import TopNav from '../../presentational/TopNav/TopNav';
import GigDetails from '../../presentational/GigDetailsForm/GigDetailsForm';
import GigRenumeration from '../../presentational/GigRenumerationForm/GigRenumerationForm';

const NewGigs = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({});

	const nextStep = () => {
		return setStep(step + 1);
    };

	const previousStep = () => {
		return setStep(step - 1);
	};

	const handleChange = event => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	};
	const { role, company, location, tags, min_salary, address, max_salary } = formData;
	const values = { role, company, location, tags, address, min_salary, max_salary };

	let stepHolder = '';

	switch (step) {
		case 1:
			stepHolder = <GigDetails nextStep={nextStep} values={values} handleChange={handleChange} />;
			break;
		case 2:
			stepHolder = <GigRenumeration values={values} handleChange={handleChange} previousStep={previousStep} />;
			break;
		default:
			stepHolder = '';
	}

	return (
		<div className='container-fluid'>
			<div className='row d-flex flex-wrap'>
				<div className='col-2 border-right vh-100'>
					<SideNav />
				</div>
				<div className='col-10 '>
					<TopNav />
					<div className='border-top'>
						<h4 className='p-3'> New gig</h4>
						<form className='p-3'>
							<div className='row'>
								<div className='col-3 form-nav'>
									<ul className='nav-bar nav d-flex flex-column justify-content-center p-5'>
										<li className='nav-item mb-3'>Basic Data</li>
										<li className='nav-item'>Renumeration</li>
									</ul>
								</div>
								<div className='col-9 px-5'>{stepHolder}</div>
							</div>
						</form>
					</div>
				</div>
				<div>
					<div className='row'>
						<div className='col'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewGigs;
