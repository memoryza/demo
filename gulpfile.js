/**
 * @file 构建
 * @author memoryza
 */
var gulp = require('gulp');
var path = require('path');
var webpack = require('gulp-webpack-build');

var config = require('./util/common');

gulp.task('watch', function () {
    gulp.src('./webpack.config.js')
        .pipe(webpack.init({useMemoryFs: true}))
        .pipe(webpack.watch(function (err, stats) {
            gulp.src(this.path, {base: this.base})
                .pipe(webpack.proxy(err, stats))
                .pipe(gulp.dest('.'))
                .on('end', function () {
                });
        }));
});
