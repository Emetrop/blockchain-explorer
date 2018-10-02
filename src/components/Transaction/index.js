import React from 'react';
import { Link } from 'react-router-dom'

export default ({ transaction }) => {
    return <div>
        Hash: <Link to={`/transaction/${transaction.hash}`}>{transaction.hash}</Link><br />
        Inputs:
        <ul>
            {transaction.inputs.map((input, index) =>
                <li key={index}>
                    {input.value} satoshi from <Link to={`/address/${input.address}`}>{input.address}</Link>
                </li>)}
        </ul>
        Outputs:
        <ul>
            {transaction.outputs.map((outputs, index) =>
                <li key={index}>
                    {outputs.value} satoshi to <Link to={`/address/${outputs.address}`}>{outputs.address}</Link>
                </li>)}
        </ul>
    </div>;
}