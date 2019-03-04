import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this)

  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="App">
        <div style={{marginTop:"33px"}}>
          <span className="mainTitle">Toss Up!</span><span style={{marginLeft:"12px",fontSize:"18px"}}>for examiner</span>
        </div>
        <div className="form">
          <Form>
            <FormGroup>
              <Label for="id">ID</Label>
              <Input type="text" name="id" id="id" maxLength="20" />
            </FormGroup>
            <FormGroup>
              <Label>PASSWORD</Label>
              <Input type="password" name="pass" />
            </FormGroup>
          </Form>

          <Button color="primary" size="lg" block >로그인 (Login)</Button>
          <Button outline color="secondary" size="sm" block style={{ marginTop: "12px" }} onClick={this.toggle}>회원 가입(Sign up)</Button>
        </div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Membership (as an examiner)</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="id">ID</Label>
                  <Input type="text" name="id" id="id" maxLength="20" />
                </FormGroup>
                <FormGroup>
                  <Label>PASSWORD</Label>
                  <Input type="password" name="pass" />
                </FormGroup>
                <FormGroup>
                  <Label>Repeat Password</Label>
                  <Input type="password" name="pass_re" />
                </FormGroup>
                <FormGroup>
                  <Label for="id">Email</Label>
                  <Input type="email" name="mail" id="emaile" maxLength="35" />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}


export default App;
