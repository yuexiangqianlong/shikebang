import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './admin/admin';
import HomeApplyList from './admin/HomeApplyList'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render((
	<Router>
  <div>
    <Route exact path="/" component={App}/>
    <Route path="/Admin" component={Admin}/>
     <Route path="/HomeApplyList" component={HomeApplyList}/>
  </div>
</Router>
), document.getElementById('root'));
registerServiceWorker();