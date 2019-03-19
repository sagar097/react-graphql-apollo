import React, { Component } from 'react'

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
          flight_number
          mission_name
          launch_date_local
          launch_success
    }
}
`;
 class launches extends Component {
  render() {
    return (
      <React.Fragment>
       <h1 className='display-4 my-3'>Launches</h1> 
       <MissionKey/>
       <Query query={LAUNCHES_QUERY}>
       {
           ({ loading , error, data }) => {
              if(loading) return <h4>Loading...</h4>
              if(error) console.log(error);
              {/* console.log(data); */}

              return <React.Fragment>
                       {
                           data.launches.map(launch => (
                               <LaunchItem key={launch.flight_number} launch={launch}/>
                           ))
                       }
              </React.Fragment>;
           }}
           </Query>
       
      </React.Fragment>
    );
  }
 }

export default launches;
