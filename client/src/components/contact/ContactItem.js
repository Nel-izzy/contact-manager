import { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { name, email, _id, category, phone } = contact;

  const contactContext = useContext(ContactContext);
  const { deleteContact, clearCurrent, setCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (category === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            {" "}
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
