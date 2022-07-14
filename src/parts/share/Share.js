import './Share.css';

export default function Share(props) {
  return (
    <div className="Share">
        {/* Bright background, titles, headlines, etc. */}
        <div className='SmallShare'>
            {props.small}
        </div>
        {/* Dark background, details, descriptions, etc. */}
        <div className='LargeShare'>
            {props.large}
        </div>
    </div>
  );
}