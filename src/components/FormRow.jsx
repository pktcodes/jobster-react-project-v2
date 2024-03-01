import PropTypes from 'prop-types';

const FormRow = ({ type, name, value, handleChange, label }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

FormRow.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FormRow;
