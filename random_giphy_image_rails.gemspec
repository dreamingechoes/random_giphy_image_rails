# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'random_giphy_image_rails/version'

Gem::Specification.new do |spec|
  spec.name          = "random_giphy_image_rails"
  spec.version       = RandomGiphyImageRails::VERSION
  spec.authors       = ["Ivan Gonzalez"]
  spec.email         = ["xixon.sound@gmail.com"]

  spec.summary       = "Rails gem to add random Giphy images into your HTML"
  spec.description   = "Rails gem to add random Giphy images into your HTML. A silly gem with no specific purpose."
  spec.homepage      = "https://github.com/dreamingechoes/random_giphy_image_rails"
  spec.license       = "MIT"
  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.10"
  spec.add_development_dependency "rake", "~> 10.0"
end
