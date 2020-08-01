'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require("gulp-cssnano");
var prefix = require("gulp-autoprefixer");
var minify = require("gulp-minify");
var realFavicon = require('gulp-real-favicon');
var clean = require('gulp-clean');

sass.compiler = require('node-sass');
var FAVICON_DATA_FILE = 'faviconData.json';

var paths = {
	theme: {
		styles: '_sass',
		icons: '_icons',
		scripts: '_js'
	},
	assets: {
		base: 'assets',
		css: 'assets/css',
		icons: 'assets/icons',
		fonts: 'assets/webfonts',
		js: 'assets/js'
	},
	components: {
		fontawesome: 'node_modules/@fortawesome/fontawesome-free',
		normalizecss: 'node_modules/normalize-css/normalize.css',
		jquery: 'node_modules/jquery/dist/jquery.js'
	}
};

gulp.task('styles:build', function () {
	return gulp.src([paths.theme.styles + '/**/*.scss'])
		.pipe(sass({
			includePaths: [
				paths.theme.styles,
			],
		}).on('error', sass.logError))
		.pipe(prefix(["last 3 versions", "> 1%", "ie 8"], { cascade: true }))
		.pipe(cssnano())
		.pipe(gulp.dest(paths.assets.css));
});

gulp.task('styles:prepare', function () {
	return gulp.src([
		paths.components.fontawesome + '/css/fontawesome.css',
		paths.components.fontawesome + '/css/solid.css',
		paths.components.normalizecss
	])
		.pipe(gulp.dest(paths.theme.styles + '/vendor'));
});

gulp.task('styles:copyVendorResources', function () {
	return gulp.src([paths.components.fontawesome + '/webfonts/fa-solid*'])
		.pipe(gulp.dest(paths.assets.fonts));
});

gulp.task('styles', gulp.series('styles:prepare', 'styles:build', 'styles:copyVendorResources'));

gulp.task('watch:styles', function () {
	gulp.watch([paths.theme.styles + "/**/*.scss"], gulp.series('styles:prepare', 'styles:build', 'styles:copyVendorResources'));
})

gulp.task('scripts:build', function () {
	return gulp
		.src([paths.theme.scripts + '/**/*.js'])
		.pipe(minify({ noSource: true }))
		.pipe(gulp.dest(paths.assets.js));
});

gulp.task('scripts:prepare', function () {
	return gulp.src([paths.components.jquery])
		.pipe(gulp.dest(paths.theme.scripts + '/vendor'));
});

gulp.task('scripts', gulp.series('scripts:prepare', 'scripts:build'));

gulp.task('watch:scripts', function () {
	gulp.watch([paths.theme.scripts + "/**/*.js"], gulp.series('scripts:prepare', 'scripts:build'));
})


gulp.task('clean:assets', function () {
	return gulp.src([paths.assets.base], { read: false, allowEmpty: true })
		.pipe(clean())

});

gulp.task('clean:vendor', function () {
	return gulp.src([paths.theme.styles + '/vendor',
	paths.theme.scripts + '/vendor',], { read: false, allowEmpty: true })
		.pipe(clean())
});

gulp.task('generate-favicon', function (done) {
	realFavicon.generateFavicon({
		masterPicture: paths.theme.icons + '/logo.svg',
		dest: paths.assets.icons,
		iconsPath: paths.assets.icons,
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: '#ffffff',
				margin: '14%',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {
				design: 'raw'
			},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: '#711506'
			}
		},
		settings: {
			compression: 2,
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function () {
		done();
	});
});
gulp.task('clean', gulp.parallel('clean:assets', 'clean:vendor'))
gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'scripts', 'generate-favicon')));
gulp.task('default', gulp.series(gulp.parallel('styles', 'scripts'), gulp.parallel('watch:styles', 'watch:scripts')));
