
// const router = express.Router();
var todoList = require('../controllers/appController');

// todoList Routes
// router.route('/user')
// .get(todoList.list_all_tasks)
// .post(todoList.create_a_task);


module.exports = function (app) {
    // var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/user')
        .get(todoList.list_all_tasks)

    app.route('/user/:taskId')
        .get(todoList.ByID)
      
};



