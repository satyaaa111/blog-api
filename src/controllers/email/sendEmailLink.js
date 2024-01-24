
const {sendVerificationEmail} = require("../../utils/nodemailer")

const sendEmailLink = async (req, res) => {

    const { email } = req.body;
  
    try {
      // Assuming email is provided in the request body
      sendVerificationEmail(email);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  module.exports = sendEmailLink ;