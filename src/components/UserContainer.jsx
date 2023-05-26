import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/user/UserAction'

function UserContainer() {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
            {userData.loading ? (
                <h2>Loading</h2>
            ) : userData.error ? (
                <h2>{userData.error}</h2>
            ) : (
                <div>
                    <h2>User List</h2>
                    <div>
                        {userData &&
                            userData.users &&
                            userData.users.map(user => <p key={user.id} >{user.name}</p>)}
                    </div>
                </div>
            )}
    </div>
  )
}

export default UserContainer