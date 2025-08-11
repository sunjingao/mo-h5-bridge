import{i as h,B as r,C as d}from"./main-DZxBhGij.js";import{d as m,r as j,o as l,c,b as s,e as n,w as t,u as _,a}from"./index-DOiZW0lW.js";/* empty css                                                            */const g=m({__name:"index.md.Virtual6b39553a",setup(o){h();async function e(){r.postMessage({type:"changeCommonData",data:{aa:111}})}return(p,E)=>{const i=j("m-button");return l(),c("div",null,[s(" 在console中查看 "),n(i,{onClick:e},{default:t(()=>[s("检验")]),_:1})])}}}),u={class:"marked-body"},C=a("h2",{id:"postmessage"},"postMessage",-1),A=a("p",null,"向小程序发送消息",-1),B=a("h3",{id:"使用说明"},"使用说明",-1),f=a("ul",null,[a("li",null,"以微信小程序的api为准")],-1),k=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    在console中查看
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleCheck"'),s(">")]),s("检验"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { initBridge, "),a("span",{class:"hljs-title class_"},"Bridge"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@/main'"),s(`

`),a("span",{class:"hljs-title function_"},"initBridge"),s(`()

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleCheck"),s("("),a("span",{class:"hljs-params"}),s(`) {
  `),a("span",{class:"hljs-title class_"},"Bridge"),s("."),a("span",{class:"hljs-title function_"},"postMessage"),s(`({
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'changeCommonData'"),s(`,
    `),a("span",{class:"hljs-attr"},"data"),s(": { "),a("span",{class:"hljs-attr"},"aa"),s(": "),a("span",{class:"hljs-number"},"111"),s(` }
  });
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),v={__name:"index",setup(o){return(e,p)=>(l(),c("div",u,[C,A,B,f,n(_(d),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%20%E5%9C%A8console%E4%B8%AD%E6%9F%A5%E7%9C%8B%0A%20%20%20%20%3Cm-button%20%40click%3D%22handleCheck%22%3E%E6%A3%80%E9%AA%8C%3C%2Fm-button%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20initBridge%2C%20Bridge%20%7D%20from%20'%40%2Fmain'%0A%0AinitBridge()%0A%0Aasync%20function%20handleCheck()%20%7B%0A%20%20Bridge.postMessage(%7B%0A%20%20%20%20type%3A%20'changeCommonData'%2C%0A%20%20%20%20data%3A%20%7B%20aa%3A%20111%20%7D%0A%20%20%7D)%3B%0A%7D%0A%3C%2Fscript%3E"},{code:t(()=>[k]),default:t(()=>[n(g)]),_:1})]))}};export{v as default};
