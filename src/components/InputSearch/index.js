import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import './index.scss';

const InputSearch = () => (
    <div id="inputsearch">
        <Form>
					<Form.Field>
						<Input
							placeholder='Search...'
							icon='search'
							iconPosition='left'
						/>
					</Form.Field>
				</Form>

    </div>
);

export default InputSearch;