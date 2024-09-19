(function(){"use strict";var e={103:function(e,a,t){var l=t(5130),i=t(6768);const s={class:"router-view-content"};function r(e,a,t,l,r,o){const n=(0,i.g2)("HeadNavigator"),d=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(n),(0,i.Lk)("div",s,[(0,i.bF)(d)])],64)}var o=t.p+"img/ridgeIcon.c0e748b6.svg";const n={class:"site-header",role:"banner"},d={class:"wrapper"},c={class:"site-nav"},p={class:"trigger"};function h(e,a,t,l,s,r){const h=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",n,[(0,i.Lk)("div",d,[(0,i.bF)(h,{class:"site-title",rel:"author",to:"/"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.Lk)("img",{src:o,alt:"RidgeBuilder",style:{width:"32px"}},null,-1),(0,i.eW)(" RidgeBuilder ")]))),_:1}),(0,i.Lk)("nav",c,[(0,i.Lk)("div",p,[(0,i.bF)(h,{class:"page-link",to:"/"},{default:(0,i.k6)((()=>a[1]||(a[1]=[(0,i.eW)("Home")]))),_:1}),(0,i.bF)(h,{class:"page-link",to:"/gallery"},{default:(0,i.k6)((()=>a[2]||(a[2]=[(0,i.eW)("Gallery")]))),_:1}),(0,i.bF)(h,{class:"page-link",to:"/designSpace"},{default:(0,i.k6)((()=>a[3]||(a[3]=[(0,i.eW)("Design Space")]))),_:1}),(0,i.bF)(h,{class:"page-link",to:"/about"},{default:(0,i.k6)((()=>a[4]||(a[4]=[(0,i.eW)("About")]))),_:1}),(0,i.bF)(h,{class:"btn",to:"/app",role:"button"},{default:(0,i.k6)((()=>a[5]||(a[5]=[(0,i.eW)("Launch")]))),_:1})])])])])}var u={name:"HeadNavigator"},g=t(1241);const m=(0,g.A)(u,[["render",h],["__scopeId","data-v-e046ace6"]]);var b=m,v={name:"App",components:{HeadNavigator:b}};const f=(0,g.A)(v,[["render",r],["__scopeId","data-v-5cad5268"]]);var y=f,k=t(1387);const w={class:"homepage-container"},C={class:"abstract-container"},L={class:"abstract-container02"};function S(e,a,t,l,s,r){const o=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",w,[(0,i.Lk)("div",C,[(0,i.Lk)("div",L,[a[1]||(a[1]=(0,i.Lk)("h1",{id:"paper-title"},"RidgeBuilder",-1)),a[2]||(a[2]=(0,i.Lk)("p",{id:"paper-subtitle"},"Interactive Authoring of Expressive Ridgeline Plots",-1)),(0,i.bF)(o,{class:"btn-launch",to:"/app",role:"button"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.eW)("Launch RidgeBulider")]))),_:1})]),a[3]||(a[3]=(0,i.Lk)("p",{id:"abstract"}," Ridgeline plots are frequently used to visualize the evolution or distributions of multiple series using a pile of overlapping line, area, or bar charts, highlighting the peak patterns among these series. While the existing studies have mainly seen ridgeline plots as a type of small multiple visualization, the signature ridge-like patterns in these plots have increasingly attracted graphic designers to create appealing data visualizations based on customized ridgeline plots. However, many authoring tools only support creating basic ridgeline plots and overlook the diverse layouts and styles of these plots. In this paper, we present a comprehensive design space of ridgeline plots by surveying the usages of such plots, specifically focusing on delineating their diverse layouts and expressive styles. Based on this design space, we introduce RidgeBuilder, an intuitive tool that facilitates the fast authoring of expressive ridgeline plots with intuitive interactions and user-friendly recommendations. In particular, we summarize three goals for refining the layout of ridgeline plots and propose an optimization method that automatically generates an optimal order of the series in the plots. The effectiveness of RidgeBuilder is evaluated with a replication study where the participants were asked to recreate the existing complex ridgeline plots, and both qualitative and quantitative results indicate good usability and usefulness. We also evaluate the efficiency and effectiveness of the proposed layout optimization algorithm with anonymized questionnaires. Furthermore, the expressiveness of RidgeBuilder are demonstrated with a gallery of ridgeline plots created by our tool. ",-1))]),a[4]||(a[4]=(0,i.Lk)("br",null,null,-1)),a[5]||(a[5]=(0,i.Lk)("br",null,null,-1)),a[6]||(a[6]=(0,i.Lk)("div",{class:"video-container"},[(0,i.Lk)("video",{class:"video",controls:""},[(0,i.Lk)("source",{src:"/usage_senario.mp4",type:"video/mp4"}),(0,i.eW)(" Your browser does not support the video tag. ")]),(0,i.Lk)("h4",null,"Usage Senario")],-1)),a[7]||(a[7]=(0,i.Lk)("br",null,null,-1))])}var _={name:"HomePage",methods:{playVideo(e){e.target.play()},pauseVideo(e){e.target.pause()}}};const E=(0,g.A)(_,[["render",S],["__scopeId","data-v-28681c9a"]]);var x=E;const F={class:"gallerypage-container"},A={class:"gallerycard-container"};function D(e,a,t,l,s,r){const o=(0,i.g2)("GalleryCard");return(0,i.uX)(),(0,i.CE)("div",F,[a[0]||(a[0]=(0,i.Lk)("h2",{class:"cnt-title",style:{"align-self":"flex-start","margin-left":"7%","margin-top":"5%"}},"Gallery",-1)),(0,i.Lk)("div",A,[(0,i.bF)(o,{imageSrc:"/imgs/bicycle_flow.jpg",galleryName:"Bicycle Flow in Summer"}),(0,i.bF)(o,{imageSrc:"/imgs/population_distribution.jpg",galleryName:"Population Distribution of the United States"}),(0,i.bF)(o,{imageSrc:"/imgs/winged_migration.jpg",galleryName:"Winged Migration"}),(0,i.bF)(o,{imageSrc:"/imgs/song.jpg",galleryName:"Songs and Sunsets"}),(0,i.bF)(o,{imageSrc:"/imgs/activity.jpg",galleryName:"Going with the Flow or March to the Peak of your own Ridge?"}),(0,i.bF)(o,{imageSrc:"/imgs/disease_fears.jpg",galleryName:"Mountains Out of Molehills"}),(0,i.bF)(o,{imageSrc:"/imgs/trendiest_baby_names.jpg",galleryName:"Trendiest Female Baby Names"})])])}var O=t(4232);const I={class:"image-wrapper",ref:"imageWrapper"},T=["src"],W={class:"img-r-description"};function G(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",{class:"gallery-card",onMouseover:a[0]||(a[0]=(...e)=>r.scrollImage&&r.scrollImage(...e)),onMouseleave:a[1]||(a[1]=(...e)=>r.resetScroll&&r.resetScroll(...e)),onClick:a[2]||(a[2]=(...e)=>r.goToDetailPage&&r.goToDetailPage(...e))},[(0,i.Lk)("div",I,[(0,i.Lk)("img",{src:t.imageSrc,alt:"Gallery Image",class:"gallery-img"},null,8,T)],512),(0,i.Lk)("p",W,(0,O.v_)(t.galleryName),1)],32)}t(4114);var B={name:"GalleryCard",props:{imageSrc:{type:String,required:!0},galleryName:{type:String,required:!0}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})},goToDetailPage(){const e=this.galleryName.includes(" ")?this.galleryName.split(" ")[0]:this.galleryName;this.$router.push({name:`GalleryCardDetail${e}`,params:{name:e}})}}};const M=(0,g.A)(B,[["render",G],["__scopeId","data-v-6443ca6f"]]);var j=M,N={name:"GalleryPage",components:{GalleryCard:j}};const X=(0,g.A)(N,[["render",D],["__scopeId","data-v-31d8689e"]]);var P=X;const R={class:"designspacepage-container"},$={class:"dataset-box"},z={class:"query-box"},H={class:"query-panel"},U={class:"result-panel"};function q(e,a,t,l,s,r){const o=(0,i.g2)("QueryPanel"),n=(0,i.g2)("ResultPanel");return(0,i.uX)(),(0,i.CE)("div",R,[a[1]||(a[1]=(0,i.Lk)("div",{class:"scope-box"},[(0,i.Lk)("h2",{class:"cnt-title"},"Design Space"),(0,i.Lk)("a",{href:"/imgs/scope.png",target:"_blank"},[(0,i.Lk)("img",{width:"60%",src:"/imgs/scope.png",alt:""})])],-1)),(0,i.Lk)("div",$,[a[0]||(a[0]=(0,i.Lk)("h2",{class:"cnt-title",style:{"margin-left":"10%"}},"DataSet Query",-1)),(0,i.Lk)("div",z,[(0,i.Lk)("div",H,[(0,i.bF)(o)]),(0,i.Lk)("div",U,[(0,i.bF)(n)])])])])}const K={class:"querypanel-box"},Y={class:"eachScope-box"},J={class:"filter-box"},Q={class:"filter-box"},V={class:"filter-box"},Z={class:"filter-box"},ee={class:"filter-box"},ae={class:"filter-box"},te={class:"button-box"};function le(e,a,t,l,s,r){const o=(0,i.g2)("a-select-option"),n=(0,i.g2)("a-select-opt-group"),d=(0,i.g2)("a-select"),c=(0,i.g2)("a-button");return(0,i.uX)(),(0,i.CE)("div",K,[a[7]||(a[7]=(0,i.Lk)("h5",null,"Filters",-1)),(0,i.Lk)("div",Y,[(0,i.Lk)("div",J,[a[0]||(a[0]=(0,i.Lk)("h6",null,"Element",-1)),(0,i.bF)(d,{mode:"multiple",size:"middle",placeholder:"Select Element",style:{width:"100%"},onChange:r.handleElementsChange},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.elementOptions,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.label,label:e.label},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.options,(e=>((0,i.uX)(),(0,i.Wv)(o,{key:e.value,value:e.value},{default:(0,i.k6)((()=>[(0,i.eW)((0,O.v_)(e.label),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["onChange"])]),(0,i.Lk)("div",Q,[a[1]||(a[1]=(0,i.Lk)("h6",null,"Element:Axis",-1)),(0,i.bF)(d,{mode:"multiple",size:"middle",placeholder:"Select Element Axis",style:{width:"100%"},onChange:r.handleElementAxesChange},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.elementAxisOptions,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.label,label:e.label},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.options,(e=>((0,i.uX)(),(0,i.Wv)(o,{key:e.value,value:e.value},{default:(0,i.k6)((()=>[(0,i.eW)((0,O.v_)(e.label),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["onChange"])]),(0,i.Lk)("div",V,[a[2]||(a[2]=(0,i.Lk)("h6",null,"Layout",-1)),(0,i.bF)(d,{mode:"multiple",size:"middle",options:s.layoutOptions,placeholder:"Select Layout",style:{width:"100%"},onChange:r.handleLayoutChange},null,8,["options","onChange"])]),(0,i.Lk)("div",Z,[a[3]||(a[3]=(0,i.Lk)("h6",null,"Style",-1)),(0,i.bF)(d,{mode:"multiple",size:"middle",options:s.styleOptions,placeholder:"Select Style",style:{width:"100%"},onChange:r.handleStyleChange},null,8,["options","onChange"])]),(0,i.Lk)("div",ee,[a[4]||(a[4]=(0,i.Lk)("h6",null,"Embellishment",-1)),(0,i.bF)(d,{mode:"multiple",size:"middle",options:s.embellishmentOptions,placeholder:"Select Embellishment",style:{width:"100%"},onChange:r.handleEmbellishmentChange},null,8,["options","onChange"])]),(0,i.Lk)("div",ae,[a[5]||(a[5]=(0,i.Lk)("h6",null,"Composition",-1)),(0,i.bF)(d,{mode:"multiple",size:"middle",options:s.compositionOptions,placeholder:"Select Composition",style:{width:"100%"},onChange:r.handleCompositionChange},null,8,["options","onChange"])])]),(0,i.Lk)("div",te,[(0,i.bF)(c,{type:"primary",onClick:r.emitFilters},{default:(0,i.k6)((()=>a[6]||(a[6]=[(0,i.eW)("Apply Filters")]))),_:1},8,["onClick"])])])}var ie=t(1322),se=t(3051),re=t(595);const oe=(0,re.A)();var ne={name:"QueryPanel",components:{ASelect:ie.Ay,ASelectOptGroup:ie.tc,ASelectOption:ie.OQ,AButton:se.A},data(){return{selectedElements:[],selectedElementAxes:[],selectedLayout:[],selectedStyle:[],selectedEmbellishment:[],selectedComposition:[],elementOptions:[{label:"Ridge",options:[{label:"Area",value:"area"},{label:"Line",value:"line"},{label:"Bar",value:"bar"},{label:"Step",value:"step"}]},{label:"Optional",options:[{label:"Mode Line",value:"Mode Line"},{label:"Reference Line",value:"Reference Line"}]}],elementAxisOptions:[{label:"X-axis",options:[{label:"Time",value:"Time"},{label:"Ratio",value:"Ratio"},{label:"Longitude",value:"Longitude"},{label:"Level",value:"level"},{label:"Score",value:"Score"},{label:"Age",value:"age"}]},{label:"Y-axis",options:[{label:"Segmented Value",value:"segmented-value"},{label:"Category",value:"category"},{label:"Identity",value:"identity"}]},{label:"Z-axis",options:[{label:"Ratio",value:"ratio"},{label:"Count",value:"count"}]}],layoutOptions:[{label:"Transform",options:[{label:"Regular",value:"Regular"},{label:"Circular",value:"Circular"}]},{label:"Layer",options:[{label:"Stacked",value:"Stacked"},{label:"Overlay",value:"Overlay"},{label:"Alternate",value:"Alternate"},{label:"Juxtaposed",value:"Juxtaposed"},{label:"Separated",value:"Separated"}]},{label:"Order",options:[{label:"Statistic",value:"Statistic"},{label:"Peak",value:"Peak"},{label:"Meta",value:"Meta"}]},{label:"Overlap",options:[{label:"a little",value:"a little"},{label:"Moderate",value:"Moderate"},{label:"Dense",value:"Dense"}]}],styleOptions:[{label:"ColorUsage",options:[{label:"Encode Data",value:"Encode Data"},{label:"Style",value:"Style"}]},{label:"Border",options:[{label:"Stroke",value:"Stroke"},{label:"Shadow",value:"Shadow"}]},{label:"OpacityUsage",options:[{label:"Encode Data",value:"Encode Data"},{label:"Style",value:"Style"}]}],embellishmentOptions:[{label:"Background",options:[{label:"JOY DIVISION album style",value:"JOY DIVISION album style"},{label:"Book Style",value:"Book Style"},{label:"Ridgeline Style",value:"Ridgeline Style"}]},{label:"Decoration",options:[{label:"Detailed visualization",value:"Detailed visualization"}]}],compositionOptions:[{label:"composition",options:[{label:"Dot plot",value:"Dot plot"},{label:"Strip plot",value:"Strip plot"}]}]}},methods:{handleElementsChange(e){this.selectedElements=e},handleElementAxesChange(e){this.selectedElementAxes=e},handleLayoutChange(e){this.selectedLayout=e},handleStyleChange(e){this.selectedStyle=e},handleEmbellishmentChange(e){this.selectedEmbellishment=e},handleCompositionChange(e){this.selectedComposition=e},emitFilters(){const e=this.getFilteredOptions(this.selectedElements,this.elementOptions),a=this.getFilteredOptions(this.selectedElementAxes,this.elementAxisOptions),t=this.getFilteredOptions(this.selectedLayout,this.layoutOptions),l=this.getFilteredOptions(this.selectedStyle,this.styleOptions),i=this.getFilteredOptions(this.selectedEmbellishment,this.embellishmentOptions),s=this.getFilteredOptions(this.selectedComposition,this.compositionOptions);oe.emit("filterChanged",{selectedElements:e,selectedElementAxes:a,selectedLayout:t,selectedStyle:l,selectedEmbellishment:i,selectedComposition:s})},getFilteredOptions(e,a){const t=[];return a.forEach((a=>{a.options.forEach((l=>{e.includes(l.value)&&t.push({label:l.label,value:l.value,group:a.label})}))})),t}}};const de=(0,g.A)(ne,[["render",le],["__scopeId","data-v-649eabcd"]]);var ce=de;const pe=["onMouseover","onMouseleave"],he=["src","onError"],ue={key:1,class:"source-info"};function ge(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",null,[a[0]||(a[0]=(0,i.Lk)("h3",null,"Design Space Dataset",-1)),(0,i.Lk)("table",null,[(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.filteredTableData,((e,a)=>((0,i.uX)(),(0,i.CE)("tr",{key:a},[(0,i.Lk)("td",{onMouseover:e=>r.scrollImage(a),onMouseleave:e=>r.resetScroll(a)},[(0,i.Lk)("div",{class:"image-container",ref_for:!0,ref:"imageWrapper"+a},[s.imageErrorMap[a]?((0,i.uX)(),(0,i.CE)("div",ue," Source: "+(0,O.v_)(e[1]),1)):((0,i.uX)(),(0,i.CE)("img",{key:0,src:e[0],alt:"Image",onError:e=>r.handleImageError(a)},null,40,he))],512)],40,pe)])))),128))])])])}var me=t(3230),be={name:"ResultPanel",data(){return{headers:[],tableData:[],filteredTableData:[],filters:{selectedElements:[],selectedElementAxes:[],selectedLayout:[],selectedStyle:[],selectedEmbellishment:[],selectedComposition:[]},imageErrorMap:{}}},created(){oe.on("filterChanged",this.handleFilterChange)},beforeUnmount(){oe.off("filterChanged",this.handleFilterChange)},mounted(){this.loadExcelData()},methods:{handleFilterChange(e){this.filters=e,this.filterTableData()},filterTableData(){const e=[...this.filters.selectedElements,...this.filters.selectedElementAxes,...this.filters.selectedLayout,...this.filters.selectedStyle,...this.filters.selectedEmbellishment,...this.filters.selectedComposition];if(0===e.length)return void(this.filteredTableData=this.tableData);const a=this.groupFiltersByGroup(e);this.filteredTableData=this.tableData.filter((e=>Object.keys(a).every((a=>{const t=this.findColumnIndexByGroup(a);return-1===t||this.matchByGroup(e,t,a)}))))},matchByGroup(e,a,t){const l=this.getFiltersByGroup(t);return l.some((t=>e[a].toLowerCase().includes(t.label.toLowerCase())))},getFiltersByGroup(e){return[...this.filters.selectedElements,...this.filters.selectedElementAxes,...this.filters.selectedLayout,...this.filters.selectedStyle,...this.filters.selectedEmbellishment,...this.filters.selectedComposition].filter((a=>a.group.toLowerCase()===e.toLowerCase()))},groupFiltersByGroup(e){return e.reduce(((e,a)=>{const t=a.group.toLowerCase();return e[t]||(e[t]=[]),e[t].push(a),e}),{})},findColumnIndexByGroup(e){return this.headers.findIndex((a=>a.toLowerCase()===e.toLowerCase()))},scrollImage(e){const a=this.$refs["imageWrapper"+e][0];a&&a.scrollTo({top:a.scrollHeight,behavior:"smooth"})},resetScroll(e){const a=this.$refs["imageWrapper"+e][0];a&&a.scrollTo({top:0,behavior:"smooth"})},handleImageError(e){this.imageErrorMap[e]=!0},async loadExcelData(){try{const e=await fetch("/Design_space_dataset02.xlsx"),a=await e.arrayBuffer(),t=me.LF(a,{type:"array"}),l=t.SheetNames[0],i=me.Wp.sheet_to_json(t.Sheets[l],{header:1});this.headers=i[1],this.tableData=i.slice(2),this.filteredTableData=this.tableData}catch(e){console.error("Error reading excel file:",e)}}}};const ve=(0,g.A)(be,[["render",ge],["__scopeId","data-v-2f9c08d2"]]);var fe=ve,ye={name:"DesignSpacePage",components:{QueryPanel:ce,ResultPanel:fe}};const ke=(0,g.A)(ye,[["render",q],["__scopeId","data-v-4fd5b974"]]);var we=ke;function Ce(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",null,a[0]||(a[0]=[(0,i.Lk)("h1",null,"About Page",-1)]))}var Le={name:"AboutPage"};const Se=(0,g.A)(Le,[["render",Ce],["__scopeId","data-v-79a229dd"]]);var _e=Se;function Ee(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",null,a[0]||(a[0]=[(0,i.Lk)("h1",null,"Launch Page",-1)]))}var xe={name:"AppLaunchPage"};const Fe=(0,g.A)(xe,[["render",Ee],["__scopeId","data-v-31e7deec"]]);var Ae=Fe;const De={class:"gallery-card"};function Oe(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",De,a[0]||(a[0]=[(0,i.Fv)('<a href="/imgs/bicycle_flow.jpg" target="_blank" data-v-3714ca37><img width="480px" height="320px" src="/imgs/bicycle_flow.jpg" alt="" data-v-3714ca37></a><p class="img-r-description" data-v-3714ca37><b class="img-title" data-v-3714ca37>Bicycle Flow in Summer</b><br data-v-3714ca37><i data-v-3714ca37>A cyclic ridgeline plot visualizing bicycle flow of Washington D.C. station in summer.</i><br data-v-3714ca37><br data-v-3714ca37> This cyclic ridgeline plot highlights two peaks, one at 6:30.A.M.-8:30.A.M., which is the time period when residents go to work, and the other at 16:00.P.M.-19:00.P.M., which is the time period when residents go back to home. <br data-v-3714ca37><br data-v-3714ca37> Dataset: <a href="https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv" data-v-3714ca37>https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv</a></p>',2)]))}var Ie={name:"GalleryCardDetailBicycle",props:["name"],computed:{galleryName(){return this.$route.params.name}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})}}};const Te=(0,g.A)(Ie,[["render",Oe],["__scopeId","data-v-3714ca37"]]);var We=Te;const Ge={class:"gallery-card"};function Be(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",Ge,a[0]||(a[0]=[(0,i.Fv)('<a href="/imgs/activity.jpg" target="_blank" data-v-32bde6dc><img width="480px" height="530px" src="/imgs/activity.jpg" alt="" data-v-32bde6dc></a><p class="img-r-description" data-v-32bde6dc><b class="img-title" data-v-32bde6dc>Going with the Flow or March to the Peak of your own Ridge?</b><br data-v-32bde6dc><i data-v-32bde6dc>A cyclic ridgeline plot visualizing the temporal distribution of American activity preferences. Being reproduced from the artwork created by Lindberg.</i><br data-v-32bde6dc><br data-v-32bde6dc> Number of participants throughout the day compared to peak popularity. Note the spiral line reveals different activity time preference. There are morning-and-evening everyday workouts the midday hobbies, and the evenings/late nights out. <br data-v-32bde6dc><br data-v-32bde6dc> Dataset: <a href="https://www.bls.gov/tus/home.htm" data-v-32bde6dc>https://www.bls.gov/tus/home.htm</a><br data-v-32bde6dc> Reference: <a href="https://twitter.com/hnrklndbrg/status/883675698300420098" data-v-32bde6dc>Peak time for sports and leisure #dataviz</a></p>',2)]))}var Me={name:"GalleryCardDetail",props:["name"],computed:{galleryName(){return this.$route.params.name}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})}}};const je=(0,g.A)(Me,[["render",Be],["__scopeId","data-v-32bde6dc"]]);var Ne=je;const Xe={class:"gallery-card"};function Pe(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",Xe,a[0]||(a[0]=[(0,i.Fv)('<a href="../imgs/disease_fears.jpg" target="_blank" data-v-33ea9687><img width="480px" height="576px" src="../imgs/disease_fears.jpg" alt="" data-v-33ea9687></a><p class="img-r-description" data-v-33ea9687><b class="img-title" data-v-33ea9687>Mountains Out of Molehills</b><br data-v-33ea9687><i data-v-33ea9687>A ridgline plot revealing media-inflamed fears of infecious diseases. Being reproduced from the artwork created by David McCandless and Fabio Bergamaschi.</i><br data-v-33ea9687><br data-v-33ea9687> This ridgeline plot shows the distribution of media-inflamed fears of infecious diseases from 2001 to 2019. <br data-v-33ea9687><br data-v-33ea9687> Dataset: <a href="https://data.chhs.ca.gov/dataset/infectious-disease" data-v-33ea9687>https://data.chhs.ca.gov/dataset/infectious-disease</a><br data-v-33ea9687> Reference: <a href="https://informationisbeautiful.net/visualizations/mountains-out-of-molehills/" data-v-33ea9687>Mountains Out of Molehills</a></p>',2)]))}var Re={name:"GalleryCardDetail",props:["name"],computed:{galleryName(){return this.$route.params.name}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})}}};const $e=(0,g.A)(Re,[["render",Pe],["__scopeId","data-v-33ea9687"]]);var ze=$e;const He={class:"gallery-card"};function Ue(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",He,a[0]||(a[0]=[(0,i.Fv)('<a href="/imgs/population_distribution.jpg" target="_blank" data-v-5fb87835><img width="480px" height="320px" src="/imgs/population_distribution.jpg" alt="" data-v-5fb87835></a><p class="img-r-description" data-v-5fb87835><b class="img-title" data-v-5fb87835>Population Distribution of the United States</b><br data-v-5fb87835><i data-v-5fb87835>A geo ridgeline plot based on geographic map visualizing the population distribution of the United States. Being reproduced from the artwork created by J. Cheshire.</i><br data-v-5fb87835><br data-v-5fb87835> The distribution of Los Angeles, Chicago, Washington, D.C., and New York is visualized with red lines, highlighting the cities with the highest populations in the United States. <br data-v-5fb87835><br data-v-5fb87835> Dataset: <a href="https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv" data-v-5fb87835>https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv</a><br data-v-5fb87835> Reference: <a href="https://jcheshire.com/featured-maps/population-lines-how-and-why-i-created-it/" data-v-5fb87835>https://jcheshire.com/featured-maps/population-lines-how-and-why-i-created-it/</a></p>',2)]))}var qe={name:"GalleryCardDetail",props:["name"],computed:{galleryName(){return this.$route.params.name}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})}}};const Ke=(0,g.A)(qe,[["render",Ue],["__scopeId","data-v-5fb87835"]]);var Ye=Ke;const Je={class:"gallery-card"};function Qe(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",Je,a[0]||(a[0]=[(0,i.Lk)("a",{href:"/imgs/song.jpg",target:"_blank"},[(0,i.Lk)("img",{width:"480px",height:"557px",src:"/imgs/song.jpg",alt:""})],-1),(0,i.Lk)("p",{class:"img-r-description"},[(0,i.Lk)("b",{class:"img-title"},"Songs and Sunsets"),(0,i.Lk)("br"),(0,i.Lk)("i",null,"A ridgeline plot visualizing a user's music listening preferences."),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.eW)(" This ridgeline plot shows the distribution of a user's listening preferences for each month based on the bar element. Since the user mainly focuses on listening at dusk, an orange background is used to represent the time of sunset. "),(0,i.Lk)("br"),(0,i.Lk)("br")],-1)]))}var Ve={name:"GalleryCardDetail",props:["name"],computed:{galleryName(){return this.$route.params.name}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})}}};const Ze=(0,g.A)(Ve,[["render",Qe],["__scopeId","data-v-79d297a4"]]);var ea=Ze;const aa={class:"gallery-card"};function ta(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",aa,a[0]||(a[0]=[(0,i.Fv)('<a href="imgs/trendiest_baby_names.jpg" target="_blank" data-v-af8d2fb2><img width="480px" height="757px" src="imgs/trendiest_baby_names.jpg" alt="" data-v-af8d2fb2></a><p class="img-r-description" data-v-af8d2fb2><b class="img-title" data-v-af8d2fb2>Trendiest Female Baby Names</b><br data-v-af8d2fb2><i data-v-af8d2fb2>A ridgeline plot visualizing the trendiest female baby names since 1930, in the U.S. Being reproduced from the artwork created by Nathan Yau.</i><br data-v-af8d2fb2><br data-v-af8d2fb2> This ridgeline plot based on the bar element shows the usage of trendiest female baby names since 1930. Each name has a corresponding most popular year and they are arranged horizontally according to the corresponding year. <br data-v-af8d2fb2><br data-v-af8d2fb2> Dataset: <a href="https://www.ssa.gov/oact/babynames/limits.html" data-v-af8d2fb2>https://www.ssa.gov/oact/babynames/limits.html</a><br data-v-af8d2fb2> Reference: <a href="https://flowingdata.com/2022/02/17/trendiest-baby-name-every-year-since-1930-in-the-u-s/" data-v-af8d2fb2>Trendiest baby name every year since 1930, in the U.S.</a></p>',2)]))}var la={name:"GalleryCardDetail",props:["name"],computed:{galleryName(){return this.$route.params.name}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})}}};const ia=(0,g.A)(la,[["render",ta],["__scopeId","data-v-af8d2fb2"]]);var sa=ia;const ra={class:"gallery-card"};function oa(e,a,t,l,s,r){return(0,i.uX)(),(0,i.CE)("div",ra,a[0]||(a[0]=[(0,i.Fv)('<a href="/imgs/winged_migration.jpg" target="_blank" data-v-82bb0c68><img width="480px" height="540px" src="/imgs/winged_migration.jpg" alt="" data-v-82bb0c68></a><p class="img-r-description" data-v-82bb0c68><b class="img-title" data-v-82bb0c68>Winged Migration</b><br data-v-82bb0c68><i data-v-82bb0c68>A ridgeline plot visualizing Google Trend of five migration bird species in Canada.</i><br data-v-82bb0c68><br data-v-82bb0c68> This ridgeline plot is based on the classic AREA graph and shows the distribution of the number of searches for the five migration bird species in Canada, and interestingly, the peaks correspond exactly to the timing of their migration. <br data-v-82bb0c68><br data-v-82bb0c68> Dataset: <a href="./data/canada birds.csv" data-v-82bb0c68>Google Trend</a></p>',2)]))}var na={name:"GalleryCardDetail",props:["name"],computed:{galleryName(){return this.$route.params.name}},methods:{scrollImage(){const e=this.$refs.imageWrapper;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},resetScroll(){const e=this.$refs.imageWrapper;e.scrollTo({top:0,behavior:"smooth"})}}};const da=(0,g.A)(na,[["render",oa],["__scopeId","data-v-82bb0c68"]]);var ca=da;const pa=[{path:"/",component:x},{path:"/gallery",component:P},{path:"/designSpace",component:we},{path:"/about",component:_e},{path:"/app",component:Ae},{path:"/gallery/:name",name:"GalleryCardDetailBicycle",component:We},{path:"/gallery/:name",name:"GalleryCardDetailGoing",component:Ne},{path:"/gallery/:name",name:"GalleryCardDetailMountains",component:ze},{path:"/gallery/:name",name:"GalleryCardDetailPopulation",component:Ye},{path:"/gallery/:name",name:"GalleryCardDetailSongs",component:ea},{path:"/gallery/:name",name:"GalleryCardDetailTrendiest",component:sa},{path:"/gallery/:name",name:"GalleryCardDetailWinged",component:ca}],ha=(0,k.aE)({history:(0,k.LA)(),routes:pa});var ua=ha;const ga=(0,l.Ef)(y);ga.use(ua),ga.mount("#app")}},a={};function t(l){var i=a[l];if(void 0!==i)return i.exports;var s=a[l]={exports:{}};return e[l].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,l,i,s){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],i=e[c][1],s=e[c][2];for(var o=!0,n=0;n<l.length;n++)(!1&s||r>=s)&&Object.keys(t.O).every((function(e){return t.O[e](l[n])}))?l.splice(n--,1):(o=!1,s<r&&(r=s));if(o){e.splice(c--,1);var d=i();void 0!==d&&(a=d)}}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,i,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p=""}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var i,s,r=l[0],o=l[1],n=l[2],d=0;if(r.some((function(a){return 0!==e[a]}))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(n)var c=n(t)}for(a&&a(l);d<r.length;d++)s=r[d],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},l=self["webpackChunkridgebuilderweb"]=self["webpackChunkridgebuilderweb"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(103)}));l=t.O(l)})();
//# sourceMappingURL=app.97ca2f59.js.map