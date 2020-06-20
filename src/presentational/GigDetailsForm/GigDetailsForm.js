import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const GigDetails = ({ nextStep, handleChange }) => {
	const save = (e) => {
		e.preventDefault();
		nextStep();
	}

	return (
		<div className='basic-data p-4'>
			<div className='form-row m-3 pr-5'>
				<div className='form-group col-md-6'>
					<label >Role</label>
					<input type='text' className='form-control' name="role" onChange={handleChange}/>
				</div>
				<div className='form-group col-md-6'>
					<label >Company</label>
					<input type='text' className='form-control' name="company" onChange={handleChange}/>
				</div>
			</div>
			<label className='ml-4 '>Location</label>
			<div className='form-row m-3 pr-5'>
				<div className='form-group col-md-6'>
					<select  className='form-control' name="country" onChange={handleChange}>
						{/* <option selected>Country</option> */}
						<option value="helo">...</option>
					</select>
				</div>
				<div className='form-group col-md-6'>
					<select  className='form-control' name="state" onChange={handleChange}>
						{/* <option selected>State/Region</option> */}
						<option value="helo">...</option>
					</select>
				</div>
			</div>
			<div className='form-group m-3 pr-5'>
				<input type='text' className='form-control' placeholder='Address' name="address" onChange={handleChange} />
			</div>
			<div className='form-group m-3 pr-5'>
				<label>Add tags</label>
				<input type='text' className='form-control' name="tags" onChange={handleChange}/>
			</div>
			<p className='ml-4'>
				Suggested tags: <Link to=''>full time</Link> <Link to=''>contract</Link> <Link to=''>freelance</Link>
			</p>
			<div className='d-flex flex-row justify-content-end mr-5 pr-3'>
				<Link to='/gigs'>Cancel</Link>
				<Button title='Continue' className='mt-n2' click={ save }/>
			</div>
		</div>
	);
};

export default GigDetails;
