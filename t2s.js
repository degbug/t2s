var language = 'zh_TW';
var traditionalHtml = document.body.innerHTML;
var simplifiedHtml = transverter({
    type:'simplified',
    str:traditionalHtml,
    language:language
});

document.body.innerHTML = simplifiedHtml;
console.info("转换完成")