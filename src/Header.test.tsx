import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('header', () => {

  describe('when login button clicked', () => {
    it('should go to the right page', () => {
      render(<App />);
      fireEvent.click(screen.getByText(/Login/));
      expect(global.window.location.pathname).toContain('/login');
    });
  });

  describe('when get moving button clicked',()=> {
    it('should go to the right page',()=>{
      render(<App/>);
      fireEvent.click(screen.getByText(/Get Moving/));
      expect(global.window.location.pathname).toContain('/get-moving');
    })
  });

  describe('when eat healthy button clicked',()=> {
    it('should go to the recipes page',()=>{
      render(<App/>);
      fireEvent.click(screen.getByText(/Eat Healthy/));
      expect(global.window.location.pathname).toContain('/recipes');
    })
  });

  describe('when games button clicked',()=> {
    it('should go to the right page',()=>{
      render(<App/>);
      fireEvent.click(screen.getByText(/Games/));
      expect(global.window.location.pathname).toContain('/games');
    })
  });

  describe('when about button clicked',()=> {
    it('should go to the right page',()=>{
      render(<App/>);
      fireEvent.click(screen.getByText(/About/));
      expect(global.window.location.pathname).toContain('/about');
    })
  });

});