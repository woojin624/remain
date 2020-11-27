"use strict";

window.onload = function(){
  if(mqMobile.matches){
    console.log("mobile check");
    gradeList.style.display = "block";
    fieldList.style.display = "block";
    threeLine.style.display = "none";
    allList.style.display = "flex";

   /*  projectPage.style.height = pPHeight + "px"; */
   /*  proThumb.style.height = "375px"; */
  }
}


let gradeList = document.querySelector("ul.grade");
let fieldList = document.querySelector("ul.field");

let gradeListEls = document.querySelectorAll("ul.grade > li");
let fieldListEls = document.querySelectorAll("ul.field > li");
let viewListEls = document.querySelectorAll("ul.view-list > li");

const navBar = document.querySelector("header > nav");
const threeLine = document.querySelector("section.threeline");
const allList = document.querySelector("section.all-list");
const projectBody = document.querySelector("body");

const inital = document.querySelector("section.team-initial");
const initalEls = document.querySelector("section.team-initial > img");

const hamberger = document.querySelectorAll("div.hamburger > span");


gradeListEls = Array.prototype.slice.call(gradeListEls);
fieldListEls = Array.prototype.slice.call(fieldListEls);
viewListEls = Array.prototype.slice.call(viewListEls);

// All List 상태에서 아래쪽에 팀 나열
const allListUl = document.querySelector("section.all-list > ul");
for (let i = 0; i < allTeams.length; i++) {
  allListUl.innerHTML += `<li>${allTeams[i].project}<sup>${allTeams[i].id}</sup></li>`;
}
let allListEls = document.querySelectorAll("section.all-list > ul > li");

const mqMobile = window.matchMedia("(max-width:480px)");

window.onload = function(){
  
}

// 내비 중 Horizon과 All list를 조작하는 부분
for (let i = 0; i < viewListEls.length; i++) {
  viewListEls[i].addEventListener("click", function (e) {
    let idx = e.currentTarget,
      target = viewListEls.indexOf(idx);
    for (let j = 0; j < viewListEls.length; j++) {
      viewListEls[j].classList.remove("nav-active");
    }
    viewListEls[target].classList.add("nav-active");
    if (target == 0) {
      // horizon 클릭 시
      gradeList.style.display = "none";
      fieldList.style.display = "none";
      threeLine.style.display = "flex";
      allList.style.display = "none";
      gradeTwo();
    } else if (target == 1) {
      // all list 클릭 시
      gradeList.style.display = "block";
      fieldList.style.display = "block";
      threeLine.style.display = "none";
      allList.style.display = "flex";
      gradeTwo();
      for (let j = 0; j < gradeListEls.length; j++) {
        gradeListEls[j].classList.remove("nav-active");
      }
      gradeListEls[0].classList.add("nav-active");
    }
  });
}

/* 분야 클릭 */
for (let i=0; i < fieldListEls.length; i++ ){
  fieldListEls[i].addEventListener("click", function (e) { 
    let idx = e.currentTarget,
        target = fieldListEls.indexOf(idx);
      for (let j = 0; j < fieldListEls.length; j++) {
        fieldListEls[j].classList.remove("nav-active");
      }

      fieldListEls[target].classList.add("nav-active");
      
      if (target === 0 ) {
        for (let i = 0; i < allListEls.length; i++) {
          if (i < 30) {
            allListEls[i].style.color = "#000000";
          } else {
            allListEls[i].style.color = "#B1B1B1";
          }
        }
      } else if (target === 1) {
        for (let i = 0; i < allListEls.length; i++) {
          if (allTeams[i].field === "디지털 미디어 디자인") {
            allListEls[i].style.color = "#000";
          } else {
            allListEls[i].style.color = "#B1B1B1";
          }
        }
      } else if (target === 2) {
        for (let i = 0; i < allListEls.length; i++) {
          if (allTeams[i].field === "뉴미디어 디자인") {
            allListEls[i].style.color = "#000";
          } else {
            allListEls[i].style.color = "#B1B1B1";
          }
        }
      } else if (target === 3) {
        for (let i = 0; i < allListEls.length; i++) {
          if (allTeams[i].field === "영상 디자인") {
            allListEls[i].style.color = "#000";
          } else {
            allListEls[i].style.color = "#B1B1B1";
          }
        }
      }
  });
}


