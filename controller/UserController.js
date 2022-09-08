const { User } = require("../model");

exports.index = (req, res) => {
        res.render("index");
    }
    //회원가입 
exports.signup = (req, res) => {

    res.render("signup");
}
exports.post_signup = (req, res) => {
        // User.post_signup(req.body, function(result) {
        var data = {
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name
        }
        User.create(data).then((result) => {
            res.send({ id: result.id })
        });

    }
    // 로그인
exports.signin = (req, res) => {
    res.render("signin");
}
exports.post_signin = (req, res) => {
        // User.post_signin(req.body.id, req.body.pw, function(result) {
        User.findAll({
            sttrbutes: ['id', 'pw'],
            where: ({ id: req.body.id })
        }).then((result) => {
            if (result.length > 0) res.send(true);
            else res.send(false);
        });
    }
    // 수정 탈퇴
exports.profile = (req, res) => {
    User.findAll({
        where: { id: req.body.id }
    }).then((result) => {
        console.log(result);
        if (result.length > 0) res.render("profile", { data: result[0] });
        else res.redirect("/user/signin");
    })
}

exports.profile_edit = (req, res) => {
    // User.update_profile(req.body, function(result) {
    var data = {
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name
    }
    User.update(data, {
        where: { id: req.body.id }
    }).then((result) => {
        console.log(result);
        res.send("회원정보 수정 성공!");
    })
}
exports.profile_delete = (req, res) => {
    // User.delete_user(req.body.id, function(result) {
    User.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        console.log(result);
        res.send("회원정보 삭제 성공!");

    })
}