import React, { Component } from 'react';
import '../css/exam.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logo from '../asset/tossuplog.png'
import axios from 'axios';

const data = new FormData();
class SetExam extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.toggle = this.toggle.bind(this);
        this.userId = this.props.location.state.name;
    }

    seePreview() {
        console.log("See Preview");
    }
    
    // onChangeHandler=event=>{
    //     console.log(event.target.files[0])
    //     this.setState({
    //         selectedFile: event.target.files[0],
    //         loaded: 0,
    //     })
    // }
   
    saveExam = (event) => {
        event.preventDefault()
        console.log(" event.target.ques1 => ", event.target);

        let q1 = event.target.ques1.value;
        let q2 = event.target.ques2.value;
        // let q3= document.getElementById('uploadImgPic').src;
        // let q4 = document.getElementById('ques4btn').src;
        // let q5 = document.getElementById('ques5btn').src;
        // let q6= document.getElementById('ques6btn').src;
        // let qchart= document.getElementById('uploadImgChart').src;
        // let q7 = document.getElementById('ques7btn').src;
        // let q8 = document.getElementById('ques8btn').src;
        // let q9= document.getElementById('ques9btn').src;
        // let q10 = document.getElementById('ques10btn').src;
        let q11 = event.target.ques11.value;
        
        console.log(" q1 >>> ", q1);
        console.log(" q2 >>> ", q2);
        console.log(" q3 >>> ", q11);


        data.append('ques1', q1);
        data.append('ques2', q2);
        // data.append('ques3Img', q3);
        // data.append('ques4aud', q4);
        // data.append('ques5aud', q5);
        // data.append('ques6aud', q6);
        // data.append('part4Img', window.atob(qchart));
        // data.append('ques7aud', q7);
        // data.append('ques8aud', q8);
        // data.append('ques9aud', q9);
        // data.append('ques10aud',q10);
        data.append('ques11', q11);
        data.append('provId', this.userId);

        console.log(" q1 => ", data.get('ques1'));
        console.log(" q2 => ", data.get('ques2'));
        console.log(" q3 => ", data.get('ques11'));

        axios.post('http://localhost:3003/saveExam/', data).then(response => {
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
        // if(this.state.ques3Img.includes())
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
 
        let img = "";
        file.click();
        file.onchange = function(){
            let fileList = file.files;
            
            reader.readAsDataURL(fileList[0]);
            reader.onload = function(){
              if(part === "part2"){
                document.getElementById('uploadImgPic').src = reader.result;
                data.append("ques3Img",fileList[0]);
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
                // document.getElementById(btnId).src = reader.result;
                data.append(btnId, fileList[0])
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

                            <Input type="textarea" className="question" id="ques1" ></Input>
           
                        <div style={{ marginTop: "10px" }}>Question 2</div>
                      
                            <Input type="textarea" className="question" id="ques2" ></Input>
                       
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
                    <Input type="textarea" className="question" id="ques11" name="ques11"></Input>
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