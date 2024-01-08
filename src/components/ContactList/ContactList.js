export const ContactList = ({ id, name, number, handleDeleteContact }) => {
  return (
    <div>
      <span>{name}</span>
      <span> {number}</span>
      <button onClick={() => handleDeleteContact(id)}>&times;</button>
    </div>
  );
};
