import dog from "../assets/img/dog-img.jpg"
import bizin from "../assets/img/bizinsider.png"
import mash from "../assets/img/mashable.png"
import techc from "../assets/img/techcrunch.png"
import tnw from "../assets/img/tnw.png"



export default function Testimonial() {
  return (
    <div>
    
    <section id="Testimonial">
      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h2 className="text-body-emphasis">"I no longer have to sniff other dogs for love. I've found the hottest Corgi on
              TinDog. Woof."</h2>
            <img className="profile-img mt-5" src={dog} alt="dog image" />
            <p className="col-lg-8 mx-auto lead mt-2">
              Pebbles, New York
            </p>
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <img src={techc} alt="techcrunch" height="30"/>
              </div>
              <div className="col-lg-3 col-sm-12">
                <img src={mash} alt="mashable" height="30"/>
              </div>
              <div className="col-lg-3 col-sm-12">
                <img src={bizin}  alt="bizinsider" height="30"/>
              </div>
              <div className="col-lg-3 col-sm-12">
                <img src={tnw} alt="tnw" height="30"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
