var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getAllUser = function getAllTask(result) {
    sql.query("Select * from tb_user", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};

Task.getUserByCode = function getUserByCode(code,result) {
    sql.query("Select * from tb_user WHERE user_code = ?", code, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};


module.exports = Task;