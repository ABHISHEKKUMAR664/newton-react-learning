import React, { Component } from 'react';
import StudentDisplay from './StudentDisplay';


class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            // console.log(this.props.students)
            noOfStudents:"3"
        }

    }
    componentDidMount() {
        console.log("i'm in Component Did Mount")
        setTimeout(() => {
            this.setState({ ...this.state, noOfStudents:7 })
        
        },2000)
    }

    componentWillMout() {
        console.log("im in component will mount")
    }

    shouldComponentUpdate(nextprops,nextState) {
        console.log("im in should component update")
        console.log(nextprops, nextState)
        return true;


    }

    render() {
        console.log("i'm in render method")


        return (
            <div className="aboutus" >
                <h1 style={{ color: 'orange' }}>we are in Alpha batch</h1>
                <h2>we are learning MERN Stack</h2>
                <div>
                    {this.props.students.map((student,index) => (
                        <StudentDisplay rollNo={student.rollNo} name={student.name} designation={student.designation} />
                    ))}

                </div>
                <div style={{ marginTop: 16, marginButtom: 16, fontSize: 40 }}>NoOfStudents:{this.state.noOfStudents}</div>
            </div>
        )
    }
}

export default AboutUs;