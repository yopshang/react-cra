import { Link, Outlet } from 'react-router-dom'

 export default function Manger(){
  return (
    <div className='row'>
      <div className='col-4'>
        <Link to="/mgr">內容</Link><br/>
        <Link to="/mgr/setting">設定</Link>
      </div>
      <div className='col-8'>
          <Outlet/>
      </div>
    </div>
  )
}