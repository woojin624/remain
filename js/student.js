"use strict";
const studentList = document.querySelector("ul.students-list");
const nameList = document.querySelector("li.name-list");
const imgList = document.querySelector("li.img-list");
const topBtn = document.querySelector("button.top-btn");
const topBtnImg = document.querySelector("button.top-btn > img");
const searchBtnImg = document.querySelector("button.button > img");
const studentsBody = document.querySelector("body.students-body");
const searchInput = document.querySelector("div.search > input");
const stuHamburger = document.querySelectorAll("div.hamburger > div");
const nameListImg = document.querySelector("li.name-list > img");
const imgListImg = document.querySelector("li.img-list > img");
const stuHeader = document.querySelector("header.students-header");

const hamberger = document.querySelectorAll("a.hamburger > span");
const aText = document.querySelectorAll("ul.students-list > li > a ");

let sideNavLis = document.querySelectorAll("article.side-nav > ul > li");
let li = document.createElement("li");
let p = document.createElement("p");
let img = document.createElement("img");


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

mainLoad();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

sideNavLis[0].addEventListener("click", function () {
  mainLoad();
  toWhite();
  scollTop();
});
function mainLoad() {
  student.shuffle();
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    if (nameList.classList.contains("list-select")) {
      studentList.innerHTML += `<li class="type-active"><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    } else {
      studentList.innerHTML += `<li><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    }
  }
  imgList.classList.remove("list-select");
}



let studentNameEls = document.querySelectorAll("ul.students-list > li ");
studentNameEls = document.querySelectorAll("ul.students-list > li");
const studentNameImg = document.querySelectorAll("ul.students-list > li > a > img");

studentNameEls = Array.prototype.slice.call(studentNameEls);
let LivePhoto = document.createElement("img");

/* hover gif */

for (let i = 0; i < studentNameEls.length; i++) {
  studentNameEls[i].addEventListener("mouseenter", (e) => {
    studentNameImg[i].setAttribute("src", student[i].livePhoto); 
  });

  
  studentNameEls[i].addEventListener("mouseleave", (e) => {
    studentNameImg[i].setAttribute("src", student[i].photo);
  });
}

const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
for (let i = 0; i < studentNameEls.length; i++) {
  studentNameEls[i].addEventListener("mouseenter", (e) => {
    if (nameList.classList.contains("list-select")) {
      console.log('hehe');
      pName[i].classList.add("Pline");
    }
  });
  studentNameEls[i].addEventListener("mouseleave", (e) => {
    if (nameList.classList.contains("list-select")) {
      console.log('hehe');
      pName[i].classList.remove("Pline");
    }
  });
}



sideNavLis[1].addEventListener("click", function () {
  student.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "기획" && nameList.classList.contains("list-select")) {
      studentList.innerHTML += `<li class="type-active"><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    } else if (student[i].detail === "기획") {
      studentList.innerHTML += `<li><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    }
    imgList.classList.remove("list-select");
  }
  toWhite();
  scollTop();

  // 기획 gif
  studentNameEls = document.querySelectorAll("ul.students-list > li");
  const studentNameImg = document.querySelectorAll("ul.students-list > li > a > img");
  studentNameEls = Array.prototype.slice.call(studentNameEls);
  const plan = new Array();
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "기획") {
      plan.push(student[i]);
    }
  }
  
  for (let i = 0; i < studentNameEls.length; i++) {
    studentNameEls[i].addEventListener("mouseenter", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${plan[target].livePhoto}`);

      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        LivePhoto.classList.add("live");
    
        if (i % 4 === 3) {
          LivePhoto.classList.add("right");
        } else {
          LivePhoto.classList.remove("right");
        }
        LivePhoto.setAttribute("src", `${plan[target].livePhoto}`);
        studentNameEls[target].appendChild(LivePhoto);

        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.add("Pline");
      }
    });
    studentNameEls[i].addEventListener("mouseleave", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${plan[target].photo}`);

      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        studentNameEls[target].removeChild(LivePhoto);

        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.remove("Pline");
      }
    });
  }
});

