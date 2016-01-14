module.exports = function(app){

	var nodemailer = require('nodemailer');
	var transportMethod = ""; // Hide private transport method from public eyes!

	function contact(req, res){

		var transporter = nodemailer.createTransport(transportMethod)
		var mailOptions = {
			from: 'jordanlevet801@gmail.com',
			to: 'jordanlevet801@gmail.com',
			subject: 'Contact Request from Resume',
			text: "phone: "+req.body.phone+", email: "+req.body.email+", message: "+req.body.message
		}

		transporter.sendMail(mailOptions, function(err, info){
			if(err){
				res.json({"status": "error"})
			} else {
				res.json({"status": "success"})
			}
		})
	}
   
    return contact;
}