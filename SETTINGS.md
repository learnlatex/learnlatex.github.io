---
layout: "page"
lang: "en"
title: Site Settings
permalink: /SETTINGS
---
# Site Settings (User Preferences)

## Hic Sunt Dracones

By default no cookies are used by this site, but any options set on
this page are set in cookies, use of the menu items below indicates
acceptance for cookies to be used on this site.


## Default Return
The `return` form parameter that TeXLive.net should use in the absence of a setting via `% !TeX` comments in the example.


<span style="white-space:nowrap"><input name="ret" id="pdfjs" type="radio" onclick="rlSetReturn('pdfjs')"> <label for="pdfjs">PDF.js</label></span>


<span style="white-space:nowrap"><input name="ret" id="pdf" type="radio" onclick="rlSetReturn('pdf')"> <label for="pdf">PDF</label></span>


<span style="white-space:nowrap"><input name="ret" id="make4ht" type="radio" onclick="rlSetReturn('make4ht')"> <label for="make4ht">make4ht</label></span>


<span style="white-space:nowrap"><input name="ret" id="log" type="radio" onclick="rlSetReturn('log')"> <label for="log">log</label></span>

<script>
  document.getElementById(rldefaultreturn).checked=true;
</script>



## Default Engine
The `engine` form parameter that TeXLive.net or Overleaf should use in the absence of a setting via `% !TeX` comments in the example. (`-dev` and `context` options should not be used at Overleaf.)



<!-- {% raw %} -->
<select id="engine"></select>

<script>
  var enginesel=document.getElementById('engine');
	var engines=[
	["LaTeX",
		["pdfLaTeX", "pdfLaTeX-dev", "LaTeX", "LaTeX-dev", "LuaLaTeX", "LuaLaTeX-dev", "XeLaTeX", "XeLaTeX-dev",
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
