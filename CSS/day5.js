let titles = [
    '我要坚持完成前端小课的基础内容',
    '我的目标是扩展前端知识面',
    '大家共同努力',
    '前端小课开课啦',
    '今天是学习的第五天，继续加油'
]

let addText = function() {
    // Math.random() 0~ 1之间的随机小数
    let index = Math.floor(Math.random() * titles.length + 0)
    console.log(index)
    let div = document.createElement("div")
    let textNode = document.createTextNode(titles[index])
    div.appendChild(textNode)
    div.style.color = "#fe7235"
    div.style.lineHeight = 2
    let contentDiv = document.getElementById('content')
    contentDiv.appendChild(div)
}