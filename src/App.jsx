import styles from "./App.module.css";
import Display from "./components/Display";
import Buttonsconatiner from "./components/buttonsContainer";
function App() {
  
  return (
    <div className={styles.calculator}>
     <Display></Display>
     
     <Buttonsconatiner></Buttonsconatiner>
      
     </div>
  );
}

export default App
