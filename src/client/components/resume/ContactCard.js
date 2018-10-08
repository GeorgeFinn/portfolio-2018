import React, {Component} from 'react'

const ContactCard = ({contact}) => (
  <div>
    {contact.name}, {contact.number}, {contact.email}
  </div>
);

export default ContactCard
