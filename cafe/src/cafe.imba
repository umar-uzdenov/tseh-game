tag cafe
	prop menu

	<self>
		<cafe-header>
		<category-list menu=menu>
		<item-list menu=menu>
		<order-list>
		<customer-data>
		<menu-bar>



tag cafe-header
	<self
		[h:{headerHeight}px pos:rel]
		[tween: height .2s ease]=!headerCompact
	>
		<img src="/img/logo.jpg" @click=(currentTab = "category-list")
			[s:128px t:32px l:calc(50% - 64px)]=!headerCompact
			[s:64px t:16px l:16px]=headerCompact>
		<img src="/img/name.jpg" [h:64px b:16px w:232px]
			[r:calc(50% - 116px)]=!headerCompact
			[r:16px]=headerCompact>
	css w:100vw pos:fixed l:0 r:0 tween: height .4s ease
		img pos:abs rd:4px tween: all .3s ease
