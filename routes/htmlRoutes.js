const router = require('express').Router();


router.get('/', (_req,res)=>{
    res.render("index")
});

router.get("/login", (_req,res)=>{
    res.render('login')
})



module.exports = router;