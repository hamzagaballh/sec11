import style from './Style.module.css'
export default function Work() {
  return (
    <>
    <div className={style.work}>
        <p>MY WORK</p>
        <h4>RECENT WORK</h4>
        <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col ">
    <div className="card">
      <img src="\public\assets\imgs\download (3).jpeg" className="card-img-top" alt="..."/>
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="\public\assets\imgs\download.jpeg" className="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="\public\assets\imgs\147763637-dice-on-black-background-in-motion-long-exposure.jpg" className="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="\public\assets\imgs\images (1).jpeg" className="card-img-top" alt="..."/>
      
    </div>
  </div>
</div>
<button type="button" className="btn btn-secondary btn-lg mt-4" disabled>Show More</button>

       
    </div>
        
    </>
  )
}
