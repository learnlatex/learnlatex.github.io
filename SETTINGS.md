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


<span style="white-space:nowrap"><input name="engine" id="pdflatex" type="radio" onclick="rlSetEngine('pdflatex')"> <label for="pdflatex">pdflatex</label></span>
<span style="white-space:nowrap"><input name="engine" id="pdflatex-dev" type="radio" onclick="rlSetEngine('pdflatex-dev')"> <label for="pdf">pdflatex-dev</label></span>
<span style="white-space:nowrap"><input name="engine" id="latex" type="radio" onclick="rlSetEngine('latex')"> <label for="latex">latex</label></span>
<span style="white-space:nowrap"><input name="engine" id="latex-dev" type="radio" onclick="rlSetEngine('latex-dev')"> <label for="pdf">latex-dev</label></span>
<span style="white-space:nowrap"><input name="engine" id="lualatex" type="radio" onclick="rlSetEngine('lualatex')"> <label for="lualatex">lualatex</label></span>
<span style="white-space:nowrap"><input name="engine" id="lualatex-dev" type="radio" onclick="rlSetEngine('lualatex-dev')"> <label for="pdf">lualatex-dev</label></span>
<span style="white-space:nowrap"><input name="engine" id="xelatex" type="radio" onclick="rlSetEngine('xelatex')"> <label for="xelatex">xelatex</label></span>
<span style="white-space:nowrap"><input name="engine" id="xelatex-dev" type="radio" onclick="rlSetEngine('xelatex-dev')"> <label for="pdf">xelatex-dev</label></span>
<span style="white-space:nowrap"><input name="engine" id="platex" type="radio" onclick="rlSetEngine('platex')"> <label for="platex">platex</label></span>
<span style="white-space:nowrap"><input name="engine" id="platex-dev" type="radio" onclick="rlSetEngine('platex-dev')"> <label for="pdf">platex-dev</label></span>
<span style="white-space:nowrap"><input name="engine" id="uplatex" type="radio" onclick="rlSetEngine('uplatex')"> <label for="uplatex">uplatex</label></span>
<span style="white-space:nowrap"><input name="engine" id="uplatex-dev" type="radio" onclick="rlSetEngine('uplatex-dev')"> <label for="pdf">uplatex-dev</label></span>


<span style="white-space:nowrap"><input name="engine" id="pdftex" type="radio" onclick="rlSetEngine('pdftex')"> <label for="pdftex">pdftex</label></span>
<span style="white-space:nowrap"><input name="engine" id="tex" type="radio" onclick="rlSetEngine('tex')"> <label for="tex">tex</label></span>
<span style="white-space:nowrap"><input name="engine" id="luatex" type="radio" onclick="rlSetEngine('luatex')"> <label for="luatex">luatex</label></span>
<span style="white-space:nowrap"><input name="engine" id="xetex" type="radio" onclick="rlSetEngine('xetex')"> <label for="xetex">xetex</label></span>
<span style="white-space:nowrap"><input name="engine" id="ptex" type="radio" onclick="rlSetEngine('ptex')"> <label for="ptex">ptex</label></span>
<span style="white-space:nowrap"><input name="engine" id="uptex" type="radio" onclick="rlSetEngine('uptex')"> <label for="uptex">uptex</label></span>


<span style="white-space:nowrap"><input name="engine" id="context" type="radio" onclick="rlSetEngine('context')"> <label for="contex">context</label></span>



<script>
  document.getElementById(rldefaultengine).checked=true;
</script>


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
