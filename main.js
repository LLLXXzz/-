let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0
let string = `/*大家好，我是一名前端新手，
接下来我将用我学习过的相关知识制作一个
八卦图，希望大家可以喜欢！
首先在屏幕右侧会出现一个圆形*/
#div1 {
    width : 200px;
    height: 200px;
    border-radius : 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳组合而成 
一黑一白*/
#div1{
    background:linear-gradient(90deg,rgba(255,255,255,1)
    0%,rgba(255,255,255,1)50%,rgba(0,0,0,1)50%,rgba(0,0,0,1)100%);
}
/*在八卦图上在绘制两个圆球*/
#div1::before{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top:0px;
    left: 50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1:after{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform:translateX(-50%);
     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

`
let string2 = ''
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 = string2 + '<br>'
        } else if (string[n] === ' ') {
            string2 = string2 + '&nbsp'
        } else {
            string2 = string2 + string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n + 1)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n = n + 1
            step()
        }
    }, 0);
}
step()