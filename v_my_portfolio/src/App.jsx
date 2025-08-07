import MyHeader from './components/MyHeaders/MyHeader';
import MyName from './components/Mynames/MyName';
import MyContact from './components/MyContacts/MyContact';
import MyTeam from './components/MyTeams/MyTeam';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <MyName></MyName>
      <MyTeam></MyTeam>
      <MyContact></MyContact>
    </div>
  );
}

export default App;

