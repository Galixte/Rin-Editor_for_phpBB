﻿var smileyReverseMap={},smileyMap={};smileyMapnam=dropdownsmiliesname.concat(dropdownsmiliesnamemore);smileyMapdes=dropdownsmiliesdes.concat(dropdownsmiliesdesmore);smileyMapurl=dropdownsmiliesurl.concat(dropdownsmiliesurlmore);for(var i in smileyMapdes)smileyReverseMap[smileyMapdes[i]]=smileyMapnam[i],smileyMap[smileyMapnam[i]]=smileyMapdes[i];
MyBBEditor={insertText:function(b,d,a,c,f){var e="",k=Object.keys(CKEDITOR.instances)[0],g=b,h=d;d||(d=h="");a||(a=k+"_2");e=a.slice(0,-2);c||(c="source");f||(f="");"source"==c?rinsourceditor.insert_text(b,d,a):(g=CKEDITOR.instances[e].dataProcessor.toDataFormat(CKEDITOR.instances[e].dataProcessor.toHtml(g+h),{context:"body"}),rinsourceditor.insert_text(g,"",a));"undefined"!==typeof CKEDITOR&&CKEDITOR.instances&&(e||(e=k),"wysiwyg"==CKEDITOR.instances[e].mode&&("source"==c?(data=CKEDITOR.plugins.bbcode.BBCodeToHtml(g+
h,e),"quote"==f&&(data=data.replace(/([\s\S]*)<\/blockquote>/,"$1\x3c/blockquote\x3e\x3cbr\x3e")),CKEDITOR.instances[e].insertHtml(data)):CKEDITOR.instances[e].insertHtml(b+d)));return!1}};insert_text=function(b,d){d&&(b=" "+b+" ");MyBBEditor.insertText(b)};
rinsourceditor=function(){return{init:function(){return!0},insert_text:function(b,d,a){var c;a=document.getElementById(a);if(!a)return!1;if(document.selection&&document.selection.createRange)a.focus(),c=document.selection.createRange(),c.text=b+c.text+d;else if(a.selectionStart||0===a.selectionStart){c=a.selectionStart;var f=a.selectionEnd,e=a.scrollTop;a.value=a.value.substring(0,c)+b+a.value.substring(c,f)+d+a.value.substring(f,a.value.length);"\x3d"===b.charAt(b.length-2)?a.selectionStart=c+b.length-
1:a.selectionStart=c===f?f+b.length:f+b.length+d.length;a.selectionEnd=a.selectionStart;a.scrollTop=e}else a.value+=b+d;a.focus()}}}();