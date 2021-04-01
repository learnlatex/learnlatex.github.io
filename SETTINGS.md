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
  themesel.innerHTML='@optgroup label="Bright">@option value="ace/theme/chrome">Chrome@/option>@option value="ace/theme/clouds">Clouds@/option>@option value="ace/theme/crimson_editor">Crimson Editor@/option>@option value="ace/theme/dawn">Dawn@/option>@option value="ace/theme/dreamweaver">Dreamweaver@/option>@option value="ace/theme/eclipse">Eclipse@/option>@option value="ace/theme/github">GitHub@/option>@option value="ace/theme/iplastic">IPlastic@/option>@option value="ace/theme/solarized_light">Solarized Light@/option>@option value="ace/theme/textmate">TextMate@/option>@option value="ace/theme/tomorrow">Tomorrow@/option>@option value="ace/theme/xcode">Xcode@/option>@option value="ace/theme/kuroir">Kuroir@/option>@option value="ace/theme/katzenmilch">KatzenMilch@/option>@option value="ace/theme/sqlserver">SQL Server@/option>@/optgroup>@optgroup label="Dark">@option value="ace/theme/ambiance">Ambiance@/option>@option value="ace/theme/chaos">Chaos@/option>@option value="ace/theme/clouds_midnight">Clouds Midnight@/option>@option value="ace/theme/dracula">Dracula@/option>@option value="ace/theme/cobalt">Cobalt@/option>@option value="ace/theme/gruvbox">Gruvbox@/option>@option value="ace/theme/gob">Green on Black@/option>@option value="ace/theme/idle_fingers">idle Fingers@/option>@option value="ace/theme/kr_theme">krTheme@/option>@option value="ace/theme/merbivore">Merbivore@/option>@option value="ace/theme/merbivore_soft">Merbivore Soft@/option>@option value="ace/theme/mono_industrial">Mono Industrial@/option>@option value="ace/theme/monokai">Monokai@/option>@option value="ace/theme/nord_dark">Nord Dark@/option>@option value="ace/theme/pastel_on_dark">Pastel on dark@/option>@option value="ace/theme/solarized_dark">Solarized Dark@/option>@option value="ace/theme/terminal">Terminal@/option>@option value="ace/theme/tomorrow_night">Tomorrow Night@/option>@option value="ace/theme/tomorrow_night_blue">Tomorrow Night Blue@/option>@option value="ace/theme/tomorrow_night_bright">Tomorrow Night Bright@/option>@option value="ace/theme/tomorrow_night_eighties">Tomorrow Night 80s@/option>@option value="ace/theme/twilight">Twilight@/option>@option value="ace/theme/vibrant_ink">Vibrant Ink@/option>@/optgroup>'.replace(/@/g,'<');
  themesel.selectedIndex=parseInt(rlacethemenum);
  themesel.addEventListener('change', function() {
      createCookie('runlatex-acethemenum',themesel.selectedIndex,100);
      createCookie('runlatex-acetheme',themesel.options[themesel.selectedIndex].value,100);
  });
</script>
<!-- {% endraw %} -->
