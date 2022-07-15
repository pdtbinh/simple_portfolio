import './Con.css';
import Share from '../share/Share';
import Title from '../share/Title';
import Grid from '@mui/material/Grid';

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
        <p>Please  feel free to checkout my works and reach out to me!</p>
    )
}

function ConRight() {
    return (
        <Grid container columns={{xs: 2, sm: 3, md: 4, lg: 5}}>
            <Grid item xs={1}>
                <a className='Contact' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/binh-pham-aab6a719a/'>
                    LinkedIn
                </a>
            </Grid>
        </Grid>
    )
}