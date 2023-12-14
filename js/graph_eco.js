// 친환경 자동차 데이터 프레임 보기 버튼
const df_eco = {
   df_eco1 : document.querySelector("#dataFrame1_eco"),
   df_eco2 : document.querySelector("#dataFrame2_eco"),
   df_eco3 : document.querySelector("#dataFrame3_eco"),
   df_eco4 : document.querySelector("#dataFrame4_eco"),
   df_eco5 : document.querySelector("#dataFrame5_eco")
};
const eco_btnMap = {
   'df_eco1': '#df_eco1_btn',
   'df_eco2': '#df_eco2_btn',
   'df_eco3': '#df_eco3_btn',
   'df_eco4': '#df_eco4_btn',
   'df_eco5': '#df_eco5_btn'
};
let bool_ecoDataFrame_State = {
   df_eco1: false,
   df_eco2: false,
   df_eco3: false,
   df_eco4: false,
   df_eco5: false
};
const click_ecoDataFrame = (key) => {
   if (!bool_ecoDataFrame_State[key]) {
      document.querySelector(`${eco_btnMap[key]} > show`).innerText = "데이터 프레임 닫기";
      df_eco[key].classList.replace(HIDDEN, FADE_IN)
      setTimeout(function () {
         df_eco[key].classList.replace(FADE_IN, SHOW);
      }, 0);
      bool_ecoDataFrame_State[key] = true;
   } else if (bool_ecoDataFrame_State[key]) {
      document.querySelector(`${eco_btnMap[key]} > show`).innerText = "데이터 프레임 보기";
      df_eco[key].classList.replace(SHOW, FADE_OUT);
      setTimeout(function () {
         df_eco[key].classList.replace(FADE_OUT, HIDDEN);
      },300);
      bool_ecoDataFrame_State[key] = false;
   }
};

// 친환경 자동차 데이터 프레임 버튼의 hover
const eco_btnIds = [
   'df_eco1_btn',
   'df_eco2_btn',
   'df_eco3_btn',
   'df_eco4_btn',
   'df_eco5_btn'
];
eco_btnIds.forEach((btnId) => {
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