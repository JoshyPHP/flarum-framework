module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["forum/components/SignUpModal"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/components/EditUserModal"]},function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,e){t.exports=flarum.core.compat["forum/components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},,,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(2),i=n(5),c=n.n(i),s=n(6),u=n.n(s),l=n(4),p=n.n(l),f=n(8),d=n.n(f),b=n(9),k=n.n(b),y=n(10),h=n.n(y),g=n(7),v=n.n(g),N=n(3),x=n.n(N);function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=n(11),j=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,O(e,n);var o=a.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.nickname=x()(r.a.session.user.displayName())},o.className=function(){return"NickameModal Modal--small"},o.title=function(){return r.a.translator.trans("flarum-nicknames.forum.change_nickname.title")},o.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{type:"text",autocomplete:"off",name:"nickname",className:"FormControl",bidi:this.nickname,disabled:this.loading})),m("div",{className:"Form-group"},c.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},r.a.translator.trans("flarum-nicknames.forum.change_nickname.submit_button")))))},o.onsubmit=function(t){var e=this;t.preventDefault(),this.nickname()!==r.a.session.user.displayName()?(this.loading=!0,r.a.session.user.save({nickname:this.nickname()},{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch((function(){e.loading=!1,m.redraw()}))):this.hide()},a}(n.n(_).a);r.a.initializers.add("flarum/nicknames",(function(){h.a.prototype.canEditOwnNickname=k.a.attribute("canEditOwnNickname"),Object(o.extend)(d.a.prototype,"accountItems",(function(t){"nickname"===r.a.forum.attribute("displayNameDriver")&&this.user.canEditOwnNickname()&&t.add("changeNickname",m(c.a,{className:"Button",onclick:function(){return r.a.modal.show(j)}},r.a.translator.trans("flarum-nicknames.forum.settings.change_nickname_button")))})),Object(o.extend)(u.a.prototype,"oninit",(function(){"nickname"===r.a.forum.attribute("displayNameDriver")&&(this.nickname=x()(this.attrs.user.displayName()))})),Object(o.extend)(u.a.prototype,"fields",(function(t){"nickname"===r.a.forum.attribute("displayNameDriver")&&t.add("nickname",m("div",{className:"Form-group"},m("label",null,r.a.translator.trans("flarum-nicknames.forum.edit_user.nicknames_heading")),m("input",{className:"FormControl",placeholder:v()(r.a.translator.trans("flarum-nicknames.forum.edit_user.nicknames_text")),bidi:this.nickname})),100)})),Object(o.extend)(u.a.prototype,"data",(function(t){if("nickname"===r.a.forum.attribute("displayNameDriver")){this.attrs.user;this.nickname()!==this.attrs.user.displayName()&&(t.nickname=this.nickname())}})),Object(o.extend)(p.a.prototype,"oninit",(function(){"nickname"===r.a.forum.attribute("displayNameDriver")&&(this.nickname=x()(this.attrs.username||""))})),Object(o.extend)(p.a.prototype,"onready",(function(){"nickname"===r.a.forum.attribute("displayNameDriver")&&r.a.forum.attribute("setNicknameOnRegistration")&&r.a.forum.attribute("randomizeUsernameOnRegistration")&&this.$("[name=nickname]").select()})),Object(o.extend)(p.a.prototype,"fields",(function(t){"nickname"===r.a.forum.attribute("displayNameDriver")&&r.a.forum.attribute("setNicknameOnRegistration")&&(t.add("nickname",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"nickname",type:"text",placeholder:v()(r.a.translator.trans("flarum-nicknames.forum.sign_up.nickname_placeholder")),bidi:this.nickname,disabled:this.loading||this.isProvided("nickname"),required:r.a.forum.attribute("randomizeUsernameOnRegistration")})),25),r.a.forum.attribute("randomizeUsernameOnRegistration")&&t.remove("username"))})),Object(o.extend)(p.a.prototype,"submitData",(function(t){if("nickname"===r.a.forum.attribute("displayNameDriver")&&r.a.forum.attribute("setNicknameOnRegistration")&&(t.nickname=this.nickname(),r.a.forum.attribute("randomizeUsernameOnRegistration"))){var e=new Uint32Array(2);crypto.getRandomValues(e),t.username=e.join("")}}))}))}]);
//# sourceMappingURL=forum.js.map