
(function( $ ) {

	//This is the main plugin definition
	$.fn.ghostHunter 	= function( options ) {

		//Here we use jQuery's extend to set default values if they weren't set by the user
    var opts 		= $.extend( {}, $.fn.ghostHunter.defaults, options );

		if ( opts.results )
		{
			pluginMethods.init( this , opts );
			return pluginMethods;
		}
	};

	

	


		
})( jQuery );