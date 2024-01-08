export const Filter = ({ onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={onChange} type="text" name="keyword" />
    </div>
  );
};
