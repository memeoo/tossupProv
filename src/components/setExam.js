import React, { Component } from 'react';
import '../css/exam.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logo from '../asset/tossuplog.png'
import axios from 'axios';

class SetExam extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ques1txt : "", 
            ques2txt : "",
            ques3Img : "",
            ques4aud : "",
            ques5aud : "",
            ques6aud : "",
            part4Img : "",
            ques7aud : "",
            ques8aud : "",
            ques9aud : "",
            ques10aud : "",
            ques11txt : "",
        }

        // this.toggle = this.toggle.bind(this);

    }

    seePreview() {
        console.log("See Preview");
    }

    saveExam = (event) => {
        event.preventDefault()
        this.state.ques1txt = event.target.ques1.value;
        this.state.ques2txt = event.target.ques2.value;
        this.state.ques3Img = document.getElementById('uploadImgPic').src;
        this.state.ques4aud = document.getElementById('ques4btn').src;
        this.state.ques5aud = document.getElementById('ques5btn').src;
        this.state.ques6aud = document.getElementById('ques6btn').src;
        this.state.part4Img = document.getElementById('uploadImgChart').src;
        this.state.ques7aud = document.getElementById('ques7btn').src;
        this.state.ques8aud = document.getElementById('ques8btn').src;
        this.state.ques9aud = document.getElementById('ques9btn').src;
        this.state.ques10aud = document.getElementById('ques10btn').src;
        this.state.ques11txt = event.target.ques11.value;

        console.log(" ques1 => ", this.state.ques1Txt);
        console.log(" ques2 => ", this.state.ques2Txt);
        console.log(" ques4Aud => ", this.state.ques4aud);
        console.log(" chartImg => ", this.chartImg);

        axios.post('http://localhost:3003/saveExam/', this.state).then(response => {
            console.log(" res >>>> ", response);
            if (response.status === 200) {
                this.toggle();
            }
        }).catch(exception => {
            console.log(" ex >>>> ", exception);
        })


    }

    submitNewExam() {
        console.log("Submit New Exam!");
    }

    imageUpload(part){
        console.log("Image uploading!");
        var file = null;
        var reader = new FileReader();
        console.log(" part => ", part); 
        if(part === "part2"){
            file = document.getElementById('pic_read');
            console.log(" file => ", file); 
        }else{
            file = document.getElementById('chart_read');
            console.log(" file => ", file); 
        }
        console.log(" > ", this.state.ques3Img)
        let img = "";
        file.click();
        file.onchange = function(){
            var fileList = file.files;
            reader.readAsDataURL(fileList[0]);
            reader.onload = function(){
              if(part === "part2"){
                document.getElementById('uploadImgPic').src = reader.result;
              }else{
                document.getElementById('uploadImgChart').src = reader.result;
              }  
            };
        }
       
    }

    audioUpload(question){
        console.log("Audio uploading!");   
        var file = document.getElementById(question);
        file.click();
     
        file.onchange = function(){
            var fileList = file.files;   

            if(typeof(fileList[0]) === "undefined"){
                console.log( " Undefined !!");
                return;
            }

            console.log(" typeof(fileList[0]) => ", typeof(fileList[0]));
            var reader = new FileReader();
            reader.readAsDataURL(fileList[0]);
            let btnId = question + "btn";
            
            reader.onload = function(){
                console.log("btnID => ", btnId);
                document.getElementById(btnId).innerText = "File uploaded";
                document.getElementById(btnId).src = reader.result;
            //   imgRes = reader.result;
            };
          }
    }

    render() {
        return (
            <div className="set-exam-main">
            <Form onSubmit={this.saveExam}>
                <div className='title-layer'>
                    PART 1
                </div>
                <div className="question-area">
                    <div>Question 1</div>
                    <Input type="textarea" className="question" id="ques1"></Input>
                    <div style={{ marginTop: "10px" }}>Question 2</div>
                    <Input type="textarea" className="question" id="ques2"></Input>
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
                      <input type='file' id='ques4'  hidden/>
                      <Button color="secondary" type="submit" id="ques4btn" onClick={() => this.audioUpload("ques4")}>음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 5</div>
                      <input type='file' id='ques5' accept="audio/*" hidden/>
                      <Button color="secondary" type="submit" id="ques5btn" onClick={() => this.audioUpload("ques5")}>음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 6</div>
                      <input type='file' id='ques6' accept="audio/*" hidden/>
                      <Button color="secondary" type="submit" id="ques6btn" onClick={() => this.audioUpload("ques6")}>음성 파일 선택</Button>
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
                      <input type='file' id='ques7' accept="audio/*" hidden/>
                      <Button color="secondary" type="submit" id="ques7btn" onClick={() => this.audioUpload("ques7")}>음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 8</div>
                      <input type='file' id='ques8' accept="audio/*" hidden/>
                      <Button color="secondary" type="submit" id="ques8btn" onClick={() => this.audioUpload("ques8")}>음성 파일 선택</Button>
                    </div>
                    <div className="audio-question">
                      <div className="inner-question">Question 9</div>
                      <input type='file' id='ques9' accept="audio/*" hidden/>
                      <Button color="secondary" type="submit" id="ques9btn" onClick={() => this.audioUpload("ques9")}>음성 파일 선택</Button>
                    </div>
                </div>
                <div className='title-layer'>
                    PART 5
                </div>
                <div className="question-area">
                    <div className="inner-question">Question 10</div>
                    <input type='file' id='ques10' accept="audio/*" hidden/>
                    <Button color="secondary" type="submit" id="ques10btn" onClick={() => this.audioUpload("ques10")}>음성 파일 선택</Button>
                </div>
                <div className='title-layer'>
                    PART 6
                </div>
                <div className="question-area">
                    <div className="inner-question">Question 11</div>
                    <Input type="textarea" className="question" id="ques11"></Input>
                </div>
                <div style={{height:"20px"}}></div>
                <div className="btn-area">
                    <div className="audio-question">
                        <Button color="secondary" onClick={() => this.seePreview()}>미리보기(Preview)</Button>
                    </div>
                    <div className="audio-question">
                        <Button color="secondary" type="submit" >임시저장(Save)</Button>
                    </div>
                    <div className="audio-question">
                        <Button color="secondary" onClick={() => this.submitNewExam()}>제 출(Submit)</Button>
                    </div>
                </div>
                </Form>
            </div>
        );
    }
}

export default withRouter(SetExam);