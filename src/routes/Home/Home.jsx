
import img from "../../../public/black-home_640x360.png"

export default function Home() {
  document.title = "HOME";
  
  return (
    <div>
      <h1>Home</h1>
      <h2>Grande Oferta!</h2>

      <div>
        <figure>
          <img src={img} alt="Logo"/>
          <figcaption></figcaption>
        </figure>
      </div>


    </div>
  )
}
