import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

import './index.scss';

const InputSearch = ( { value, onInputSearchChange, onFormSubmit, loading } ) => {
	const handleChange = (evt) => {
    const {value} = evt.target;
    onInputSearchChange(value);
    
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();

  }
  return (
    <div id="inputsearch">
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            value={value}
            onChange={handleChange}
            icon='search'
            iconPosition='left'
            placeholder='veuillez entrer votre recherche'
            loading={loading}
            disabled={loading}
          />
        </Form.Field>
      </Form>
    </div>
  );
};

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default InputSearch;