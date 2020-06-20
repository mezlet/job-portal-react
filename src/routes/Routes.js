import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GigsOverview from '../pages/GigsOverview/GigsOverview';
import NewGigs from '../pages/NewGigs/NewGigs';

const route = () => (
	<BrowserRouter>
		<Route>
			<Switch>
				<Route path='/gigs' component={GigsOverview} exact/>
                <Route path='/gigs/add' component={NewGigs} exact/>
			</Switch>
		</Route>
	</BrowserRouter>
);

export default route;
