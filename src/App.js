import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const isAuth = false;
  if(!isAuth) return <Welcome/>
 return(
   <div className="w-full h-screen bg-gradient-to-b from-blue-600 to-yellow-50">
   <Header/>
     {/*left main */}
   </div>
 )
}

export default App;
