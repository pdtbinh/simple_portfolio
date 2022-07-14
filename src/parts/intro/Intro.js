import './Intro.css';
import Share from '../share/Share';

export default function Intro() {
  return (
    <Share small={<IntroLeft/>} large={<IntroRight/>}/>
  );
}

function IntroLeft() {
    return (
        <div>
            <h1>PHAM</h1>
            <p>Outcast</p>
        </div>
    )
}

function IntroRight() {
    return (
        <div>
            <h1>D. TIEU BINH</h1>
            <p>Creator</p>
        </div>
    )
}
