import React,{Component} from 'react';
import '../css/exam.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {withRouter} from 'react-router-dom'; 

class SetExam extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.toggle = this.toggle.bind(this);

    }

    submitNewExam(){
        console.log("New Exam!");
    }

    render() {
        return (
            <div className="set-exam-main">
                <div className='top-upper-layer'>
                    PART 1
                </div>
                <div className="question-area">
                    <div>Question 1</div>
                    <Input type="textarea" className="question"></Input>
                    <div>Question 2</div>
                    <Input type="textarea" className="question"></Input>
                </div>
                <div id="examRecords" className='exam-record'>

                </div>
            </div>
        );
    }
}

export default withRouter(SetExam);