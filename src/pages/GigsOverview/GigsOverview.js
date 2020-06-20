import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../presentational/SideNav/SideNav';
import TopNav from '../../presentational/TopNav/TopNav';

const GigsOverview = () => {
    
    return (
    <div className="container-fluid">
        <div className="row d-flex flex-wrap">
            <div className="col-2 border-right vh-100"> 
            <SideNav />
            </div>
            <div className="col-10 ">
              <TopNav/>
                    <div className="border-bottom">
                        <nav className="navbar bottom-nav d-flex flex-wrap mt-3">
                            <Link to="" className="nav_text">All gigs <span className="label p-1 ml-2">3404</span></Link>
                            <Link to="" className="nav_text">My gigs <span className="label p-1 ml-2">1200</span></Link>
                            <Link to="" className="nav_text rejected-gigs">Rejected gigs <span className="label p-1 ml-2">100</span></Link>
                        </nav>
                    </div>
                
                </div>
                <div>
                <div className="row">
                    <div className="col"></div>
                </div>
            </div>
        </div>
    </div>)
}

export default GigsOverview;