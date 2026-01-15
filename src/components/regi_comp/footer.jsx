import Pelda from '../components/pelda.jsx';

export default function Footer(props) {
  return (
<footer>
    &copy; {props.email}
</footer>
  );
}