import React,{Component} from 'react';
import '../css/exam.css';
import {withRouter} from 'react-router-dom'; 

import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ListExam extends Component {

    constructor(props) {
        super(props);
        console.log(" ####################### ", this.props);
        this.state = {

        }
        // this.toggle = this.toggle.bind(this);
    }

    getName(){
        let name = this.props.location.state.name;
        console.log(" name => ", name);
        return name+" 출제자 님"; 
    }

    moveSetNewExam(prop){
        console.log("New Exam!");
        console.log(" this.props => ", this.props);
        prop.history.push(
        {
            pathname: '/setNewExam',
            //   state: {name: response.data[0].name}
        });
    
    }

    render() {
        return (
            <div className="list-exam-main">
                <div className='top-upper-layer'>
                    안녕하세요 {this.getName()}
                </div>
                <div className="new-exam-btn">
                    <Button color="primary" size="lg" block onClick={() => this.moveSetNewExam(this.props)}>새 문제 출제하기</Button>
                </div>
                <div id="examRecords" className='exam-record'>

                </div>
            </div>
        );
    }
}


export default withRouter(ListExam);