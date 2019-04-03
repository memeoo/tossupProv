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

    imageUpload(part){
        console.log("New Exam!");
        var file = null; 
        if(part === "part2"){
            file = document.getElementById('pic_read');
        }else{
            file = document.getElementById('chart_read');
        }
        file.click();
        file.onchange = function(){
            var fileList = file.files;
            var reader = new FileReader();
            reader.readAsDataURL(fileList[0]);
  
            reader.onload = function(){
              if(part === "part2"){
                document.getElementById('uploadImgPic').src = reader.result;
              }else{
                document.getElementById('uploadImgChart').src = reader.result;
              }
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
                    <input type='file' id='pic_read' width="350px" height="220px" accept="image/*" hidden/>
                    <img src={logo} id="uploadImgPic"className="img-upload-pic" onClick={() => this.imageUpload("part2")} ></img>
                </div>
                <div className='title-layer'>
                    PART 3
                </div>
                <div className="question-area">
                    <div className="audio-question">
                      <div className="inner-question">Question 4</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 5</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 6</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                </div>
                <div className='title-layer'>
                    PART 4
                </div>
                <div className="question-area">
                    <div>
                        <input type='file' id='chart_read' width="550px" height="400px" accept="image/*" hidden/>
                        <img src={logo} id="uploadImgChart"className="img-upload-chart" onClick={() => this.imageUpload("part4")} ></img>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 7</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 8</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 9</div>
                      <Button color="secondary" type="submit">음성 파일 선택</Button>
                    </div>
                </div>
                <div className='title-layer'>
                    PART 5
                </div>
                <div className="question-area">
                    <div className="inner-question">Question 10</div>
                    <Button color="secondary" type="submit">음성 파일 선택</Button>
                </div>
                <div className='title-layer'>
                    PART 6
                </div>
                <div className="question-area">
                    <div className="inner-question">Question 11</div>
                    <Input type="textarea" className="question"></Input>
                </div>
                <div style={{height:"20px"}}></div>
                <div className="btn-area">
                    <div className="audio-question">
                        <Button color="secondary" type="submit">미리보기(Preview)</Button>
                    </div>
                    <div className="audio-question">
                        <Button color="secondary" type="submit">임시저장(Save)</Button>
                    </div>
                    <div className="audio-question">
                        <Button color="secondary" type="submit" >제 출(Submit)</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SetExam);