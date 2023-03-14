import React from 'react';
import UserItem from "./UserItem.jsx";

const PeopleChoseSocial = ({users}) => {
  console.log('PeopleChoseSocial', users)
  return (
    <div className='mt-8'>
      <div className='text-left h6 mb-3'>
        New Recommendation
      </div>
      <div>
        {users.recommendation.map((user, index) => <UserItem user={user}  key={index + 'user'}/>)}
      </div>
      <div className='text-left h6 mb-3'>
        Suggested profiles
      </div>
      <div>
        {users.suggested.map((user, index) => <UserItem user={user}  key={index + 'user'}/>)}
      </div>
    </div>

  );
};

export default PeopleChoseSocial;