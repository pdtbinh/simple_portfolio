import './App.css';
import Cer from './parts/cer/Cer';
import Con from './parts/con/Con';
import Edu from './parts/edu/Edu';
import Exp from './parts/exp/Exp';
import Intro from './parts/intro/Intro';
import Pro from './parts/pro/Pro';
import Rec from './parts/rec/Rec';

export default function App() {
  return (
    <div className="App">
      <Intro/>
      <Edu/>
      <Exp/>
      <Pro/>
      <Rec/>
      <Cer/>
      <Con/>
    </div>
  );
}
