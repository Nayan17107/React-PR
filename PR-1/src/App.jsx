import './App.css'
import UserDetails from './Component/UserDetails'
import img1 from './assets/img-1.jpeg'
import img2 from './assets/img-2.jpeg'
import img3 from './assets/img-3.jpeg'
import img4 from './assets/img-4.jpeg'
import img5 from './assets/img-5.jpeg'

function App() {
  return (
    <>
      <h1>User Details</h1>
      <div className="user-grid">
        <UserDetails name="Nayan" surname="Prajapati" age={19} img={img1} address="Surat"/>
        <UserDetails name="Darshik" surname="Shekhada" age={23} img={img2} address="Surat"/>
        <UserDetails name="Meet" surname="Trapasiya" age={19} img={img3} address="Surat"/>
        <UserDetails name="Meet" surname="Kotadiya" age={19} img={img4} address="Surat"/>
        <UserDetails name="Krish" surname="Patel" age={18} img={img5} address="Surat"/>
      </div>
    </>
  )
}

export default App
