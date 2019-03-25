import React,{Component} from 'react';
import '../css/exam.css';

class setExam extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.toggle = this.toggle.bind(this);
        

    }

    getName(){
        let name = this.props.location.state.name;
        console.log(" name => ", name);
        return name+"님"; 
    }

    render() {
        return (
            <div>
                <div className='top-upper-layer'>
                    안녕하세요 {this.getName()}
                </div>
            </div>
        );
    }
}


export default setExam;