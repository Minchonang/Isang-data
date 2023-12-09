const TAB_NONE = "tab_none";
const TAB_SELECTED = "tab_selected";
const HIDDEN = "hidden";
const SHOW = "show";

const ecoCar = document.querySelector("#tab_ecoCar");
const env = document.querySelector("#tab_env");
const ecoCar_graph = document.querySelector("#ecoCar_graph");
const env_graph = document.querySelector("#env_graph");
const comment = document.querySelector("#comment");

const selectEcoCar = () => {
      ecoCar.classList.replace(TAB_NONE, TAB_SELECTED);
      env.classList.replace(TAB_SELECTED, TAB_NONE);
      ecoCar_graph.classList.replace(HIDDEN, SHOW);
      env_graph.classList.replace(SHOW, HIDDEN);
      comment.classList.replace(HIDDEN, "comment_area");
}

const selectEnv = () => {
      env.classList.replace(TAB_NONE, TAB_SELECTED);
      ecoCar.classList.replace(TAB_SELECTED, TAB_NONE);
      env_graph.classList.replace(HIDDEN, SHOW);
      ecoCar_graph.classList.replace(SHOW, HIDDEN);
      comment.classList.replace("comment_area", HIDDEN);
}