import{i as r,B as h,C as d}from"./main-D8QW5WbL.js";import{d as m,r as g,o as t,c,b as s,e as n,w as e,u as _,a}from"./index-DdPEB-se.js";/* empty css                                                            */const j=m({__name:"index.md.Virtualf9e47842",setup(i){r();async function l(){h.navigateTo({url:"/pages/esign/index?aa=111"})}return(o,E)=>{const p=g("m-button");return t(),c("div",null,[s(" 在console中查看 "),n(p,{onClick:l},{default:e(()=>[s("检验")]),_:1})])}}}),u={class:"marked-body"},A=a("h2",{id:"navigateto"},"navigateTo",-1),C=a("p",null,"跳转到非tabBar中的某一页",-1),B=a("h3",{id:"使用说明"},"使用说明",-1),f=a("ul",null,[a("li",null,"以微信小程序的api为准")],-1),k=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    在console中查看
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleCheck"'),s(">")]),s("检验"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { initBridge, "),a("span",{class:"hljs-title class_"},"Bridge"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@/main'"),s(`

`),a("span",{class:"hljs-title function_"},"initBridge"),s(`()

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleCheck"),s("("),a("span",{class:"hljs-params"}),s(`) {
  `),a("span",{class:"hljs-title class_"},"Bridge"),s("."),a("span",{class:"hljs-title function_"},"navigateTo"),s(`({
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"`/pages/esign/index?aa=111`"),s(`
  });
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),b={__name:"index",setup(i){return(l,o)=>(t(),c("div",u,[A,C,B,f,n(_(d),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%20%E5%9C%A8console%E4%B8%AD%E6%9F%A5%E7%9C%8B%0A%20%20%20%20%3Cm-button%20%40click%3D%22handleCheck%22%3E%E6%A3%80%E9%AA%8C%3C%2Fm-button%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20initBridge%2C%20Bridge%20%7D%20from%20'%40%2Fmain'%0A%0AinitBridge()%0A%0Aasync%20function%20handleCheck()%20%7B%0A%20%20Bridge.navigateTo(%7B%0A%20%20%20%20url%3A%20%60%2Fpages%2Fesign%2Findex%3Faa%3D111%60%0A%20%20%7D)%3B%0A%7D%0A%3C%2Fscript%3E"},{code:e(()=>[k]),default:e(()=>[n(j)]),_:1})]))}};export{b as default};
