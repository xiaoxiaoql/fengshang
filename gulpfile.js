// 引gulp包
var gulp = require('gulp');

// 引入gulp插件
// gulp-sass
var sass = require('gulp-sass');



// 创建任务
// 编译sass文件
gulp.task('compileSass',function(){
	// 找到sass文件
	// 得到文档流
	gulp.src('./src/sass/*.scss')

	// pipe管道方法
	.pipe(sass({
		outputStyle:'expanded'
	}))

	// 错误信息处理，不会退出整个任务
	.on('error', sass.logError)


	// 输出
	.pipe(gulp.dest('./src/css/'))
});


// 监听sass文件修改，直接编译任务
gulp.task('watchSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);
})