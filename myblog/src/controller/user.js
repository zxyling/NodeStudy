const login = (username, password) => {
  console.log(username, password)
  // 先使用假数据
  if(username === 'zhangsan' && password === '123') {
    return true;
  }
}

module.exports = {login};