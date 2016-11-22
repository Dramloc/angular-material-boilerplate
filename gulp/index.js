const fs = require('fs');

fs.readdirSync('./gulp/tasks/').forEach(function (task) {
    require('./tasks/' + task);
});