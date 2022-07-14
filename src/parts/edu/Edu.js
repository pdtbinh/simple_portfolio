import './Edu.css';
import Share from '../share/Share';
import Title from '../share/Title';

export default function Edu() {
  return (
    <>
        <Title small={<EduIntroLeft/>} large={<EduIntroRight/>}/>
        <Share small={<EduLeft/>} large={<EduRight/>}/>
    </>
    
  );
}

function EduIntroLeft() {
    return (
        <div>
            <h2>Education</h2>
        </div>
    )
}

function EduIntroRight() {
    return (
        <div>
            <h2>;</h2>
        </div>
    )
}

function EduLeft() {
    return (
        <div>
            <p className='EduCompany'>Aalto University</p>
            <p className='EduPlace'>Espoo, Finland</p>
            <p className='EduTime'>September 2019 - July 2022</p>
        </div>
    )
}

function EduRight() {
    return (
        <div className='EduRight'>
            <p className='EduCompany'>Honours Bachelor of Science and Technology</p>
            <ul>
                <li>Recognition: Graduate with Honours (excellent thesis outcome & GPA)</li>
                <li>Culmulative GPA: 4.27 out of 5</li>
                <li>Studies: Data Science (major) & Computational Engineering (minor)</li>
                <li>
                    Relevant Coursework: Data Structures and Algorithms, Principle of Algorithmic Techniques,
                    Scala Programming, Python Programming, C Programming, Databases, Creative Coding, 
                    Theory of Computation, Human-Computer Interaction, Machine Learning, 
                    Artificial Intelligence, Data Science Project
                </li>
            </ul>
            
        </div>
    )
}