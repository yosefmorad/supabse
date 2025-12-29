async function checkInput(req ,res ,next){
    const data = req.body
    const len = Object.keys(data)
    if (!(len.length ==2 && data.username && data.password !== null)){
        return  res.status(400).send("input not good")
    }
    next()
}

export default checkInput