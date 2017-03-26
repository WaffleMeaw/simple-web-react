import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux'
import Reducer from './reducers'
import App from './App';
import './index.css';

const store = createStore(Reducer)

const view = () => (
  render((
    <App store={store} />
  ), document.getElementById('root')
))

store.subscribe(view)
view()
