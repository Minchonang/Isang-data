let bool_dataFrameState = {
      df1: false,
      df2: false
}



const TAB_NONE = "tab_none";
const TAB_SELECTED = "tab_selected";
const HIDDEN = "hidden";
const SHOW = "show";

const ecoCar = document.querySelector("#tab_ecoCar");
const env = document.querySelector("#tab_env");
const ecoCar_graph = document.querySelector("#ecoCar_graph");
const env_graph = document.querySelector("#env_graph");
const comment = document.querySelector("#comment");
const df = {
      df1 : document.querySelector("#dataFrame1"),
      df2 : document.querySelector("#dataFrame2")
};


const selectEcoCar = () => {
      ecoCar.classList.replace(TAB_NONE, TAB_SELECTED);
      env.classList.replace(TAB_SELECTED, TAB_NONE);
      ecoCar_graph.classList.replace(HIDDEN, SHOW);
      env_graph.classList.replace(SHOW, HIDDEN);
      comment.classList.replace(HIDDEN, "comment_area");
};

const selectEnv = () => {
      env.classList.replace(TAB_NONE, TAB_SELECTED);
      ecoCar.classList.replace(TAB_SELECTED, TAB_NONE);
      env_graph.classList.replace(HIDDEN, SHOW);
      ecoCar_graph.classList.replace(SHOW, HIDDEN);
      comment.classList.replace("comment_area", HIDDEN);
};

const click_DataFrame = (key) => {
      console.log(df[key])
      if (!bool_dataFrameState[key]) {
        df[key].classList.replace(HIDDEN, "df");
        bool_dataFrameState[key] = true;
      } else if (bool_dataFrameState[key]) {
        df[key].classList.replace("df", HIDDEN);
        bool_dataFrameState[key] = false;
      }
};

