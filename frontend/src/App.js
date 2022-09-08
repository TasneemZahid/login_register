import{Routes,Route} from "react-router-dom"
import RegisterUi from './Register Ui/RegisterUi';
import VerifyUi from "./Verify Ui/Verify";
import LoginUi from './Login Ui/LoginUi';
import WelcomeUi from "./Welcom Ui/WelcomeUi";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterUi />}/>
        <Route path='/verify' element={<VerifyUi />}/>
        <Route path='/login' element={<LoginUi />}/>
        <Route path='/welcome' element={<WelcomeUi />}/>
      </Routes>
      
    </>
  );
}

export default App;
