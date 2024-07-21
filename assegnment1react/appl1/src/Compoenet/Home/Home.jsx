import styles from './Home.module.css';
export default function Home() {
  return (
    <>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="public\assets\imgs\img_bg_2-DzCs5o-0.jpg" className="d-block w-100" alt="..."/>
      <div className={styles.title}>
        <h1>I am</h1>
      <h1>a Designer</h1>
      <p> 100% html5 bootstrap templates Made
            By <span>Colorlib.com</span></p>
            <button>VIEW CV</button>
      </div>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="public\assets\imgs\img_bg_1-PzvG2r05.jpg" className=" w-100" alt="..."/>
      <div className={styles.title}>
        <h1>I am</h1>
      <h1>a Designer</h1>
      <p> 100% html5 bootstrap templates Made
            By <span>Colorlib.com</span></p>
            <button>VIEW CV</button>
      </div>
    </div>
    
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>    </>
  )
}