// Horizon 상태에서 아래쪽에 움직이는 리스트들
const listWrap = document.querySelectorAll("section.threeline > article.text-line > div.list-wrap");

// 첫번째 줄
listWrap[0].innerHTML = "";
for (let i = 0; i < 11; i++) {
  listWrap[0].innerHTML += `<span>${allTeams[i].project}<sup>${allTeams[i].id}</sup></span>`;
}
// 두번째 줄
listWrap[1].innerHTML = "";
for (let i = 11; i < 23; i++) {
  listWrap[1].innerHTML += `<span>${allTeams[i].project}<sup>${allTeams[i].id}</sup></span>`;
}
// 세번째 줄
listWrap[2].innerHTML = "";
for (let i = 23; i < allTeams.length; i++) {
  listWrap[2].innerHTML += `<span>${allTeams[i].project}<sup>${allTeams[i].id}</sup></span>`;
}

// Horizon 상테에서 아래쪽에 움직이는 팀명 하나하나
let listEls = document.querySelectorAll("section.threeline > article > .list-wrap > span ");

// 마우스 오버하면 애니메이션이 정지. 아웃하면 재생
for (let i = 0; i < listEls.length; i++) {
  listEls[i].addEventListener("mouseover", function () {
    listWrap[0].style.animationPlayState = "paused";
    listWrap[1].style.animationPlayState = "paused";
    listWrap[2].style.animationPlayState = "paused";
  });
  listEls[i].addEventListener("mouseout", function () {
    listWrap[0].style.animationPlayState = "running";
    listWrap[1].style.animationPlayState = "running";
    listWrap[2].style.animationPlayState = "running";
  });
}
 /* 호버시 이니셜 표시 */

for (let i = 0; i < allListEls.length; i++) {
  allListEls[i].addEventListener("mouseover", function (e) {
    let idx = e.currentTarget,
      listNum = allListEls.indexOf(idx);
      initalEls.setAttribute("src", allTeams[listNum].initial);
      inital.style.opacity = "1";
  });
  allListEls[i].addEventListener("mouseleave", function (e) {
      inital.style.opacity = "0";
  });
  if(mqMobile.matches){
    allListEls[i].removeEventListener("mouseover", function (e){
      initalEls.setAttribute("src", allTeams[listNum].initial);
      inital.style.opacity = "1";
    });
    allListEls[i].removeEventListener("mouseleave", function (e) {
      inital.style.opacity = "0";
  });
  }
}

for (let i = 0; i < listEls.length; i++) {
  listEls[i].addEventListener("mouseover", function (e) {
    let idx = e.currentTarget,
      listNum = listEls.indexOf(idx);
      initalEls.setAttribute("src", allTeams[listNum].initial);
      inital.style.opacity = "1";
  });
  listEls[i].addEventListener("mouseleave", function (e) {
      inital.style.opacity = "0";
  });
}





// --------- All List 조절하는 부분

// 학년 리스트 조종하는 부분
for (let i = 0; i < gradeListEls.length; i++) {
  gradeListEls[i].addEventListener("click", function (e) {
    let idx = e.currentTarget,
      target = gradeListEls.indexOf(idx);
    for (let j = 0; j < gradeListEls.length; j++) {
      gradeListEls[j].classList.remove("nav-active");
    }
    gradeListEls[target].classList.add("nav-active");
    if (target == 0) {
      // 2학년 클릭 시
      gradeTwo();
      fieldList.style.display = "block";
    } else if (target == 1) {
      // 4학년 클릭 시
      gradeFour();
      fieldList.style.display = "none";
    }
  });
}

// 2학년 클릭 시 실행 함수
function gradeTwo() {
  navBar.style.color = "#000";
  threeLine.style.color = "#000";
  projectBody.style.backgroundColor = "#fff";
  for (let i = 0; i < allListEls.length; i++) {
    if (i < 30) {
      allListEls[i].style.color = "#000000";
    } else {
      allListEls[i].style.color = "#B1B1B1";
    }
  }
  for ( var i=0; i < hamberger.length; i++) {
    hamberger[i].style.backgroundColor = "#000";
  }
  
}

