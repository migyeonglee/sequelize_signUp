const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.index);

router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

router.get("/signin", user.signin);
router.post("/signin", user.post_signin);

router.post("/profile", user.profile);
router.post("/profile/edit", user.profile_edit);
router.post("/profile/delete", user.profile_delete);

module.exports = router;


// visitor

// 헷갈리면 모두 post 써도 됌 (기능 분리 어려울 시)
// router.get("/", visitor.get_visitors); // get : 조회 시 사용 (select) (read) 
// router.post("/write", visitor.post_comment); // post :  새 정보를 insert 할 때 (create)
// router.get("/get", visitor.get_visitor);
// router.patch("/edit", visitor.patch_comment); // patch :  데이터의 일부분을 update(수정) 할때 (update)
// router.delete("/delete", visitor.delete_comment); // delete :  삭제 (delete)