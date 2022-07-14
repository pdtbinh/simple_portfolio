import './Rec.css';
import Share from '../share/Share';
import Title from '../share/Title';

export default function Rec() {
    return (
        <>
            <Title small={<RecIntroLeft/>} large={<RecIntroRight/>}/>
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