import { Button } from "@mui/material";
import React, { useState } from "react";

const Form = ({ user, setUser, table, setTable }) => {
  const [form, setForm] = useState({});

  // console.log("User", user);

  // console.log(user)
  let name, value;
  const changehan = (e) => {
    e.preventDefault();
    // console.log("USER", user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log("set", user);
         setTable([...table, user]);
    //console.log(user.Object.firstname, user.lastname);
    // console.log(user);
  };

  const submithan = (e) => {
    e.preventDefault();
    //     setUser([{ ...user, [name]: value }]);
    console.log("SUBMIT", user);
    // console.log("ttttttttttttttttttttaaaaaaaaaaaaaaaaaaaa", table);
    setTable([ ...table, user ]);
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your first name"
          value={form.firstname}
          onChange={changehan}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          name="lastname"
          placeholder="Enter your last name"
          value={form.lastname}
          onChange={changehan}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={form.email}
          onChange={changehan}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone"
          value={form.phone}
          onChange={changehan}
        />
      </div>
      <br />
      <Button onClick={submithan} variant="contained">
        Submit
      </Button>
    </div>
  );
};

export default Form;
