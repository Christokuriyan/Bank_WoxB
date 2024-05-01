
// import Accounts from './components/Accounts';
// import OverView from './components/OverView';
// import Dashboard from './screens/Dashboard';
// import RegNew from './screens/RegNew'
// import { Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (

//     <Routes>
//       <Route path="/login" element={<RegNew />} />

//       <Route path="/dashboard" element={<Dashboard />}>
//         <Route index element={<OverView />} />
//         <Route path="/overview" element={<OverView />} />
//         <Route path="/accounts" element={<Accounts />} />
//       </Route>




//     </Routes>




//   )
// }

// export default App




import { Routes, Route } from 'react-router-dom';

import Overview from '../src/components/OverView';
import Transaction from '../src/components/Transaction';
import Profile from '../src/components/Profile';
import LoginNew from '../src/screens/LoginNew';
import Dashboard from '../src/screens/Dashboard';
import Accounts from '../src/components/Accounts';
import RegNew from '../../WoxBank/src/screens/RegNew';

function App() {
  return (


    <Routes>
      <Route path="login" element={<LoginNew />} />
      <Route path="RegNew" element={<RegNew />} />

      <Route path="/dashboard" element={<Dashboard />}>
      
        <Route index element={<Overview />} />
        <Route path="OverView" element={<Overview/>} />
        <Route path="Accounts" element={<Accounts/>} />
        <Route path="Transaction" element={<Transaction/>} />
        <Route path="profile" element={<Profile/>} />
      </Route>
      {/* other routes */}
    </Routes>

  )
}

export default App
