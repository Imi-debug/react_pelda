import Pelda from '../components/pelda.jsx';

export default function Content(props) {
  return (
    <div>
        <h1>{props.jatekcim}</h1>
      <ol>
        <li>{props.adat1}</li>
        <li>{props.adat2}</li>
        <li>{props.adat3}</li>
        <li>{props.adat4}</li>

      </ol>
    </div>
  );
}

