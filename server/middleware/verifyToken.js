import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    console.log('......verifying Token middleware is running.');
    // console.log(req.headers);
    // console.log(req.headers.cookie);
    // console.log(req.cookies);
    const token = req.cookies.token
    console.log(token);
    if (!token) {
        return res.status(401).json({
            authenticated: false,
            message: "No token found"
        })
    }

    const decoded = jwt.verify(token, 'hello_this_string',)
    console.log(decoded);

    // Making a user key/property on req -- setting user on req
    req.user = decoded
    next()

}

export default verifyToken

// When verify api will hit the cookie will come to req headers to parse it we use a package cookie-parser
// cookie-parser -- it parse cookie from req header