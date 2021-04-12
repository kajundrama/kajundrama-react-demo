import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'

const customer = {
  'name': 'hong gil dong',
  'birth': '1011',
  'gender': 'M',
  'job': 'Student'
}
class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birth={customer.birth}
        gender={customer.gender}
        job={customer.job} />
    );
  }
}

export default App;
