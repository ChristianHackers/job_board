import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DetailsScreen from '../details/DetailsScreen';
import FeedScreen from '../feed/FeedScreen';
import PostScreen from '../post/PostScreen';

export default () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Feed</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/post">Post</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={FeedScreen}/>
        <Route path="/details" component={DetailsScreen}/>
        <Route path="/post" component={PostScreen}/>
      </div>
    </Router>
  );
};