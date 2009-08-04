describe("UI Window Tests",{
	before_all: function()
	{
		var self = this;
		this.async_window_open = function(test, assertFn, args)
		{
			var w = window.open.apply(window, args);
			value_of(w).should_be_object();
			var timer = 0;
			Titanium.API.addEventListener(Titanium.PAGE_INITIALIZED, function(event)
			{
				clearTimeout(timer);
				try
				{
					assertFn.apply(self, [w]);
					w.close();
					test.passed();
				}
				catch (e)
				{
					test.failed(e);
				}
			});
			timer = setTimeout(function(){
				test.failed("open url timed out");
			}, 3000);
		};
	},
	
	test_open_no_url: function()
	{
		var w = window.open()
		value_of(w).should_be_object();
		value_of(w.Titanium).should_be_undefined();
		w.close();
	},
	test_open_with_url_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium).should_be_object();
		}, ["a.html"]);
	},
	test_open_with_name_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isFullscreen()).should_be_false();
		}, ["a.html", "a"]);
	},
	test_open_fullscreen_yes_as_async: function(test)
	{
		
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isFullscreen()).should_be_true();
		}, ["a.html","a","fullscreen=yes"]);
	},
	test_open_fullscreen_no_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isFullscreen()).should_be_false();
		}, ["a.html","a","fullscreen=no"]);
	},
	test_open_fullscreen_1_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isFullscreen()).should_be_true();
		}, ["a.html","a","fullscreen=1"]);
	},
	test_open_fullscreen_0_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isFullscreen()).should_be_false();
		}, ["a.html","a","fullscreen=0"]);
	},
	test_open_height_100_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().getHeight()).should_be(100);
		}, ["a.html","a","height=100"]);
	},
	test_open_width_100_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().getWidth()).should_be(100);
			value_of(w.Titanium.UI.getCurrentWindow().isResizable()).should_be_true();
		}, ["a.html","a","width=100"]);
	},
	test_open_resizable_1_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isResizable()).should_be_true();
		}, ["a.html","a","resizable=1"]);
	},
	test_open_resizable_0_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isResizable()).should_be_false();
		}, ["a.html","a","resizable=0"]);
	},
	test_open_resizable_true_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isResizable()).should_be_true();
		}, ["a.html","a","resizable=true"]);
	},
	test_open_resizable_false_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().isResizable()).should_be_false();
		}, ["a.html","a","resizable=false"]);
	},
	test_open_left_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().getX()).should_be(2);
		}, ["a.html","a","left=2"]);
	},
	test_open_top_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().getY()).should_be(2);
		}, ["a.html","a","top=2"]);
	},
	test_open_multiple_props_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.Titanium.UI.getCurrentWindow()).should_be_object();
			value_of(w.Titanium.UI.getCurrentWindow().getY()).should_be(2);
			value_of(w.Titanium.UI.getCurrentWindow().getX()).should_be(2);
			value_of(w.Titanium.UI.getCurrentWindow().getWidth()).should_be(10);
			value_of(w.Titanium.UI.getCurrentWindow().getHeight()).should_be(10);
			value_of(w.Titanium.UI.getCurrentWindow().isFullscreen()).should_be_false();
		}, ["a.html","a","left=2,top=2,fullscreen=0,width=10,height=10"]);
	},
	test_open_child_dom_as_async: function(test)
	{
		this.async_window_open(test, function(w)
		{
			value_of(w).should_be_object();
			value_of(w.Titanium).should_be_object();
			value_of(w.document.title).should_be("Hello");
			value_of(w.result).should_be('Hello');
		}, ["a.html"]);
	},
});
