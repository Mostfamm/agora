import { observer } from "mobx-react";
import './App.css';
import Market from './components/market';

const App = observer((props) => {
  return <Market />;
});

export default App;
