import React from 'react';
import { Template } from 'govuk-react-jsx';
import { Helmet } from 'react-helmet';

import DatePicker from './components/DatePicker';

const headerProps = {
    serviceName: 'Date Picker Demo Service',
    serviceUrlHref: '/'
};

function App() {
    return (
        <Template
            header={headerProps}
        >
            <Helmet>
                <title>{headerProps.serviceName}</title>
            </Helmet>
            <DatePicker />
        </Template>
    );
}

export default App;
