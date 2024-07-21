import style from './Style.module.css';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
     
          <div className={`${style.side1}`} >
      <div className={style.side2}>
        <img src="public\assets\imgs\1.jpg" alt="" />
        <h3>Jackson Ford</h3>
        <p><span>UI/UX/DESIGNER</span> IN PHILIPPINES</p>
      </div>
        <div className={style.side3}>
          <ul>
          <li><Link to='Home'>Home</Link></li>
          <li><Link to='About'>About</Link></li>
          <li><Link to='Skills'>Skills</Link></li>
          <li><Link to='EXPERIENCE'>Experience</Link></li>
          <li><Link to='Work'>Work</Link></li>
          </ul>
        </div>
    </div>
    
    </>
  )
}
