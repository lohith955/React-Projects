import resumephoto from "./resumephoto.png"
import linkedin from "./linkedinlogo.png"
import github from "./githublogo.png"
import stack from "./extralogo.png"
import amarphoto from "./amarphoto.jpg"
import './Resume.css'
function Resume() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="resume">
                <div className="image">
                    <img src={amarphoto} alt=" not found"  width="100px" height="100px"/>

                </div>
                <div className="top">
                    <div className="name-job">
                        <h1 className="name">A.Amareshwara Reddy</h1>
                    </div>
                    <div className="class-address">
                        <h4 className="address">Creative and Innovative Web developer</h4>
                    </div>
                </div>
                <div className="resumeinform">
                    <div className="profile">
                        <div className="content">
                            <h3 className="h">Profiles</h3>
                            <div>
                                <p><img src={linkedin} alt=" not found" width="15px" height="15px" />A.Amareshwara Reddy</p>
                                <p>LinkedIn</p>
                            </div>
                            <div>
                                <p><img src={github} alt=" not found" width="15px" height="15px" /> A.Amareshwara Reddy</p>
                                <p>Github</p>
                            </div>
                            <div>
                                <p><img src={stack} alt=" not found" width="15px" height="15px" /> A.Amareshwara Reddy</p>
                                <p>StackOverflow</p>
                            </div>
                            <div className="skills">
                                <h3 className="h">Skills</h3>
                                <h3 className="h">Web Technologies</h3>
                                <h4 className="h">Advanced</h4>
                                <p>HTML5,JavaScript,Python</p>
                                <h3>Web Frameworks</h3>
                                <p>Intermediate</p>
                                <p>React.js,Express.js<br />Django</p>
                                <h3 className="h">Tools</h3>
                                <p>Intermediate</p>
                                <p>React</p>
                            </div>
                            <div className="Certificate">
                                <h3 className="h">Certifications</h3>
                                <h3 className="h">Full-Stack Web Development</h3>
                                <p>Vizag Steel Plant</p>
                                <h4>2024</h4>
                                <h3>Java</h3>
                                <p>Basics&intermediate</p>
                                <h4>2024</h4>
                            </div>
                            <div className="Language">
                                <h3 className="h">Languages</h3>
                                <h3>English</h3>
                                <p>Native Speaker</p>
                                <h3 className="h">Hindi</h3>
                                <p>Intermediate</p>
                            </div>
                            <div className="references">
                            </div>
                        </div>
                    </div>
                    <div className="inform">
                        <div className="links">
                            <p className="logo"><i className="fa-solid fa-location-dot"></i>Madanapalle.&emsp;
                            <i className="fa-solid fa-phone"></i>9390535682.&emsp; <i>@</i> amareshwarareddy12@gmail.com .</p>
                            <p><i className="fa-solid fa-link"></i><a  href="www.linkedin.com/in/amareshwara-reddy-05a106293/">www.linkedin.com/in/amareshwara-reddy-05a106293/</a></p>
                        </div>
                        <br />
                        <div className="summary">
                            <h3>Summary</h3>
                            <p>Innovative Web Developer in building impactful and user-friendly website and applications. Specilizes in <b>fornt-end technologies</b> and passionatie about modern web stabdards and cutting -edge development techniques .proven trackof leading succesful projects from concept to deployemenent</p>
                        </div>
                        <div className="Experience">
                            <h3>Experience</h3>
                            <div className="creativesolution">
                                <div className="line1">
                                    <div className="fl1">
                                        <div>
                                            <h3 >Creative Solution
                                                Inc.
                                            </h3>
                                            <p >Senior Web Developer</p>
                                        </div>
                                        <div>
                                            <h4>January 2019 to Present</h4>
                                            <p align="right">San Fransisco,CA</p>
                                        </div>

                                    </div>
                                    <p className="link34"><i className="fa-solid fa-link"></i>http://creativesolutions.inc/</p>
                                </div>
                                <div className="list1">
                                    <ul>
                                        <li><p>Soreheaded the redesign of the main product website,resulting in s 40 % increase in user engagement.</p></li>
                                        <li><p>Developed and implemented a new responsive framework,improving cross-device compatibility.</p></li>
                                        <li>Mentored a team of four junior developers ,fostering a culture of technical execellence.</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <div className="TechAdvancers">
                                <div className="fl2">
                                    <div>
                                        <h3>TechAdvancers
                                        </h3>
                                        <p>Web Developer</p>
                                    </div>
                                    <div>
                                        <h4>January 2016 to December 2018</h4>
                                        <p align="right">San Fransisco,CA</p>
                                    </div>
                                </div>
                                <p className="link34"><i className="fa-solid fa-link"></i>http://techadvancers.com/</p>
                                <div className="list2">
                                    <ul>
                                        <li>Collaborated in a team of 10 to developed high-quality web applications using React.ja and /Node.ja.</li>
                                        <li>Managed the integration of third-party services suchn as stripe for payments and Twillio for Sms Services</li>
                                        <li> Optimized application performance,achiving a 30 % reduction in load times</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="Education">
                            <h3>Education</h3>
                            <div className="fl3">
                                <div>
                                    <h4>University of callifornia</h4>
                                    <p>Berkeley, CA</p>
                                </div>
                                <div>
                                    <h4>August 2012 to May 2016</h4>
                                    <p>Bachleors in computer Science</p>
                                </div>
                            </div>
                        </div>
                        <h3>Projects</h3>
                        <div className="projects">
                            <div className="ecom">
                                <div className="fl1">
                                    <h4>E-Commerece Platform </h4>

                                </div>

                                <div className="confirm1">
                                    <p >Project Lead</p>
                                    <p>Led the development of a full-Stake e-commerce platform,improving sales conversion by 25%.</p>
                                </div>

                            </div>
                            <div className="interactive">
                                <div className="confirm2">
                                    <h4>Interactive Dashboard</h4>
                                </div>
                                <div className="frontend">
                                    <p>Frontend Developer</p>
                                    <p>Created an interactive analytics dashboard for a SaaS application for clients.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resume