// 4학년 클릭 시 실행 함수
function gradeFour() {
  navBar.style.color = "#fff";
  threeLine.style.color = "#fff";
  projectBody.style.backgroundColor = "#000";
  for (let i = 0; i < allListEls.length; i++) {
    if (i < 30) {
      allListEls[i].style.color = "#888888";
    } else {
      allListEls[i].style.color = "#FFFFFF";
    }
  }
  for ( var i=0; i < hamberger.length; i++) {
    hamberger[i].style.backgroundColor = "#fff";
  }
}

const projectPage = document.querySelector("div.project-viewer");


const memberSell = document.querySelectorAll(".row li");
const teamName = document.querySelector("span.team-name");
const projectName = document.querySelector("h2.pro-name");
const projectSlogan = document.querySelector("span.slogan");
const projectSummary = document.querySelector("p.summary");
const memberMajor = document.querySelectorAll("span.member-major");
const memberName = document.querySelectorAll("span.member-name");

const fieldBox = document.querySelector("p.field-box");
const targetBox = document.querySelector("p.target-box");
const mediaBox = document.querySelector("p.media-box");

const back_btn = document.querySelector(".back-btn");

const mHeader = document.querySelector("div.mHeader");
const bLine2 = document.querySelector("div.black-line2");

const webBtn = document.querySelector("button.web-btn");
const webHref = document.querySelector("button.web-btn > a");

const MwebHref = document.querySelector("div.mWebbtn > a");

allListEls = Array.prototype.slice.call(allListEls);
listEls = Array.prototype.slice.call(listEls);
let listNum;
for (let i = 0; i < allListEls.length; i++) {
  allListEls[i].addEventListener("click", function (e) {
    let idx = e.currentTarget,
      listNum = allListEls.indexOf(idx);
    console.log(idx);
    projectDetail(listNum);
    /*allList margin 조정 */
    
    /* console.log(pPHeight); */

    /* mq */
    if(mqMobile.matches){
      var pPHeight = projectPage.clientHeight;
      allList.style.marginTop = pPHeight + "px";
      /* list */
      for (let i = 0; i < allListEls.length; i++) {
        allListUl.style.padding = "60px 0 0 10px";
        allListEls[i].style.width = "50%";
        allListEls[i].style.fontSize = "17px";
        /* allListEls[i].style.letterSpacing = "-0.5px"; */
        mHeader.style.display = "none";
        bLine2.style.display = "none";

        allListEls[i].addEventListener("click", function (e) {
          $('html, body').animate({scrollTop: 0}, 680);
        });
      }
    }
  });
  listEls[i].addEventListener("click", function (e) {
    let idx = e.currentTarget,
      listNum = listEls.indexOf(idx);
      console.log(idx);
      projectDetail(listNum);
      if(mqMobile.matches){
        projectPage.style.transform = "translateX(0%)";
        projectPage.style.overflowX = "hidden";
        projectPage.style.marginTop = "60px";
        projectPage.style.webkitOverflowScrolling = "touch";
      }
  });
}

const thumbImgEls = document.querySelectorAll('.pro-thumb-wrap > .pro-thumb-img');
var thumbAni;
const pPHeight = projectPage.clientHeight + 230;

