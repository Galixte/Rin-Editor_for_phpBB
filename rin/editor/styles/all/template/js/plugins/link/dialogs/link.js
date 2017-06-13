﻿/*
 Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){CKEDITOR.dialog.add("link",function(e){var m=CKEDITOR.plugins.link,n=function(){var a=this.getDialog(),b=a.getContentElement("target","popupFeatures"),a=a.getContentElement("target","linkTargetName"),l=this.getValue();if(b&&a)switch(b=b.getElement(),b.hide(),a.setValue(""),l){case "frame":a.setLabel(e.lang.link.targetFrameName);a.getElement().show();break;case "popup":b.show();a.setLabel(e.lang.link.targetPopupName);a.getElement().show();break;default:a.setValue(l),a.getElement().hide()}},
f=function(a){a.target&&this.setValue(a.target[this.id]||"")},g=function(a){a.advanced&&this.setValue(a.advanced[this.id]||"")},h=function(a){a.target||(a.target={});a.target[this.id]=this.getValue()||""},k=function(a){a.advanced||(a.advanced={});a.advanced[this.id]=this.getValue()||""},c=e.lang.common,b=e.lang.link;return{title:b.title,minWidth:350,minHeight:230,contents:[{id:"info",label:b.info,title:b.info,elements:[{id:"linkType",type:"select",label:b.type,"default":"url",items:[[b.toUrl,"url"],
[b.toEmail,"email"]],onChange:function(){var a=this.getDialog(),b=["urlOptions","emailOptions"],l=this.getValue(),d=a.definition.getContents("upload"),d=d&&d.hidden;"url"==l?(e.config.linkShowTargetTab&&a.showPage("target"),d||a.showPage("upload")):(a.hidePage("target"),d||a.hidePage("upload"));for(d=0;d<b.length;d++){var c=a.getContentElement("info",b[d]);c&&(c=c.getElement().getParent().getParent(),b[d]==l+"Options"?c.show():c.hide())}a.layout()},setup:function(a){this.setValue(a.type||"url")},
commit:function(a){a.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:c.protocol,"default":"http://",items:[["http://‎","http://"],["https://‎","https://"],["ftp://‎","ftp://"],["news://‎","news://"],[b.other,""]],setup:function(a){a.url&&this.setValue(a.url.protocol||"")},commit:function(a){a.url||(a.url={});a.url.protocol=this.getValue()}},{type:"text",id:"url",label:c.url,required:!0,onLoad:function(){this.allowOnChange=
!0},onKeyUp:function(){this.allowOnChange=!1;var a=this.getDialog().getContentElement("info","protocol"),b=this.getValue(),c=/^((javascript:)|[#\/\.\?])/i,d=/^(http|https|ftp|news):\/\/(?=.)/i.exec(b);d?(this.setValue(b.substr(d[0].length)),a.setValue(d[0].toLowerCase())):c.test(b)&&a.setValue("");this.allowOnChange=!0},onChange:function(){if(this.allowOnChange)this.onKeyUp()},validate:function(){var a=this.getDialog();return a.getContentElement("info","linkType")&&"url"!=a.getValueOf("info","linkType")?
!0:!e.config.linkJavaScriptLinksAllowed&&/javascript\:/.test(this.getValue())?(alert(c.invalidValue),!1):this.getDialog().fakeObj?!0:CKEDITOR.dialog.validate.notEmpty(b.noUrl).apply(this)},setup:function(a){this.allowOnChange=!1;a.url&&this.setValue(a.url.url);this.allowOnChange=!0},commit:function(a){this.onChange();a.url||(a.url={});a.url.url=this.getValue();this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",
id:"browse",hidden:"true",filebrowser:"info:url",label:c.browseServer}]},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:b.emailAddress,required:!0,validate:function(){var a=this.getDialog();return a.getContentElement("info","linkType")&&"email"==a.getValueOf("info","linkType")?CKEDITOR.dialog.validate.notEmpty(b.noEmail).apply(this):!0},setup:function(a){a.email&&this.setValue(a.email.address);(a=this.getDialog().getContentElement("info","linkType"))&&"email"==
a.getValue()&&this.select()},commit:function(a){a.email||(a.email={});a.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:b.emailSubject,setup:function(a){a.email&&this.setValue(a.email.subject)},commit:function(a){a.email||(a.email={});a.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:b.emailBody,rows:3,"default":"",setup:function(a){a.email&&this.setValue(a.email.body)},commit:function(a){a.email||(a.email={});a.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info",
"linkType")||this.getElement().hide()}},{type:"text",id:"desc",label:RinEditor["Description (optional):"],setup:function(){e.getSelection().getSelectedText()&&this.setValue(e.getSelection().getSelectedText())},commit:function(a){a.description=this.getValue()}}]},{id:"target",requiredContent:"a[target]",label:b.target,title:b.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:c.target,"default":"notSet",style:"width : 100%;",items:[[c.notSet,"notSet"],
[b.targetFrame,"frame"],[b.targetPopup,"popup"],[c.targetNew,"_blank"],[c.targetTop,"_top"],[c.targetSelf,"_self"],[c.targetParent,"_parent"]],onChange:n,setup:function(a){a.target&&this.setValue(a.target.type||"notSet");n.call(this)},commit:function(a){a.target||(a.target={});a.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:b.targetFrameName,"default":"",setup:function(a){a.target&&this.setValue(a.target.name)},commit:function(a){a.target||(a.target={});a.target.name=this.getValue().replace(/([^\x00-\x7F]|\s)/gi,
"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:b.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:b.popupResizable,setup:f,commit:h},{type:"checkbox",id:"status",label:b.popupStatusBar,setup:f,commit:h}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:b.popupLocationBar,setup:f,commit:h},{type:"checkbox",id:"toolbar",label:b.popupToolbar,setup:f,commit:h}]},{type:"hbox",children:[{type:"checkbox",
id:"menubar",label:b.popupMenuBar,setup:f,commit:h},{type:"checkbox",id:"fullscreen",label:b.popupFullScreen,setup:f,commit:h}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:b.popupScrollBars,setup:f,commit:h},{type:"checkbox",id:"dependent",label:b.popupDependent,setup:f,commit:h}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:c.width,id:"width",setup:f,commit:h},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:b.popupLeft,
id:"left",setup:f,commit:h}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:c.height,id:"height",setup:f,commit:h},{type:"text",labelLayout:"horizontal",label:b.popupTop,widths:["50%","50%"],id:"top",setup:f,commit:h}]}]}]}]},{id:"upload",label:b.upload,title:b.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:c.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:c.uploadSubmit,filebrowser:"info:url",
"for":["upload","upload"]}]},{id:"advanced",label:b.advanced,title:b.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:b.id,setup:g,commit:k},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:b.langDir,"default":"",style:"width:110px",items:[[c.notSet,""],[b.langDirLTR,"ltr"],[b.langDirRTL,"rtl"]],setup:g,commit:k},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",
label:b.acccessKey,maxLength:1,setup:g,commit:k}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:b.name,id:"advName",requiredContent:"a[name]",setup:g,commit:k},{type:"text",label:b.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:g,commit:k},{type:"text",label:b.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:g,commit:k}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",
label:b.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:g,commit:k},{type:"text",label:b.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:g,commit:k}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:b.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:g,commit:k},{type:"text",label:b.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:g,commit:k}]},{type:"hbox",widths:["45%",
"55%"],children:[{type:"text",label:b.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:g,commit:k},{type:"text",label:b.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:g,commit:k}]}]}]}],onShow:function(){var a=this.getParentEditor(),b=a.getSelection(),c=null;(c=m.getSelectedLink(a))&&c.hasAttribute("href")?b.getSelectedElement()||b.selectElement(c):c=null;a=m.parseLinkAttributes(a,c);
this._.selectedElement=c;this.setupContent(a)},onOk:function(){var a={};this.commitContent(a);var b=e.getSelection(),c=m.getLinkAttributes(e,a),b=b.getRanges()[0];b.collapsed||a.description&&b.deleteContents();var d=new CKEDITOR.dom.text("email"==a.type?a.email.address:c.set["data-cke-saved-href"],e.document);a.description&&(d.$.textContent=a.description);b.insertNode(d);b.selectNodeContents(d);a=new CKEDITOR.style({element:"a",attributes:c.set});a.type=CKEDITOR.STYLE_INLINE;a.applyToRange(b,e);b.select()},
onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced");e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var a=this.getContentElement("info","linkType");a&&"url"==a.getValue()&&(a=this.getContentElement("info","url"),a.select())}}})})();