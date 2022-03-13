const getList = (author, keyword) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: '标题1',
      content: '这是内容',
      createTime: new Date().getTime(),
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题2',
      content: '这是内容',
      createTime: new Date().getTime(),
      author: 'lisi'
    }
  ] 
}


const getDetail = (id) => {
  // 返回假数据
  return {
    id: 1,
    title: '标题1',
    content: '这是内容',
    createTime: new Date().getTime(),
    author: 'zhangsan'
  }
}


const newBlog = (blogData = {}) => {
  return {
    id: 3 // 表示新建博客插入到表里的id
  }
}

const upDateBlog = (id, blogData = {}) => {
  return true;
}

const delBlog = (id) => {
  return true;
}

module.exports ={
  getList,
  getDetail,
  newBlog,
  upDateBlog,
  delBlog
}