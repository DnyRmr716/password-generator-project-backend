const generatePassword = (length, options) => {
    const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;


    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

    let characterPool = "";
    

    if (includeUppercase) characterPool += upperCaseChars;
    if (includeLowercase) characterPool += lowerCaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool.length === 0) {
        return "Please select at least one option.";
        }
    
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }
    
    return password;

};

exports.generatePassword = (req, res) => {
    const { length, options } = req.body;
  
    if (!length || !options) {
      return res.status(400).json({ error: "Length and options are required." });
    }
  
    const password = generatePassword(length, options);
    res.json({ password });
};