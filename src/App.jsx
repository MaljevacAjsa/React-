import "./App.css";
import AppCas21 from "./rad_na_casu/cas 21/AppCas21";
// PascalCase
// fragment prazan tag ==> "<> </>""
// {isLogedIn && <DashBoard/>} ili {isLogedIn ? <DashBoard/>: <Login/>}
// hook, batching, state
// --- kada saljemo agrument u funkciju u onclick ona ta funkcija mora da je u arrow funkciji (tada kazem React-u da
//  kada se klikne to dugme da se aktivira ta funkcija a bez arrow ona bi se odmah aktivirala i ne cekala klik)

function App() {
  return (
    <div className="main_container">
      <AppCas21 />
    </div>
  );
}
export default App;
