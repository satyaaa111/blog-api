// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{5,1000}$/;

// const password = "assword123P";
// if (passwordRegex.test(password)) {
//   console.log("Password is valid");
// } else {
//   console.log("Password is invalid");
// }
const passwordValidator = (req, res, next) => {

  const { password, conPass } = req.body;
  const lowerCase = /[a-z]/.test(password);
  const upperCase = /[A-Z]/.test(password);
  const numbers = /\d/.test(password);
  const specialChar = /[`!@#$%^&*()_+=|:;<>,./?"'{}]/.test(password);

  if (/\s/.test(password) || /\s/.test(conPass)) {
    res.status(400).json({ error: "No space allowd" });
  } else if (password !== conPass) {
    res.status(400).json({ error: "two passwords doesn't match" });
  } else if (password.length < 5) {
    res.status(400).json({ error: "length should be min 5" });
  } else if (!lowerCase) {
    res.status(400).json({ error: "Must contain lowercase" });
  }else if (!upperCase){
    res.status(400).json({ error: "Must contain upper Case" });
  } else if (!numbers){
    res.status(400).json({ error: "Must contain a number" });
  } 
  
  else {
    next();
  }
};

module.exports = passwordValidator;