const TAB_NONE = "tab_none";
const TAB_SELECTED = "tab_selected";
const HIDDEN = "hidden";
const SHOW = "show";

const ecoCar = document.querySelector("#tab_ecoCar");
const env = document.querySelector("#tab_env");
const ecoCar_graph = document.querySelector("#ecoCar_graph");
const env_graph = document.querySelector("#env_graph");
const comment = document.querySelector("#comment");
const iframes = document.getElementsByTagName('iframe');

const df1_btn = document.querySelector("#df1_btn");
const df2_btn = document.querySelector("#df2_btn");
const df3_btn = document.querySelector("#df3_btn");
const df4_btn = document.querySelector("#df4_btn");
const df5_btn = document.querySelector("#df5_btn");

const df = {
      df1 : document.querySelector("#dataFrame1"),
      df2 : document.querySelector("#dataFrame2"),
      df3 : document.querySelector("#dataFrame3"),
      df4 : document.querySelector("#dataFrame4"),
      df5 : document.querySelector("#dataFrame5")
};
let bool_dataFrameState = {
      df1: false,
      df2: false,
      df3: false,
      df4: false,
      df5: false
}

// 친환경 자동차 탭
const selectEcoCar = () => {
      ecoCar.classList.replace(TAB_NONE, TAB_SELECTED);
      env.classList.replace(TAB_SELECTED, TAB_NONE);
      ecoCar_graph.classList.replace(HIDDEN, SHOW);
      env_graph.classList.replace(SHOW, HIDDEN);
      comment.classList.replace(HIDDEN, "comment_area");
};
// 재생에너지 탭
const selectEnv = () => {
      env.classList.replace(TAB_NONE, TAB_SELECTED);
      ecoCar.classList.replace(TAB_SELECTED, TAB_NONE);
      env_graph.classList.replace(HIDDEN, SHOW);
      ecoCar_graph.classList.replace(SHOW, HIDDEN);
      comment.classList.replace("comment_area", HIDDEN);
      for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
      }
};

// 재생에너지 데이터프레임 보기 버튼
const click_DataFrame = (key) => {
      if (!bool_dataFrameState[key]) {
            df[key].classList.replace(HIDDEN, "df");
            if (key == "df1") {
                  document.querySelector("#df1_btn > show").innerText = "데이터 프레임 닫기";
            } else if (key == "df2") {
                  document.querySelector("#df2_btn > show").innerText = "데이터 프레임 닫기";
            } else if (key == "df3") {
                  document.querySelector("#df3_btn > show").innerText = "데이터 프레임 닫기";
            } else if (key == "df4") {
                  document.querySelector("#df4_btn > show").innerText = "데이터 프레임 닫기";
            } else if (key == "df5") {
                  document.querySelector("#df5_btn > show").innerText = "데이터 프레임 닫기";
            }
            bool_dataFrameState[key] = true;
      } else if (bool_dataFrameState[key]) {
            df[key].classList.replace("df", HIDDEN);
            if (key == "df1") {
                  document.querySelector("#df1_btn > show").innerText = "데이터 프레임 보기";
            } else if (key == "df2") {
                  document.querySelector("#df2_btn > show").innerText = "데이터 프레임 보기";
            } else if (key == "df3") {
                  document.querySelector("#df3_btn > show").innerText = "데이터 프레임 보기";
            } else if (key == "df4") {
                  document.querySelector("#df4_btn > show").innerText = "데이터 프레임 보기";
            } else if (key == "df5") {
                  document.querySelector("#df5_btn > show").innerText = "데이터 프레임 보기";
            }
            bool_dataFrameState[key] = false;
      }
};

// 재생에너지 데이터프레임 보기 버튼 hover
df1_btn.addEventListener('mouseover', function () {
      document.querySelector("#df1_btn > show").style.color = "black";
      document.querySelector("#df1_btn > show").style.fontWeight = "bolder";
});
df1_btn.addEventListener('mouseout', function () {
      document.querySelector("#df1_btn > show").style.color = "#656668";
      document.querySelector("#df1_btn > show").style.fontWeight = "normal";
});

df2_btn.addEventListener('mouseover', function () {
      document.querySelector("#df2_btn > show").style.color = "black";
      document.querySelector("#df2_btn > show").style.fontWeight = "bolder";
});
df2_btn.addEventListener('mouseout', function () {
      document.querySelector("#df2_btn > show").style.color = "#656668";
      document.querySelector("#df2_btn > show").style.fontWeight = "normal";
});

df3_btn.addEventListener('mouseover', function () {
      document.querySelector("#df3_btn > show").style.color = "black";
      document.querySelector("#df3_btn > show").style.fontWeight = "bolder";
});
df3_btn.addEventListener('mouseout', function () {
      document.querySelector("#df3_btn > show").style.color = "#656668";
      document.querySelector("#df3_btn > show").style.fontWeight = "normal";
});

df4_btn.addEventListener('mouseover', function () {
      document.querySelector("#df4_btn > show").style.color = "black";
      document.querySelector("#df4_btn > show").style.fontWeight = "bolder";
});
df4_btn.addEventListener('mouseout', function () {
      document.querySelector("#df4_btn > show").style.color = "#656668";
      document.querySelector("#df4_btn > show").style.fontWeight = "normal";
});

df5_btn.addEventListener('mouseover', function () {
      document.querySelector("#df5_btn > show").style.color = "black";
      document.querySelector("#df5_btn > show").style.fontWeight = "bolder";
});
df5_btn.addEventListener('mouseout', function () {
      document.querySelector("#df5_btn > show").style.color = "#656668";
      document.querySelector("#df5_btn > show").style.fontWeight = "normal";
});