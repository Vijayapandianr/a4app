import './App.css';
import React,  { Suspense } from 'react';



const Page = React.lazy(() => import("./Page"))
const Page1 = React.lazy(() => import("./Page1"))
function App() {
  return (
    <div className="App">
     
       <Suspense fallback={<div>Loading...</div>}>
         
        <Page/>
        <Page1/>
       </Suspense>
       
    </div>
  );
}

export default App;
