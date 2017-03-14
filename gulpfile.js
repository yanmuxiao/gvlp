var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref'); 
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cleanCss = require('gulp-clean-css');
// var imagemin = require('gulp-imagemin');



gulp.task('default', function() {
	console.log('default task!');
})


gulp.task('hello', function() {
	console.log('Hello world!!');
})



// Gulp执行预处理==>使用gulp-sass插件来编译Sass。
// gulp.task('sass', function() {
// 	return gulp.src('app/scss/styles.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('app/css'));
// })


// Node中的通配符
// gulp.task('node_tongpeifu', function() {
// 	return gulp.src('app/scss/*.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('app/css'));
// })


// 监听Sass文件, 需要用到sass任务

// gulp.task('sass', function() {
// 	return gulp.src('app/scss/styles.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('app/css'));
// })

// gulp.task('watch', function() {
// 	gulp.watch('app/scss/**/*.scss', ['sass']);
// 	// Other watchers
// })



// 使用Browser Sync自动刷新
// gulp.task('browserSync', function() {
// 	browserSync({
// 		server: {
// 			baseDir: 'app'
// 		}
// 	})
// })


// gulp.task('sass', function() {
// 	return gulp.src('app/scss/**/*scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('app/css'))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}))
// })

// gulp.task('watch', ['browserSync', 'sass'], function() {
// 	gulp.watch('app/scss/**/*.scss', ['sass']);
// 	//Other watchers
	
// 	// html
// 	gulp.watch('app/*.html', browserSync.reload);
// 	// js
// 	gulp.watch('app/js/**/*.js', browserSync.reload);


// })



// 优化CSS和JavaScript文件
// 合并js和css到一个文件内
// gulp.task('useref', function() {
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulp.dest('dist'));
// });
// 压缩合并的js和css
gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cleanCss()))
    .pipe(gulp.dest('dist'));
});


// gulp.task('images', function() {
// 	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/images'))
// })









