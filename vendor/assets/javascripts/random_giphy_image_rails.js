/**
 * Core and general tools
 */
(function($, undefined) {
  'use strict';

  // Singleton
  if (typeof window.RandomGiphyImageRails !== 'undefined') {
    return;
  }

  //
  // Module general vars
  //
  var
    v = '1.00 beta',
    debug = false,
    data = {
      api_key: 'dc6zaTOxFJmzC',
      query: 'happy',
      element_class: 'giphyme'
    };

  //
  // Methods
  //

  // Adds Giphy gifs into the elements with class data.element_class
  function giphyme() {
    var elements = $('.'+data.element_class);
    $.each(elements, function(key, value) {
      if (this.debug) console.info(value);
      updateGiphyImage($(value));
    });
  }

  // Return Giphy gif URL string.
  function updateGiphyImage(element) {
    $.ajax({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random',
      data: { api_key: data.api_key, tag: data.query },
      success: function(response) {
        if (this.debug) console.info(response.data.image_url);
        element.html('<img src="'+response.data.image_url+'" alt="Gif via Giphy" />');
      },
      error: function() {
        if (this.debug) console.info('Giphy Api call error.');
      }
    });
  }

  //
  // Public methods / properties
  //
  window.RandomGiphyImageRails = {
    debug: debug,
    data: data,
    giphyme: giphyme
  };

}(jQuery));
