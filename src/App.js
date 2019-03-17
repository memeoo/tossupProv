import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import Login from '../src/components/login';
import axios from 'axios';

class App extends Component {

  render() {
  
    return (
      <div>
        <Login/>
      </div>
    );
  }
}


export default App;
