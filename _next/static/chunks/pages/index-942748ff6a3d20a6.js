(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1500:function(t,e,i){"use strict";i.d(e,{_:function(){return a}});var r=i(9521);i(7294);var o=i(5893),n={blue:{"--tw-bg-opacity":"1",backgroundColor:"rgb(211 229 239 / var(--tw-bg-opacity))"},rosy:{"--tw-bg-opacity":"1",backgroundColor:"rgb(255 226 221 / var(--tw-bg-opacity))"},violet:{"--tw-bg-opacity":"1",backgroundColor:"rgb(234 220 241 / var(--tw-bg-opacity))"},green:{"--tw-bg-opacity":"1",backgroundColor:"rgb(219 244 219 / var(--tw-bg-opacity))"},yellow:{"--tw-bg-opacity":"1",backgroundColor:"rgb(253 236 200 / var(--tw-bg-opacity))"}},a=function(t){var e=t.txt,i=t.color;return(0,o.jsx)(s,{$_css:[{marginRight:"0.5rem",borderRadius:"1rem",paddingLeft:"6px",paddingRight:"6px",paddingTop:"2px",paddingBottom:"2px",fontSize:"0.875rem",lineHeight:"1.25rem"},n[i]],children:e})},s=(0,r.ZP)("span").withConfig({displayName:"Label___StyledSpan",componentId:"sc-ns40ri-0"})(["",""],function(t){return t.$_css})},8783:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return tj}});var r=i(2640),o=i(9844),n=i(7294),a=i(9521),s=i(8193),d=i(5893),c=["HOME","ABOUT","PROJECTS","TOY-PROJECTS"],l=function(t){var e=t.navNumber,i=(0,n.useState)(!1),r=i[0],o=i[1],a=function(){o(window.scrollY>20)};(0,n.useEffect)(function(){return window.addEventListener("scroll",a),o(window.scrollY>20),function(){window.removeEventListener("scroll",a)}},[]);var l=function(t){t.preventDefault();var e=t.target.hash,i=document.querySelector(e);null==i||i.scrollIntoView({behavior:"smooth"})};return(0,d.jsx)(g,{className:"".concat(r?"scoll":""),children:(0,d.jsxs)(h,{children:[(0,d.jsx)("ul",{className:"menu",children:c.map(function(t,i){return(0,d.jsxs)(m,{isNow:+e==+(i+1),children:[(0,d.jsx)("a",{href:"#".concat(t),onClick:l,children:t.includes("-")?t.replace("-"," "):t}),(0,d.jsx)("p",{className:"selectedLine"})]},i)})}),(0,d.jsxs)("ul",{className:"menu",children:[(0,d.jsx)(m,{children:(0,d.jsx)("a",{href:"https://velog.io/@jhplus13/series",target:"_black",children:(0,d.jsx)("span",{children:"blog"})})}),(0,d.jsx)(m,{children:(0,d.jsx)("a",{href:"https://github.com/jihyun-jeon",target:"_black",children:(0,d.jsx)(s.RrF,{size:"32"})})})]})]})})},p=a.ZP.nav.withConfig({displayName:"Nav__Navigation",componentId:"sc-15rcmji-0"})(["&.scoll{box-shadow:1px 2px 18px rgba(0,0,0,0.2);}.menu{","}"],{display:"flex",height:"8vh",alignContent:"space-between",alignItems:"center"}),g=(0,a.ZP)(p).withConfig({displayName:"Nav___StyledNavigation",componentId:"sc-15rcmji-1"})({position:"fixed",zIndex:"10",width:"100%","--tw-bg-opacity":"1",backgroundColor:"rgb(249 242 237 / var(--tw-bg-opacity))"}),m=a.ZP.li.withConfig({displayName:"Nav__MenuList",componentId:"sc-15rcmji-2"})([""," &:first-of-type{","}&:last-of-type{","}.selectedLine{height:5px;background-color:",";}"],{margin:"1.25rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700"},{marginLeft:"0px"},{marginRight:"0px"},function(t){return t.isNow?"#4d559f":""}),h=(0,a.ZP)("div").withConfig({displayName:"Nav___StyledDiv",componentId:"sc-15rcmji-3"})({marginLeft:"auto",marginRight:"auto",display:"flex",maxWidth:"72rem",justifyContent:"space-between","--tw-bg-opacity":"1",backgroundColor:"rgb(249 242 237 / var(--tw-bg-opacity))",paddingLeft:"1.25rem",paddingRight:"1.25rem"}),w=function(){var t=(0,n.useState)(!1),e=t[0],i=t[1],o=(0,n.useRef)(null);return(0,n.useEffect)(function(){var t=new IntersectionObserver(function(t,e){i((0,r.Z)(t,1)[0].isIntersecting)},{threshold:.1});return o.current&&t.observe(o.current),function(){return t.disconnect()}},[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{children:"About Me"}),(0,d.jsxs)(_,{ref:o,children:[(0,d.jsx)(y,{className:e?"show":""}),(0,d.jsxs)(j,{className:e?"show":"",children:[(0,d.jsxs)("h1",{children:["저는 ",(0,d.jsx)("span",{children:"기본기가 탄탄한"})," 프론트엔드 개발자",(0,d.jsx)("span",{children:"전지현"}),"입니다"]}),(0,d.jsxs)("p",{children:["저는 ",(0,d.jsx)("span",{children:"차분하고 꼼꼼한"})," 성격을 지니고 있어 준비성이 좋다는 말을 듣곤 합니다. ",(0,d.jsx)("br",{})," 또한 저에게 주어진 모든 상황이 저에게 기회라고 생각하기 때문에 ",(0,d.jsx)("br",{})," 모든 일에 능동적으로 임하곤 합니다."]}),(0,d.jsxs)("p",{children:["이전엔 세무회계 직종에서 일하며 전산화가 될 수록 업무가 수월해지는 것을 보고",(0,d.jsx)("br",{})," 복잡한 일을 단순하게 만들 수 있다는 것에 흥미를 느껴 코딩을 시작하게 되었습니다."]}),(0,d.jsxs)("p",{children:["개발자로서 목표는 기본기가 탄탄하여 빠르게 변화하는 추세에도",(0,d.jsx)("br",{})," 그",(0,d.jsx)("span",{children:"트렌드를 따라갈 수 있는 개발자"}),"가 되는 것과",(0,d.jsx)("br",{}),"개발로 문제를 해결하여 ",(0,d.jsx)("span",{children:"사람들의 삶을 윤택하게 하는 것"}),"입니다."]}),(0,d.jsxs)("div",{className:"tmi",children:["TMI : ",(0,d.jsx)("u",{children:"#캠핑"})," ",(0,d.jsx)("u",{children:"#서핑"})," ",(0,d.jsx)("u",{children:"#등산"}),(0,d.jsx)("u",{children:"#ISFJ"}),(0,d.jsx)("u",{children:"#자바스크립트 챔피언이 되는 그날까지"})]})]})]})]})},x=a.ZP.div.withConfig({displayName:"About__MyImg",componentId:"sc-ylngy-0"})([""," background-image:url(","/imgs/jihyunImg.png);&.show{","}"],{width:"33.333333%","--tw-translate-x":"-8rem",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",opacity:"0",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",transitionDelay:"300ms"},"/portfolio",{"--tw-translate-x":"0px",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",opacity:"1"}),y=(0,a.ZP)(x).withConfig({displayName:"About___StyledMyImg",componentId:"sc-ylngy-1"})({backgroundSize:"contain",backgroundPosition:"center top -4rem",backgroundRepeat:"no-repeat"}),j=a.ZP.div.withConfig({displayName:"About__AboutText",componentId:"sc-ylngy-2"})([""," &.show{","}h1{","}p{","}span{","}.tmi{"," u{","}}"],{width:"66.666667%","--tw-translate-x":"13rem",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",paddingLeft:"3rem",paddingRight:"3rem",opacity:"0",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",transitionDelay:"500ms"},{"--tw-translate-x":"0px",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",opacity:"1"},{marginBottom:"3.5rem",fontSize:"1.5rem",lineHeight:"2rem"},{marginBottom:"2.5rem",fontSize:"1.125rem",lineHeight:"1.75rem"},{paddingLeft:"0.25rem",paddingRight:"0.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(222 94 60 / var(--tw-text-opacity))"},{paddingTop:"2.5rem"},{marginRight:"0.5rem",borderRadius:"0.5rem"}),f=(0,a.ZP)("h1").withConfig({displayName:"About___StyledH",componentId:"sc-ylngy-3"})({marginBottom:"5rem",display:"flex",justifyContent:"center",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),_=(0,a.ZP)("div").withConfig({displayName:"About___StyledDiv",componentId:"sc-ylngy-4"})({display:"flex"}),v=i(1163),u=i(1500),b=i(5675),P=i.n(b),C=function(){var t=(0,v.useRouter)(),e=function(e){var i=e.currentTarget.dataset.value;i&&t.push(i)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N,{children:"Projects"}),(0,d.jsxs)(k,{children:[(0,d.jsxs)(S,{"data-value":"mars",onClick:e,children:[(0,d.jsx)(I,{children:(0,d.jsx)(P(),{src:"".concat("/portfolio","/imgs/musmaBg.png"),alt:"mars이미지",width:430,height:300})}),(0,d.jsxs)(T,{children:[(0,d.jsx)(Z,{children:"MARS"}),(0,d.jsxs)("p",{children:[(0,d.jsx)(u._,{txt:"React.js",color:"blue"}),(0,d.jsx)(u._,{txt:"Typescript",color:"green"}),(0,d.jsx)(u._,{txt:"MobX",color:"rosy"}),(0,d.jsx)(u._,{txt:"Tailwind",color:"violet"}),(0,d.jsx)(u._,{txt:"Javascript",color:"yellow"})]}),(0,d.jsxs)(D,{children:["(주)무스마에서 입턴십을 하며 진행한 프로젝트.",(0,d.jsx)("br",{})," 실서비스의 가치를 이해하고 그 가치를 코드로 구현했습니다."]})]})]}),(0,d.jsxs)(S,{"data-value":"account",onClick:e,children:[(0,d.jsx)(R,{children:(0,d.jsx)(P(),{src:"".concat("/portfolio","/imgs/accountBg.png"),alt:"accountApp",width:430,height:300})}),(0,d.jsxs)(B,{children:[(0,d.jsx)(z,{children:"Account Manage App"}),(0,d.jsxs)("p",{children:[(0,d.jsx)(u._,{txt:"React.js",color:"blue"}),(0,d.jsx)(u._,{txt:"Redux-toolkit",color:"rosy"}),(0,d.jsx)(u._,{txt:"Axios",color:"yellow"}),(0,d.jsx)(u._,{txt:"Tailwind",color:"violet"}),(0,d.jsx)(u._,{txt:"Antd",color:"violet"})]}),(0,d.jsxs)(L,{children:["원티드 프리온보딩 프로그램에 참여하여 진행한 프로젝트.",(0,d.jsx)("br",{})," 동료들과 best practice를 찾아가며 진행하였습니다."]})]})]}),(0,d.jsxs)(S,{"data-value":"airbnb",onClick:e,children:[(0,d.jsx)(E,{children:(0,d.jsx)(P(),{src:"".concat("/portfolio","/imgs/airbnbBg.png"),alt:"airbnb",width:430,height:300})}),(0,d.jsxs)(H,{children:[(0,d.jsx)(q,{children:"Tamna BnB"}),(0,d.jsxs)("p",{children:[(0,d.jsx)(u._,{txt:"React.js",color:"blue"}),(0,d.jsx)(u._,{txt:"Styled-component",color:"violet"}),(0,d.jsx)(u._,{txt:"HTML",color:"yellow"})]}),(0,d.jsx)(A,{children:"제주지역 숙소 예약 및 검색 사이트 입니다."})]})]}),(0,d.jsxs)(S,{"data-value":"threppa",onClick:e,children:[(0,d.jsx)(X,{children:(0,d.jsx)(P(),{src:"".concat("/portfolio","/imgs/threppaBg.png"),alt:"threppa",width:430,height:300})}),(0,d.jsxs)(Y,{children:[(0,d.jsx)(W,{children:"Threppa \xa0(신발 온라인 쇼핑몰)"}),(0,d.jsxs)("p",{children:[(0,d.jsx)(u._,{txt:"React.js",color:"blue"}),(0,d.jsx)(u._,{txt:"SCSS",color:"violet"}),(0,d.jsx)(u._,{txt:"HTML",color:"yellow"})]}),(0,d.jsx)(M,{children:"신발 이커머스 사이트 입니다."})]})]})]})]})},S=a.ZP.div.withConfig({displayName:"Projects__Card",componentId:"sc-17i8w6z-0"})([""," &:hover{"," img{","}}img{","}"],{display:"grid",height:"21rem",gridTemplateRows:"60% 40%",borderRadius:"0.375rem",borderWidth:"2px",borderStyle:"solid","--tw-border-opacity":"1",borderColor:"rgb(229 229 229 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))"},{cursor:"pointer"},{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},{transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",transitionDuration:"300ms"}),N=(0,a.ZP)("h1").withConfig({displayName:"Projects___StyledH",componentId:"sc-17i8w6z-1"})({display:"flex",justifyContent:"center",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),k=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv",componentId:"sc-17i8w6z-2"})({marginTop:"2.5rem",marginBottom:"2.5rem",display:"grid",gridTemplateColumns:"1fr minmax(350px, 1fr)",gap:"2rem",paddingLeft:"9rem",paddingRight:"9rem"}),I=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv2",componentId:"sc-17i8w6z-3"})({height:"100%",overflow:"hidden"}),T=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv3",componentId:"sc-17i8w6z-4"})({paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),Z=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP",componentId:"sc-17i8w6z-5"})({paddingBottom:"0.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),D=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP2",componentId:"sc-17i8w6z-6"})({paddingTop:"1rem",lineHeight:"1.7rem"}),R=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv4",componentId:"sc-17i8w6z-7"})({height:"100%",overflow:"hidden"}),B=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv5",componentId:"sc-17i8w6z-8"})({paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),z=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP3",componentId:"sc-17i8w6z-9"})({paddingBottom:"0.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),L=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP4",componentId:"sc-17i8w6z-10"})({paddingTop:"1rem",lineHeight:"1.7rem"}),E=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv6",componentId:"sc-17i8w6z-11"})({height:"100%",overflow:"hidden"}),H=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv7",componentId:"sc-17i8w6z-12"})({paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),q=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP5",componentId:"sc-17i8w6z-13"})({paddingBottom:"0.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),A=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP6",componentId:"sc-17i8w6z-14"})({paddingTop:"1rem",lineHeight:"1.7rem"}),X=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv8",componentId:"sc-17i8w6z-15"})({height:"100%",overflow:"hidden"}),Y=(0,a.ZP)("div").withConfig({displayName:"Projects___StyledDiv9",componentId:"sc-17i8w6z-16"})({paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),W=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP7",componentId:"sc-17i8w6z-17"})({paddingBottom:"0.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),M=(0,a.ZP)("p").withConfig({displayName:"Projects___StyledP8",componentId:"sc-17i8w6z-18"})({paddingTop:"1rem",lineHeight:"1.7rem"}),O=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(U,{children:"Toy Projects"}),(0,d.jsxs)(V,{children:[(0,d.jsxs)(F,{children:[(0,d.jsx)($,{children:(0,d.jsx)(P(),{src:"".concat("/portfolio","/imgs/portfolio.png"),alt:"포트폴리오사이트",width:430,height:300})}),(0,d.jsxs)(G,{children:[(0,d.jsxs)(K,{children:[(0,d.jsx)(Q,{children:"포트폴리오 사이트"}),(0,d.jsxs)(tt,{children:[(0,d.jsx)(J,{children:(0,d.jsx)("a",{href:"https://github.com/jihyun-jeon/portfolio",target:"_blank",rel:"noreferrer",children:"\uD83D\uDCCD git"})}),(0,d.jsx)(J,{children:(0,d.jsx)("a",{href:"https://velog.io/@jhplus13/series/TIL",target:"_blank",rel:"noreferrer",children:"\uD83D\uDCCD 개발노트"})})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(u._,{txt:"NextJS",color:"rosy"}),(0,d.jsx)(u._,{txt:"React.js",color:"blue"}),(0,d.jsx)(u._,{txt:"Typescript",color:"green"}),(0,d.jsx)(u._,{txt:"Styled-component",color:"violet"})]}),(0,d.jsxs)(te,{children:["현재 포트폴리오 사이트 입니다.",(0,d.jsx)("br",{}),"React로 작업 후 NextJS로 마이그래이션 하였습니다."]})]})]}),(0,d.jsxs)(F,{children:[(0,d.jsx)(ti,{children:(0,d.jsx)("a",{href:"https://jihyun-jeon.github.io/instargram/",target:"_blank",rel:"noreferrer",children:(0,d.jsx)(P(),{src:"".concat("/portfolio","/imgs/instargramBg.gif"),alt:"인스타그램사진",width:430,height:300})})}),(0,d.jsxs)(tr,{children:[(0,d.jsxs)(to,{children:[(0,d.jsx)(tn,{children:" Instargram"}),(0,d.jsxs)(ta,{children:[(0,d.jsx)(J,{children:(0,d.jsx)("a",{href:"https://github.com/jihyun-jeon/instargram",target:"_blank",rel:"noreferrer",children:"\uD83D\uDCCD git"})}),(0,d.jsx)(J,{children:(0,d.jsx)("a",{href:"https://velog.io/@jhplus13/%EC%9C%84%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EA%B0%9C%EB%B0%9C%EB%85%B8%EB%93%9CReact",target:"_blank",rel:"noreferrer",children:"\uD83D\uDCCD 개발노트"})})]})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)(u._,{txt:"React.js",color:"blue"}),(0,d.jsx)(u._,{txt:"SCSS",color:"violet"}),(0,d.jsx)(u._,{txt:"HTML",color:"yellow"})]}),(0,d.jsx)(ts,{children:"마크업과 React 실력 향상을 위한 토이프로젝트 입니다."})]})]})]})]})},F=a.ZP.div.withConfig({displayName:"ToyProjects__Card",componentId:"sc-7gq314-0"})([""," &:hover{"," img{","}}img{","}"],{display:"grid",height:"22rem",gridTemplateRows:"60% 40%",borderRadius:"0.375rem",borderWidth:"2px",borderStyle:"solid","--tw-border-opacity":"1",borderColor:"rgb(229 229 229 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))"},{cursor:"pointer"},{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},{transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",transitionDuration:"300ms"}),J=a.ZP.span.withConfig({displayName:"ToyProjects__ToyLabel",componentId:"sc-7gq314-1"})(["",""],{display:"flex",justifyContent:"center",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}),U=(0,a.ZP)("h1").withConfig({displayName:"ToyProjects___StyledH",componentId:"sc-7gq314-2"})({display:"flex",justifyContent:"center",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),V=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv",componentId:"sc-7gq314-3"})({marginTop:"2.5rem",marginBottom:"2.5rem",display:"grid",gridTemplateColumns:"1fr minmax(350px, 1fr)",gap:"2rem",paddingLeft:"9rem",paddingRight:"9rem"}),$=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv2",componentId:"sc-7gq314-4"})({height:"100%",overflow:"hidden"}),G=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv3",componentId:"sc-7gq314-5"})({paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.75rem",paddingRight:"0.75rem"}),K=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv4",componentId:"sc-7gq314-6"})({display:"flex",justifyContent:"space-between",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontWeight:"700"}),Q=(0,a.ZP)("span").withConfig({displayName:"ToyProjects___StyledSpan",componentId:"sc-7gq314-7"})({"--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),tt=(0,a.ZP)("li").withConfig({displayName:"ToyProjects___StyledLi",componentId:"sc-7gq314-8"})({display:"flex"}),te=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv5",componentId:"sc-7gq314-9"})({paddingTop:"0.75rem"}),ti=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv6",componentId:"sc-7gq314-10"})({height:"100%",overflow:"hidden"}),tr=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv7",componentId:"sc-7gq314-11"})({paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.75rem",paddingRight:"0.75rem"}),to=(0,a.ZP)("div").withConfig({displayName:"ToyProjects___StyledDiv8",componentId:"sc-7gq314-12"})({display:"flex",justifyContent:"space-between",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontWeight:"700"}),tn=(0,a.ZP)("span").withConfig({displayName:"ToyProjects___StyledSpan2",componentId:"sc-7gq314-13"})({"--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"}),ta=(0,a.ZP)("li").withConfig({displayName:"ToyProjects___StyledLi2",componentId:"sc-7gq314-14"})({display:"flex"}),ts=(0,a.ZP)("p").withConfig({displayName:"ToyProjects___StyledP",componentId:"sc-7gq314-15"})({paddingTop:"0.75rem"}),td=i(5029),tc=i(1714),tl=i(7854),tp=function(){var t=(0,tc.S)().progress;return(0,d.jsx)(tl.V,{center:!0,children:(0,d.jsx)(tg,{children:(0,d.jsx)(tm,{style:{width:"".concat(t,"%")}})})})},tg=(0,a.ZP)("div").withConfig({displayName:"Loader___StyledDiv",componentId:"sc-1pkquif-0"})({height:"0.5rem",width:"5rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(0 0 0 / var(--tw-border-opacity))",backgroundColor:"transparent"}),tm=(0,a.ZP)("div").withConfig({displayName:"Loader___StyledDiv2",componentId:"sc-1pkquif-1"})({height:"100%","--tw-bg-opacity":"1",backgroundColor:"rgb(222 94 60 / var(--tw-bg-opacity))"}),th=(0,n.lazy)(function(){return Promise.all([i.e(36),i.e(682)]).then(i.bind(i,3682))}),tw=function(){return(0,d.jsx)(tx,{children:(0,d.jsx)(td.Xz,{shadows:!0,gl:{antialias:!0,preserveDrawingBuffer:!0},camera:{fov:28,zoom:3,position:[0,1,2]},children:(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)(tp,{}),children:(0,d.jsx)(th,{})})})})},tx=(0,a.ZP)("div").withConfig({displayName:"Scene___StyledDiv",componentId:"sc-1apkpnt-0"})({height:"50vh",width:"100%",paddingTop:"10vh"}),ty=function(t,e){var i=(0,n.useRef)(null),r={};return(0,n.useEffect)(function(){var o=new IntersectionObserver(function(i){i[0].isIntersecting&&t(e)},r);return i.current&&o.observe(i.current),function(){return o.disconnect()}},[]),[i]},tj=function(){var t=(0,n.useState)(1),e=t[0],i=t[1],a=ty(i,1),s=(0,r.Z)(a,1)[0],c=ty(i,2),p=(0,r.Z)(c,1)[0],g=ty(i,3),m=(0,r.Z)(g,1)[0],h=ty(i,4),x=(0,r.Z)(h,1)[0];return console.log("ddd"),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(tf,{id:"HOME",children:[(0,d.jsx)(l,{navNumber:e}),(0,d.jsx)("section",{children:(0,d.jsx)(tw,{})}),(0,d.jsx)(tb,{children:(0,d.jsx)(tP,{children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:["안녕하세요!",(0,d.jsx)("br",{})," 프론트엔드 개발자",(0,d.jsx)(tC,{children:"전지현"}),"입니다. \uD83C\uDF89"]}),(0,d.jsx)(tS,{children:(0,d.jsx)(o.e,{sequence:["기본기가 탄탄해요 \uD83D\uDCAA",1e3,"꼼꼼해요 \uD83E\uDDD0",1e3,"능동적이에요 \uD83C\uDFC3",1e3],wrapper:"span",repeat:1/0,cursor:!0})})]})})}),(0,d.jsx)(tN,{ref:s})]}),(0,d.jsxs)(tk,{children:[(0,d.jsxs)(tu,{id:"ABOUT",children:[(0,d.jsx)(w,{}),(0,d.jsx)("div",{ref:p})]}),(0,d.jsxs)(tv,{id:"PROJECTS",children:[(0,d.jsx)(C,{}),(0,d.jsx)("div",{ref:m})]}),(0,d.jsxs)(t_,{id:"TOY-PROJECTS",children:[(0,d.jsx)(O,{}),(0,d.jsx)("div",{ref:x})]})]})]})},tf=a.ZP.section.withConfig({displayName:"pages__Page",componentId:"sc-1amsw5k-0"})(["",""],{height:"100vh"}),t_=(0,a.ZP)(tf).withConfig({displayName:"pages___StyledPage3",componentId:"sc-1amsw5k-1"})({display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingTop:"10vh"}),tv=(0,a.ZP)(tf).withConfig({displayName:"pages___StyledPage2",componentId:"sc-1amsw5k-2"})({display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:"10vh"}),tu=(0,a.ZP)(tf).withConfig({displayName:"pages___StyledPage",componentId:"sc-1amsw5k-3"})({display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:"10vh"}),tb=(0,a.ZP)("section").withConfig({displayName:"pages___StyledSection",componentId:"sc-1amsw5k-4"})({marginLeft:"auto",marginRight:"auto",display:"flex",height:"40%",maxWidth:"72rem",alignItems:"center"}),tP=(0,a.ZP)("h1").withConfig({displayName:"pages___StyledH",componentId:"sc-1amsw5k-5"})({fontSize:"3.75rem",lineHeight:"1.625",fontWeight:"700"}),tC=(0,a.ZP)("span").withConfig({displayName:"pages___StyledSpan",componentId:"sc-1amsw5k-6"})({paddingLeft:"0.75rem",paddingRight:"0.75rem","--tw-text-opacity":"1",color:"rgb(251 146 60 / var(--tw-text-opacity))"}),tS=(0,a.ZP)("div").withConfig({displayName:"pages___StyledDiv",componentId:"sc-1amsw5k-7"})({"--tw-text-opacity":"1",color:"rgb(251 146 60 / var(--tw-text-opacity))"}),tN=(0,a.ZP)("div").withConfig({displayName:"pages___StyledDiv2",componentId:"sc-1amsw5k-8"})({paddingTop:"1.25rem"}),tk=(0,a.ZP)("main").withConfig({displayName:"pages___StyledMain",componentId:"sc-1amsw5k-9"})({marginLeft:"auto",marginRight:"auto",maxWidth:"72rem"})},8312:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8783)}])}},function(t){t.O(0,[737,617,892,915,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);