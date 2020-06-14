var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/gh/1844144/mirror-fix@latest/monaco.js"
script.onload = function(){
	var s2 = document.createElement('script');
	s2.src = "https://cdn.jsdelivr.net/gh/1844144/mirror-fix@f991829df7/fix.js";
	document.body.appendChild(s2);
}
document.body.appendChild(script);


// import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

// const lesson = document.querySelector('.lessons__content');
// window.monaco = monaco;


