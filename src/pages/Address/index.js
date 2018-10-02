import React from 'react';
import { Query } from 'react-apollo';
import gql from "graphql-tag";
import Transaction from '../../components/Transaction';

const addressQuery = gql`
    query address($id: ID!) {
        address(address: $id) {
            address
            finalBalance
            totalReceived
            totalSent
            transactions {
                hash
                inputs {
                    value
                    address
                }
                outputs {
                    value
                    address
                }
            }
        }
    }
`;

export default ({ match }) => (
    <div>
        <h2>Address Detail</h2>
        <Query query={addressQuery} variables={{id: match.params.id}}>
            {({loading, error, data}) => {
                if (loading) return "Loading...";
                if (error) return "Something is wrong. Is address of wallet correct?";

                return (
                    <div>
                        Address: {data.address.address}<br/>
                        Total Received: {data.address.totalReceived}<br/>
                        Total Sent: {data.address.totalSent}<br/>
                        Final Balance: {data.address.finalBalance}<br/>
                        <h3>Transactions ({data.address.transactions.length})</h3>
                        {data.address.transactions.map((trans, index) =>
                            <div key={index}><Transaction transaction={trans}/><hr /></div>
                        )}
                    </div>
                )
            }}
        </Query>
    </div>
)
