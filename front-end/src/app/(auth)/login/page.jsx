import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>logig form</h1>
        <div>
            <p>email</p>
            <input type="email" />    
        </div>   

        <div>
            <p>password</p>
            <input type="password" /></div>

            <div>
              <button>Login</button>
              
            </div>
            <Link href='/registration'>go to Reg</Link>
      
    </div>
  )
}

export default page
