import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core/';

import './styles.css';

class Header extends Component {
    state = {
        address: '',
        transaction: '',
    };

    render() {
        return <div>
            <h1>Bitcoin Blockchain Explorer</h1>
            <div>
                <div className="field">
                    <TextField
                        label="Address"
                        placeholder="Insert wallet address.."
                        onChange={ ({target}) => this.setState({ address: target.value }) }
                        margin="normal"
                    />&nbsp;
                    <span className="button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={ () => this.props.history.push(`/address/${this.state.address}`) }
                        >Explore</Button>
                    </span>
                </div>
                <div className="field">
                    <TextField
                        label="Transaction"
                        placeholder="Insert transaction hash.."
                        onChange={ ({target}) => this.setState({ transaction: target.value })}
                        margin="normal"
                    />&nbsp;
                    <span className="button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={ () => this.props.history.push(`/transaction/${this.state.transaction}`) }
                        >Explore</Button>
                    </span>
                </div>
                <p>
                    Example of valid wallet address:&nbsp;
                    <Link to="/address/1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F">
                        1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F
                    </Link><br /><br />
                    Example of valid transaction hash:&nbsp;
                    <Link to="/transaction/b357ef869a27affd4442e57367396dc404b5757da117d8903ef196fd021b57bc">
                        b357ef869a27affd4442e57367396dc404b5757da117d8903ef196fd021b57bc
                    </Link>
                </p>
            </div>
        </div>;
    }
}

export default withRouter(Header);