/* 디자인 */
sideNavLis[2].addEventListener("click", function () {
  student.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "디자인" && nameList.classList.contains("list-select")) {
      studentList.innerHTML += `<li class="type-active"><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    } else if (student[i].detail === "디자인") {
      studentList.innerHTML += `<li><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    }
    imgList.classList.remove("list-select");
  }
  toWhite();
  scollTop();

  //디자인 gif
  studentNameEls = document.querySelectorAll("ul.students-list > li");
  const studentNameImg = document.querySelectorAll("ul.students-list > li > a > img");
  studentNameEls = Array.prototype.slice.call(studentNameEls);
  const design = new Array();
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "디자인") {
      design.push(student[i]);
    }
  }
  
  for (let i = 0; i < studentNameEls.length; i++) {
    studentNameEls[i].addEventListener("mouseenter", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${design[target].livePhoto}`);
     /*  studentNameImg[target].setAttribute("src", `${design[target].livePhoto}`); */

      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        LivePhoto.classList.add("live");
        if (i % 4 === 3) {
          LivePhoto.classList.add("right");
        } else {
          LivePhoto.classList.remove("right");
        }
        LivePhoto.setAttribute("src", `${design[target].livePhoto}`);
        studentNameEls[target].appendChild(LivePhoto);
        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.add("Pline");
      }
    });
    studentNameEls[i].addEventListener("mouseleave", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${design[target].photo}`);

      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        studentNameEls[target].removeChild(LivePhoto);
        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.remove("Pline");
      }
    });
  }
});

/* 프밍 */
sideNavLis[3].addEventListener("click", function () {
  student.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  studentList.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "프로그래밍" && nameList.classList.contains("list-select")) {
      studentList.innerHTML += `<li class="type-active"><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    } else if (student[i].detail === "프로그래밍") {
      studentList.innerHTML += `<li><a href="${student[i].pofol}"><img src="${student[i].photo}"/><p class="name">${student[i].name}</p><p>${student[i].team}/${student[i].detail}</p></a></li>`;
    }
    imgList.classList.remove("list-select");
  }
  toWhite();
  scollTop();

  //프밍 gif
  studentNameEls = document.querySelectorAll("ul.students-list > li");
  const studentNameImg = document.querySelectorAll("ul.students-list > li > a > img");
  studentNameEls = Array.prototype.slice.call(studentNameEls);
  const programming = new Array();
  for (let i = 0; i < student.length; i++) {
    if (student[i].detail === "프로그래밍") {
      programming.push(student[i]);
    }
  }
  
  for (let i = 0; i < studentNameEls.length; i++) {
    studentNameEls[i].addEventListener("mouseenter", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${programming[target].livePhoto}`);
     /*  studentNameImg[target].setAttribute("src", `${design[target].livePhoto}`); */

      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        LivePhoto.classList.add("live");
        if (i % 4 === 3) {
          LivePhoto.classList.add("right");
        } else {
          LivePhoto.classList.remove("right");
        }
        LivePhoto.setAttribute("src", `${programming[target].livePhoto}`);
        studentNameEls[target].appendChild(LivePhoto);
        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.add("Pline");
      }
    });
    studentNameEls[i].addEventListener("mouseleave", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${programming[target].photo}`);

      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        studentNameEls[target].removeChild(LivePhoto);
        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.remove("Pline");
      }
    });
  }
});

sideNavLis[4].addEventListener("click", function () {
  student.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  studentList.innerHTML = "";
  for (let i = 0; i < student2.length; i++) {
    if (nameList.classList.contains("list-select")) {
      studentList.innerHTML += `<li class="type-active"><a href="${student2[i].pofol}"><img src="${student2[i].photo}"/><p class="name">${student2[i].name}</p><p>${student2[i].team}/${student2[i].detail}</p></a></li>`;
    } else {
      /* studentList.innerHTML += `<li><img src="${student2[i].photo}"/><p class="name">${student2[i].name}</p><p>${student2[i].team}/${student2[i].detail}</p></li>`; */
      studentList.innerHTML += `<li><a href="${student2[i].pofol}"><img src="${student2[i].photo}"/><p class="name">${student2[i].name}</p><p>${student2[i].team}/${student2[i].detail}</p></a></li>`;
      
    }
  }
  toBlack();
  scollTop();

  // 4학년
  studentNameEls = document.querySelectorAll("ul.students-list > li");
  const studentNameImg = document.querySelectorAll("ul.students-list > li > a > img");
  studentNameEls = Array.prototype.slice.call(studentNameEls);
  for (let i = 0; i < studentNameEls.length; i++) {
    studentNameEls[i].addEventListener("mouseenter", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${student2[target].livePhoto}`);
      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        LivePhoto.classList.add("live");
        if (i % 4 === 3) {
          LivePhoto.classList.add("right");
        } else {
          LivePhoto.classList.remove("right");
        }
        LivePhoto.setAttribute("src", `${student2[target].livePhoto}`);
        studentNameEls[target].appendChild(LivePhoto);
        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.add("PlineB");
        pName[i].style.color = "#000";
      }
    });
    studentNameEls[i].addEventListener("mouseleave", (e) => {
      const el = e.currentTarget;
      const target = studentNameEls.indexOf(el);
      studentNameImg[i].setAttribute("src", `${student2[target].photo}`);
      if (nameList.classList.contains("list-select")) {
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        studentNameEls[target].removeChild(LivePhoto);
        const pName = document.querySelectorAll("article.list-area > ul.students-list > li > a > p.name");
        pName[i].classList.remove("PlineB");
        pName[i].style.color = "#fff";
      }
    });
  }
});