function projectDetail(id) {
  //projectPage.style.left = "0";
  projectPage.style.transform = "translateX(0%)";
  // if (mqMobile.matches) {
  //   console.log(pPHeight);
  //   //projectPage.style.height = pPHeight + "px";
  //   projectPage.style.transform = "translateX(0%)";
  //   projectPage.style.overflowX = "hidden";
  //   projectPage.style.marginTop = "60px";
  //   projectPage.style.webkitOverflowScrolling = "touch";
  //   projectPage.style.width = "100%";
  // }

  for (let i = 0; i < memberSell.length; i++) {
    /* 팀원 전공, 이름 받아오기 */
    /* 전공 한글 -> 영문 */
    if (allTeams[id].members[i].detail === "기획") {
      allTeams[id].members[i].detail = "Planner";
    } else if (allTeams[id].members[i].detail === "디자인") {
      allTeams[id].members[i].detail = "Designer";
    } else if (allTeams[id].members[i].detail === "프로그래밍"){
      allTeams[id].members[i].detail = "Programmer";
    }

    // memberMajor[i].innerHTML = teams[id].members[i].detail;
    // memberName[i].innerHTML = teams[id].members[i].name;

    // const memberMajor = document.querySelectorAll("span.member-major");
    // const memberName = document.querySelectorAll("span.member-name");

    /* 팀원 사진 받아오기 */
    const img = `
      <span class="member-major">${allTeams[id].members[i].detail}</span>
      <span class="member-name">${allTeams[id].members[i].name}</span>
      <a href="${allTeams[id].members[i].pofol}"><img src="${allTeams[id].members[i].photo}"></a>
    `;
    memberSell[i].innerHTML = img;

    const imgEls = document.querySelectorAll(".row li img");
    imgEls[i].style.display = "none";

    memberSell[i].addEventListener("mouseenter", () => {
      imgEls[i].style.display = "block";
    });

    memberSell[i].addEventListener("mouseleave", () => {
      imgEls[i].style.display = "none";
    });

    /* member pic */
    if(mqMobile.matches){
      imgEls[i].style.display = "block";
      memberSell[i].addEventListener("mouseenter", () => {
        imgEls[i].style.display = "block";
      });
  
      memberSell[i].addEventListener("mouseleave", () => {
        imgEls[i].style.display = "block";
      });
    }
    memberSell[i].addEventListener("click", () => {
      if(mqMobile.matches){
        console.log('click!');
        imgEls[i].style.display = "block";
      }
    });
  }
  
  /* 프로젝트 디테일 받아오기 */

  const NameList = "Team " + allTeams[id].name;
  const proNameList = allTeams[id].project;
  const proSloganList = allTeams[id].slogan;
  const proSummary = allTeams[id].introduce;

  teamName.innerHTML = NameList;
  projectName.innerHTML = proNameList;
  projectSlogan.innerHTML = proSloganList;
  projectSummary.innerHTML = proSummary;

  fieldBox.innerHTML = "분야 : " + allTeams[id].field;
  targetBox.innerHTML = "대상 : " + allTeams[id].target;
  mediaBox.innerHTML = "매체 : " + allTeams[id].media;

  /* web 이동 */

  const href = allTeams[id].web;
  webHref.setAttribute('href', href);
  //console.log(webHref);

  /* webBtn.addEventListener('click') */

  /* 모바일 웹 이동 */
  if(mqMobile.matches){
    MwebHref.setAttribute('href', href);
  }


  /* 썸네일 영역 높이값 지정 */
  const proView = document.querySelector(".pro-view");
  const proViewMajor = document.querySelector(".major");
  const proThumb = document.querySelector(".pro-thumb");

  const proViewH = proView.getBoundingClientRect().height;
  const proViewMajorTop = proViewMajor.getBoundingClientRect().top;
  const proViewMajorH = proViewMajor.getBoundingClientRect().height;

  window.addEventListener("resize", () => {
    projectPage.style.transition = "0s";
    const proViewH2 = proView.getBoundingClientRect().height;
    const proViewMajorTop2 = proViewMajor.getBoundingClientRect().top;
    const proViewMajorH2 = proViewMajor.getBoundingClientRect().height;

    // proThumb.style.height = proViewH2 - (proViewMajorTop2 + proViewMajorH2) + "px";
    proThumb.style.height = proViewH - (proViewMajorTop + proViewMajorH + 15) + "px";
    //console.log(proThumb.style.height);

  });

  /* 썸네일 받아오기 */
  const thumbWrap = document.querySelector(".pro-thumb-wrap");
  const thumbCount = 2;

  for (let i = 0; i < thumbImgEls.length; i++) {
    if (i % 2 === 0) {
      thumbImgEls[i].setAttribute("src", allTeams[id].thumb[0]);
    } else {
      thumbImgEls[i].setAttribute("src", allTeams[id].thumb[1]);
    }
  }

  if (!mqMobile.matches) {
    proThumb.style.height = proViewH - (proViewMajorTop + proViewMajorH + 15) + "px";
  } else if(mqMobile.matches){
    thumbWrap.style.height = "100vw";
    proThumb.style.width = "100vw";
    proThumb.style.height = "100vw";
    
  }
  /* 썸네일 애니메이션 */
  let thumbImgW = thumbImgEls[0].getBoundingClientRect().height;
  window.addEventListener("resize", () => {
    thumbImgW = thumbImgEls[0].getBoundingClientRect().height;
  });

    let moveLeft = 0;

    /* 뒤로가기 */
    function backBtnClick(e){
      e.preventDefault();
      if(mqMobile.matches){
        allList.style.marginTop = "0";
        mHeader.style.display = "block";
        bLine2.style.display = "block";
        allListUl.style.padding = "25px 2rem 0";
        // projectPage.style.width = "0vw";

        for (let i = 0; i < allListEls.length; i++) {
          allListEls[i].style.width = "100%";
          allListEls[i].style.fontSize = "30px";
          allListEls[i].style.letterSpacing = "none";
        }
      }
      console.log("reset ok");
      resetVal();      
    }
    back_btn.addEventListener("click", backBtnClick);
    
    
    thumbWrap.addEventListener("mouseenter", () => {
      // clearInterval(movemove);
      // console.log(movemove + "enter");
      thumbAni.pause();
    });

    thumbWrap.addEventListener("mouseleave", () => {
      // movemove = setInterval(move, 3);
      // console.log(movemove + "leave");
      thumbAni.play();
    });
    console.log(thumbImgW);
    thumbAni = thumbWrap.animate([
      {transform:"translateX(0)"},
      {transform:"translateX("+ (thumbImgW * -2) +"px)"}
    ],{
      duration: 7000,
      iterations : Infinity
    });
}


