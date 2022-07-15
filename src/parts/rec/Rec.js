import './Rec.css';
import Share from '../share/Share';
import Title from '../share/Title';

export default function Rec() {
    
    return (
        <>
            <Title small={<RecIntroLeft/>} large={<RecIntroRight/>}/>

            <Share 
                small={<RecLeft 
                    name='Jorge Rodriguez Garcia' 
                    title='Senior Data Engineer @ Futurice Group'
                    time={<p className='RecTitle'>April 12<sup>th</sup>, 2022</p>} />}

                large={<RecRight 
                    role='- Direct Manager' 
                    recommendation={<p>Binh showed an outstanding ability for independent work
                         in a highly demanding environment and demonstrated great initiative suggesting
                         alternative and novel solutions that improved the processes for the entire team.</p>}/>}/>

            <Share 
                small={<RecLeft 
                    name='Michael Slattery' 
                    title='Project Client @ Upwork'
                    time={<p className='RecTitle'>February 28<sup>th</sup>, 2022</p>} />}

                large={<RecRight 
                    role='- Direct Customer' 
                    recommendation={<p>Binh was very organized in his preparation,
                         with excellent communication skills during the completion
                          of the task. An excellent job visually and technically
                           (gameplay mechanics), the mobile game prototype was made with Unity.</p>}/>}/>

            <Share 
                small={<RecLeft 
                    name='Dr. Ragnar Freij-Hollanti' 
                    title='Mathematics Professor @ Aalto University'
                    time={<p className='RecTitle'>January 27<sup>th</sup>, 2021</p>} />}

                large={<RecRight 
                    role='- Direct Supervisor' 
                    recommendation={<div>
                        <p>Binh's performance in my courses was outstanding, earning him the
                             highest grades and showing that he has a clear talent for mathematics,
                              as well as a curious eye and a will to work hard.</p>
                        
                        <p>I am of the opinion that
                               a top grade should signify not only a mastery of the basic contents of
                                the course, but also an ability to solve problems and come up with new ideas.
                                 Looking at Binh’s performance in my courses, it is abundantly clear that he has this ability.</p>
                        </div>}/>}/>
        </>
    )
}

function RecIntroLeft() {
    return (
        <div>
            <h2>Referrals</h2>
        </div>
    )
}

function RecIntroRight() {
    return (
        <div>
            <h2>;</h2>
        </div>
    )
}

function RecLeft(props) {
    return (
        <div>
            <p className='RecName'>{props.name}</p>
            <p className='RecTitle'>{props.title}</p>
            {props.time}
        </div>
    )
}

function RecRight(props) {
    return (
        <div>
            <p className='RecName'>{props.role}</p>
            {props.recommendation}
        </div>
    )
}