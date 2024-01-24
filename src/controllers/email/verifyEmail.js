const jwt = require('jsonwebtoken'); 

const verifyEmail = async (req, res)=>{

    const {token} = req.params; 

    // Verifying the JWT token  
    jwt.verify(token, process.env.SECRET_KEY,async function(err, decoded) { 
        if (err) { 
            console.log(err); 
            res.status(400).json("Email verification failed, possibly the link is invalid or expired"); 
        } 
        else { 
            
            res.json("Email verifified successfully"); 
            const userId = decoded._id;

            try {
                await User.findByIdAndUpdate(userId, { isVerified: true });
                res.status(200).json({ message: 'Email verified successfully' });
              } catch (updateError) {
                console.error(updateError);
                res.status(500).json({ error: 'Internal server error during email verification' });
              }
        } 
    });
}

module.exports = verifyEmail;