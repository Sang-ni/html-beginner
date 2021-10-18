const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent)
h1.textContent = "안녕 나는 텍스트 콘텐츠"

p.textContent = "내용 바꾸기!"
console.log(p.textContent)
