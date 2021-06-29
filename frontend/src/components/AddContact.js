import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("all fields are mendatory");
      return;
    }
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <div>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input className="ui button blue" type="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
