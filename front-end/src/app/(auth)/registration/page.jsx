"use client";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmpassword === ""
    ) {
      alert("All fields are required");
    } else if (formData.password !== formData.confirmpassword) {
      alert("password and confirm password should be same");
    } else {
      // if so I need to keep only the password in the formData
      delete formData.confirmpassword;
      try {
        const response = await fetch("http://localhost:4000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <h1>Registration form</h1>

      <div>
        <p>user name</p>
        <input type="username" id="username" onChange={handleChange} />
      </div>

      <div>
        <p>email</p>
        <input type="email" id="email" onChange={handleChange} />
      </div>

      <div>
        <p>password</p>
        <input type="password" id="password" onChange={handleChange} />
      </div>

      <div>
        <p>confirm password</p>
        <input type="password" id="confirmpassword" onChange={handleChange} />
      </div>

      <div>
        <button onClick={handleClick}>Register</button>
      </div>
      <Link href="/login">go to login</Link>
    </div>
  );
};

export default page;
