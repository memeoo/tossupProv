import React from 'react';
import '../css/setExam';

class setExam extends Comment {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.toggle = this.toggle.bind(this);

    }

    render() {
        return (
            <div>
                <div className='top-upper-layer'>
                    안녕하세요, {}
                </div>
            </div>
        );
    }
}


export default setExam;