var gulp = require('gulp');
var browserifyTask = require('./browserify');

gulp.task('watchify', function() {
	return browserifyTask(true);
});