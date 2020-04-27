// Include Gulp
//var gulp = require('gulp');
const { series } = require('gulp');

// Создаем простой таск
/*gulp.task('myFirstTask', function (done) {
    console.log('Привет, я твой первый таск!');

    done();
});*/
function myTask(cb) {    
    console.log('Привет, я твой первый таск!');
    cb();
}

function build(cb) {
    cb();
}

// Запуск тасков по умолчанию
//gulp.task('default', gulp.series('myFirstTask'));

exports.build = build;
exports.default = series(myTask, build);