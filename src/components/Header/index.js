import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    state = {
        address: '',
        transaction: '',
    };

    render() {
        return <div>
            <h1>Bitcoin Blockchain Explorer</h1>
            <div>
                <div>
                    Address <input
                    type="text"
                    placeholder="Insert wallet address.."
                    onChange={ ({target}) => this.setState({ address: target.value }) }
                />&nbsp;
                    <Link to={`/address/${this.state.address}`}>Explore</Link>
                </div>
                <div>
                    Transaction <input
                    type="text"
                    placeholder="Insert transaction hash.."
                    onChange={ ({target}) => this.setState({ transaction: target.value })}
                />&nbsp;
                    <Link to={`/transaction/${this.state.transaction}`}>Explore</Link>
                </div>
                <p>
                    Example of valid wallet address:&nbsp;
                    <Link to="/address/1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F">
                        1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F
                    </Link><br />
                    Example of valid transaction hash:&nbsp;
                    <Link to="/transaction/b357ef869a27affd4442e57367396dc404b5757da117d8903ef196fd021b57bc">
                        b357ef869a27affd4442e57367396dc404b5757da117d8903ef196fd021b57bc
                    </Link>
                </p>
            </div>
        </div>;
    }
}