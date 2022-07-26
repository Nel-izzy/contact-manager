import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) return <h4>Please Add a contact!</h4>;

  return (
    <Fragment>
      <TransitionGroup>
        {filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <ContactItem key={contact.id} contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
