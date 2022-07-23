const main = document.querySelector("#main"); //index.html에 아이디 main을 정의?
const qna = document.querySelector("#qna"); // index.html에 아이디 qna 

function addAnswer(answerText,qIdx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button'); //document.createelement()메서드: 지정한 tagname(button)의 html 요소를 만들어 반환한다.
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-5');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    

    a.appendChild(answer); //answer라는 버튼이 a에 소속될수있도록 만들어줌
    answer.innerHTML = answerText;
    answer.addEventListener("click", function(){
       var children = document.querySelectorAll('.answerList');
       for(let i=0; i<children.length; i++){
        children[i].disabled = true;
        children[i].style.WebkitAnimation ="fadeOut 0.5s";
        children[i].style.animation = 'fadeOut 0.5s';
       }
       setTimeout(() => {
        for(let i = 0; i < children.length; i++){
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
      },450)
    }, false);
  }
  

function goNext(qIdx){
    var q = document.querySelector(".qBox"); //html에 클래스 qbox 선택
    q.innerHTML = qnaList[qIdx].q; //qna 리스트에 첫번째 인덱스에 q를 넣어준다.
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }

}

function begin(){ //함수 begin : 시작버튼을 누르면 애니메이션을 이용하여 흐릿하게 화면전환
    main.style.WebkitAnimation = "fadeOut 1s"; //webkit 을 붙이면 크롬에서 작동하게
    main.style.animation="fadeOut 1s"; //아이디 main에 해당하는 부분들을 fade out(차즘 어두워지며 사라짐)시킨다.(1초)
    setTimeout(() => { // 타이머 설정

        qna.style.WebkitAnimation = "fadeIn 1s"; //아이디 qna에 해당하는 부분을 fade in 시킨다.(1초)
        qna.style.animation= "fadeIn 1s";
        setTimeout(()=> {
            main.style.display = "none"; // main 에 해당하는 부분을 화면에 안나타나도록
            qna.style.display = "block"; // qna 에 해당하는 부분을 화면에 나타나도록
        },450) //시간 450ms

        let qIdx = 0;
        goNext(qIdx);//goNext 함수 호출
    },450)

    //
    //
}