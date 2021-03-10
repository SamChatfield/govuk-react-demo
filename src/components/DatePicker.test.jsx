import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DatePicker from './DatePicker';

describe('test date picker component', () => {

    it('should render submit button', async () => {
        render(<DatePicker />);

        const submitButton = screen.getByText('Submit');

        await waitFor(() => {
            expect(submitButton).toBeInTheDocument();
        });
    });

    it('should display error summary when an error is present in state', async () => {
        render(<DatePicker />);

        userEvent.click(screen.getByText('Submit'));

        await waitFor(() => {
            expect(screen.getByText(/There is a problem/i)).toBeDefined();
        })
    });

});
