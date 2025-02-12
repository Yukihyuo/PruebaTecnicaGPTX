function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'xPhmuuW3NA9FpG', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}


export default verificarToken