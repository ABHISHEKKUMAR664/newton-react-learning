import './App.css';
import Home from './Home';
import Pricing from './Pricing';
import { useState } from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const studentArray = [
  {
    name: "abc",
    rollNo: 1,
    designation: "Front-End"
  },
  {
    name: "Abhishek",
    rollNo: 2,
    designation: "Mern-Stack"
  }
]

function App() {
  const [PageVeiw, setPageView] = useState("HOME");
  const [students, setStudents] = useState(studentArray);
  const [initialVisitor, setInitialVisitor] = useState(100);
  const [dummyState, setDummyState] = useState(11);

  const changeToPricingPage = () => {
    setPageView("PRICING");
  }
  const goBackToHomePage = () => {
    setPageView("HOME");
  }
  const aboutUsClickHandler = () => {
    setPageView("ABOUT-US");
  }
  const addNewStudent = () => {
    const newStudent = [...students]
    newStudent.push({
      name: "New Student" + (students.length + 1),
      rollNo: students.length + 1,
      designation: "MERN Devloper"
    })
    setStudents(newStudent)
  }

  return (

    <div className="App">
      <h3>this is sample react app</h3>
      {PageVeiw === "HOME" && (
        <Home changeToPricingPage={changeToPricingPage} />)}

      {PageVeiw === "PRICING" && (
        <Pricing goBackToHomePage={goBackToHomePage} />)}

      {PageVeiw === "ABOUT-US" && (
        <AboutUs students={students} />)}
      {PageVeiw === "CONTACT_US" && (
        <ContactUs initialNoOfVisitor={initialVisitor} dummpyProps={dummyState}/>
       )} 

      < button onClick={aboutUsClickHandler}>About Us</button>
      <button onClick={() => setPageView("HOME")}>back to Home</button>
      <button onClick={addNewStudent}>Add Student</button>
      <button onClick={() => setPageView("CONTACT_US")}>Move to Contact Us</button>
      <button onClick={() => setInitialVisitor(initialVisitor + 10)}>Change State</button>
      <button onClick={() => setDummyState(dummyState+20)}>Change Dummy State</button>

    </div>

  );
}

export default App;
