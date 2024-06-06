"use client";
import React from "react";
import Link from "next/link";

const page = () => {

  const handleChange = (e) => {
    
  }
  return (
    <div>
      <h1>Registration form</h1>

      <div>
        <p>user name</p>
        <input type="username" onChange={handleChange}/>
      </div>

      <div>
        <p>email</p>
        <input type="email" onChange={handleChange}/>
      </div>

      <div>
        <p>password</p>
        <input type="password" onChange={handleChange}/>
      </div>

      <div>
        <p>confirm password</p>
        <input type="password" onChange={handleChange}/>
      </div>

      <div>
        <button>Register</button>
      </div>
      <Link href="/login">go to login</Link>
    </div>
  );
};

export default page;
