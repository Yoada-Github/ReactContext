import React, { useState, createContext } from 'react';
import Component2 from './Component2'; 

export const ProfileContext = createContext();

function Component1() {
  const [profiles, setProfiles] = useState([
    { name: 'Selomon Abebe', 
      age: 25, 
      job: 'Student' 
    },
    { name: 'Dawit Amare', 
      age: 40, 
      job: 'Worker' 
    },
    { name: 'Biniyam Tadese', 
      age: 20, 
      job: 'Student' 
    },
  ]);

  return (
    <div>
      <h1>My Profiles</h1>
      <ProfileContext.Provider value={profiles}>
        <Component2 />
      </ProfileContext.Provider>
    </div>
  );
}

export default Component1;
