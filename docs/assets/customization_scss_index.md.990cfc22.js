import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.62356364.js";const F=JSON.parse('{"title":"Customization - SCSS","description":"Datepicker custom scss configuration","frontmatter":{"title":"Customization - SCSS","description":"Datepicker custom scss configuration"},"headers":[],"relativePath":"customization/scss/index.md"}'),o={name:"customization/scss/index.md"},p=l(`<h1 id="scss" tabindex="-1">SCSS <a class="header-anchor" href="#scss" aria-label="Permalink to &quot;SCSS&quot;">​</a></h1><p>For easier style configuration you can import the <code>scss</code> file and modify the default properties</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Info</p><ul><li>If you are modifying the scss variables, make sure that you override the variable before importing the <code>scss</code> file</li><li>Do not import <code>css</code> file if you import the <code>scss</code> file</li></ul></div><p>Available properties are:</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// General</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__font_family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -apple-system</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blinkmacsystemfont</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Segoe UI</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> roboto</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> oxygen</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ubuntu</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cantarell</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Open Sans</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Helvetica Neue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Font size for the menu</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__border_radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Border radius everywhere</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__cell_border_radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $dp__border_radius </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Specific border radius for the calendar cell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Transitions</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__transition_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Passed to the translateX in animation</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__transition_duration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1s</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Transition duration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Sizing</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__button_height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// size for buttons in overlays</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__month_year_row_height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// height of the month-year select row</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__month_year_row_button_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Specific height for the next/previous buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__button_icon_height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// icon sizing in buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__cell_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// width and height of calendar cell</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__cell_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// padding in the cell</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__common_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__input_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// padding in the input</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__input_icon_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Padding on the left side of the input if icon is present</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__menu_min_width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">260px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Adjust the min width of the menu</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__action_buttons_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Adjust padding for the action buttons in action row</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__row_margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Adjust the spacing between rows in the calendar</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__calendar_header_cell_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Adjust padding in calendar header cells</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__two_calendars_spacing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Space between two calendars if using two calendars</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__overlay_col_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Padding in the overlay column</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__time_inc_dec_button_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Sizing for arrow buttons in the time picker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Font sizes</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// overall font-size</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__preview_font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.8rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// font size of the date preview in the action row</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__time_font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// font size in the time picker</span></span>
<span class="line"></span></code></pre></div>`,6),e=[p];function t(c,r,C,y,i,D){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};