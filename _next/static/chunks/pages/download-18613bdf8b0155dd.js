(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{4762:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return t(3266)}])},1453:function(e,n){"use strict";n.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2362:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(7748),a=t.n(l);n.Z=e=>{let n=a().base;e.cta&&(n=a().cta),e.cta2&&(n=a().ctaSecondary),e.square&&(n+=" ".concat(a().square)),e.size&&(n+=" ".concat(a()[e.size])),e.icon&&(n+=" ".concat(a().icon));let t=(0,i.jsxs)(i.Fragment,{children:[e.prefix?(0,i.jsx)("div",{className:a().prefix,children:e.prefix}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{children:e.children})]});return e.asDiv?(0,i.jsx)("div",{className:n,"aria-label":e["aria-label"],children:t}):(0,i.jsx)("button",{className:n,onClick:e.onClick,"aria-label":e["aria-label"],children:t})}},9703:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(2362),a=t(8931),s=t(7325),r=t(4612),o=t.n(r),c=t(5678);let d=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:s.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:s.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:s.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:s.SGh}];n.Z=e=>e.icons?(0,i.jsx)("div",{className:o().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let n=d.find(n=>n.key===e);return n?(0,i.jsx)(c.Z,{href:n.link,"aria-label":"".concat(n.name," link"),neutral:!0,children:(0,i.jsx)(a.Z,{size:1,icon:n.icon})},e):(0,i.jsx)(i.Fragment,{})})})}):(0,i.jsx)("div",{className:o().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let n=d.find(n=>n.key===e);return n?(0,i.jsx)(c.Z,{href:n.link,neutral:!0,children:(0,i.jsx)(l.Z,{asDiv:!0,prefix:(0,i.jsx)(a.Z,{icon:n.icon,size:1}),children:n.name})},e):(0,i.jsx)(i.Fragment,{})})})})},5678:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(9928),a=t.n(l);n.Z=e=>(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?a().neutral:"",children:e.children})},7017:function(e,n,t){"use strict";var i=t(1527),l=t(8839),a=t.n(l);t(959),n.Z=e=>(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:e.title||"Ferdium | The home for all your services"}),(0,i.jsx)("meta",{name:"description",content:"Introducing a great productivity tool to keep all messaging, productivity, and online services in one place"})]})},8931:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(6882),a=t.n(l);n.Z=e=>(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,i.jsx)(a(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})},3856:function(e,n,t){"use strict";t.d(n,{Z:function(){return components_Layout}});var i=t(1527),l=t(959),a=t(7325),s=t(628),r=t.n(s),o=t(2362),c=t(9703),d=t(8931),u=t(1897),components_Footer=e=>{function switchTheme(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}return(0,l.useEffect)(()=>{document.documentElement.getAttribute("data-theme")&&switchTheme("dark"===document.documentElement.getAttribute("data-theme"))},[]),(0,i.jsxs)("footer",{id:r().footer,children:[(0,i.jsx)("div",{className:r().links,children:(0,i.jsx)(c.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,i.jsxs)("div",{className:r().legal,children:[(0,i.jsx)(u.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,i.jsx)("div",{children:"\xa0&\xa0"}),(0,i.jsx)(u.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,i.jsx)("div",{className:r().darkmode,children:(0,i.jsx)(o.Z,{onClick:()=>switchTheme("dark"!==document.documentElement.getAttribute("data-theme")),icon:!0,"aria-label":"Switch theme",children:(0,i.jsx)(d.Z,{size:1,icon:a.xEd})})})]})},m=t(4778),h=t.n(m),x=t(1453),p=t(3133),components_Header=e=>(0,i.jsx)("header",{id:h().header,children:(0,i.jsxs)("nav",{id:h().nav,children:[(0,i.jsx)(u.Z,{href:"/","aria-label":"Home link",children:(0,i.jsx)("div",{children:(0,i.jsx)(p.Z,{id:h().logo,src:x.Z,alt:"",width:46,height:46})})}),(0,i.jsxs)("div",{className:h().links,children:[(0,i.jsx)(u.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,i.jsx)(u.Z,{href:"/download",children:(0,i.jsx)(o.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})}),f=t(1366),_=t.n(f),components_Layout=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(components_Header,{}),(0,i.jsx)("main",{id:_().main,children:e.children}),(0,i.jsx)(components_Footer,{})]})},1897:function(e,n,t){"use strict";var i=t(1527),l=t(4647),a=t.n(l);t(959);var s=t(4423),r=t.n(s);n.Z=e=>(0,i.jsx)(a(),{href:e.href,"aria-label":e["aria-label"],className:e.neutral?r().neutral:void 0,children:e.children})},3133:function(e,n,t){"use strict";t.d(n,{Z:function(){return NonOptimizedImage}});var i=t(1527),l=t(7649),a=t.n(l);let customLoader=e=>{let{src:n}=e;return n};function NonOptimizedImage(e){return(0,i.jsx)(a(),{...e,loader:customLoader,unoptimized:!e.width&&!e.height})}},6242:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(2990),a=t.n(l);n.Z=e=>{let n=[a().content,e.className];return e.wide&&n.push(a().wide),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:a().section,children:[e.brand&&(0,i.jsx)("div",{className:a().brand}),(0,i.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:n.join(" "),children:e.children})]})})}},3266:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return download}});var i=t(1527),l=t(959),a=t(7325),s=t(4304),r=t.n(s),o=t(2362),c=t(8931),components_CodeBlock=e=>{let[n,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{n&&setTimeout(()=>{t(!1)},2e3)},[n]),(0,i.jsxs)("div",{className:r().codeblock,children:[(0,i.jsx)("code",{className:r().code,children:e.code}),(0,i.jsx)(o.Z,{icon:!0,onClick:()=>{if(!navigator.clipboard){let n=document.createElement("textarea");n.innerHTML=e.code,n.select(),document.execCommand("copy"),document.removeChild(n),t(!0);return}navigator.clipboard.writeText(e.code).then(()=>{t(!0)}).catch(e=>{console.error("Something went wrong when copying to clipboard",e)})},children:n?(0,i.jsx)("div",{className:r().check,children:(0,i.jsx)(c.Z,{icon:a.k6A,size:1})}):(0,i.jsx)(c.Z,{icon:a.a0Z,size:1})})]})},d=t(8098),u=t.n(d),components_CodeBlockSection=e=>(0,i.jsxs)("article",{className:u().codeblocksection,children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)(components_CodeBlock,{code:e.text})]}),m=t(7017),h=t(3856),x=t(6242),p=t(1489),f=t.n(p),_=t(8991),g=t.n(_),j=t(5678),components_PlatformDownloads=e=>(0,i.jsx)("article",{className:g().section,children:(0,i.jsx)("div",{className:g().links+" ".concat(e.gridTemplate?g()[e.gridTemplate]:""),style:e.grid?{display:"grid"}:void 0,children:e.downloadTypes.map((n,t)=>{var l,a,s;let r;return n.link&&(r=(0,i.jsx)("div",{className:g().link,children:(0,i.jsx)(j.Z,{href:null!==(a=n.link.browser_download_url)&&void 0!==a?a:"",children:(0,i.jsx)(o.Z,{cta2:!0,square:!0,children:n.link.name})})})),n.multipleLinks&&(r=n.multipleLinks.map(e=>{var n;return(0,i.jsx)("div",{className:g().link,children:(0,i.jsx)(j.Z,{href:null!==(n=e.browser_download_url)&&void 0!==n?n:"",children:(0,i.jsx)(o.Z,{cta2:!0,square:!0,children:e.name})})},e.name)})),(0,i.jsxs)("section",{style:{gridArea:null!==(s=null===(l=e.gridTemplateArray)||void 0===l?void 0:l[t])&&void 0!==s?s:"0"},children:[(0,i.jsx)("h3",{children:n.title}),(0,i.jsx)("div",{className:g().content,children:r})]},n.title)})})}),k=t(1842),v=t.n(k);let Tab=e=>(0,i.jsx)("button",{className:v().tab+" ".concat(e.selected?v().selected:""),onClick:()=>e.onClick(),children:e.option.title});var components_Tabs=e=>{var n;let[t,a]=(0,l.useState)(),s=null!==(n=e.value)&&void 0!==n?n:null==t?void 0:t.key;return(0,i.jsx)("div",{className:v().tabs,children:e.options.map(n=>(0,i.jsx)(Tab,{option:n,selected:n.key===s,onClick:()=>{a(n),e.onClick&&e.onClick(n.key)}},n.key))})},b=t(2760),w=t.n(b),components_Loader=()=>(0,i.jsxs)("div",{className:w()["lds-ring"],children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),y=t(4647),A=t.n(y),S=t(1443);let Z=new S.v;var download=e=>{let n;let[t,a]=(0,l.useState)([]),[s,r]=(0,l.useState)(),[c,d]=(0,l.useState)(),[u,p]=(0,l.useState)(!1),[_,g]=(0,l.useState)(!1);(0,l.useEffect)(()=>{getLatestRelease()},[]);let getLatestStableRelease=async function(){var e;let n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=JSON.parse(null!==(e=localStorage.getItem("cachedRelease"))&&void 0!==e?e:"{}");if(i.cacheExpires&&parseInt(i.cacheExpires)>new Date().getTime())return i.release;try{n=await Z.rest.repos.listReleases({owner:"ferdium",repo:"ferdium-app",page:t})}catch(e){g(!0);return}let l=n.data.find(e=>e&&!e.draft&&!e.prerelease);return l?(localStorage.setItem("cachedRelease",JSON.stringify({cacheExpires:new Date().getTime()+6e5,release:l})),l):await getLatestStableRelease(t+1)},getLatestRelease=async()=>{var e;if(u)return;p(!0);let n=await getLatestStableRelease();if(!n){g(!0),p(!1);return}let t=n.assets.map(e=>(e.name=e.name.replace(/Ferdium-(linux|mac|win)-/gm,"").replace(n.name,"").replace(/[-]/g," ").replace(/[.]/g," ").replace("  "," ").trim(),e)).filter(e=>!e.name.includes("yml")&&!e.name.includes("blockmap")),i=(null===(e=navigator.userAgent.match(/Mac|Win|Linux/g))||void 0===e?void 0:e[0].toLowerCase())||"win";switch(!0){case i.includes("linux"):r("linux"),d(t.find(e=>e.name.includes("AppImage")));break;case i.includes("mac"):r("mac"),d(t.find(e=>e.name.includes("dmg")&&e.name.includes("x64")));break;case i.includes("win"):r("win"),d(t.find(e=>e.name.includes("exe")&&!e.name.includes("x64")&&!e.name.includes("ia32")&&!e.name.includes("arm64")))}a(t),p(!1)};switch(s){case"linux":n=(0,i.jsx)(components_PlatformDownloads,{grid:!0,gridTemplate:"linux",gridTemplateArray:["deb","rpm","appimage","freebsd","tar"],downloadTypes:[{title:"DEB",multipleLinks:t.filter(e=>e.name.includes("deb"))},{title:"RPM",link:{...t.find(e=>e.name.includes("rpm"))}},{title:"AppImage",link:{...t.find(e=>e.name.includes("AppImage"))}},{title:"FreeBSD",link:{...t.find(e=>e.name.includes("freebsd"))}},{title:"Tar",link:{...t.find(e=>e.name.includes("tar"))}}]});break;case"win":n=(0,i.jsx)(components_PlatformDownloads,{downloadTypes:[{title:"Installer",multipleLinks:t.filter(e=>e.name.includes("exe")&&!e.name.includes("Portable")).reverse()},{title:"Portable Installer",multipleLinks:t.filter(e=>e.name.includes("exe")&&e.name.includes("Portable")).reverse()}]});break;case"mac":n=(0,i.jsx)(components_PlatformDownloads,{downloadTypes:[{title:"Installer",multipleLinks:t.filter(e=>e.name.includes("dmg"))},{title:"Bundle",multipleLinks:t.filter(e=>e.name.includes("bundle"))}]});break;default:n=(0,i.jsx)(i.Fragment,{})}return(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(m.Z,{title:"Ferdium | Download"}),_&&(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("h1",{children:"Download"}),(0,i.jsx)("div",{className:f().copy,children:(0,i.jsxs)("p",{children:["Something went wrong when getting the links to the latest Ferdium release. Try again later!"," "]})})]}),!_&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("h1",{children:"Download"}),(0,i.jsx)("p",{className:f().copy,children:"Find the installer for your OS below to install Ferdium!"}),!c||u?(0,i.jsx)(components_Loader,{}):(0,i.jsx)(j.Z,{href:null==c?void 0:c.browser_download_url,children:(0,i.jsx)(o.Z,{cta:!0,size:"huge",children:"Download"})}),(0,i.jsx)("p",{style:{fontSize:"0.5rem"},children:null==c?void 0:c.name})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsxs)("div",{className:f().copy,children:[(0,i.jsxs)("p",{children:["Follow the link below to download the latest nightly release of Ferdium from our GitHub Releases."," "]}),(0,i.jsxs)("p",{children:['Once there click "Assets" and choose the version for your platform (check the',(0,i.jsx)(A(),{href:"/faq",children:" FAQ "})," if you are unsure which one to get)! We currently have releases for macOS, Windows, Linux (AppImage and DEB) and FreeBSD."]})]}),(0,i.jsx)(j.Z,{href:"https://github.com/ferdium/ferdium-app/releases",children:(0,i.jsx)(o.Z,{cta:!0,size:"huge",children:"Download from GitHub"})})]}),t&&t.length>0&&!u&&(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("h2",{children:"Alternative Downloads"}),(0,i.jsx)(components_Tabs,{options:[{title:"Linux",key:"linux"},{title:"Windows",key:"win"},{title:"Mac",key:"mac"}],onClick:e=>r(e),value:s}),n]})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("h2",{children:"Using your OS's package manager"}),(0,i.jsx)("p",{className:f().copy,children:"Alternatively, you can use the package manager of your OS to install Ferdium. Use one of the CLI commands below depending on your OS to install the latest binary release of Ferdium. Some package managers (like AUR) also allow you to build the source release yourself."}),(0,i.jsx)(components_CodeBlockSection,{title:"AUR (Arch Linux and derivatives)",text:"yay -S ferdium-bin\n# or, to compile yourself\nyay -S ferdium"}),(0,i.jsx)(components_CodeBlockSection,{title:"Flatpak",text:"flatpak install flathub org.ferdium.Ferdium"}),(0,i.jsx)(components_CodeBlockSection,{title:"Homebrew (macOS)",text:"brew tap ferdium/ferdium\n# to install the latest stable release:\nbrew install ferdium\n# or for beta pre-releases:\nbrew install ferdium-beta\n# or for nightly pre-releases:\nbrew install ferdium-nightly"}),(0,i.jsx)(components_CodeBlockSection,{title:"Scoop (Windows)",text:"scoop bucket add versions\n# to install the latest nightly pre-releases:\nscoop install ferdium-nightly"}),(0,i.jsx)(components_CodeBlockSection,{title:"Chocolatey (Windows)",text:"# to install the latest stable release:\nchoco install ferdium \n# or for beta pre-releases:\nchoco install ferdium --pre"}),(0,i.jsx)(components_CodeBlockSection,{title:"Winget (Windows)",text:"# to install the latest stable release:\nwinget install ferdium\n# or for beta pre-releases:\nwinget install ferdium-beta\n# or for nightly pre-releases:\nwinget install ferdium-nightly"}),(0,i.jsx)(components_CodeBlockSection,{title:"Snap (Ubuntu linux and derivatives)",text:"# to install the latest stable release:\nsnap install ferdium\n# or for beta pre-releases:\nsnap install ferdium --beta\n# or for nightly pre-releases:\nsnap install ferdium --edge\n# connect additional interfaces:\nsnap connect ferdium:camera\nsnap connect ferdium:audio-record"})]})]})}},7748:function(e){e.exports={ctaSecondary:"Button_ctaSecondary__ncnmd",cta:"Button_cta___4KTX",base:"Button_base__7_tCN",large:"Button_large__chkvi",huge:"Button_huge__cFxyv",icon:"Button_icon__71oEZ",prefix:"Button_prefix__kkXiw",square:"Button_square__4QPYs"}},4304:function(e){e.exports={codeblock:"CodeBlock_codeblock__U3Fsg",code:"CodeBlock_code__fwv48",check:"CodeBlock_check__2CsyZ"}},8098:function(e){e.exports={codeblocksection:"CodeBlockSection_codeblocksection__cMU5e"}},4612:function(e){e.exports={links:"CommunityLinks_links___6PtI"}},9928:function(e){e.exports={neutral:"ExternalLink_neutral__GSVpj"}},628:function(e){e.exports={footer:"Footer_footer__lD3vi",links:"Footer_links__C0oRR",legal:"Footer_legal__3uAQy",darkmode:"Footer_darkmode__rij5T"}},4778:function(e){e.exports={header:"Header_header__nSemd",links:"Header_links__6NhQ_",nav:"Header_nav__Fn39o",logo:"Header_logo__m4H7B"}},1366:function(){},4423:function(e){e.exports={neutral:"Link_neutral__2yL07"}},2760:function(e){e.exports={"lds-ring":"Loader_lds-ring__D2AVq"}},8991:function(e){e.exports={platformLogo:"PlatformDownloads_platformLogo__Dhu_G",section:"PlatformDownloads_section__ikKJw",links:"PlatformDownloads_links__D9R5Y",link:"PlatformDownloads_link__ko7Vj",linux:"PlatformDownloads_linux__3nUmQ",content:"PlatformDownloads_content__64DP0"}},2990:function(e){e.exports={section:"Section_section__Eq0Zc",brand:"Section_brand__W0fM9",content:"Section_content__btQE_",wide:"Section_wide__jb0oQ"}},1842:function(e){e.exports={tabs:"Tabs_tabs__FUDDp",tab:"Tabs_tab__950jw",selected:"Tabs_selected__g6TI3"}},1489:function(e){e.exports={copy:"Download_copy__34rB8"}}},function(e){e.O(0,[928,442,461,774,888,179],function(){return e(e.s=4762)}),_N_E=e.O()}]);