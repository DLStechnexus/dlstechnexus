/* Slider 1 */
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
		window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
		if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
		window.revapi1 = jQuery(window.revapi1);
		if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
		revapi1.revolutionInit({
				revapi:"revapi1",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"980,800,700,550",
				perspective:600,
				perspectiveType:"global",
				editorheight:"980,800,700,550",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"hephaistos",
						hide_onmobile:true,
						hide_under:"1024px",
						left: {
							container:"layergrid",
							h_align:"right",
							h_offset:30,
							v_offset:-40
						},
						right: {
							container:"layergrid",
							h_offset:30,
							v_offset:40
						}
					}
				},
				parallax: {
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
					type:"mousescroll",
					origo:"slidercenter",
					speed:0
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 2 */
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider12"] = {once: RS_MODULES.modules["revslider12"]!==undefined ? RS_MODULES.modules["revslider12"].once : undefined, init:function() {
		window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_1_2") : window.revapi2;
		if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider12"].init()}); return;}
		window.revapi2 = jQuery(window.revapi2);
		if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_2"); return;}
		revapi2.revolutionInit({
				revapi:"revapi2",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1200,1024,778,480",
				gridheight:"815,700,600,500",
				forceOverflow:true,
				perspective:600,
				perspectiveType:"global",
				editorheight:"815,700,600,500",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"custom",
						left: {
							container:"layergrid",
							h_align:"center",
							v_align:"bottom",
							h_offset:-30
						},
						right: {
							container:"layergrid",
							h_align:"center",
							v_align:"bottom",
							h_offset:30
						}
					}
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 3 */
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider13"] = {once: RS_MODULES.modules["revslider13"]!==undefined ? RS_MODULES.modules["revslider13"].once : undefined, init:function() {
		window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_1_3") : window.revapi3;
		if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider13"].init()}); return;}
		window.revapi3 = jQuery(window.revapi3);
		if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_3"); return;}
		revapi3.revolutionInit({
				revapi:"revapi3",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"985,800,650,500",
				perspective:600,
				perspectiveType:"global",
				editorheight:"985,800,650,500",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						tmp:"<div class=\"tp-title-wrap\">  	<div class=\"tp-arr-imgholder\"></div> </div>",
						style:"zeus",
						hide_onmobile:true,
						hide_under:"1300px",
						left: {
							h_offset:30
						},
						right: {
							h_offset:30
						}
					}
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 4 */
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider14"] = {once: RS_MODULES.modules["revslider14"]!==undefined ? RS_MODULES.modules["revslider14"].once : undefined, init:function() {
		window.revapi4 = window.revapi4===undefined || window.revapi4===null || window.revapi4.length===0  ? document.getElementById("rev_slider_1_4") : window.revapi4;
		if(window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length==0) { window.revapi4initTry = window.revapi4initTry ===undefined ? 0 : window.revapi4initTry+1; if (window.revapi4initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider14"].init()}); return;}
		window.revapi4 = jQuery(window.revapi4);
		if(window.revapi4.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_4"); return;}
		revapi4.revolutionInit({
				revapi:"revapi4",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1170,1024,778,480",
				gridheight:"978,768,600,500",
				perspective:600,
				perspectiveType:"global",
				editorheight:"978,768,600,500",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					onHoverStop:false
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 5 */
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider15"] = {once: RS_MODULES.modules["revslider15"]!==undefined ? RS_MODULES.modules["revslider15"].once : undefined, init:function() {
		window.revapi5 = window.revapi5===undefined || window.revapi5===null || window.revapi5.length===0  ? document.getElementById("rev_slider_1_5") : window.revapi5;
		if(window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length==0) { window.revapi5initTry = window.revapi5initTry ===undefined ? 0 : window.revapi5initTry+1; if (window.revapi5initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider15"].init()}); return;}
		window.revapi5 = jQuery(window.revapi5);
		if(window.revapi5.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_5"); return;}
		revapi5.revolutionInit({
				revapi:"revapi5",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1194,1024,778,480",
				gridheight:"815,700,600,500",
				forceOverflow:true,
				perspective:600,
				perspectiveType:"global",
				editorheight:"815,700,600,500",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"custom",
						hide_onmobile:true,
						hide_under:"1024px",
						left: {
							container:"layergrid",
							h_align:"center",
							v_align:"bottom",
							h_offset:-34
						},
						right: {
							container:"layergrid",
							h_align:"center",
							v_align:"bottom",
							h_offset:25
						}
					}
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 6 */
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider16"] = {once: RS_MODULES.modules["revslider16"]!==undefined ? RS_MODULES.modules["revslider16"].once : undefined, init:function() {
	   window.revapi6 = window.revapi6===undefined || window.revapi6===null || window.revapi6.length===0  ? document.getElementById("rev_slider_1_6") : window.revapi6;
	   if(window.revapi6 === null || window.revapi6 === undefined || window.revapi6.length==0) { window.revapi6initTry = window.revapi6initTry ===undefined ? 0 : window.revapi6initTry+1; if (window.revapi6initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider16"].init()}); return;}
	   window.revapi6 = jQuery(window.revapi6);
	   if(window.revapi6.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_6"); return;}
	   revapi6.revolutionInit({
			 revapi:"revapi6",
			 DPR:"dpr",
			 sliderLayout:"fullwidth",
			 visibilityLevels:"1240,1024,778,480",
			 gridwidth:"1240,1024,778,480",
			 gridheight:"970,750,600,400",
			 perspective:600,
			 perspectiveType:"global",
			 editorheight:"970,750,600,400",
			 responsiveLevels:"1240,1024,778,480",
			 progressBar:{disableProgressBar:true},
			 navigation: {
				onHoverStop:false
			 },
			 parallax: {
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
				type:"mouse",
				origo:"slidercenter",
				speed:0
			 },
			 viewPort: {
				global:false,
				globalDist:"-200px",
				enable:false
			 },
			 fallbacks: {
				allowHTML5AutoPlayOnAndroid:true
			 },
	   });
	   
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};