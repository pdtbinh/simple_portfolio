import './Con.css';
import Share from '../share/Share';
import Title from '../share/Title';

export default function Con() {
  return (
    <>
        <Title small={<ConIntroLeft/>} large={<ConIntroRight/>}/>
        <Share small={<ConLeft/>} large={<ConRight/>}/>
    </>
    
  );
}

function ConIntroLeft() {
    return (
        <div>
            <h2>Contacts</h2>
        </div>
    )
}

function ConIntroRight() {
    return (
        <div>
            <h2>;</h2>
        </div>
    )
}

function ConLeft() {
    return (
        <>
            <p>Thank you for viewing my profile!</p>
            <p> Please feel free to contact me should you have any question.</p>
        </>
    )
}

function ConRight() {
    return (
        <div className='ConRight'>
            <p>
                LinkedIn: <a className='Contact' href='https://www.linkedin.com/in/binh-pham-aab6a719a/' target='_blank' rel='noreferrer'>
                    Binh Pham
                </a>
            </p>

            <p>
                GitHub: <a className='Contact' href='https://github.com/pdtbinh' target='_blank' rel='noreferrer'>
                    pdtbinh
                </a>
            </p>

            <p>
                Email: binh.pham@aalto.fi 
            </p>

            <p>
                Phone: +358 41 4805030
            </p>
        </div>
    )
}