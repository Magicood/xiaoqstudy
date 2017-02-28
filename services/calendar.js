/**
 * Created by Zhang on 2017/2/28.
 */
var express = require("express");
var app = express();
app.use("/", express.static(__dirname));

var router = express.Router();
router.get("/data", function (req, res) {
    res.json({
        user: "张杨杨",
        tasks: [{
            date: "2017-2-28",
            title: "完成《如何高效学习》1-100页的阅读",
            duration: 3,            //单位：小时
            remark: "做好笔记"     //备忘录
        },{
            data:"2017.3.1",
            title: "完成《如何高效学习》101-120页的阅读",
            duration: 2,            //单位：小时
            remark: "做笔记"     //备忘录
        },{
            data:"2017.3.2",
            title: "完成《如何高效学习》121-150页的阅读",
            duration: 4,            //单位：小时
            remark: "笔记"     //备忘录
        }]
    })
});
app.use("/", router);

var port = 8012;
app.listen(port);
console.log("serve is listening" + port);