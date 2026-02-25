import { Route, Routes } from "react-router-dom";
import { Addstudent } from "./componets/Addstudent";
import StudentTable from "./componets/StudentTable";
import { Edite } from "./componets/Edite";
import { ViewStudent } from "./componets/ViewStudent";
import Dashboard from "./componets/Dashboard";
import Login from "./componets/Login";
import PrivateRoute from "./componets/PrivateRoute";
import Notpagefound from "./componets/Notpagefound";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/" element={<PrivateRoute />}></Route> */}
        <Route path="/" element={<StudentTable />} />
        <Route path="/addstudent" element={<Addstudent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentedite/:id" element={<Edite />} />
        <Route path="/studentview/:id" element={<ViewStudent />} />
        <Route path="*" element={<Notpagefound />} />
      </Routes>
    </>
  );
}

export default App;
