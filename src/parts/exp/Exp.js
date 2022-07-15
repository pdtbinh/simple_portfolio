import './Exp.css';
import Share from '../share/Share';
import Title from '../share/Title';
import Skill from '../skill/Skill';
import Grid from '@mui/material/Grid';

export default function Exp() {
    const elisa = [
        'Optimize the model selection process for machine learning teams by developing AutoML in Python within existing big data solution',
        'Develop multiple automated data visualization and data engineering functions to improve data team’s productivity',
        'Redesign internal system databases from unstructured to semi-structured and effectively solve conflicting data errors'
    ]
    const elisaStack = [
        {name: 'Python', source: 'PythonLogo'},
        {name: 'SQL', source: 'SQLLogo'},
        {name: 'sklearn', source: 'sklearnLogo'},
        {name: 'Azure', source: 'AzureLogo'},
        {name: 'Databricks', source: 'DatabricksLogo'},
        {name: 'MLflow', source: 'MLflowLogo'},
    ]

    const futurice = [
        'Initiate and design an automated ETL testing solution to replace manual API schema testing',
        'Successfully build and apply the above solution in Python to automize the testing process for the entire team',
        'The solution simplifies hundreds-of-line code to a single command capable of achieving the equivalent results',
        'The solution increases consistency in generating exhaustive tests across different API schemas'
    ]
    const futuriceStack = [
        {name: 'Python', source: 'PythonLogo'},
        {name: 'AWS', source: 'AWSLogo'},
        {name: 'PyTest', source: 'PyTestLogo'}
    ]

    const aalto = [
        'Mentor a class of 30 BSc. and MSc. students on SQL data management and Python data analytics',
        'Design a data science project topic for over 50 students that simulates the COVID vaccine distribution process',
        'Collaborate with responsible professors to plan multiple course management policies'
    ]
    const aaltoStack = [
        {name: 'Python', source: 'PythonLogo'},
        {name: 'SQL', source: 'SQLLogo'}
    ]
    
    const upwork = [
        "Analyse client's requests and provide consultation on structuring core game features to ensure attractivity and feasibility",
        'Establish and present a comprehensive multiple-phase plan on designing, developing, testing for the game prototype',
        'Succesfully build the game in Unity C# and receive a lot of positive feedback from the testing community'
    ]
    const upworkStack = [
        {name: 'C#', source: 'CSharpLogo'},
        {name: 'Unity', source: 'UnityLogo'},
        {name: 'Photoshop', source: 'PtsLogo'}
    ]

  return (
    <>
        <Title small={<ExpIntroLeft/>} large={<ExpIntroRight/>}/>

        <Share 
            small={<ExpLeft company='Elisa Corporation' place='Helsinki, Finland' time='May 2022 - September 2022 (5 month)' logos={elisaStack}/>}
            large={<ExpRight position='Software Developer Intern' tasks={elisa}/>}/>

        <Share 
            small={<ExpLeft company='Futurice Group' place='Helsinki, Finland' time='January 2022 - Apr 2022 (4 month)' logos={futuriceStack}/>}
            large={<ExpRight position='Data Specialist Intern' tasks={futurice}/>}/>

        <Share 
            small={<ExpLeft company='Aalto University' place='Espoo, Finland' time='April 2021 - July 2021 (3 month)' logos={aaltoStack}/>}
            large={<ExpRight position='Teaching Assistant (Databases for Data Science)' tasks={aalto}/>}/>

        <Share 
            small={<ExpLeft company='Upwork' place='Remote' time='February 2021 - March 2021 (2 month)' logos={upworkStack}/>}
            large={<ExpRight position='Unity Developer Freelancer' tasks={upwork}/>}/>
    </>
    
  );
}

function ExpIntroLeft() {
    return (
        <div>
            <h2>Experience</h2>
        </div>
    )
}

function ExpIntroRight() {
    return (
        <div>
            <h2>;</h2>
        </div>
    )
}

function ExpLeft(props) {
    return (
        <div className='ExpLeft'>
            <p className='ExpCompany'>{props.company}</p>
            <p className='ExpPlace'>{props.place}</p>
            <p className='ExpTime'>{props.time}</p>
            <p>Technology stack</p>
            <Grid container columns={{xs: 2, sm: 3, md: 4, lg: 5}} className='ExpLeftLogos'>
                {props.logos.map(logo => <Skill key={logo.name} skillLogo={logo.source} skillName={logo.name}/>)}
            </Grid>
        </div>
    )
}

function ExpRight(props) {
    return (
        <div>
            <p className='ExpCompany'>{props.position}</p>
            <ul>
                {props.tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
        </div>
    )
}