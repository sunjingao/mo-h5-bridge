import{i as r,B as h,C as d}from"./main-CDSvNpZU.js";import{d as m,r as u,o as c,c as o,b as s,e as n,w as l,u as j,a}from"./index-towIFY1s.js";/* empty css                                                            */const g=m({__name:"index.md.Virtual1d0a4c93",setup(i){r({requestUrl:"https://trip-sit-tc.mobje.cn/tsl/api/app/wx-auth/getWxAuthInfo"});async function e(){const t=await h.getLocation();console.log(t)}return(t,w)=>{const p=u("m-button");return c(),o("div",null,[s(" 在console中查看 "),n(p,{onClick:e},{default:l(()=>[s("检验")]),_:1})])}}}),_={class:"marked-body"},A=a("h2",{id:"getlocation"},"getLocation",-1),C=a("p",null,"获取当前位置信息",-1),f=a("h3",{id:"使用说明"},"使用说明",-1),B=a("ul",null,[a("li",null,"以微信小程序的api为准")],-1),k=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    在console中查看
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleCheck"'),s(">")]),s("检验"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { initBridge, "),a("span",{class:"hljs-title class_"},"Bridge"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@/main'"),s(`

`),a("span",{class:"hljs-title function_"},"initBridge"),s(`({
  `),a("span",{class:"hljs-attr"},"requestUrl"),s(": "),a("span",{class:"hljs-string"},"`https://trip-sit-tc.mobje.cn/tsl/api/app/wx-auth/getWxAuthInfo`"),s(`
});

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleCheck"),s("("),a("span",{class:"hljs-params"}),s(`) {
  `),a("span",{class:"hljs-keyword"},"const"),s(" location = "),a("span",{class:"hljs-keyword"},"await"),s(),a("span",{class:"hljs-title class_"},"Bridge"),s("."),a("span",{class:"hljs-title function_"},"getLocation"),s(`();
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(location)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),b={__name:"index",setup(i){return(e,t)=>(c(),o("div",_,[A,C,f,B,n(j(d),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%20%E5%9C%A8console%E4%B8%AD%E6%9F%A5%E7%9C%8B%0A%20%20%20%20%3Cm-button%20%40click%3D%22handleCheck%22%3E%E6%A3%80%E9%AA%8C%3C%2Fm-button%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20initBridge%2C%20Bridge%20%7D%20from%20'%40%2Fmain'%0A%0AinitBridge(%7B%0A%20%20requestUrl%3A%20%60https%3A%2F%2Ftrip-sit-tc.mobje.cn%2Ftsl%2Fapi%2Fapp%2Fwx-auth%2FgetWxAuthInfo%60%0A%7D)%3B%0A%0Aasync%20function%20handleCheck()%20%7B%0A%20%20const%20location%20%3D%20await%20Bridge.getLocation()%3B%0A%20%20console.log(location)%0A%7D%0A%3C%2Fscript%3E"},{code:l(()=>[k]),default:l(()=>[n(g)]),_:1})]))}};export{b as default};
