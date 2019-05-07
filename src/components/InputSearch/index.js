import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

import './index.scss';

const InputSearch = ( { inputText, onInputSearchChange } ) => {
	const handleChange = (evt) => {
    const {value} = evt.target;
    onInputSearchChange(value);
	}
  return (
    <div id="inputsearch">
      <Form>
        <Form.Field>
          <Input
            value={inputText}
            onChange={handleChange}
            icon='search'
            iconPosition='left'
            placeholder='veuillez entrer votre recherche'
          />
        </Form.Field>
      </Form>
    </div>
  );
};

InputSearch.propTypes = {
  inputText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default InputSearch;