function toWhite() {
  studentsBody.style.backgroundColor = "#fff";
  studentsBody.style.color = "#000";
  searchInput.classList.remove("toBlack");
  topBtn.style.backgroundColor = "#000";
  stuHeader.style.backgroundColor = "#fff";
  topBtnImg.setAttribute("src", "./img/top-arrow-white.png");
  nameListImg.setAttribute("src", "./img/name-list-black.png");
  imgListImg.setAttribute("src", "./img/img-list-black.png");
  searchBtnImg.setAttribute("src", "./img/search-icon-black.png");
  
  //stuHamburger.style.color = "#000";

  for ( var i=0; i < hamberger.length; i++) {
    hamberger[i].style.backgroundColor = "#000";
  }
  

  for (let i = 0; i < sideNavLis.length; i++) {
    sideNavLis[i].classList.remove("toBlack");
  }
  for (let i = 0; i < stuHamburger.length; i++) {
    stuHamburger[i].classList.remove("toBlack");
  }
  for (let i = 0; i < aText.length; i++) {
    aText[i].style.color = "#000";
  }

}

function toBlack() {
  var pOne = document.querySelectorAll('article.list-area > ul.students-list > li > a > p:nth-child(2)');
  var pTwo = document.querySelectorAll('article.list-area > ul.students-list > li > a > p:nth-child(3)');
  studentsBody.style.backgroundColor = "#000";
  studentsBody.style.color = "#fff";
  searchInput.classList.add("toBlack");
  topBtn.style.backgroundColor = "#fff";
  stuHeader.style.backgroundColor = "#000";
  topBtnImg.setAttribute("src", "./img/top-arrow-black.png");
  nameListImg.setAttribute("src", "./img/name-list-white.png");
  imgListImg.setAttribute("src", "./img/img-list-white.png");
  searchBtnImg.setAttribute("src", "./img/search-icon-white.png");
  
  

  for ( var i=0; i < hamberger.length; i++) {
    hamberger[i].style.backgroundColor = "#fff";
  }

  for (let i = 0; i < sideNavLis.length; i++) {
    sideNavLis[i].classList.add("toBlack");
  }
  for (let i = 0; i < stuHamburger.length; i++) {
    stuHamburger[i].classList.add("toBlack");
  }
  for (let i = 0; i < pOne.length; i++) {
    pOne[i].style.color = "#fff";
    pTwo[i].style.color = "#fff";
  }

}

function scollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


console.log("Script Load");

(function($) {
 /*  */

$(document).ready(function(){
  
/*   instance1.goPhase('end'); */
});
/* slice */
/* const target1 = $('.black-div1');
const option1 = {       
  numOfSlices: 12,
  startPosition: 'middle',
  endPosition: 'top',
  transitionOrder: [11,10,9,8,7,6,5,4,3,2,1,0],
  direction: 'vertical',
  color: "#000",
}
const instance1 = sliceRevealer(target1, option1); */



/* hamberger */
$('.hamburger').on('click', function(event) {
  event.preventDefault();    
  $(this).toggleClass('active');
  $('.menu').toggleClass('animate__animated animate__fadeInRight');
  $('.menu').toggleClass('animate__animated animate__fadeInLeft');
  $('.menu').toggleClass('visible');
});

$('.home').mouseover(function(){
  $('.hamburger').children().css('background-color','#fff');
}).mouseout(function(){
  $('.hamburger').children().removeAttr('style');
});

}) (jQuery);

