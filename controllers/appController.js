
var Task = require('../model/UserModel');

exports.list_all_tasks = function (req, res) {
  Task.getAllUser(function (err, task) {

    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', task);
    res.send(task);
  });
};
exports.ByID = function (req, res) {
  Task.getUserByCode( req.params.taskId,function (err, task) {

    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', task);
    res.send(task);
  });
};

