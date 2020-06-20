import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../presentational/Button/Button';
import Iemail from '../../assests/icon-email.png';
import Ibell from '../../assests/icon-bell.png';
import Isettings from '../../assests/icon-settings.png';
import Iuser from '../../assests/user.png';

const TopNav = () => {
    const location = useLocation();
    console.log(location.pathname);
	return (
			<div >
				<nav className='navbar navbar-expand-lg navbar-lig mt-4 p-4 d-flex justify-content-between flex-wrap border-bottom'>
					<div>
						<input type='text' className='search' placeholder='search' />
					</div>
					<ul className='navbar-nav d-flex flex-row flex-wrap'>
						<li className='nav-item mr-4'>
							<img src={Ibell} alt='' />
						</li>
						<li className='nav-item mr-4'>
							<img src={Iemail} alt='' />
						</li>
						<li className='nav-item mr-4'>
							<img src={Isettings} alt='' />
						</li>
						<li className='nav-item mr-4'>
							<img src={Iuser} alt='' />
						</li>
					</ul>
				</nav>
				<div className='d-flex justify-content-between'>
					<h4 className='gigs p-3'>Gigs</h4>
					{location.pathname === '/gigs' ? <Link to='/gigs/add'>
						<Button title='New gig' icon='true' className='btn-add mt-3' />
					</Link> : null}
				</div>
		</div>
	);
};

export default TopNav;
