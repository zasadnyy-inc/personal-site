Vitaliy Zasadnyy's personal website (including blog)
=============

## Live demo: http://zasadnyy-inc.github.io/personal-site/

### Environment setup

Install GitHub pages
```bash
	gem install github-pages
```

Start your site with command
```bash
    jekyll serve -w
```

### Compass/Sass
You need to install the latest version of [Compass](http://compass-style.org/) with command
```bash
	gem install compass --pre
```

Install [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
```bash
	gem install bootstrap-sass
```

Then for combining media queries you can use [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner) plugin. Install with command
```bash
	gem install sass-media_query_combiner
```

And for prefixing css3 properties use [Autoprefixer](https://github.com/ai/autoprefixer)
```bash
	gem install autoprefixer-rails
```

**Note:** Also you need to install [Node.js](http://nodejs.org/download/)
