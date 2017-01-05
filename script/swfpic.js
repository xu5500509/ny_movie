init();
function init() {
    $(function() {
        var e = ($("#_csrf").val(), $("#hiddenUid").val(), $("#figureUploadPath").val()),
            a = encodeURIComponent($("#swfFlush").val()),
            s = $("#pic_src").val();
        s = (s || "http://s1.jikexueyuan.com/member/images/avatar_9d15e23.jpg") + "?date=" + (new Date).getMilliseconds(), e += '?params={"flush":"' + encodeURIComponent(a) + '"}';
        $("#avatar_img");
        window.uploadevent = function(e) {
            switch (console.log(e), e += "") {
                case "1":
                    JKXY.msgBox(1, "上传成功！", 1500, function() {
                        location.reload()
                    });
                    break;
                case "2":
                    return confirm("js call upload") ? 1 : 0;
                case "-1":
                    JKXY.msgBox(2, "取消上传头像！");
                    break;
                case "-2":
                    JKXY.msgBox(0, "上传头像失败！");
                    break;
                case "-3":
                    JKXY.msgBox(0, "上传头像失败！");
                    break;
                case "-4":
                    JKXY.msgBox(0, "uid过期，上传头像失败，请重新登录!", 2500, new Function);
                    break;
                default:
                    JKXY.msgBox(0, "上传头像失败！")
            }
        };
        var o = {
                jsfunc: "uploadevent",
                imgUrl: s,
                pid: "75642723",
                pSize: "400|400|200|200",
                uploadSrc: !0,
                showBrow: !0,
                showCame: !1,
                showColor: !1,
                uploadUrl: e
            },
            n = {
                menu: "false",
                scale: "noScale",
                allowFullscreen: "true",
                allowScriptAccess: "always",
                wmode: "transparent",
                bgcolor: "#FFFFFF"
            },
            l = {
                id: "FaustCplus"
            };
        swfobject.embedSWF("images/FaustCplus_7b1ce57.swf", "altContent", "700", "550", "9.0.0", "expressInstall.swf", o, n, l)
    })
}