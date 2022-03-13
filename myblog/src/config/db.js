const env = process.env.NODE_ENV; // 环境变量

//配置
let MYSQL_CONF

if(env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'xxxxxx',
    port: '3306',
    database: 'myBlog'
  }
}


if(env ==='production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'xxxxxx',
    port: '3306',
    database: 'myBlog'
  }
}

module.exports = {
  MYSQL_CONF
};