import "./appointmentList.css"

const appointmentList = () => {
  return (
    <div className="aList">
        <div className="aListItem">
            <img src="https://media.istockphoto.com/id/135877746/photo/hospital-with-outpatient-sign.jpg?s=612x612&w=0&k=20&c=rrZcT5ruPtfHkXKw4B1vyL6efJ3dl26TkpVOmQR_AGA=" alt="" className="aListImg"/>
            <div className="aListTitles">
                <h1>Hospital OPD Clinics</h1>
                    <h2>75 Clinics</h2>
            </div>
        </div>
        <div className="aListItem">
            <img src="https://img.freepik.com/premium-photo/female-dentist-teeth-examination_170532-1664.jpg?w=360" alt="" className="aListImg"/>
            <div className="aListTitles">
                <h1>Dental Clinics</h1>
                    <h2>25 Clinics</h2>
            </div>
        </div>
        <div className="aListItem">
            <img src="https://media.istockphoto.com/id/1249362060/photo/close-up-portrait-of-young-woman-standing-with-naked-shoulders-and-neck-face-is-touched-by.jpg?b=1&s=170667a&w=0&k=20&c=_1kj4OO_2XuolwD5ydUhzAuULABJyiDUJfo26dyRYug=" alt="" className="aListImg"/>
            <div className="aListTitles">
                <h1>Cosmetic Clinics</h1>
                    <h2>12 Clinics</h2>
            </div>
        </div>
        <div className="aListItem">
            <img src="https://media.istockphoto.com/id/1266230179/photo/human-heart-with-blood-vessels.jpg?b=1&s=170667a&w=0&k=20&c=As3-8nZyfkFClYTg2bAKK7trsDNxeziMSbhCFo3vzaM=" alt="" className="aListImg"/>
            <div className="aListTitles">
                <h1>Cardio Clinics</h1>
                    <h2>20 Clinics</h2>
            </div>
        </div>
        <div className="aListItem">
            <img src="https://media.istockphoto.com/id/474648404/photo/woman-doing-eye-test-with-optometrist.jpg?b=1&s=170667a&w=0&k=20&c=YOvuh5NXqxccbNpNPYhtfdW-jqrNieAQETcPm8M2xdM=" alt="" className="aListImg"/>
            <div className="aListTitles">
                <h1>Eye Clinics</h1>
                    <h2>10 Clinics</h2>
            </div>
        </div>
    </div>
  )
}

export default appointmentList