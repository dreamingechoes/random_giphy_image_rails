[![Gem Version](https://badge.fury.io/rb/random_giphy_image_rails.svg)](https://badge.fury.io/rb/random_giphy_image_rails)

## About

RandomGiphyImageRails is an absolute silly gem with the only purpose of put some random Giphy images on your HTML.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'random_giphy_image_rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install random_giphy_image_rails

## Usage

After install the gem, the only thing you should do in your Rails application is add some lines into your assets files. Add this into your `application.js` file:

```ruby
  //= require random_giphy_image_rails
```

and this line into you `application.css` file:

```ruby
  *= require random_giphy_image_rails
```

Now you're ready to put Giphy images on your site. You only have to do something like this on your JS:

```javascript
$(document).ready(function(){
  // Set debug mode (for console logs)
  RandomGiphyImageRails.debug = true;

  // Testing api key by default if you don't specify one
  RandomGiphyImageRails.data.api_key = 'YOUR_GIPHY_API_KEY';

  // Class of the HTML element where you want to put the gif
  RandomGiphyImageRails.data.element_class = 'giphyme';

  // Query or tag of your random gif
  RandomGiphyImageRails.data.query = 'nintendo';

  // Executes the random gif thing
  RandomGiphyImageRails.giphyme();
});
```
And then put one or more HTML elements in your view:

```html
<body>
  <div class="giphyme"> </div>
</body>
```

Refresh you page and... voila! :)

**Important: this gem uses jQuery to work.**

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dreamingechoes/random_giphy_image_rails. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
