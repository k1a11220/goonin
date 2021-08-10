"use strict";(self.webpackChunkgoonin=self.webpackChunkgoonin||[]).push([[678],{7946:function(e,t,n){n.d(t,{Z:function(){return I}});var i=n(7294),o=n(9),r=o.ZP.section.withConfig({displayName:"modal-lg__Container",componentId:"sc-q5mgha-0"})(["position:fixed;display:",";z-index:99;"],(function(e){return e.display})),l=o.ZP.div.withConfig({displayName:"modal-lg__Background",componentId:"sc-q5mgha-1"})(["display:flex;align-items:center;position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.6);overflow-y:auto;overflow-x:hidden;"]),a=o.ZP.div.withConfig({displayName:"modal-lg__Wrapper",componentId:"sc-q5mgha-2"})(["max-height:95vh;display:flex;flex-direction:column;width:var(--modal-width);background-color:var(--card-color);margin:0 auto;border-radius:16px;justify-content:space-between;"]),c=o.ZP.img.withConfig({displayName:"modal-lg__Thumbnail",componentId:"sc-q5mgha-3"})(["width:100%;height:260px;border-radius:16px 16px 0 0;object-fit:cover;@media (max-width:","){height:220px;}"],(function(e){return e.theme.device.sm})),m=o.ZP.img.withConfig({displayName:"modal-lg__CloseBtn",componentId:"sc-q5mgha-4"})(["position:absolute;margin-top:24px;float:right;width:18px;margin-left:calc(var(--modal-width) - 18px - 24px);cursor:pointer;@media (max-width:","){margin-left:calc(var(--modal-width) - 18px - 24px);}"],(function(e){return e.theme.device.sm})),p=o.ZP.div.withConfig({displayName:"modal-lg__TextArea",componentId:"sc-q5mgha-5"})(["padding:40px 32px;overflow-y:scroll;@media (max-width:","){padding:32px 24px;}"],(function(e){return e.theme.device.sm})),d=o.ZP.div.withConfig({displayName:"modal-lg__Title",componentId:"sc-q5mgha-6"})(["display:flex;justify-content:space-between;border-bottom:1px solid var(--border);align-items:center;padding-bottom:16px;& h3{font-size:24px;}& p{font-weight:600;font-size:18px;color:var(--color-text-2);}@media (max-width:","){flex-direction:column;align-items:flex-start;& h3{margin-bottom:8px;}}"],(function(e){return e.theme.device.sm})),u=o.ZP.div.withConfig({displayName:"modal-lg__Contents",componentId:"sc-q5mgha-7"})(["margin-top:32px;& p{font-weight:500;color:var(--color-text-4);margin-bottom:8px;}& p:last-of-type{margin-bottom:0;}& h4{font-size:20px;margin-bottom:14px;color:var(--color-text);}"]),g=o.ZP.a.withConfig({displayName:"modal-lg__CTABtn",componentId:"sc-q5mgha-8"})(["display:flex;justify-content:center;align-items:center;width:100%;min-height:56px;font-size:16px;border:none;border-radius:0 0 16px 16px;background-color:var(--highlight-color);cursor:pointer;text-decoration:none;p{color:var(--color-text-1);font-weight:500;}"]),s=function(e){var t=e.title,n=e.price,o=e.detail,s=e.thumbnail,h=e.link,M=e.display,x=e.closeModal,E=["우대금리 조건"],f=[{refinedDetail:o.replace(E,"").split("<br/>"),refinedTitle:o.match(E)}];return i.createElement(r,{display:!0===M?"block":"none"},i.createElement(l,null,i.createElement(a,null,i.createElement(c,{src:s}),i.createElement(m,{onClick:x,src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xOC4wMDAyIDAuMDczMzI5OUMxNy44MjAyIDAuMTI2NjYzIDE2Ljg1MzYgMS4wNiAxMy44ODY5IDQuMDEzMzNDMTAuMzMzNiA3LjU2IDkuOTkzNTggNy44OCA5Ljg4NjkxIDcuNzkzMzNDOS44MjAyNSA3Ljc0IDguMTA2OTEgNi4wNCA2LjA3MzU4IDQuMDEzMzNDMi4xODAyNSAwLjExMzMyOSAyLjEyMDI1IDAuMDY2NjYxOCAxLjUyNjkyIDAuMDY2NjYxOEMwLjc4NjkxNSAwLjA2NjY2MTggMC4wNzM1ODE5IDAuNzczMzI5IDAuMDY2OTE1MiAxLjUwNjY2QzAuMDY2OTE1MiAyLjEyIDAuMTEzNTgyIDIuMTggNC4wMjAyNSA2LjA4NjY2QzYuMDQ2OTIgOC4xMDY2NiA3Ljc0MDI1IDkuODIgNy43OTM1OCA5Ljg4NjY2QzcuODgwMjUgOS45OTMzMyA3LjU1MzU4IDEwLjM0IDQuMDIwMjUgMTMuODg2N0MwLjQ0NjkxNSAxNy40NzMzIDAuMTQ2OTE1IDE3Ljc5MzMgMC4wNjY5MTUyIDE4LjA4Qy0wLjE4NjQxOCAxOS4wMjY3IDAuMzg2OTE1IDE5LjkxMzMgMS4zMDY5MiAxOS45ODY3QzIuMDQ2OTIgMjAuMDQ2NyAxLjkxMzU4IDIwLjE2IDYuMTI2OTEgMTUuOTUzM0M4LjIzMzU4IDEzLjg1MzMgOS45ODAyNSAxMi4xMzMzIDEwLjAxMzYgMTIuMTMzM0MxMC4wNDY5IDEyLjEzMzMgMTEuNzIwMiAxMy43OCAxMy43MzM2IDE1Ljc4NjdDMTUuOTkzNiAxOC4wNTMzIDE3LjQ4MDIgMTkuNDg2NyAxNy42MzM2IDE5LjU2QzE4LjEzMzYgMTkuOCAxOC44NDAyIDE5LjY4NjcgMTkuMjUzNiAxOS4zMDY3QzE5LjcxMzYgMTguODkzMyAxOS44MzM2IDE4LjAyNjcgMTkuNTA2OSAxNy41MzMzQzE5LjQxMzYgMTcuMzg2NyAxNy43MTM2IDE1LjY1MzMgMTUuNzMzNiAxMy42NzMzQzEzLjc1MzYgMTEuNjkzMyAxMi4xMzM2IDEwLjA0NjcgMTIuMTMzNiAxMC4wMTMzQzEyLjEzMzYgOS45OCAxMy44MDY5IDguMjczMzMgMTUuODUzNiA2LjIyNjY2QzE3LjkwMDIgNC4xNzMzMyAxOS42NjAyIDIuMzggMTkuNzczNiAyLjI0QzE5Ljk0NjkgMiAxOS45NjY5IDEuOTI2NjYgMTkuOTY2OSAxLjQ2NjY2QzE5Ljk2NjkgMS4wMTk5OSAxOS45NDAyIDAuOTE5OTk2IDE5Ljc4MDIgMC42Nzk5OTZDMTkuNTAwMiAwLjI1MzMyOCAxOS4xMzM2IDAuMDM5OTk1MiAxOC42NDAyIDAuMDE5OTk0N0MxOC40MjAyIDAuMDEzMzI4NiAxOC4xMjY5IDAuMDM5OTk1MiAxOC4wMDAyIDAuMDczMzI5OVoiIGZpbGw9IiM1QzVDNUMiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",alt:"closeBtn"}),i.createElement(p,null,i.createElement(d,null,i.createElement("h3",null,t),i.createElement("p",null,n)),i.createElement(u,null,f.map((function(e){return i.createElement(i.Fragment,null,i.createElement("h4",null,e.refinedTitle),e.refinedDetail.map((function(e){return i.createElement("p",null,e)})))})))),i.createElement(g,{target:"_blank",rel:"noopener",href:h},i.createElement("p",null,"확인하기")))))},h=o.ZP.a.withConfig({displayName:"smCard__Link",componentId:"sc-18xbr90-0"})(["text-decoration:none;&:nth-of-type(4n){margin:0;}"]),M=o.ZP.div.withConfig({displayName:"smCard__Container",componentId:"sc-18xbr90-1"})(["height:90px;background-color:var(--card-color-1);border-radius:8px;display:flex;align-items:center;transition:all 0.2s ease-in-out;&:nth-of-type(4n){margin-right:0;}&:hover{transform:scale(1.02);box-shadow:rgba(149,157,165,0.2) 0px 8px 24px;}"]),x=o.ZP.div.withConfig({displayName:"smCard__TextWrapper",componentId:"sc-18xbr90-2"})(["margin-left:16px;margin-right:20px;& h4{font-weight:500;}& p{font-size:14px;font-weight:600;color:var(--color-text-2);}"]),E=o.ZP.img.withConfig({displayName:"smCard__Icon",componentId:"sc-18xbr90-3"})(["width:40px;height:40px;border-radius:20px;background-color:var(--white);margin-left:20px;"]),f=function(e){var t=e.title,n=e.price,o=e.detail,r=e.thumbnail,l=e.icon,a=e.link,c=(0,i.useState)(!1),m=c[0],p=c[1];return i.createElement(i.Fragment,null,i.createElement(h,{style:{cursor:"pointer"},onClick:function(){p(!0),document.body.style.overflow="hidden"}},i.createElement(M,null,i.createElement(E,{src:l}),i.createElement(x,null,i.createElement("h4",null,t),i.createElement("p",null,n)))),i.createElement(s,{title:t,price:n,detail:o,thumbnail:r,link:a,display:m,closeModal:function(){p(!1),document.body.style.overflow="unset"}}))},b=o.ZP.div.withConfig({displayName:"smCardList__Container",componentId:"sc-axi2l8-0"})([""]),w=o.ZP.div.withConfig({displayName:"smCardList__Wrapper",componentId:"sc-axi2l8-1"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:16px;@media (max-width:","){grid-template-columns:1fr 1fr 1fr;}@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:","){grid-template-columns:1fr;}"],(function(e){return e.theme.device.lg}),(function(e){return e.theme.device.md}),(function(e){return e.theme.device.sm})),I=function(e){var t=e.CardList;return i.createElement(b,null,i.createElement(w,null,t.map((function(e){return i.createElement(i.Fragment,null,i.createElement(f,{title:e.title,price:e.price,detail:e.detail,thumbnail:e.thumbnail,icon:e.icon,link:e.link}))}))))}},9491:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var i=n(7294),o=n(4559),r=n(9),l=r.ZP.a.withConfig({displayName:"lgCard__Link",componentId:"sc-ftqcoq-0"})(["text-decoration:none;list-style:none;"]),a=r.ZP.div.withConfig({displayName:"lgCard__Container",componentId:"sc-ftqcoq-1"})(["width:320px;height:208px;background-color:var(--card-color-2);border:1px solid var(--border);border-radius:8px;transition:all 0.2s ease-in-out;&:hover{transform:scale(1.02);box-shadow:rgba(149,157,165,0.2) 0px 8px 24px;}"]),c=r.ZP.div.withConfig({displayName:"lgCard__Wrapper",componentId:"sc-ftqcoq-2"})(["display:flex;flex-direction:column;justify-content:space-between;height:calc(208px - 24px - 24px - 8px);padding:32px 24px 24px 24px;"]),m=r.ZP.div.withConfig({displayName:"lgCard__Title",componentId:"sc-ftqcoq-3"})(["display:flex;justify-content:space-between;& h3{font-size:18px;color:",";}"],(function(e){return e.color})),p=r.ZP.div.withConfig({displayName:"lgCard__ContentsWrapper",componentId:"sc-ftqcoq-4"})([""]),d=r.ZP.div.withConfig({displayName:"lgCard__Contents",componentId:"sc-ftqcoq-5"})(["display:flex;justify-content:space-between;margin-bottom:4px;font-weight:500;&:last-of-type{margin-bottom:0;}& p{font-size:14px;}& p:last-of-type{color:#3a9900;font-weight:700;}"]),u=function(e){var t=e.title,n=e.link,o=e.color,r=e.service_1,u=e.service_2,g=e.service_3,s=e.service_4,h=e.discount_1,M=e.discount_2,x=e.discount_3,E=e.discount_4;return i.createElement(a,null,i.createElement(l,{href:n,target:"_blank",rel:"noopener"},i.createElement(c,null,i.createElement(m,{color:o},i.createElement("h3",null,t),i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDMgMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zIDEuNUMzIDIuMzI4NDMgMi4zMjg0MyAzIDEuNSAzQzAuNjcxNTczIDMgMCAyLjMyODQzIDAgMS41QzAgMC42NzE1NzMgMC42NzE1NzMgMCAxLjUgMEMyLjMyODQzIDAgMyAwLjY3MTU3MyAzIDEuNVoiIGZpbGw9IiM1QzVDNUMiLz4KPHBhdGggZD0iTTMgNi41QzMgNy4zMjg0MyAyLjMyODQzIDggMS41IDhDMC42NzE1NzMgOCAwIDcuMzI4NDMgMCA2LjVDMCA1LjY3MTU3IDAuNjcxNTczIDUgMS41IDVDMi4zMjg0MyA1IDMgNS42NzE1NyAzIDYuNVoiIGZpbGw9IiM1QzVDNUMiLz4KPHBhdGggZD0iTTMgMTEuNUMzIDEyLjMyODQgMi4zMjg0MyAxMyAxLjUgMTNDMC42NzE1NzMgMTMgMCAxMi4zMjg0IDAgMTEuNUMwIDEwLjY3MTYgMC42NzE1NzMgMTAgMS41IDEwQzIuMzI4NDMgMTAgMyAxMC42NzE2IDMgMTEuNVoiIGZpbGw9IiM1QzVDNUMiLz4KPC9zdmc+Cg==",alt:"more"})),i.createElement(p,null,i.createElement(d,null,i.createElement("p",null,r),i.createElement("p",null,h)),i.createElement(d,null,i.createElement("p",null,u),i.createElement("p",null,M)),i.createElement(d,null,i.createElement("p",null,g),i.createElement("p",null,x)),i.createElement(d,null,i.createElement("p",null,s),i.createElement("p",null,E))))))},g=r.ZP.div.withConfig({displayName:"mdCard__Container",componentId:"sc-15337jg-0"})(["display:flex;flex-direction:column;align-items:flex-end;background-color:var(--card-color-1);border-radius:16px;transition:all 0.2s ease-in-out;"]),s=r.ZP.div.withConfig({displayName:"mdCard__Wrapper",componentId:"sc-15337jg-1"})(["width:calc(100% - 36px);padding:18px;& h3{font-size:18px;margin-bottom:4px;}& p{color:var(--color-text-2);font-weight:500;}"]),h=r.ZP.img.withConfig({displayName:"mdCard__Thumbnail",componentId:"sc-15337jg-2"})(["width:100%;background-color:var(--highlight-color);border-radius:16px 16px 0 0;"]),M=function(e){var t=e.title,n=e.value,o=e.icon;e.link;return i.createElement(g,null,i.createElement(h,{src:o}),i.createElement(s,null,i.createElement("h3",null,t),i.createElement("p",null,n)))},x=r.ZP.div.withConfig({displayName:"mdCardList__Container",componentId:"sc-1ouk4r2-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;gap:16px;@media (max-width:","){grid-template-columns:1fr 1fr 1fr 1fr 1fr;}@media (max-width:950px){grid-template-columns:1fr 1fr 1fr 1fr;}@media (max-width:710px){grid-template-columns:1fr 1fr 1fr;}@media (max-width:540px){grid-template-columns:1fr 1fr;}@media (max-width:350px){grid-template-columns:1fr;}"],(function(e){return e.theme.device.lg})),E=function(e){var t=e.CardList;return i.createElement(x,null,t.map((function(e){return i.createElement(M,{title:e.title,value:e.value,icon:e.icon,link:e.link})})))},f=[{title:"광주은행",price:"최대 5.20%",detail:"우대금리 조건 <br/> ▷ 최대 0.5%p 우대금리 적용 <br/> (1) (적금 가입일~만기 전전월말 말일)요구불예금 최근 3개월 평잔이 30만원 이상인 경우 : 0.10%p <br/> (2) (적금 가입일~만기 전전월말 말일)신용카드(또는 체크카드) 사용실적 100만원 이상인 경우 : 0.10%p <br/> (3)요구불예금에서 이 예금으로 적립액 자동이체 설정하여 5회 이상 입금된 경우 : 0.10%p <br/> (4)(적금 가입일~만기 전일)요구불계좌에서 전자금융을 이용한 당,타행 출금이체 거래실적 5회 이상인 경우 : 0.20%p",thumbnail:"https://i.imgur.com/A7ew0Hb.png",icon:"https://i.imgur.com/1SjkQIc.png",link:"https://www.kjbank.com/ib20/mnu/FPMDPTR030100",month_1:"4.00%",month_2:"4.50%",month_3:"5.20%"},{title:"NH농협은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ (적금 가입월~만기 전전월말) 은행에서 발급한 NH농협 개인신용·체크카드(채움) 월평균 10만원이상 이용실적 : 0.20%p <br/> ▷ (적금 가입월~만기 전전월말) 농협은행 주택청약종합저축(청년우대형 포함) 가입 및 5회이상 납입실적과 보유 시 : 0.30%p",thumbnail:"https://i.imgur.com/ZQjljPv.png",icon:"https://i.imgur.com/lDGHW0N.png",link:"https://smartmarket.nonghyup.com/servlet/SFSD0130R.view",month_1:"3.00%",month_2:"4.00%",month_3:"5.00%"},{title:"신한은행",detail:"우대금리 조건 <br/> ▷ 우대이자율: 최고 연 0.70% <br/> ① 주택청약 우대이자율(연 0.30%) <br/> ② 신한카드 우대이자율(연 0.20%) <br/> ③ 자동이체 우대이자율(연 0.20%)",thumbnail:"https://i.imgur.com/Z8kA8ZH.png",icon:"https://i.imgur.com/llOPDaz.png",price:"최대 5.00%",link:"https://bank.shinhan.com/index.jsp#020102010110",month_1:"4.00%",month_2:"4.50%",month_3:"5.00%"},{title:"우리은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ 아래 조건을 충족하는 경우 최대 0.5%p 우대금리 적용 <br/> (1) 우리은행 입출식 계좌에서 매월 자동이체를 통해 실적인정기간의 1/2 기간 이상 이 적금으로 적립한 경우 - 연 0.3%p <br/> (2) 실적인정기간 동안 우리카드(체크/신용) 결제계좌를 우리은행 입출식 계좌로 지정한 후, 매월 카드 결제실적 보유 - 연0.1%p <br/> (3) 이 적금의 신규 시점에 우리은행에서 가입한 '주택청약종합저축' 상품을 보유하고 있는 경우 - 연 0.1%p",thumbnail:"https://i.imgur.com/zOEjGDP.png",icon:"https://i.imgur.com/RO9qPPo.png",link:"https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PRD_CD=P010002283&PRD_YN=Y",month_1:"3.50%",month_2:"4.00%",month_3:"5.00%"},{title:"하나은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ (우대금리 : 최고 연 0.5%) <br/> - 당행 주택청약종합저축(청년우대형포함) 보유시 연 0.3% 우대 <br/> - 당행 입출금통장을 통해 3회이상 군급여 입금실적이 있거나,하나카드사의 카드(신용/체크)결제 실적이 3회 이상 있을 경우 연 0.2%우대 (군급여이체 및 카드결제 실적은 월1회만 인정하며, 군급여이체실적은 국군재정관리단을 통한 이체에 한정)",thumbnail:"https://i.imgur.com/0AQJWee.png",icon:"https://i.imgur.com/0TwOFgZ.png",link:"https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1456099_115157.jsp",month_1:"3.50%",month_2:"4.00%",month_3:"5.00%"},{title:"IBK기업은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ① 당행입출금식 계좌로 급여이체 (10 만원 이상 ) 6 회이상 실적 ( 단 , 월 1 회 이상 급여실적이 있는경우 1 회로 간주함 ) 이 있거나 , 결제계좌가 당행입출금식 계좌인 당행 신용 ( 체크 ) 카드 이용실적 ( 단 , 매출표 접수기준으로실적을 인정하며 , 현금서비스실적은 제외함 ) 이 100 만원 이상인 경우 : 연 0.2%p <br/> ② 당행 주택청약종합저축 ( 청년우대형 포함 ) 을 신규한 경우 : 연 0.2%p <br/> ③ 당행 스마트뱅킹 이체실적 1 회 이상 있는 경우 : 연 0.1%p",thumbnail:"https://i.imgur.com/bbyQZHC.png",icon:"https://i.imgur.com/TozvbDZ.png",link:"https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp?lncd=01&grcd=21&tmcd=121&pdcd=0112&wvcd=***********&i_trns_biz_kncd=IBK%EC%9E%A5%EB%B3%91%EB%82%B4%EC%9D%BC%EC%A4%80%EB%B9%84%EC%A0%81%EA%B8%88",month_1:"4.00%",month_2:"4.50%",month_3:"5.00%"},{title:"KB국민은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ 급여이체실적 - 적금 신규월 초일부터 만기일 기준 전전월 말일까지 고객이 가입한 적금 계약기간(월 환산)의 2/3에 해당하는 기간 동안 고객의 KB국민은행 입출금통장으로 급여이체 실적이 매월 10만원 이상인 경우 0.3%p 제공 <br/> ▷ 주택청약종합저축계좌보유 - 적금 만기일 기준 전전월 말일을 기준으로, 고객이 KB국민은행 주택청약종합저축(청년 우대형 주택청약종합저축 포함) 계좌를 보유한 경우 0.2%p 제공",thumbnail:"https://i.imgur.com/qji9CqS.png",icon:"https://i.imgur.com/yQOac30.png",link:"https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&%EB%B8%8C%EB%9E%9C%EB%93%9C%EC%83%81%ED%92%88%EC%BD%94%EB%93%9C=DP01000939&%EB%85%B8%EB%93%9C%EC%BD%94%EB%93%9C=00007&prcode=DP01000939",month_1:"3.50%",month_2:"4.50%",month_3:"5.00%"},{title:"DGB대구은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ 해당사항 없음",thumbnail:"https://i.imgur.com/BtcdROV.png",icon:"https://i.imgur.com/FEJtLn5.png",link:"https://www.dgb.co.kr/hmp/bbs/bbs_ebz_file_down_view.jsp?filePath=/upload/newbbs/FNM001/&fileName=%EC%83%81%ED%92%88%EC%84%A4%EB%AA%85%EC%84%9C_%EC%A0%81%EB%A6%BD%EC%8B%9D_DGB%EC%9E%A5%EB%B3%91%EB%82%B4%EC%9D%BC%EC%A4%80%EB%B9%84%EC%A0%81%EA%B8%88.pdf&realName=201811020912525114866212.pdf",month_1:"4.00%",month_2:"4.05%",month_3:"5.00%"},{title:"제주은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ 해당사항 없음",thumbnail:"https://i.imgur.com/juigMYn.png",icon:"https://i.imgur.com/HJNRfIl.png",link:"https://www.e-jejubank.com/HomeFMDeposit.do",month_1:"4.00%",month_2:"4.50%",month_3:"5.00%"},{title:"전북은행",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ 계약기간별 금리조건 6개월 이상 ~ 12개월 미만 : 연 3.60% <br/> 12개월 이상 ~ 15개월 미만 : 연 4.10% <br/> 15개월 이상 ~ 24개월 미만 : 연 5.00%",thumbnail:"https://i.imgur.com/kNXysS6.png",icon:"https://i.imgur.com/cTUwzxD.png",link:"https://www.jbbank.co.kr/",month_1:"3.60%",month_2:"4.10%",month_3:"5.00%"},{title:"우체국",price:"최대 5.00%",detail:"우대금리 조건 <br/> ▷ 자동이체 0.2% <br/> ▷ 체크카드 0.2% ▷ <br/> 첫거래 0.1%",thumbnail:"https://i.imgur.com/3Z3z5Kj.png",icon:"https://i.imgur.com/STfCLaX.png",link:"http://m.epostbank.kr/mwib0102.screen?ibnkGoodCode=1000000092&class_cd=13&good_dvsn_code=10",month_1:"4.00%",month_2:"4.50%",month_3:"5.00%"},{title:"SH수협은행",price:"최대 4.50%",detail:"우대금리 조건 <br/> ▷ 해당사항 없음",thumbnail:"https://i.imgur.com/65Ld4Jm.png",icon:"https://i.imgur.com/ZpsTCza.png",link:"https://www.suhyup-bank.com/",month_1:"2.50%",month_2:"3.50%",month_3:"4.50%"},{title:"BNK부산은행",price:"최대 4.50%",detail:"우대금리 조건 ▷ 만기 시 본인명의 주택청약종합저축 보유 : 0.10%",thumbnail:"https://i.imgur.com/zwpURcR.png",icon:"https://i.imgur.com/RX1V26T.png",link:"https://www.busanbank.co.kr/ib20/mnu/BHP00001",month_1:"3.50%",month_2:"4.00%",month_3:"4.50%"},{title:"BNK경남은행",price:"최대 4.50%",detail:"우대금리 조건 <br/> ▷ 주택청약종합저축 보유에 따른 우대이율 : 0.1% <br/> - 가입일 현재 예금주 본인명의 경남은행 '주택청약종합저축(청년우대형 주택청약종합저축 포함)'을 보유중인 경우",thumbnail:"https://i.imgur.com/NmpZeFp.png",icon:"https://i.imgur.com/0ZAme5b.png",link:"https://www.knbank.co.kr/ib20/mnu/BHP000000000001",month_1:"3.10%",month_2:"3.90%",month_3:"4.50%"}],b=r.ZP.section.withConfig({displayName:"fundTable__Container",componentId:"sc-xnk2nb-0"})(["overflow-x:scroll;& table{min-width:1010px;}"]),w=function(){return i.createElement(b,null,i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"은행"),i.createElement("th",null,"6개월 이상 ~ 1년 미만"),i.createElement("th",null,"1년 이상 ~1년 3개월 미만"),i.createElement("th",null,"1년 3개월 이상 ~ 만기"),i.createElement("th",null,"홈페이지"))),i.createElement("tbody",null,f.map((function(e){return i.createElement("tr",null,i.createElement("td",null,e.title),i.createElement("td",null,e.month_1),i.createElement("td",null,e.month_2),i.createElement("td",null,e.month_3),i.createElement("td",null,i.createElement("a",{target:"_blank",rel:"noreferrer",href:e.link},"홈페이지")))})))))},I=n(4127),z=n(7956),N=n(4338),C=[{title:"이병",value:"460,000원",icon:"https://i.imgur.com/d4x28Ao.png",link:""},{title:"일병",value:"500,000원",icon:"https://i.imgur.com/8ifMq44.png",link:""},{title:"상병",value:"550,000원",icon:"https://i.imgur.com/xlUweCc.png",link:""},{title:"병장",value:"609,000원",icon:"https://i.imgur.com/I34vHP5.png",link:""}],D=n(7946),y=r.ZP.div.withConfig({displayName:"pages__NaraCard",componentId:"sc-1u4he8c-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:16px;@media (max-width:","){overflow-x:scroll;}"],(function(e){return e.theme.device.md})),_=r.ZP.div.withConfig({displayName:"pages__FundTitle",componentId:"sc-1u4he8c-1"})(["display:flex;justify-content:space-between;& button{position:relative;top:-4px;cursor:pointer;width:90px;height:40px;border:none;border-radius:8px;background-color:var(--highlight-color);color:var(--color-text-1);font-size:14px;}"]),A=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return i.createElement(o.Z,null,i.createElement(I.Z,null,i.createElement(z.Z,null,i.createElement(N.Z,null,i.createElement("h2",null,"💵 월급"),i.createElement(E,{CardList:C})),i.createElement(N.Z,null,i.createElement("h2",null,"💳 나라사랑카드"),i.createElement(y,null,i.createElement(u,{title:"KB국민은행",link:"https://card.kbcard.com/CXPRICAC0076.cms?mainCC=a&cooperationcode=04120",color:"#ffbc00",service_1:"대중교통",discount_1:"20%",service_2:"스타벅스",discount_2:"20%",service_3:"G마켓, 옥션, GS · CJ 홈쇼핑",discount_3:"5%",service_4:"군마트(PX, GS25 해군마트)",discount_4:"5 ~ 20%"}),i.createElement(u,{title:"IBK기업은행",link:"https://www.bccard.com/app/card/CreditCardMain.do?gdsno=1000024028",color:"#1B4D98",service_1:"대중교통",discount_1:"10%",service_2:"CU, GS25",discount_2:"10%",service_3:"KTX / SRT / 고속버스 등",discount_3:"5%",service_4:"토익시험, 교보문교",discount_4:"최대 2천원"}))),i.createElement(N.Z,null,i.createElement(_,null,i.createElement("h2",null,"🏦 장병내일준비적금"),i.createElement("button",{onClick:function(e){return n(!t)},bgcolor:!0===t?"#0a0a0a":"#326BBF"},!0===t?"카드 보기":"표 보기")),!0===t?i.createElement(w,null):i.createElement(D.Z,{CardList:f})))))}},4127:function(e,t,n){var i=n(9).ZP.main.withConfig({displayName:"container__Container",componentId:"sc-1ucgapc-0"})(["width:var(--width);background-color:var(--card-color);border-radius:var(--main-radius);margin:0 auto;margin-top:var(--page-padding);"]);t.Z=i},4338:function(e,t,n){var i=n(9).ZP.section.withConfig({displayName:"contentsWrapper__ContentsWrapper",componentId:"sc-22n595-0"})(["padding-bottom:64px;& h2{font-size:24px;margin-bottom:32px;}@media (max-width:","){& h2{margin-bottom:24px;}}"],(function(e){return e.theme.device.md}));t.Z=i},7956:function(e,t,n){var i=n(9).ZP.div.withConfig({displayName:"wrapper__Wrapper",componentId:"sc-v6nmi9-0"})(["padding:var(--top-padding) var(--side-padding) 0 var(--side-padding);"]);t.Z=i}}]);
//# sourceMappingURL=component---src-pages-index-js-5e783a7eefd8ba563cf2.js.map