var fs = require('fs');
var gulp = require('gulp-help')(require('gulp'));

fs.readdirSync('./gulp/tasks/').forEach(function (task) {
    require('./tasks/' + task);
});