import React from 'react'; 
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import RollDice from './Components/RollDice/RollDice';
library.add(fas) 
  
function App() { 
    return ( 
        <div> 
          {/* Render the roll dice here */}
              <RollDice />
        </div> 
    ); 
} 
  
export default App;