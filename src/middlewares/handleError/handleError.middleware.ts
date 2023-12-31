export const handleErrorMiddleware = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    
    res.status(500)
    res.send({error: err.message})
}
