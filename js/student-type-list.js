sideNavLis = Array.prototype.slice.call(sideNavLis);

/* 이름 타입 리스트 보기 */
nameList.addEventListener("click", () => {
  const studentEls = document.querySelectorAll("ul.students-list > li");
  nameList.classList.add("list-select");
  imgList.classList.remove("list-select");
  for (let i = 0; i < studentEls.length; i++) {
    studentEls[i].classList.add("type-active");
  }
  //console.log(studentEls);
});

/* 이미지 타입 리스트 보기 */
imgList.addEventListener("click", () => {
  const studentEls = document.querySelectorAll("ul.students-list > li");
  imgList.classList.add("list-select");
  nameList.classList.remove("list-select");
  for (let i = 0; i < studentEls.length; i++) {
    studentEls[i].classList.remove("type-active");
  }
});

/* 사이드 네비 클릭 표시 */
for (let i = 0; i < sideNavLis.length; i++) {
  sideNavLis[i].addEventListener("click", (e) => {
    const el = e.currentTarget;
    const target = sideNavLis.indexOf(el);
    for (let j = 0; j < sideNavLis.length; j++) {
      sideNavLis[j].classList.remove("side-active");
    }
    sideNavLis[target].classList.add("side-active");
  });
}

/* 이름 검색 기능 */
function filter() {
  let value, name, item, i;

  value = document.getElementById("value").value.toUpperCase();
  item = document.querySelectorAll("ul.students-list > li");

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "flex";
    } else {
      item[i].style.display = "none";
    }
  }
}

/* 마우스 호버 시 이미지 */

hoverEvent();
function hoverEvent() {
  for (let i = 0; i < studentNameEls.length; i++) {
    studentNameEls[i].addEventListener("mouseenter", (e) => {
      if (nameList.classList.contains("list-select")) {
        //console.log("enter");
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        LivePhoto.classList.add("live");
        if (i % 4 === 3) {
          LivePhoto.classList.add("right");
        } else {
          LivePhoto.classList.remove("right");
        }
        LivePhoto.setAttribute("src", `${student[target].livePhoto}`);
        //console.log(student[target]);
        studentNameEls[target].appendChild(LivePhoto);
      }
    });
    studentNameEls[i].addEventListener("mouseleave", (e) => {
      if (nameList.classList.contains("list-select")) {
        //console.log("enter");
        const el = e.currentTarget;
        const target = studentNameEls.indexOf(el);
        studentNameEls[target].removeChild(LivePhoto);
      }
    });
  }
}

/* 스크롤 탑 */
topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
