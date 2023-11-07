import Section from '../section/Section' // Import the Section component
import './Education.css'

function Education() {
    return (
        <Section
        id="education"
        title="Education"
        content= {
            <div className="education">
                <div>
                    <h3>University Education</h3>
                    <p>
                    BS in Computer Science
                    </p>
                    <p>National University of Computer and Emerging Science, FAST</p>
                    <p>Lahore, Pakistan, 2010 - 2014</p>
                </div>

                <div>
                    <h3>University Courses</h3>
                    <p>
                    Artificial Intelligence, Computer Programming, Data Structures, Design & Analysis of Algorithms, Human-Computer Interaction, Object-Oriented Analysis & Design, Software Engineering, Theory of Automata, Advanced Database Systems
                    </p>
                </div>

                <div>
                    <h3>University Projects</h3>

                    <ul>
                    <li>
                        <h4>Automated Text Positioning for Urdu Newspaper Headline</h4>
                        <p>
                        It was an intelligent rule-based automated system for positioning Urdu text in newspaper's headlines. Newspaper companies hire calligraphers to manually perform Urdu newspaper headline generation. This was a time-consuming task. It did the same work faster and more efficiently. It was my Final Year Project. It got 2nd position in Softec’14 FAST Lahore.
                        </p>
                        <p>Technologies: C++, MFC, Cbitmap, Image processing</p>
                        <p>Features: Rule-based expert system for headline generation for Urdu newspaper</p>
                    </li>
                    <li>
                        <h4>Compiler</h4>
                        <p>
                        It was a project in Compiler Construction course, a basic compiler for a language (subset of C++). It had 3 primitive data types: integers, character, and string. It also handled functions, Print statements, Input statements, and assignment statements.
                        </p>
                        <p>Technologies: Java, CFG, Regular Expressions</p>
                        <p>Features: Translation Schemes, Byte Code, variables, arrays, IO, and functions</p>
                    </li>
                    </ul>
                </div>
            </div>
        }
        />
    );
  }
  
  export default Education;