import React from 'react'

function Login() {
  return (
    <form>
        <div>
            <label htmlFor="username">Username</label><br />
            <input type="text" name='username' id='username' placeholder='Enter Username' />
        </div>
        <div>
            <label htmlFor="username">Username</label><br />
            <input type="text" name='username' id='username' placeholder='Enter Username' />
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default Login