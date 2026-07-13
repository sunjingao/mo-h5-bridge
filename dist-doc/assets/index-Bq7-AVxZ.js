import{i as p,B as h,C as d}from"./main-BGElYHFq.js";import{d as m,r as j,o as t,c,b as s,e as n,w as e,u as _,a}from"./index-CJ5RkvpH.js";/* empty css                                                            */const g=m({__name:"index.md.Virtual1e0f4342",setup(o){p();async function l(){h.gotoOrderDetail({orderNo:"111",orderType:11,vehicleType:1})}return(r,k)=>{const i=j("m-button");return t(),c("div",null,[s(" 在console中查看 "),n(i,{onClick:l},{default:e(()=>[s("检验")]),_:1})])}}}),u={class:"marked-body"},A=a("h2",{id:"gotoorderdetail"},"gotoOrderDetail",-1),C=a("p",null,"进入订单详情页，库存页面，点击订单进入详情页",-1),B=a("h3",{id:"使用说明"},"使用说明",-1),f=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    在console中查看
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleCheck"'),s(">")]),s("检验"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { initBridge, "),a("span",{class:"hljs-title class_"},"Bridge"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@/main'"),s(`

`),a("span",{class:"hljs-title function_"},"initBridge"),s(`()

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleCheck"),s("("),a("span",{class:"hljs-params"}),s(`) {
  `),a("span",{class:"hljs-title class_"},"Bridge"),s("."),a("span",{class:"hljs-title function_"},"gotoOrderDetail"),s(`({
    `),a("span",{class:"hljs-attr"},"orderNo"),s(": "),a("span",{class:"hljs-string"},"'111'"),s(`,
    `),a("span",{class:"hljs-attr"},"orderType"),s(": "),a("span",{class:"hljs-number"},"11"),s(`,
    `),a("span",{class:"hljs-attr"},"vehicleType"),s(": "),a("span",{class:"hljs-number"},"1"),s(`
  });
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),b={__name:"index",setup(o){return(l,r)=>(t(),c("div",u,[A,C,B,n(_(d),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%20%E5%9C%A8console%E4%B8%AD%E6%9F%A5%E7%9C%8B%0A%20%20%20%20%3Cm-button%20%40click%3D%22handleCheck%22%3E%E6%A3%80%E9%AA%8C%3C%2Fm-button%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20initBridge%2C%20Bridge%20%7D%20from%20'%40%2Fmain'%0A%0AinitBridge()%0A%0Aasync%20function%20handleCheck()%20%7B%0A%20%20Bridge.gotoOrderDetail(%7B%0A%20%20%20%20orderNo%3A%20'111'%2C%0A%20%20%20%20orderType%3A%2011%2C%0A%20%20%20%20vehicleType%3A%201%0A%20%20%7D)%3B%0A%7D%0A%3C%2Fscript%3E"},{code:e(()=>[f]),default:e(()=>[n(g)]),_:1})]))}};export{b as default};
