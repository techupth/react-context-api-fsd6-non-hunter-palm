import { dataContext }  from '../App.jsx'
import { useContext } from "react";

function AppHeader() {
  const contexts = useContext(dataContext)
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {contexts.username} </h2>
      
      
    </div>
  );
}

export default AppHeader;
