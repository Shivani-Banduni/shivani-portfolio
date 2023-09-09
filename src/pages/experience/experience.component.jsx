import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import "./experience.style.css";


const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Fronted Developer</Card.Title>
                </div>
                <div>
              
                  <Card.Text className="text-center style">
                      {/* <strong className="body-title-style ">Smart Kaksha Project</strong> */}
                    {/* <br /> */}
                     <strong>Company:AVRL</strong>
                    <br /> 
                    
                    {/* <strong>Role:</strong> Developer.
                    <br /> */}
                    <strong>Description:</strong> <strong>Developed numerous frontend projects using React and Next.js for a diverse range of clients.</strong>  Collaborated closely with clients to understand their requirements and translate them into effective UI/UX solutions.

                    <br />
                    <strong>Technology:</strong> : STACK (HTML, CSS, JavaScript, React js, Next.js)

                    <br />
                    <strong>Duration:</strong> 02/FEB/2023 - 28/AUG/2023
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
       {/* Unigov
Job Description: Developing a social management platform which replicates the institutional 
activities and provides 360-degree services to an individual on an online platform.
Creating reusable React Native components and performing bug fixes. */}
{/* Duration: June1st, 2021 – July 31st, 2021  */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Fronted Intern</Card.Title>
                </div>
                <div>
             
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Unigov Mobile</strong> */}
                    {/* <br /> */}
                    <strong>Company: Lattech</strong>
                    {/* <br /> */}
                    
                    {/* <strong>Role:</strong> Developer. */}
                    <br />
                    <strong>Description:</strong> <strong>Collaborate with the development team to design, develop, and maintain web applications using React.js.Contribute to a positive and innovative team environment.</strong> Work on feature enhancements, bug fixes, and optimization tasks.

                    <br />
                    <strong>Technology:</strong> :HTML, CSS, React, JavaScript.

                    <br />
                    <strong>Duration:</strong> Dec 15, 2022 – jan 31st, 2022

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Experience;
