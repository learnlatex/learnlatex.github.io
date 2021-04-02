---
layout: "page"
lang: "en"
title: Site Settings
permalink: /en/SETTINGS
---
# Site Settings (User Preferences)

## Accept or Delete Cookies

Cookies are small pieces of data that are stored by your browser.
By default no cookies are used by this site, but any options set on
this page are stored in cookies.

Accept cookies here to enable the use of cookies on this site and to
enable the menu options below.


{% include settings-accept.html 
   accept="Accept Cookies"
   reset= "Reset: Delete All Cookies"
%}

## Default Return
The `return` form parameter that TeXLive.net should use in the absence of a setting via `% !TeX` comments in the example.


<!-- {% raw %} -->
<select id="returnsel"></select>

<script>
  var returnsel=document.getElementById('returnsel');
  returnsel.disabled=!rlallowcookies;
	var returns=[
	["PDF",
		["PDF.js", "PDF"]],
    ["HTML",
	 ["make4ht"]],
    ["Text",
      ["log"]]
   ];
  var sel="";
  for (let g=0;g<returns.length;g++) {
      sel=sel+"<optgroup label=\"" + returns[g][0] + "\">" ;
      var values=returns[g][1];
      for(let i = 0; i < values.length; i++) {
	  var v=values[i].toLowerCase().replace(/[.]/g,'');
          sel=sel+"<option value=\"" + v + "\"" +
	      (v==rldefaultreturn ? " selected>" : ">") +
	      values[i] + "</option>";
      }
      sel=sel+"</optgroup>";
  }
  returnsel.innerHTML=sel;
  returnsel.addEventListener('change', function() {
      createCookie('runlatex-return',enginesel.options[returnsel.selectedIndex].value,100);
  });
</script>
<!-- {% endraw %} -->



## Default Engine
The `engine` form parameter that TeXLive.net or Overleaf should use in the absence of a setting via `% !TeX` comments in the example. (`-dev` and `context` options should not be used at Overleaf.)



<!-- {% raw %} -->
<select id="engine"></select>

<script>
  var enginesel=document.getElementById('engine');
  enginesel.disabled=!rlallowcookies;
	var engines=[
	["LaTeX",
		["pdfLaTeX", "pdfLaTeX-dev", "LaTeX", "LaTeX-dev",
		 "LuaLaTeX", "LuaLaTeX-dev", "XeLaTeX", "XeLaTeX-dev",
         "pLaTeX", "pLaTeX-dev", "upLaTeX", "upLaTeX-dev"]],
    ["Plain TeX",
	 ["pdftex", "tex", "luatex", "xetex", "ptex", "uptex"]],
    ["ConTeXt",
      ["ConTeXt"]]
   ];
  var sel="";
  for (let g=0;g<engines.length;g++) {
      sel=sel+"<optgroup label=\"" + engines[g][0] + "\">" ;
      var values=engines[g][1];
      for(let i = 0; i < values.length; i++) {
	  var v=values[i].toLowerCase();
          sel=sel+"<option value=\"" + v + "\"" +
	      (v==rldefaultengine ? " selected>" : ">") +
	      values[i] + "</option>";
      }
      sel=sel+"</optgroup>";
  }
  enginesel.innerHTML=sel;
  enginesel.addEventListener('change', function() {
      createCookie('runlatex-engine',enginesel.options[enginesel.selectedIndex].value,100);
  });
</script>
<!-- {% endraw %} -->


## Editor Theme
The theme used by the embedded ACE editor.

<!-- {% raw %} -->
<select id="ace-theme"></select>

<script>
  var themesel=document.getElementById('ace-theme');
  themesel.disabled=!rlallowcookies;
  var themes=[
      ["Bright",
       ['Chrome', 'Clouds', 'Crimson Editor', 'Dawn', 'Dreamweaver', 'Eclipse', 'GitHub', 'IPlastic', 
	     'Solarized Light', 'TextMate', 'Tomorrow', 'Xcode', 'Kuroir', 'KatzenMilch', 'SQL Server']],
      ["Dark",
       ['Ambiance', 'Chaos', 'Clouds Midnight', 'Dracula', 'Cobalt', 'Gruvbox', 'Green on Black',
	    'idle Fingers', 'krTheme', 'Merbivore', 'Merbivore Soft', 'Mono Industrial', 'Monokai',
		'Nord Dark', 'Pastel on dark', 'Solarized Dark', 'Terminal', 'Tomorrow Night', 'Tomorrow Night Blue',
		'Tomorrow Night Bright', 'Tomorrow Night 80s', 'Twilight', 'Vibrant Ink']]
      ];
  var sel="";
  for (let g=0;g<themes.length;g++) {
      sel=sel+"<optgroup label=\"" + themes[g][0] + "\">" ;
      var values=themes[g][1];
      for(let i = 0; i < values.length; i++) {
	  var v="ace/theme/" + values[i].toLowerCase().replace(/ /g,'_');
          sel=sel+"<option value=\"" + v + "\"" +
	      (v==rlacetheme ? " selected>" : ">") +
	      values[i] + "</option>";
      }
      sel=sel+"</optgroup>";
  }
  themesel.innerHTML=sel;
  themesel.addEventListener('change', function() {
      createCookie('runlatex-acetheme',themesel.options[themesel.selectedIndex].value,100);
  });
</script>
<!-- {% endraw %} -->
