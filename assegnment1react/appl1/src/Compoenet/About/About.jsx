import style from './Style.module.css'
export default function About() {
  return (
    <>
    <div className={`${style.con}`}>
      <p>ABOUT US</p> 
        <h3>WHO AM I?</h3>   
        <h5><span>Hi Im Jackson Ford</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</h5>
        <br />
        <h5>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</h5>
        <div className={style.sec}>
          <div className={style.sec1}>
          <i className="fas fa-lightbulb"></i>
              <h4>Graphic Design</h4>
          </div>
          <div className={style.sec2}>
              <i className="fa-solid fa-earth-africa"></i>
              <h4>Web Design</h4>
          </div>
          <div className={style.sec3}>
              <i className="fa-solid fa-earth-africa"></i>
              <h4>Software</h4>
          </div>
          <div className={style.sec4}>
              <i className="fa-solid fa-earth-africa"></i>
              <h4>Application</h4>
          </div>
        </div>
    </div>
        
    </>
  )
}
