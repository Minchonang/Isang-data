const TAB_NONE = "tab_none";
const TAB_SELECTED = "tab_selected";
const SHOW = "show";
const HIDDEN = "hidden";
const FADE_IN = "fade_in";
const FADE_OUT = "fade_out";

const ecoCar = document.querySelector("#tab_ecoCar");
const env = document.querySelector("#tab_env");
const ecoCar_graph = document.querySelector("#ecoCar_graph");
const env_graph = document.querySelector("#env_graph");
const comment = document.querySelector("#comment");
const desc = document.querySelector("description");

// 친환경 자동차 탭
const selectEco = () => {
   ecoCar.classList.replace(TAB_NONE, TAB_SELECTED);
   env.classList.replace(TAB_SELECTED, TAB_NONE);
   ecoCar_graph.classList.replace(HIDDEN, SHOW);
   env_graph.classList.replace(SHOW, HIDDEN);
   comment.classList.replace(HIDDEN, "comment_area");
   desc.classList.replace(HIDDEN, "desc");
};

// 자동차 추천 탭
const selectEnv = () => {
   env.classList.replace(TAB_NONE, TAB_SELECTED);
   ecoCar.classList.replace(TAB_SELECTED, TAB_NONE);
   env_graph.classList.replace(HIDDEN, SHOW);
   ecoCar_graph.classList.replace(SHOW, HIDDEN);
   comment.classList.replace("comment_area", HIDDEN);
   desc.classList.replace("desc", HIDDEN);
};





