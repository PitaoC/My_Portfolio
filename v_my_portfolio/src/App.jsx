import MyHeader from './components/MyHeaders/MyHeader';
import MyName from './components/Mynames/MyName';
import MyContact from './components/MyContacts/MyContact';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <MyName></MyName>
      <MyContact></MyContact>
    </div>
  );
}

export default App;

