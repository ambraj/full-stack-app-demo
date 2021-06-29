import React from "react";

export const ContactCard = (props) => {

    const {id, name, email} = props.contact;

  return (
    <div className="item" key={id}>
      <span>{name}</span>
      <span>   {email}</span>
    </div>
  );
};
