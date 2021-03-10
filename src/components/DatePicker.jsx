import React from 'react';
import { Button, DateInput, ErrorSummary } from 'govuk-react-jsx';

class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('Submit clicked');
        this.setState({
            errors: [...this.state.errors, 'Some error']
        });
    }

    render() {
        console.log('DatePicker render');
        return (
            <>
                {this.state.errors.length > 0 &&
                    <ErrorSummary
                        errorList={this.state.errors.map((error) => ({ children: error }))}
                    />
                }
                <DateInput
                    fieldset={{
                        legend: {
                            children: 'Select a date',
                            className: 'govuk-fieldset__legend--m'
                        }
                    }}
                    hint={{
                        children: 'For example, 15 2 2021'
                    }}
                />
                <Button onClick={this.handleClick}>Submit</Button>
            </>
        );
    }

}

export default DatePicker;
