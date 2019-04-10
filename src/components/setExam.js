import React, { Component } from 'react';
import '../css/exam.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logo from '../asset/tossuplog.png'

class SetExam extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ques3Img: "",
            chartImg: "",
        }

        // this.toggle = this.toggle.bind(this);

    }

    seePreview() {
        console.log("See Preview");
    }

    saveExam = (event) => {
        event.preventDefault()
        let ques1 = event.target.ques1.value;
        let ques2 = event.target.ques2.value;
        console.log(" ques1 => ", ques1);
        console.log(" ques2 => ", ques2);
        console.log(" ques3Img => ", this.state.ques3Img);
        console.log(" chartImg => ", this.chartImg);

    }

    submitNewExam() {
        console.log("Submit New Exam!");
    }

    imageUpload(part){
        console.log("Image uploading!");
        var file = null;
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
            var reader = new FileReader();
            reader.readAsDataURL(fileList[0]);
  
            reader.onload = function(){
              if(part === "part2"){
                document.getElementById('uploadImgPic').src = reader.result;
                img = reader.result;
                // console.log(" img >>>>>>> ", this.state.ques3Img)
              }else{
                document.getElementById('uploadImgChart').src = reader.result;
                this.chartImg = reader.result;
              }
            //   imgRes = reader.result;
            };
        }
        this.state.ques3Img = img;
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

            var reader = new FileReader();
            console.log(" typeof(fileList[0]) => ", typeof(fileList[0]));
   
            reader.readAsDataURL(fileList[0]);
            let btnId = question + "btn";
            
            reader.onload = function(){
                console.log("btnID => ", btnId);
                document.getElementById(btnId).innerText = "File uploaded";
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