/* 학생 정보 받아오기 */
const studentList = document.querySelector(".students");

let li = document.createElement("li");
let p = document.createElement("p");
let img = document.createElement("img");

const detailBtn = document.querySelectorAll("ul.detail > li");

/* shuffle 배열(팀 순서) 섞기 */
Array.prototype.shuffle = function () {
  let length = this.length;
  while (length) {
    let index = Math.floor(Math.random() * length--);
    let temp = this[length];
    this[length] = this[index];
    this[index] = temp;
  }
  return this;
};


function resetVal(e) {
  memberSell.innerHTML = '';
  fieldBox.innerHTML = '';
  targetBox.innerHTML = '';
  mediaBox.innerHTML = '';
  teamName.innerHTML = '';
  projectName.innerHTML = '';
  projectSlogan.innerHTML = '';
  projectSummary.innerHTML = '';
  for (var i = 0; i < thumbImgEls.length; i++ ){
    console.log(thumbImgEls[i]);
    thumbImgEls[i].setAttribute('src', './');
  }
  
}



(function ($) {
  /* load */
  

  /* hamberger */
  $(".hamburger").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".menu").toggleClass("animate__fadeInRight");
    $(".menu").toggleClass("animate__fadeInLeft");
    $(".menu").toggleClass("visible");
  });

  $(".home")
    .mouseover(function () {
      $(".hamburger").children().css("background-color", "#fff");
    })
    .mouseout(function () {
      $(".hamburger").children().removeAttr("style");
    });


  /* list click */
  $(".list-wrap").on("click", function () {
    $(".nav-left").css("display", "none");
    $(".back-btn").css("opacity", "1");
    


  });

  $(".all-list").on("click", function () {
    $(".nav-left").css("display", "none");
    $(".back-btn").css("opacity", "1");
  });

  /* back btn */
  $(".back-btn").on("click", function () {
    console.log("back");
    $(".project-viewer").removeAttr("style");
    $(".nav-left").css("display", "");
    $(".back-btn").css("opacity", "0");
  });

  /* rolling */
  /* cursorUrl */
  var cursorUrl = $('.cursor');
  console.log(localStorage.cursorUrl.typeof);
  $('.cursor').css('background-image','url(' + localStorage.cursorUrl + ')');
  console.log(cursorUrl);
  
  if(mqMobile.matches){
    $('.cursor').css("display", "none");
   }
  
   
  /*  */
})(jQuery);