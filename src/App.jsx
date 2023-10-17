import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';

import { useContext } from 'react';
import { Context } from './context/LocalContext'

function App() {

  const context = useContext(Context);
  const { changeReload } = context

  const handleReload = () => {
    changeReload()
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link className="btn btn-ghost normal-case text-xl" to="https://www.linkedin.com/in/rahmat-hidayatullah-909aab151/">Rahmat Hidayatullah</Link></li>
          </ul>
        </div>
      </div>
      <div className='p-5'>
        <button className='btn' onClick={handleReload}>Reload Table</button>
      </div>
      <main className='p-5'>
        <Routes>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
