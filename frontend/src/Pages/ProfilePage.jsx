import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)

  useEffect(()=>{

    const id = sessionStorage.getItem("userid");

    fetch("http://localhost:3004/api/profile",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({id})
    })
    .then(res=>res.json())
    .then(data=>{
      setUser(data)
    })

  },[])
  
  function logout(){
    sessionStorage.removeItem('userid');
    navigate('/login');

  }

  return (
    <div>

      <h2>Profile</h2>

      {user && (
        <div>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <button type='button' onClick={logout} className='nav-cta'>Log out</button>
        </div>
      )}

    </div>
  )
}

export default ProfilePage