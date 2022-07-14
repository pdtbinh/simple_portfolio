import './Skill.css';
import Grid from '@mui/material/Grid';

export default function Skill(props) {
  return (
    <Grid item xs={1} className="Skill">
        <div className={`SkillPic ${props.skillLogo}`}></div>
        <p>{props.skillName}</p>
    </Grid>
  );
}