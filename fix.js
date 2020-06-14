require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs'}});
require(['vs/editor/editor.main'], function() {
                var editor = monaco.editor.create(document.querySelector('.code-editor'), {
                        value: [
                                'function x() {',
                                '\tconsole.log("Hello world!");',
                                '}'
                        ].join('\n'),
                        language: 'javascript'
                });
});
