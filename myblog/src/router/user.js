const {login} = require('../controller/user');
const {SuccessModel, ErrorModel}  = require('../model/resModel');


const handleUserRouter = (req, res) => {
  const method = req.method;

  // 登录
  if(method === 'POST' && req.path === '/api/user/login') {
    console.log(req.body)
    const {username, password} = req.body;
    const data = login(username, password)

    if(data) {
      return new SuccessModel();
    } else {
      return new ErrorModel('登录失败');
    }

  }
}

module.exports = handleUserRouter;