source "https://rubygems.org"

gem "jekyll", "~> 4.0.1"

group :jekyll_plugins do
  gem 'jekyll-multiple-languages-plugin', '~> 1.7'
  gem "jekyll-assets", git: "https://github.com/envygeeks/jekyll-assets"
  gem "font-awesome-sass"
  gem "uglifier"
  gem "sass"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

