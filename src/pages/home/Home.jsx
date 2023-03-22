import "./home.css"
import Cities from "../../components/cities/Cities"
import Header from "../../components/header/Header"
import NavBar from "../../components/navbar/Navbar"
import AppointmentList from "../../components/appointmentList/AppointmentList"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"


const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Cities />
        <h1 className="homeTitle">Browse By Appointment Category</h1>
        <AppointmentList />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home