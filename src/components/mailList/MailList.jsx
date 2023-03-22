import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save Time And Money!</h1>
        <span className="mailDesc">Sign Up And We Will Notify You About Your Upcoming Appointments</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email Address" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList