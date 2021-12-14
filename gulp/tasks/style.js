module.exports = () =>
    $.gulp.task('style', () =>
        $.gulp.src($.path.src.style)
            .pipe($.sass())
            .pipe($.gp.autoprefixer())
            .pipe($.gp.groupCssMediaQueries())
            // .pipe($.sass({outputStyle:'compressed'}))
            .pipe($.gp.rename({ extname: '.css' }))
            .pipe($.gulp.dest($.path.build.style))
            .on('end', $.bs.reload)
    )