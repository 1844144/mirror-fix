var style = document.createElement('style');
style.innerHTML=`
.my-monaco{
    position: absolute;
    z-index: 10;
    top: 0;
}
`;
document.body.appendChild(style);
function add_my_editor(el, selector){
    var parent = el.closest(selector);
    var my_editor = parent.querySelector('.monaco');
    if(!my_editor){
        console.log("Adding EDITOR");
        var container = document.createElement("div");
        container.className='my-monaco';

        container.style.height = parent.offsetHeight+'px';
        container.style.width = parent.offsetWidth+'px';
        parent.appendChild(container);
        
        let instance = monaco.editor.create(
            container,
            {
                value: el.CodeMirror.getValue(),
                language: 'python',
            }
        );


        instance.onDidChangeModelContent(function(event) {
            console.log(instance.getValue());
            el.CodeMirror.setValue(
            instance.getValue());
        });

    }

}

var lesson = document.querySelector('.lessons__content');
if (lesson){
    var observer = new MutationObserver(function( mutations ) {
        for (var el of document.querySelectorAll('.CodeMirror')){
            add_my_editor(el,'.code-editor__widget-wrapper');
        }
    });

    observer.observe(lesson, {childList:true})
} else {
    var el = document.querySelector('.CodeMirror');
    if (el){
        add_my_editor(el, '.trainer-editor');
    }
}
