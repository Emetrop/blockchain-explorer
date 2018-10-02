import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Address from '../Address';
import Transaction from '../Transaction';
import Header from "../../components/Header";

export default () => <div>
    <Router>
        <div>
            <Header />
            <Route path="/address/:id" exact component={ Address }/>
            <Route path="/transaction/:id" exact component={ Transaction }/>
        </div>
    </Router>
</div>