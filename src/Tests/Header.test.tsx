import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import {BrowserRouter as Router} from 'react-router-dom';

describe('buttons exist',()=>{
  test('login button exists',()=>{
    render(<Router><App/></Router>);
    expect(screen.getAllByText(/Login/)[0]).toBeInTheDocument();
  });
  test('get moving button exists',()=>{
    render(<Router><App/></Router>);
    expect(screen.getAllByText(/Get Moving/)[0]).toBeInTheDocument();
  });
  test('eat healthy button exists',()=>{
    render(<Router><App/></Router>);
    expect(screen.getByText(/Eat Healthy/)).toBeInTheDocument();
  });
  test('games button exists',()=>{
    render(<Router><App/></Router>);
    expect(screen.getByText(/Games/)).toBeInTheDocument();
  });
  test('about button exists',()=>{
    render(<Router><App/></Router>)
    expect(screen.getAllByText(/About/)[0]).toBeInTheDocument();
  });
});

describe('buttons function', () => {

  describe('when login button clicked', () => {
    it('should go to the right page', () => {
      render(<Router><App/></Router>);
      fireEvent.click(screen.getAllByText(/Login/)[0]);
      expect(global.window.location.pathname).toContain('/login');
    });
  });

  describe('when get moving button clicked',()=> {
    it('should go to the right page',()=>{
      render(<Router><App/></Router>);
      fireEvent.click(screen.getAllByText(/Get Moving/)[0]);
      expect(global.window.location.pathname).toContain('/get-moving');
    })
  });

  describe('when eat healthy button clicked',()=> {
    it('should go to the recipes page',()=>{
      render(<Router><App/></Router>);
      fireEvent.click(screen.getAllByText(/Recipes/)[0]);
      expect(global.window.location.pathname).toContain('/recipes');
    })
  });

  describe('when games button clicked',()=> {
    it('should go to the right page',()=>{
      render(<Router><App/></Router>);
      fireEvent.click(screen.getAllByText(/Games/)[0]);
      expect(global.window.location.pathname).toContain('/games');
    })
  });

  describe('when about button clicked',()=> {
    it('should go to the right page',()=>{
      render(<Router><App/></Router>);
      fireEvent.click(screen.getAllByText(/About/)[0]);
      expect(global.window.location.pathname).toContain('/about');
    })
  });

});