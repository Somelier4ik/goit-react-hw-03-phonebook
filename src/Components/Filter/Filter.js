import s from './Filter.module.css';

function Filter({ text, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        name="filter"
        onChange={onChange}
        value={text}
      ></input>
    </label>
  );
}

export default Filter;
