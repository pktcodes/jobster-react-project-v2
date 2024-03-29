import PropTypes from 'prop-types';

const FormRowSelect = ({ label, name, handleChange, value, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        className="form-select"
        onChange={handleChange}
      >
        {list.map((optionValue, index) => {
          return (
            <option key={index} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

FormRowSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  list: PropTypes.array,
};

export default FormRowSelect;
