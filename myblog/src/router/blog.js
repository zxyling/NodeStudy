const {getList, getDetail, newBlog, upDateBlog} = require('../controller/blog');
const {SuccessModel, ErrorModel}  = require('../model/resModel');

const pathMap = {
  list : '/api/blog/list',
  detail: '/api/blog/detail',
  new: '/api/blog/new',
  update: '/api/blog/update',
  del: '/api/blog/del'
}

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;

  // 获取博客列表
  if(method === 'GET' && req.path === pathMap.list) {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);

    return new SuccessModel(listData);
  }

  // 获取博客详情
  if(method === 'GET' && req.path === pathMap.detail) {
    const id = req.query.id;
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  // 新建博客
  if(method === 'POST' && req.path === pathMap.new) {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }


  // 更新博客
  if(method === 'POST' && req.path === pathMap.update) {
    const data = upDateBlog(id, req.body);
    if(data) {
      return new SuccessModel();
    } else {
      return new ErrorModel('更新博客失败');
    }
  }

  // 删除博客
  if(method === 'POST' && req.path === pathMap.del) {
    const data = delBlog(id);
    if(data) {
      return new SuccessModel();
    } else {
      return new ErrorModel('删除博客失败');
    }
  }
}

module.exports = handleBlogRouter;