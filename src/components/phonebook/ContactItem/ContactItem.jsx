import React from 'react';
import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/slices/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContact(contact.id));

  return (
    <div className={styles.container}>
      <li className={styles.item}>
        {contact.name} {contact.number}
        <button className={styles.button} onClick={handleRemove}>
          Remove
        </button>
      </li>
    </div>
  );
};

export default ContactItem;
