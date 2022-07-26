import { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const DEFAULT_CONTACT = {
  name: "",
  phone: "",
  email: "",
  category: "personal",
};

const ContactForm = () => {
  const [contact, setContact] = useState(DEFAULT_CONTACT);
  const { name, phone, email, category } = contact;

  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact(DEFAULT_CONTACT);
    }
  }, [contactContext, current]);

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }

    clearForm();
  };

  const clearForm = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="category"
        value="personal"
        checked={category === "personal"}
        onChange={onChange}
      />{" "}
      Personal
      <input
        type="radio"
        name="category"
        value="professional"
        checked={category === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <input
          className="btn btn-block btn-primary"
          value={current ? "Update Contact" : "Add Contact"}
          type="submit"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearForm}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
