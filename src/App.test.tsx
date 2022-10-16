import { render, screen } from '@testing-library/react';
import App from './App';

describe ('first react test App.tsx', () => {
  describe('when displayed on the screen', () => {
    it('should show the Recipe of the Day text', () => {
      render(<App />);
      expect(screen.getByText(/Recipe of the Day/)).toBeInTheDocument();
    })
  })
})
