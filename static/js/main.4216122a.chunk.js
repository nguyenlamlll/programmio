(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(255)},109:function(e,t,a){},111:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},112:function(e,t,a){},255:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),c=(a(109),a(10)),o=a(11),s=a(13),m=a(12),u=a(14),p=(a(111),a(112),a(22)),h=a(93),d=a.n(h),g=a(95),E=a.n(g),b=a(23),f=a.n(b),v=a(47),j=a.n(v),y=a(96),O=a.n(y),x=a(97),k=a.n(x),C=a(64),w=a.n(C),S=a(98),L=a.n(S),B=a(261),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!0,anchorEl:null},a.handleChange=function(e){a.setState({auth:e.target.checked})},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.auth,n=t.anchorEl,l=Boolean(n);return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"static",className:e.appBar},r.a.createElement(E.a,null,r.a.createElement(j.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(O.a,null)),r.a.createElement(f.a,{variant:"h6",color:"inherit",className:e.grow},"P R O G R A M M I O"),a&&r.a.createElement("div",null,r.a.createElement(j.a,{"aria-owns":l?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},r.a.createElement(k.a,null)),r.a.createElement(L.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleClose},r.a.createElement(w.a,{onClick:this.handleClose,component:B.a,to:"/profile"},"Profile"),r.a.createElement(w.a,{onClick:this.handleClose},"My account"))))))}}]),t}(r.a.Component),A=Object(p.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBar:{background:"#00B80E"}})(N),T=a(3),D=a.n(T),I=a(48),M=a.n(I),G=a(63),R=a.n(G),F=a(32),P=a.n(F),W=a(35),z=a.n(W),J=a(99),$=a.n(J),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement("div",null,r.a.createElement(D.a,{container:!0},r.a.createElement(D.a,{item:!0,xs:2},r.a.createElement("p",{onClick:this.props.handleBackClick},"Back")),r.a.createElement(D.a,{item:!0,xs:10},r.a.createElement(f.a,{variant:"h4",align:"left"},this.props.courseTitle),r.a.createElement(M.a,null)),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(R.a,{component:"nav"},r.a.createElement(D.a,{container:!0},r.a.createElement(D.a,{item:!0,xs:11},r.a.createElement(P.a,{button:!0},r.a.createElement(z.a,{primary:"Lesson 01: What is programming in general?"}))),r.a.createElement(D.a,{item:!0,xs:1},r.a.createElement($.a,null))),r.a.createElement(P.a,{button:!0},r.a.createElement(z.a,{primary:"Lesson 02: Basic logic turns into a program"})),r.a.createElement(P.a,{button:!0},r.a.createElement(z.a,{primary:"Lesson 03: Basic logic turns into a program"})),r.a.createElement(P.a,{button:!0},r.a.createElement(z.a,{primary:"Lesson 04: Basic logic turns into a program"}))))))}}]),t}(r.a.Component),H=Object(p.withStyles)(function(e){return{}})(q),K=a(33),Q=a.n(K),U=a(62),V=a.n(U),X=a(100),Y=a.n(X),Z=a(101),_=a.n(Z);var ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLearned:!1,open:!1},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleStartLearningModalClick=function(){a.props.onStartLearningClick(a.props.title)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Q.a,{className:"\n                    ".concat(e.button,"\n                    ").concat(e.circleBase,"\n                    ").concat(this.state.isLearned?e.learnedNode:"","\n                    "),onClick:this.handleOpen},r.a.createElement("p",null,this.props.title)),r.a.createElement(V.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},r.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:e.paper},r.a.createElement(D.a,{container:!0,spacing:16},r.a.createElement(D.a,{item:!0,xs:3},r.a.createElement(Y.a,{className:e.avatar},r.a.createElement(_.a,null))),r.a.createElement(D.a,{item:!0,xs:9},r.a.createElement(f.a,{variant:"h5",id:"modal-title"},this.props.title),r.a.createElement(M.a,null))),r.a.createElement(f.a,{variant:"subtitle1",id:"simple-modal-description",className:e.modalBody},"Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus."),r.a.createElement(D.a,{container:!0,spacing:16,className:e.modalButtons},r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(Q.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleStartLearningModalClick},"Start Learning")),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(Q.a,{variant:"contained",color:"primary",fullWidth:!0},"Test out"))))))}}]),t}(r.a.Component),te=Object(p.withStyles)(function(e){return{button:{},circleBase:{borderRadius:"50%",width:"90px",height:"90px",background:"#8DD9AD"},learnedNode:{background:"#38E849"},extendedIcon:{marginRight:e.spacing.unit},paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit},modalButtons:{paddingTop:"15px"},modalBody:{paddingTop:"15px"},avatar:{width:100,height:100}}})(ee),ae={complimentLight:"#50B8F3",complimentDark:"#2F2CD0",primary:"#00B80E",primaryLight:"#76F473",grey:"#E0E0E0",greyStrong:"#C4C4C4",greyText:"#6F6B6B"},ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(D.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(D.a,{item:!0,xs:12,md:9},r.a.createElement("h1",null,"Objective: Front-end Web Developer")),r.a.createElement(D.a,{item:!0,xs:12,md:2,container:!0,justify:"flex-end"},r.a.createElement(D.a,{item:!0,xs:12,sm:12,md:10,lg:7},r.a.createElement(Q.a,{variant:"contained",color:"primary",className:e.editButton},"Edit")))))}}]),t}(r.a.Component),re=Object(p.withStyles)(function(e){return{root:{flexGrow:1,textAlign:"left",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.25)",borderBottom:"4px solid "+ae.primary},editButton:{backgroundColor:ae.complimentLight,borderRadius:"0",width:"95px",heigth:"33px"}}})(ne),le=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isShowing:!0,isCourseShowing:!1,courseTitle:""},a.handleStartLearning=function(e){console.log(e),a.setState({isShowing:!1,isCourseShowing:!0,courseTitle:e}),console.log(a.state)},a.handleBackClick=function(){a.setState({isShowing:!0,isCourseShowing:!1,courseTitle:""})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},this.state.isShowing&&r.a.createElement("div",{className:""},r.a.createElement(re,null),r.a.createElement(D.a,{container:!0,spacing:8},r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(te,{title:"Basic",onStartLearningClick:this.handleStartLearning})),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(te,{title:"Algorithm",onStartLearningClick:this.handleStartLearning})),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(te,{title:"Structures",onStartLearningClick:this.handleStartLearning})),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(te,{title:"Logic",onStartLearningClick:this.handleStartLearning})),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(te,{title:"Script",onStartLearningClick:this.handleStartLearning})),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(te,{title:"Program",onStartLearningClick:this.handleStartLearning})))),this.state.isCourseShowing&&r.a.createElement(H,{courseTitle:this.state.courseTitle,handleBackClick:this.handleBackClick}))}}]),t}(r.a.Component),ie=Object(p.withStyles)(function(e){return{root:{flexGrow:1,background:"rgba(255, 255, 255, 1)",height:"650px",marginTop:"10px"},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(le),ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement("h2",null,"Personal Progress"),r.a.createElement(D.a,{container:!0,justify:"flex-start",alignItems:"center"},r.a.createElement(D.a,{item:!0,xs:12,style:{paddingLeft:20}},r.a.createElement(D.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:16},r.a.createElement("p",null,"Level"),r.a.createElement("p",null,"------"))),r.a.createElement(D.a,{item:!0,xs:12,style:{paddingLeft:20}},r.a.createElement(D.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:16},r.a.createElement("p",null,"Streak"),r.a.createElement("p",null,"------"))),r.a.createElement(D.a,{item:!0,xs:12,style:{paddingLeft:20}},r.a.createElement(D.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:16},r.a.createElement("p",null,"Achievement")))),r.a.createElement(D.a,{container:!0,spacing:8,justify:"center",alignItems:"center"},[0,1,2,3,4,5,6,7].map(function(t){return r.a.createElement(D.a,{key:t,item:!0},r.a.createElement("div",{className:e.achievementBox}))})))}}]),t}(r.a.Component),oe=Object(p.withStyles)(function(e){return{root:{flexGrow:1,background:"rgba(255, 255, 255, 1)"},achievementBox:{width:"49px",height:"49px",left:"208px",top:"162px",background:"#C4C4C4",borderRadius:"7px"}}})(ce),se=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement("h2",null,"Friend."),r.a.createElement("h4",null,"Level"),r.a.createElement("h4",null,"Streak"))}}]),t}(r.a.Component),me=Object(p.withStyles)(function(e){return{root:{flexGrow:1,background:"rgba(255, 255, 255, 1)"}}})(se),ue=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(D.a,{container:!0,spacing:16},r.a.createElement(D.a,{item:!0,sm:2,lg:2}),r.a.createElement(D.a,{item:!0,xs:11,sm:7,lg:7},r.a.createElement(ie,null)),r.a.createElement(D.a,{item:!0,xs:12,sm:2,lg:2},r.a.createElement(oe,null),r.a.createElement(me,null))))}}]),t}(n.Component),pe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile page."))}}]),t}(n.Component),he="".concat("/programmio"),de=a(262),ge=a(263),Ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(de.a,{basename:he},r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(ge.a,{exact:!0,path:"/",component:ue}),r.a.createElement(ge.a,{path:"/profile",component:pe})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[104,2,1]]]);
//# sourceMappingURL=main.4216122a.chunk.js.map