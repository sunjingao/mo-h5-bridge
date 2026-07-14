import{i as h,B as r,C as d}from"./main-z7OjBsw6.js";import{d as m,r as _,o as e,c,b as s,e as n,w as l,u as j,a}from"./index-CD1hsI54.js";/* empty css                                                            */const u=m({__name:"index.md.Virtual12b43ced",setup(i){h();async function t(){r.switchTab({url:"/pages/home/index"})}return(o,k)=>{const p=_("m-button");return e(),c("div",null,[s(" 在console中查看 "),n(p,{onClick:t},{default:l(()=>[s("检验")]),_:1})])}}}),g={class:"marked-body"},A=a("h2",{id:"switchtab"},"switchTab",-1),C=a("p",null,"跳转到tabBar中的某一页",-1),B=a("h3",{id:"使用说明"},"使用说明",-1),f=a("ul",null,[a("li",null,"以微信小程序的api为准")],-1),b=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    在console中查看
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleCheck"'),s(">")]),s("检验"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { initBridge, "),a("span",{class:"hljs-title class_"},"Bridge"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@/main'"),s(`

`),a("span",{class:"hljs-title function_"},"initBridge"),s(`()

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleCheck"),s("("),a("span",{class:"hljs-params"}),s(`) {
  `),a("span",{class:"hljs-title class_"},"Bridge"),s("."),a("span",{class:"hljs-title function_"},"switchTab"),s(`({
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"`/pages/home/index`"),s(`
  });
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),v={__name:"index",setup(i){return(t,o)=>(e(),c("div",g,[A,C,B,f,n(j(d),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%20%E5%9C%A8console%E4%B8%AD%E6%9F%A5%E7%9C%8B%0A%20%20%20%20%3Cm-button%20%40click%3D%22handleCheck%22%3E%E6%A3%80%E9%AA%8C%3C%2Fm-button%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20initBridge%2C%20Bridge%20%7D%20from%20'%40%2Fmain'%0A%0AinitBridge()%0A%0Aasync%20function%20handleCheck()%20%7B%0A%20%20Bridge.switchTab(%7B%0A%20%20%20%20url%3A%20%60%2Fpages%2Fhome%2Findex%60%0A%20%20%7D)%3B%0A%7D%0A%3C%2Fscript%3E"},{code:l(()=>[b]),default:l(()=>[n(u)]),_:1})]))}};export{v as default};
