this["JST"] = this["JST"] || {};

this["JST"]["loader"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="loader">\n<div class="pb-loading">\n<div class="pb-icon-wrapper bounce" style="font-size: 1.8em; ">\n<div class="pb-icon">\n</div>\n</div>\n<hr class="pb-loading-line">\n<span class="pb-loading-text">\nLoading...\n</span>\n</div>\n</div>';}return __p};

this["JST"]["mainLayout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<!--topbar-->\n<div class="<!--contain-to-grid sticky-->">\n<nav class="top-bar" data-topbar> <ul class="title-area"> <li class="name"> <h1><a href="#">My Site</a></h1> </li> <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone --> <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li> </ul> <section class="top-bar-section"> <!-- Right Nav Section --> <ul class="right"> <li class="active"><a href="#">Right Button Active</a></li> <li class="has-dropdown"> <a href="#">Right Button Dropdown</a> <ul class="dropdown"> <li><a href="#">First link in dropdown</a></li> </ul> </li> </ul> <!-- Left Nav Section --> <ul class="left"> <li><a href="#">Left Nav Button</a></li> </ul> </section> </nav>\n</div>\n<!--sideslidebar-->\n<div class="off-canvas-wrap" data-offcanvas> <div class="inner-wrap"> <nav class="tab-bar"> <section class="left-small"> <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a> </section> <section class="middle tab-bar-section"> <h1 class="title">Foundation</h1> </section> <section class="right-small"> <a class="right-off-canvas-toggle menu-icon" href="#"><span></span></a> </section> </nav> <aside class="left-off-canvas-menu"> <ul class="off-canvas-list"> <li><label>Foundation</label></li> <li><a href="#">The Psychohistorians</a></li> <li><a href="#">...</a></li> </ul> </aside> <aside class="right-off-canvas-menu"> <ul class="off-canvas-list"> <li><label>Users</label></li> <li><a href="#">Hari Seldon</a></li> <li><a href="#">...</a></li> </ul> </aside> <section class="main-section"> <!-- content goes here --> </section> <a class="exit-off-canvas"></a> </div> </div><!--sidebar css-->\n<ul class="side-nav"> <li class="active"><a href="#">Link 1</a></li> <li><a href="#">Link 2</a></li> <li class="divider"></li> <li><a href="#">Link 3</a></li> <li><a href="#">Link 4</a></li> </ul>\n<!--magellan sticky nav-->\n<div data-options="destination_threshold:65;throttle_delay:0;" data-magellan-expedition="fixed" class="magellan-container" style="">\n<dl class="sub-nav">\n<dd data-magellan-arrival="arrival" class=""><a href="#arrival">Magellan example</a></dd>\n<dd data-magellan-arrival="destination" class=""><a href="#destination">Destination</a></dd>\n<dd data-magellan-arrival="js" class=""><a href="#js">Javascript</a></dd>\n</dl>\n</div>\n<!--sub-nav css-->\n<dl class="sub-nav"> <dt>Filter:</dt> <dd class="active"><a href="#">All</a></dd> <dd><a href="#">Active</a></dd> <dd><a href="#">Pending</a></dd> <dd><a href="#">Suspended</a></dd> </dl>\n<!-- breadcrumbs -->\n<ul class="breadcrumbs"> <li><a href="#">Home</a></li> <li><a href="#">Features</a></li> <li class="unavailable"><a href="#">Gene Splicing</a></li> <li class="current"><a href="#">Cloning</a></li> </ul>\n<!--pagination-->\n<div class="pagination-centered">\n<ul class="pagination"> <li class="arrow unavailable"><a href="">&laquo;</a></li> <li class="current"><a href="">1</a></li> <li><a href="">2</a></li> <li><a href="">3</a></li> <li><a href="">4</a></li> <li class="unavailable"><a href="">&hellip;</a></li> <li><a href="">12</a></li> <li><a href="">13</a></li> <li class="arrow"><a href="">&raquo;</a></li> </ul>\n</div>\n<!-- forms -->\n<form> <div class="row"> <div class="large-12 columns"> <label>Input Label <input type="text" placeholder="large-12.columns" /> </label> </div> </div> <div class="row"> <div class="large-4 columns"> <label>Input Label <input type="text" placeholder="large-4.columns" /> </label> </div> <div class="large-4 columns"> <label>Input Label <input type="text" placeholder="large-4.columns" /> </label> </div> <div class="large-4 columns"> <div class="row collapse"> <label>Input Label</label> <div class="small-9 columns"> <input type="text" placeholder="small-9.columns" /> </div> <div class="small-3 columns"> <span class="postfix">.com</span> </div> </div> </div> </div> <div class="row"> <div class="large-12 columns"> <label>Select Box <select> <option value="husker">Husker</option> <option value="starbuck">Starbuck</option> <option value="hotdog">Hot Dog</option> <option value="apollo">Apollo</option> </select> </label> </div> </div> <div class="row"> <div class="large-6 columns"> <label>Choose Your Favorite</label> <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label> <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label> </div> <div class="large-6 columns"> <label>Check these out</label> <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label> <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label> </div> </div> <div class="row"> <div class="large-12 columns"> <label>Textarea Label <textarea placeholder="small-12.columns"></textarea> </label> </div> </div> </form>\n<!-- slider -->\n<div class="range-slider" data-slider> <span class="range-slider-handle"></span> <span class="range-slider-active-segment"></span> <input type="hidden"> </div>\n<!--modal-->\n<a href="#" data-reveal-id="myModal">Click Me For A Modal</a> <div id="myModal" class="reveal-modal" data-reveal> <h2>Awesome. I have it.</h2> <p class="lead">Your couch. It is mine.</p> <p>Im a cool paragraph that lives inside of an even cooler modal. Wins</p> <a class="close-reveal-modal">&#215;</a> </div>\n<!-- tooltips -->\n<span data-tooltip class="has-tip" title="Tooltips are awesome, you should totally use them!">extended information</span>\n<!-- dropdowns --><a href="#" class="button" data-dropdown="topDrop" data-options="align: top">Top »</a>\n<ul id="topDrop" class="f-dropdown drop-top" data-dropdown-content="">\n<li><a href="#">This is a link</a></li>\n<li><a href="#">This is another</a></li>\n<li><a href="#">Yet another</a></li>\n</ul>\n<a href="#" class="button" data-dropdown="leftDrop" data-options="align: left">Left »</a>\n<ul id="leftDrop" class="f-dropdown drop-left" data-dropdown-content="">\n<li><a href="#">This is a link</a></li>\n<li><a href="#">This is another</a></li>\n<li><a href="#">Yet another</a></li>\n</ul>\n<a href="#" class="button" data-dropdown="downDrop">Down »</a>\n<ul id="downDrop" class="f-dropdown" data-dropdown-content="">\n<li><a href="#">This is a link</a></li>\n<li><a href="#">This is another</a></li>\n<li><a href="#">Yet another</a></li>\n</ul>\n<a href="#" class="button" data-dropdown="rightDrop" data-options="align: right">Right »</a>\n<ul id="rightDrop" class="f-dropdown drop-right" data-dropdown-content="">\n<li><a href="#">This is a link</a></li>\n<li><a href="#">This is another</a></li>\n<li><a href="#">Yet another</a></li>\n</ul>\n<!-- destination for magellan-->\n<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />\n<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />\n<p><a name="arrival"></a></p>Magellan';}return __p};

this["JST"]["test"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += 'test';}return __p};