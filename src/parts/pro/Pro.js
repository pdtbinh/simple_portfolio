import './Pro.css';
import Share from '../share/Share';
import Title from '../share/Title';
import Skill from '../skill/Skill';
import Grid from '@mui/material/Grid';

export default function Pro() {
    
    const pro1_tasks = [
        'A web-based social network built in JavaScript that provides graphical data visualization on portfolio information',
        'Frontend is built within React, using React Hooks as alternative to Redux; authentication with Passport.js',
        'REST API is built with Node.js and Express; databases management with MongoDB and Mongoose; Git version control'
    ]

    const pro1_stack = [
        
    ]

    const pro1_repos = [
        {link: 'https://github.com/pdtbinh/Liori_SocialMedia_Frontend', name: 'Frontend Repo'},
        {link: 'https://github.com/pdtbinh/Liori_SocialMedia_Backend', name: 'Backend Repo'}
    ]

    const pro2_tasks = [
        'Use natural language processing (NLP) to predict complexity of literature paragraphs for classroom use',
        'Process, extract learning features, and visualize the data from datasets provided by CommonLit library',
        'Ensemble BERT variants such as RoBERTa-Base, RoBERTa-Large, RoBERTa-XML to predict final complexity score',
        'Obtained testing score reaches top 10% of the CommonLit Readability Kaggle competition'
    ]

    const pro2_stack = [
        {name: 'Python', source: 'PythonLogo'}
    ]

    const pro2_repos = [
        {link: 'https://github.com/pdtbinh/CommonLit_Readability_ML_Kaggle', name: 'Notebook Repo'}
    ]


  return (
    <>
        <Title small={<ProIntroLeft/>} large={<ProIntroRight/>}/>

        <Share 
            small={<ProLeft name='Automatic Visualization Portfolio' logos={pro1_stack} repos={pro1_repos}/>}
            large={<ProRight type='Web Application Development' tasks={pro1_tasks}/>}/>

        <Share 
            small={<ProLeft name='Text Readability Grader' logos={pro2_stack} repos={pro2_repos}/>}
            large={<ProRight type='AI & Machine Learning' tasks={pro2_tasks}/>}/>
    </>
    
  );
}

function ProIntroLeft() {
    return (
        <div>
            <h2>Projects</h2>
        </div>
    )
}

function ProIntroRight() {
    return (
        <div>
            <h2>;</h2>
        </div>
    )
}

function ProLeft(props) {
    return (
        <div>
            <p className='ProName'>{props.name}</p>
            {props.repos.map(repo => <Repo key={repo.name} link={repo.link} name={repo.name}/>)}
            <p>Technology stack</p>
            <Grid container columns={{xs: 2, sm: 3, md: 4, lg: 5}} className='ProLeftLogos'>
                {props.logos.map(logo => <Skill key={logo} skillLogo={logo.source} skillName={logo.name}/>)}
            </Grid>
        </div>
    )
}

function ProRight(props) {
    return (
        <div>
            <p className='ProName'>{props.type}</p>
            <ul>
                {props.tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
        </div>
    )
}

function Repo(props) {
    return (
        <a className='Repo' rel='noreferrer' target='_blank' href={props.link}>{props.name}</a>
    )
}