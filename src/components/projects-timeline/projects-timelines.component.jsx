import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
//project logo
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/SecretDiary.webp";
import L_ChatRoom from "../../assets/img/projects/VChat.webp";
// skills
import baby from "../../assets/img/projects/baby.jpg"
import mamearth from "../../assets/img/projects/mamearth.jpg"
import mart from "../../assets/img/projects/mart.webp"
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_PHP from "../../assets/img/skills/php.svg";
import L_MYSQL from "../../assets/img/skills/mysql.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import './projects-timelines.style.css';
const ProjectTimeline = () => {
  return (
    <div id='projects'>
       <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        
         {/* Project: Chat room */}

         <ImageEvent date="March/2021" className="text-center" text="Indiamart cloned website" src={mart} alt="Chat Room">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Ecommerce website which connects buyers with suppliers.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML | CSS | Javascript | Bootstarp</li>
                         
                         
                        </ul>
                        <hr />
                        {/* <strong>Tech used:</strong>
                        <ul>
                          
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React Native" rounded className="image-style1 m-1"></Image> React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Fire Base" rounded className="image-style1 m-1"></Image> Firebase
                            </span>
                          </li> */}
                        {/* </ul> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://shivani-indiamart.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                { <UrlButton href="https://github.com/009shivani/India_mart" target="_blank">
                  SOURCE CODE
                </UrlButton> }
                
              </div>
            </div>
          </ImageEvent>
        
        {/* Project: Smart Brain */}
          <ImageEvent date="April/2022" className="text-center" text="A Website Named Mamaearth" src={mamearth} alt="Smart Brain Face Detect">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An indian company of Health , Wellness and Fitness.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML|CSS|JAVASCRIPT|FONT AWESOME</li>
                          {/* <li>Login with OTP.</li> */}
                         
                        </ul>
                        <hr />
                        {/* <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                        </ul> */}
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://shivani009-mamaearth.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/Ajay-Maury/Mamaearth" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        {/* Project: RoboFriends */}
           
          <ImageEvent date="May/2022" className="text-center" text="Baby & Bath Cloned  Website" src={baby} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A American retail store chain which sells soaps , lotions , fragrances and candles.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>Reactjs|module.css|Routing|styled componants</li>
                          {/* <li>Login with OTP.</li> */}
                         
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://shivani-baby-bath.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/009shivani/Bath-BodyWorks" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          
        {/* Project: Secret diary */}

          {/* <ImageEvent date="15/12/2019" className="text-center" text="Secret Diary" src={L_ProductHuntClone} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Secret Diary webapp coded using php.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Type your thoughts in the diary</li>
                          <li>Update your writing in the diary</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_PHP} alt="Django" rounded className="image-style m-1"></Image> PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_MYSQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> MYSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://www.projectupes.epizy.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/VibhorSingh19/Secret-Diary" target="_blank">
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent> */}
           
        </Events>
      </Timeline>  
    </div>
  );
}

export default ProjectTimeline;
