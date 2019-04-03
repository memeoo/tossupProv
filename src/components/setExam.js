import React, { Component } from 'react';
import '../css/exam.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logo from '../asset/tossuplog.png'

class SetExam extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.toggle = this.toggle.bind(this);

    }

    submitNewExam() {
        console.log("New Exam!");
    }

    imageUpload(){
        console.log("New Exam!"); 
        var file = document.getElementById('fileid');
        file.click();
        file.onchange = function(){
            var fileList = file.files;
            var reader = new FileReader();
            reader.readAsDataURL(fileList[0]);
  
            reader.onload = function(){
              document.getElementById('uploadImg').src = reader.result;
            //   imgRes = reader.result;
            };
          }
    }

    render() {
        return (
            <div className="set-exam-main">
                <div className='title-layer'>
                    PART 1
                </div>
                <div className="question-area">
                    <div>Question 1</div>
                    <Input type="textarea" className="question"></Input>
                    <div style={{ marginTop: "10px" }}>Question 2</div>
                    <Input type="textarea" className="question"></Input>
                </div>
                <div className='title-layer'>
                    PART 2
                </div>
                <div className="question-area">
                    <div>Question 3</div>
                    <input type='file' id='fileid' width="350px" height="220px" accept="image/*" hidden/>
                    <img src={logo} id="uploadImg"className="img-upload" onClick={() => this.imageUpload()} ></img>
                </div>
                <div className='title-layer'>
                    PART 3
                </div>
                <div className="question-area">
                    <div className="audio-question">
                      <div>Question 4</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div>Question 5</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div>Question 6</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>

                </div>

            </div>
        );
    }
}

export default withRouter(SetExam);