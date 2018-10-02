import React from 'react';
import { Query } from 'react-apollo';
import gql from "graphql-tag";
import Transaction from '../../components/Transaction';

const transactionQuery = gql`
    query transaction($id: ID!) {
        transaction(transaction: $id) {
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
`;

export default ({ match }) => (
    <div>
        <h2>Transaction Detail</h2>
        <Query query={transactionQuery} variables={{id: match.params.id}}>
            {({loading, error, data}) => {
                if (loading) return "Loading...";
                if (error) return "Something is wrong. Is transaction hash correct?";

                return <Transaction transaction={data.transaction}/>
            }}
        </Query>
    </div>
)
