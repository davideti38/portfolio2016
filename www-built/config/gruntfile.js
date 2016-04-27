module.exports=function(s){require("load-grunt-tasks")(s),require("time-grunt")(s),s.initConfig({requirejs:{compile:{options:{appDir:"../../www/",mainConfigFile:"../src/js/common.js",dir:"../../www-built/",optimize:"uglify2",optimizeCss:"false",preserveLicenseComments:!1,removeCombined:!0,optimizeAllPluginResources:!1,fileExclusionRegExp:/node_modules/,modules:[{name:"common",include:["jquery","jqueryUI","transit","svgLoader","menu","lang"]},{name:"index",include:["diamond","preload","typed","scrollBar","resumer"],exclude:["common"]},{name:"contact",include:["form"],exclude:["common"]},{name:"works",include:["sideBar","headerScroll"],exclude:["common"]}]}}},concat:{options:{separator:";"},dist:{src:["../src/js/libs/*","../src/js/libs/vendors/*","../src/js/*.js","../src/img/svg/fallbacks/grunticon.loader.js"],dest:"../dist/js/concat.js"}},uglify:{dist:{src:["../dist/js/concat.js"],dest:"../dist/js/min.js"}},cssmin:{dist:{files:{"../../www-built/src/css/style.css":["../src/css/style.css","../src/css/libs/*"]}}},grunticon:{icons:{files:[{expand:!0,cwd:"../src/img/svg/",src:["*.svg"],dest:"../src/img/svg/fallbacks/"}],options:{enhanceSVG:!0}}},svgmin:{options:{plugins:[{removeViewBox:!1},{removeUselessStrokeAndFill:!1}]},dist:{files:[{expand:!0,src:["../src/img/svg/*.svg"],dest:"../../www-built/img/svg/"}]}},imagemin:{dist:{files:[{expand:!0,cwd:"../src/img",src:["*.{png,jpg,gif}"],dest:"../../www-built/src/img/"}]},options:{optimizationLevel:3,progressive:!0}},replace:{dist:{src:["../dist/css/min.css"],overwrite:!0,replacements:[{from:"../img/",to:"../dist/img/"}]}},sass:{options:{require:"susy",sourceMap:!0,outputStyle:"compressed"},dist:{files:{"../src/css/style_en.css":"../src/scss/style_en.scss","../src/css/style_jp.css":"../src/scss/style_jp.scss"}}},postcss:{options:{map:!1,map:{inline:!1,annotation:"dist/css/maps/"},processors:[require("autoprefixer-core")({browsers:"last 2 versions"})]},dist:{src:"../src/css/*.css"}},watch:{options:{livereload:!0},scss:{files:["../src/scss/**/*.scss"],tasks:["sass","postcss"]},html:{files:["../*.html"]},php:{files:["../*.php"]},css:{files:["../css/style.css"]},js:{files:["../js/effect.js"]},svg:{files:["../src/img/svg/*.svg"],tasks:["grunticon"]}},concurrent:{concat:["concat"],compression:["uglify","cssmin"],traitementImages:["imagemin"]}}),s.registerTask("prod",["sass","postcss","requirejs"])};