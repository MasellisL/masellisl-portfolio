( function( api ) {

	api.controlConstructor['lalita-customizer-typography'] = api.Control.extend( {
		ready: function() {
			var control = this;

			control.container.on( 'change', '.lalita-font-family select',
				function() {
					var _this = jQuery( this ),
						_value = _this.val(),
						_categoryID = _this.attr( 'data-category' ),
						_variantsID = _this.attr( 'data-variants' );

					// Set our font family
					control.settings['family'].set( _this.val() );

					// Bail if our controls don't exist
					if ( 'undefined' == typeof control.settings['category'] || 'undefined' == typeof control.settings['variant'] ) {
						return;
					}

					setTimeout( function() {
						// Send our request to the lalita_get_all_google_fonts_ajax function
						var response = jQuery.getJSON({
							type: 'POST',
							url: ajaxurl,
							data: {
								action: 'lalita_get_all_google_fonts_ajax',
								lalita_customize_nonce: lalita_customize.nonce
							},
							async: false,
							dataType: 'json',
						});

						// Get our response
						var fonts = response.responseJSON;

						// Create an ID from our selected font
						var id = _value.split(' ').join('_').toLowerCase();

						// Set our values if we have them
						if ( id in fonts ) {

							// Get existing variants if this font is already selected
							var got_variants = false;
							jQuery( '.lalita-font-family select' ).not( _this ).each( function( key, select ) {
								var parent = jQuery( this ).closest( '.lalita-font-family' );

								if ( _value == jQuery( select ).val() && _this.data( 'category' ) !== jQuery( select ).data( 'category' ) ) {
									if ( ! got_variants ) {
										updated_variants = jQuery( parent.next( '.lalita-font-variant' ).find( 'select' ) ).val();
										got_variants = true;
									}
								}
							} );

							// We're using a Google font, so show the variants field
							_this.closest( '.lalita-font-family' ).next( 'div' ).show();

							// Remove existing variants
							jQuery( 'select[name="' + _variantsID + '"]' ).find( 'option' ).remove();

							// Populate our select input with available variants
							jQuery.each( fonts[ id ].variants, function( key, value ) {
								jQuery( 'select[name="' + _variantsID + '"]' ).append( jQuery( '<option></option>' ).attr( 'value', value ).text( value ) );
							} );

							// Set our variants
							if ( ! got_variants ) {
								control.settings[ 'variant' ].set( fonts[ id ].variants );
							} else {
								control.settings[ 'variant' ].set( updated_variants );
							}

							// Set our font category
							control.settings[ 'category' ].set( fonts[ id ].category );
							jQuery( 'input[name="' + _categoryID + '"' ).val( fonts[ id ].category );
						} else {
							_this.closest( '.lalita-font-family' ).next( 'div' ).hide();
							control.settings[ 'category' ].set( '' )
							control.settings[ 'variant' ].set( '' )
							jQuery( 'input[name="' + _categoryID + '"' ).val( '' );
							jQuery( 'select[name="' + _variantsID + '"]' ).find( 'option' ).remove();
						}
					}, 25 );
				}
			);

			control.container.on( 'change', '.lalita-font-variant select',
				function() {
					var _this = jQuery( this );
					var variants = _this.val();

					control.settings['variant'].set( variants );

					jQuery( '.lalita-font-variant select' ).each( function( key, value ) {
						var this_control = jQuery( this ).closest( 'li' ).attr( 'id' ).replace( 'customize-control-', '' );
						var parent = jQuery( this ).closest( '.lalita-font-variant' );
						var font_val = api.control( this_control ).settings['family'].get();

						if ( font_val == control.settings['family'].get() && _this.attr( 'name' ) !== jQuery( value ).attr( 'name' ) ) {
							jQuery( parent.find( 'select' ) ).not( _this ).val( variants ).triggerHandler( 'change' );
							api.control( this_control ).settings['variant'].set( variants );
						}
					} );
				}
			);

			control.container.on( 'change', '.lalita-font-category input',
				function() {
					control.settings['category'].set( jQuery( this ).val() );
				}
			);

			control.container.on( 'change', '.lalita-font-weight select',
				function() {
					control.settings['weight'].set( jQuery( this ).val() );
				}
			);

			control.container.on( 'change', '.lalita-font-transform select',
				function() {
					control.settings['transform'].set( jQuery( this ).val() );
				}
			);

		}
	} );

} )( wp.customize );

jQuery( document ).ready( function($) {

	$( ".lalita-font-family" ).each( function( key, value ) {
		var _this = $( this );
		if ( $.inArray( _this.find( 'select' ).val(), typography_defaults ) !== -1 ) {
			_this.next( '.lalita-font-variant' ).hide();
		}
	});

} );
