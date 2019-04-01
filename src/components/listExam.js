import React,{Component} from 'react';
import '../css/exam.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ListExam extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.toggle = this.toggle.bind(this);
        

    }

    getName(){
        let name = this.props.location.state.name;
        console.log(" name => ", name);
        return name+" 출제자 님"; 
    }

    submitNewExam(){
        console.log("New Exam!");
    }

    render() {
        return (
            <div>
                <div className='top-upper-layer'>
                    안녕하세요 {this.getName()}
                </div>
                <div className="new-exam-btn">
                    <Button color="primary" size="lg" block onClick={this.submitNewExam}>새 문제 출제하기</Button>
                </div>
                <div id="examRecords" className='exam-record'>

                </div>
            </div>
        );
    }
}


export default ListExam;