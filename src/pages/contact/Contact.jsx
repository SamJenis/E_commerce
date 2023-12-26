import React from 'react'
import './Contact.css'


const Contact = () => {
	return (
		<>

			<div >
				<div >
					<h1 className='contactH1'>Contact us</h1>
				</div>
				<div className="row" style={{ margin: 'auto' }}>
					<h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
				</div>
				<div className="row input-container">
					<div className="col-xs-12">
						<div className="styled-input wide">
							<input className="contactInput" type="text" required />
							<label>Name</label>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="styled-input">
							<input className='contactInput' type="text" required />
							<label>Email</label>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="styled-input" style={{ float: 'right' }}>
							<input className='contactInput' type="text" required />
							<label>Phone Number</label>
						</div>
					</div>
					<div className="col-xs-12">
						<div className="styled-input wide">
							<textarea required></textarea>
							<label>Message</label>
						</div>
					</div>
					<div className="col-xs-12">
						<div className="btn-lrg submit-btn">Send Message</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Contact