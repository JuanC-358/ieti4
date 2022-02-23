import logo from './logo.svg';
import './App.sass';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          React & MUI login 
        </p>
        
      </header>
      <body className="App-body">
        <TextField label="Email" margin="normal"></TextField>
        <TextField label="Password" margin="normal"></TextField>
        <Button variant="outlined">Login</Button>
      </body>
    </div>
  );
}

export default App;
