webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},r,!1,function(t){i("urB3")},null,null).exports,s=i("/ocq"),d=i("fZjL"),l=i.n(d),o=i("Zrlr"),u=i.n(o),c=i("wxAW"),h=i.n(c),g=i("SoPB").facts,p={hour:3600,minute:60,second:1},m=function(){function t(e){u()(this,t);var i=this,a=e||{};this.firstLadderDate=null,this.ladders=a.numberOfLadders||10,this.ladderHeight=a.ladderHeightInMetres||7.3,this.ladderCount=a.startNumberOfLadders||0,this.currentAltitude=this.ladderCount*this.ladderHeight,g.forEach(function(t){t.target&&(i.targetAltitude=t.altitudeInMetres)})}return h()(t,[{key:"registerLadderAscent",value:function(){this.ladderCount++,this.currentAltitude=this.currentAltitude+this.ladderHeight,this.firstLadderDate||(this.firstLadderDate=new Date)}},{key:"parseDuration",value:function(){if(this.firstLadderDate){var t=Math.abs(new Date-this.firstLadderDate)/1e3,e={};l()(p).forEach(function(i){e[i]=Math.floor(t/p[i]),t-=e[i]*p[i]});var i=e.hour.toString();1===i.length&&(i="0"+i);var a=e.minute.toString();1===a.length&&(a="0"+a);var r=e.second.toString();return 1===r.length&&(r="0"+r),{hours:i,minutes:a,seconds:r}}return{hours:"00",minutes:"00",seconds:"00"}}},{key:"getCurrentAltitudeInfo",value:function(){for(var t=this.currentAltitude/this.targetAltitude*100,e=0,i=0;i<g.length;i++)g[i].altitudeInMetres<this.currentAltitude&&(e=i);var a=g[e],r=g[e+1],n=r.altitudeInMetres-this.currentAltitude,s=Math.ceil(n/this.ladderHeight);return{ladderHeight:this.ladderHeight,ladderCount:this.ladderCount,currentAltitude:this.currentAltitude,targetAltitude:this.targetAltitude,percentageComplete:t,percentageCompleteText:t.toFixed(0).toString()+"%",reachedFact:{altitude:a.altitudeInMetres,title:a.title,description:a.description},nextMilestone:{thumbnail:r.thumbnail,altitude:r.altitudeInMetres,title:r.title,description:r.description},distanceToNextMilestone:n,laddersToNextMilestone:s,firstLadderDate:this.firstLadderDate}}}]),t}();function v(t){function e(t){return 1===t?"":"s"}var i=Math.ceil(t.currentAltitude).toLocaleString()+"m",a=t.targetAltitude-t.currentAltitude;return a<0&&(a=0),{altitudeText:i,laddersUntilSummitText:"Just "+(a=Math.ceil(a/t.ladderHeight).toLocaleString())+" more ladder"+e(a)+" to the summit!",laddersUntilMilestoneText:"We've "+t.laddersToNextMilestone+" ladder"+e(t.laddersToNextMilestone)+" until",milestoneTitle:t.nextMilestone.title,milestoneInfo:t.nextMilestone.description}}function f(t){var e=t.percentageComplete.toFixed(0);return e>100&&(e=100),{backdrop:"'./static/backdrops/backdrop-"+e.padStart(3,"0")+".png'",milestoneImage:"static/milestones/"+t.nextMilestone.thumbnail}}var b={name:"Everest",methods:{time:function(){var t=this.vec.parseDuration();this.duration={hours:t.hours,minutes:t.minutes,seconds:t.seconds}},registerLadder:function(){this.vec.registerLadderAscent();var t=this.vec.getCurrentAltitudeInfo();this.text=v(t),this.images=f(t)}},mounted:function(){this.interval=setInterval(this.time,1e3)},beforeDestroy:function(){clearInterval(this.interval)},data:function(){var t=new m({numberOfLadders:10,ladderHeightInMetres:7.3,startNumberOfLadders:0}),e=t.getCurrentAltitudeInfo();return{vec:t,text:v(e),images:f(e),duration:t.parseDuration()}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"everest",style:{backgroundImage:"url("+t.images.backdrop+")"},on:{click:function(e){t.registerLadder()}}},[i("div",{attrs:{id:"logo"}}),t._v(" "),i("div",{staticClass:"card",attrs:{id:"altitude"}},[i("p",[t._v("Our current altitude:")]),t._v(" "),i("h1",[t._v(t._s(t.text.altitudeText))])]),t._v(" "),i("div",{staticClass:"gap"}),t._v(" "),i("div",{staticClass:"card",attrs:{id:"summit"}},[i("p",[t._v(t._s(t.text.laddersUntilSummitText))])]),t._v(" "),i("div",{staticClass:"gap"}),t._v(" "),i("div",{staticClass:"card",attrs:{id:"milestone"}},[i("img",{attrs:{src:t.images.milestoneImage,id:"milestoneImage",alt:"Thumbnail of current milestone"}}),t._v(" "),i("div",{attrs:{id:"milestoneInfo"}},[i("p",[t._v(t._s(t.text.laddersUntilMilestoneText))]),t._v(" "),i("h2",[t._v(t._s(t.text.milestoneTitle))]),t._v(" "),i("p",[t._v(t._s(t.text.milestoneInfo))])])]),t._v(" "),i("div",{staticClass:"gap"}),t._v(" "),i("div",{staticClass:"card",attrs:{id:"timer"}},[i("div",{staticClass:"duration"},[t._v(t._s(t.duration.seconds)),i("br"),t._v(" "),i("p",{staticClass:"durationLabel"},[t._v("Seconds")])]),t._v(" "),i("div",{staticClass:"duration"},[t._v(t._s(t.duration.minutes)),i("br"),t._v(" "),i("p",{staticClass:"durationLabel"},[t._v("Minutes")])]),t._v(" "),i("div",{staticClass:"duration"},[t._v(t._s(t.duration.hours)),i("br"),t._v(" "),i("p",{staticClass:"durationLabel"},[t._v("Hours")])])])])},staticRenderFns:[]};var _=i("VU/8")(b,M,!1,function(t){i("m0J5")},"data-v-d4d837f6",null).exports;a.a.use(s.a);var I=new s.a({routes:[{path:"/",name:"Everest",component:_}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:I,components:{App:n},template:"<App/>"})},SoPB:function(t,e){t.exports={facts:[{thumbnail:"sea.png",altitudeInMetres:0,title:"Sea level",description:"A long way to go yet!",target:!1},{thumbnail:"shard.jpg",altitudeInMetres:306,title:"The Shard",description:"Europe's tallest building!",target:!1},{thumbnail:"shanghai.jpg",altitudeInMetres:631,title:"Shanghai Tower",description:"World's longest elevator!",target:!1},{thumbnail:"burg-khalifa.jpg",altitudeInMetres:828,title:"Burj Khalifa",description:"The World's tallest building!",target:!1},{thumbnail:"snowden.jpg",altitudeInMetres:1085,title:"Mount Snowden",description:"Highest mountain in Wales!",target:!0},{thumbnail:"ben-nevis.jpg",altitudeInMetres:1343,title:"Ben Nevis",description:"The UK's highest mountain!",target:!1},{thumbnail:"mount-fuji.jpg",altitudeInMetres:3776,title:"Mount Fuji",description:"First climbed by a monk!",target:!1},{thumbnail:"skydiving.jpg",altitudeInMetres:3810,title:"12,500 ft!",description:"Standard skydiving altitude!",target:!1},{thumbnail:"la-rinconada.jpg",altitudeInMetres:5098,title:"La Rinconada",description:"Highest town in the world!",target:!1},{thumbnail:"clouds.jpg",altitudeInMetres:5486,title:"Cloud level",description:"So high that clouds start forming!",target:!1},{thumbnail:"ojos-del-salado.jpg",altitudeInMetres:6887,title:"Ojos del Salado",description:"The World's highest active volcano!",target:!1},{thumbnail:"death-zone.jpg",altitudeInMetres:7925,title:"Death Zone!",description:"Oxygen levels can't sustain human life!",target:!1},{thumbnail:"summit.jpg",altitudeInMetres:8850,title:"MOUNT EVEREST SUMMIT!",description:"Earth's highest point!",target:!0},{thumbnail:"airplanes.jpg",altitudeInMetres:10668,title:"Airplanes",description:"Commercial airplanes fly at this height!",target:!1},{thumbnail:"space.jpg",altitudeInMetres:1e5,title:"Space!",description:"So high that space begins...",target:!1}]}},m0J5:function(t,e){},urB3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.39b3caa393cc96777988.js.map