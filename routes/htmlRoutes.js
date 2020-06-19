const router = require('express').Router();


router.get('/', (_req,res)=>{
    res.render("login")
});

router.get("/member", (_req,res)=>{
    res.render('index')
})



module.exports = router;