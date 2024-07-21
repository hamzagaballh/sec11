// import Home from '../Home/Home'

import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
export default function Master() {
  return (
    <>
    <div className='container-fluid'>
        <div className="row">
          <div className="col-md-3">
          <Sidebar/>
          </div>
          <div className="col-md-9">
          <Outlet/>
          </div>
        </div>

      </div>
    </>
  )
}
