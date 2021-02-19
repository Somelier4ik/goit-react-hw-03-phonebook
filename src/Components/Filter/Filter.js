function Filter({ text, onChange }) {
  return (
    <label>
      Find contacts by name
      <input name="filter" onChange={onChange} value={text}></input>
    </label>
  );
}

export default Filter;
