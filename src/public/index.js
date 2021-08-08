const content = "파일을 업로드하세요.";
const text = document.querySelector(".text");
let index = 0;
/*
app.get('/data', (req, res) => {
    res.render('data')
})
app.post('/data', upload.single('userfile'), (req, rs) => {
    console.log(req.file);
    res.send('data : ' + req.file)
})
*/
function typing() {
    let txt = content[index++];
    text.innerHTML += txt === "\n" ? "<br/>":txt;
    if ( index > content.length) {
        text.textContent = "";
        index = 0;
    }
}

function thisFileUpload() {
    document.getElementById("file").click();
};

setInterval(typing, 100)