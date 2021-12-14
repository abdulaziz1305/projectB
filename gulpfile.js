global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),
    path: {
        serverDir: './app/build',
        tasks: require('./gulp/config'),

        src: {
            html: './app/src/*.html',
            style: './app/src/style/*.*',
            js: './app/src/script/*.js',
            img: './app/src/img/**/*.{jpeg,jpg,png,svg,jfif,webp,gif}',
            font: './app/src/fonts/**/*.*'
        },
        build: {
            html: './app/build',
            style: './app/build/style',
            js: './app/build/script',
            img: './app/build/img',
            font: './app/build/fonts'
        },
        watch: {
            html: ['./app/src/*.html', './app/src/view/*.html'],
            style: ['./app/src/style/*.*', './app/src/style/**/*.*'],
            js: './app/src/script/*.js',
            img: './app/src/img/**/*.{jpeg,jpg,png,svg,jfif,webp,gif}',
            font: './app/src/fonts/**/*.*',
        }
    },
    tasks: {
        default: ['html', 'js', 'style', 'serve', 'watch', 'img', 'font',],
        build: ['html', 'js', 'style', 'img', 'font']
    }
}
$.path.tasks.forEach(taskPath => require(taskPath)());
for (const key in $.tasks) {
    $.gulp.task(key, $.gulp.series($.gulp.parallel(...$.tasks[key])))
}