


import LoginNew from "../src/screens/LoginNew"
import Dashboard from "./screens/Dashboard";
import OtpNew from "./screens/OtpNew"
import RegNew from "./screens/RegNew"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/login" element={<LoginNew />} />
        <Route path="/register" element={<RegNew />} />
        <Route path="/otp" element={<OtpNew />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
