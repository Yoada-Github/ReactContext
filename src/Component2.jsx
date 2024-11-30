import React, { useContext } from 'react';
import { ProfileContext } from './Component1'; // Import context

function Component2() {
  const profiles = useContext(ProfileContext); 

  return (
    <div>
      <h2>Profile List</h2>
      {profiles.map((profile, index) => (
        <div key={index}>
          <p><b>Name:</b> {profile.name}</p>
          <p><b>Age:</b> {profile.age}</p>
          <p><b>Job:</b> {profile.job}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Component2;
