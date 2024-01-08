import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;

    const formData = {
      name,
      number,
    };

    this.props.handleAddContact(formData);
    evt.currentTarget.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleFormSubmit}>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Name</span>
          <input className={css.formInput} type="text" name="name" required />
        </label>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Number</span>
          <input className={css.formInput} type="tel" name="number" required />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
