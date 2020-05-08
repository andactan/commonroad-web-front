import React from 'react';

import UserSubmissionsPie from '../components/user-submission-pie';
import UserSubmissionsTable from '../components/user-submissions-table';
import NavBar from '../components/navbar';

export default function UserSubmissions() {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{maxWidth: "70%", margin:"0 auto"}}>
        <UserSubmissionsPie></UserSubmissionsPie>
        <UserSubmissionsTable></UserSubmissionsTable>
      </div>
    </div>
  )
}