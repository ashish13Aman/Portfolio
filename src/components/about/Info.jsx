import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i class='bx bx-award'></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">1+ Years Of Working</span>
        </div>
        <div className="about_box">
        <i class='bx bx-briefcase-alt' ></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">4+ Project</span>
        </div>
        {/* <div className="about_box">
        <i class='bx bx-trophy' ></i>
            <h3 className="about_title">Hackathon</h3>
            <span className="about_subtitle">Runners Up</span>
        </div> */}
    </div>
  )
}

export default Info