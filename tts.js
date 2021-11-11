
function speak(text, opt_prop) {
    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
        return
    } 

    window.speechSynthesis.cancel() // 현재 읽고있다면 초기화

    const prop = opt_prop || {}
    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = prop.rate || 0.1 // 속도: 0.1 ~ 10      
    speechMsg.pitch = prop.pitch || 0 // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR"
    speechMsg.text = text
    
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg)
}

function stop(){

    window.speechSynthesis.pause(); 
}
// 이벤트 영역
const thepitchSelect = document.getElementById("thepitch")
const speedSelect = document.getElementById("speed")
const text = document.getElementById("text")
const btnStop = document.getElementById("btn-stop")
const btnRead = document.getElementById("btn-read")
btnRead.addEventListener("click", e => {
    speak(text.value, {
        rate: speedSelect.options[speedSelect.selectedIndex].value,
        pitch: thepitchSelect.options[thepitchSelect.selectedIndex].value,
        lang: "ko-kr"
    })
})
btnStop.addEventListener("click", e =>{
   stop();
})
