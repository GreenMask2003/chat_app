import jwt from 'jsonwebtoken';
const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,{              //creates digital signature
        expiresIn: '15d'
    })
    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,                      // days,hours,minutes,seconds,milliseconds
        httpOnly: true,                                  //prevents XSS attacks, cross-site scripting attacks
        // (Attacker puts some malicious links inside website, when user accesses it, cookies are parsed to the attacker and private credentials are being stolen away)
        sameSite:"strict",    //To prevent CSRF attacks 
        secure: process.env.NODE_ENV !== "development"      //for securing when there is https
    })
};
export default generateTokenAndSetCookie;