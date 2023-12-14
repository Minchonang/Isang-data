// 대기오염 데이터 프레임 보기 버튼
const df = {
   df1 : document.querySelector("#dataFrame1"),
   df2 : document.querySelector("#dataFrame2"),
   df3 : document.querySelector("#dataFrame3"),
   df4 : document.querySelector("#dataFrame4"),
   df5 : document.querySelector("#dataFrame5")
};
const btnMap = {
   'df1': '#df1_btn',
   'df2': '#df2_btn',
   'df3': '#df3_btn',
   'df4': '#df4_btn',
   'df5': '#df5_btn'
};
let bool_dataFrameState = {
   df1: false,
   df2: false,
   df3: false,
   df4: false,
   df5: false
}
const click_DataFrame = (key) => {
   if (!bool_dataFrameState[key]) {
      document.querySelector(`${btnMap[key]} > show`).innerText = "데이터 프레임 닫기";
      df[key].classList.replace(HIDDEN, FADE_IN);
      setTimeout(function () {
         df[key].classList.replace(FADE_IN, SHOW);
      }, 0);
      bool_dataFrameState[key] = true;
   } else if (bool_dataFrameState[key]) {
      document.querySelector(`${btnMap[key]} > show`).innerText = "데이터 프레임 보기";
      df[key].classList.replace(SHOW, FADE_OUT);
      setTimeout(function() {
         df[key].classList.replace(FADE_OUT, HIDDEN);
      }, 300);
      bool_dataFrameState[key] = false;
   }
};

// 대기오염 데이터프레임 보기 버튼의 hover
const btnIds = [
   'df1_btn',
   'df2_btn',
   'df3_btn',
   'df4_btn',
   'df5_btn'
];
btnIds.forEach((btnId) => {
   const btn = document.querySelector(`#${btnId}`); // 데이터 프레임 보기 버튼
   btn.addEventListener('mouseover', function () {
      document.querySelector(`#${btnId} > show`).style.color = "black";
      document.querySelector(`#${btnId} > show`).style.fontWeight = "bolder";
   });
   btn.addEventListener('mouseout', function () {
      document.querySelector(`#${btnId} > show`).style.color = "#656668";
      document.querySelector(`#${btnId} > show`).style.fontWeight = "normal";
   });
});