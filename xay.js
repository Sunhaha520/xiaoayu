<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="build/botui.js"></script>
<script type="text/javascript" src="https://cdn.bootcss.com/vue/2.0.5/vue.min.js"></script> 
<script type="text/javascript" src="dist/botui.min.js"></script> 
<script type="text/javascript"> 
var botui = new BotUI("fogforest");
botui.message.bot({
    delay: 200,
    content: "Hi, there👋"
}).then(function() {
    return botui.message.bot({
        delay: 1000,
        content: "这里是 小阿宇"
    })
}).then(function() {
    return botui.message.bot({
        delay: 1000,
        content: "一个可爱的蓝孩子~"
    })
}).then(function() {
    return botui.action.button({
        delay: 1500,
        action: [{
            text: "然后呢？ 😃",
            value: "and"
        },
        {
            text: "少废话！ 🙄",
            value: "gg"
        }]
    })
}).then(function(res) {
    if (res.value == "and") {
        other()
    } 
    if (res.value == "gg") {
        return botui.message.bot({
            delay: 1500,
            content: "![告辞](https://ae01.alicdn.com/kf/Hd33fe77ff56f48e4b988d6c4f9091551S.jpg)"
        })
    }
});
 
var other = function() {
    botui.message.bot({
        delay: 1500,
        content: "😘"
    }).then(function() {
        return botui.message.bot({
            delay: 1500,
            content: "南京林业大学读书，是个整天想着跨考计科的土木人"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1500,
            content: "略懂HTML/CSS/JavaScript/PHP，偶尔也折腾C++、"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1500,
            content: "不过还是比较熟悉手机刷机、系统安装，还会画CAD"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1500,
            content: "喜欢折腾，热爱折腾，目前正在计算机一道上探索中"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "为什么叫 小阿宇 呢？ 🤔",
                value: "next"
            }]
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "一次起昵称时偶然打出了这个名字，于是我就沿用了下来，嗯！"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "域名有什么含意吗？(ง •_•)ง",
                value: "next"
            }]
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "emmmmm，服务器提供商给的，没得办法_(:з」∠)_"
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "那么，仔细看看我的博客吧？ ^_^"
        })
    });
}
  
