import './Title.css';

export default function Title(props) {
  return (
    <div className="Title">
        <div className='SmallTitle'>
            {props.small}
        </div>
        <div className='LargeTitle'>
            {props.large}
        </div>
    </div>
  );
}