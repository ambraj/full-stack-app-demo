import React from "react";
import { ContactCard } from "./ContactCard";

const ContactList = (props) => {

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard key={contact.id} contact={contact}></ContactCard>
      </div>
    );
  });
  return (
    <div>
      <h2>Contact List</h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
