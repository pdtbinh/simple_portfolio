import './Cer.css';
import Share from '../share/Share';
import Title from '../share/Title';

export default function Cer() {
  return (
    <>
        <Title small={<CerIntroLeft/>} large={<CerIntroRight/>}/>

        <Share 
            small={<CerLeft by='Amazon Web Serivces' time='Issued on March 2022'/>} 
            large={<CerRight name='AWS Certified Cloud Practitioner (CLF)' info={<p>Earners of this certification 
                have a fundamental understanding of IT services and their uses in the AWS Cloud. 
                They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to 
                identify essential AWS services necessary to set up AWS-focused projects.</p>}/>}/>

        <Share 
            small={<CerLeft by='Microsoft' time='Issued on March 2022'/>} 
            large={<CerRight name='Microsoft Certified: Azure Data Fundamentals (DP-900)' info={<p>Earners of the Azure Data Fundamentals
                 certification have demonstrated foundational knowledge of core data concepts
                  and how they are implemented using Microsoft Azure data services.</p>}/>}/>

        <Share 
            small={<CerLeft by='Microsoft' time='Issued on January 2022'/>} 
            large={<CerRight name='Microsoft Certified: Azure Fundamentals (AZ-900)' info={<p>Earners of the Azure Fundamentals certification 
                have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.</p>}/>}/>

        <Share 
            small={<CerLeft by='Scrum.org' time='Issued on January 2022'/>} 
            large={<CerRight name='Professional Scrum Master I (PSM I)' info={<p>Those who earn the globally recognized Professional Scrum Master I
                 (PSM I) certification have demonstrated a fundamental level of Scrum mastery,
                  including the concepts of applying Scrum, and proven an understanding
                   of Scrum as described in the Scrum Guide. This individual has also demonstrated
                    a consistent use of terminology and approach to Scrum.</p>}/>}/>

        <Share 
            small={<CerLeft by='Udemy' time='Issued on December 2021'/>} 
            large={<CerRight name='The Web Developer Bootcamp 2021' info={<p>The full-stack web development bootcamp by Colt Steel. 
                Learn and work with a comprehensive web development technology stack including HTML, CSS, JavaScript, NodeJS, ExpressJS, etc. 
            </p>}/>}/>

        <Share 
            small={<CerLeft by='Google' time='Issued on May 2021'/>} 
            large={<CerRight name='Google Data Analytics' info={<p>Those who earn the Google Data Analytics Professional Certificate 
                have completed eight courses, developed by Google, that include hands-on, practice-based assessments 
                and are designed to prepare them for introductory-level roles in Data Analytics.
                 They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R.
                  They know how to prepare, process, analyze, and share data for thoughtful action.</p>}/>}/>

        <Share 
            small={<CerLeft by='DeepLearning.AI' time='Issued on April 2021'/>} 
            large={<CerRight name='Deep Learning Specialisation' info={<p>Build neural network architectures such as Convolutional Neural Networks, 
                Recurrent Neural Networks, LSTMs, Transformers, and learned how to make them better
                 with strategies such as Dropout, BatchNorm, and Xavier/He initialization. Master these theoretical concepts,
                  learned their industry applications using Python and TensorFlow, and tackled real-world
                   cases such as speech recognition, music synthesis, chatbots, machine translation, natural language processing, and more.</p>}/>}/>

        <Share 
            small={<CerLeft by='Stanford Online' time='Issued on March 2021'/>} 
            large={<CerRight name='Machine Learning' info={<p>The most popular machine learning course by Prof. Andrew Ng.
                 Learn about the basic concepts in supervised and unsupervised machine learning problems. 
                 Build hands-on AI experiments and prototypes to solve such problems.</p>}/>}/>
    </>
  );
}

function CerIntroLeft() {
    return (
        <div>
            <h2>Certifications</h2>
        </div>
    )
}

function CerIntroRight() {
    return (
        <div>
            <h2>;</h2>
        </div>
    )
}

function CerLeft(props) {
    return (
        <div>
            <p className='CerCompany'>{props.by}</p>
            <p className='CerTime'>{props.time}</p>
        </div>
    )
}

function CerRight(props) {
    return (
        <div>
            <p className='CerCompany'>{props.name}</p>
            {props.info}
        </div>
    )
}