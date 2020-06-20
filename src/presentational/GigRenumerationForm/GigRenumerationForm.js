import React from 'react';
import Button from '../Button/Button';

const GigRenumeration = ({ values, previousStep }) => {
	const submit = (e) => {
		e.preventDefault()
		console.log(values)
	}
	const back = (e) => {
		e.preventDefault();
		previousStep();
	}
	return (
		<div className='renumeration p-4'>
			<label>Salary</label>
			<div className='form-row '>
				<div className='form-group col-md-6'>
					<label >Minimum</label>
					<input type='text' className='form-control' />
				</div>
				<div className='form-group col-md-6'>
					<label >Maximum</label>
					<input type='text' className='form-control' />
				</div>
			</div>
			<div className='d-flex flex-row justify-content-end mr-5 pr-3'>
				<button type="button" className="btn btn-link" onClick={back}>Back</button>
				<Button title='Add gig' className=''click={submit} />
			</div>
		</div>
	);
};

export default GigRenumeration;
