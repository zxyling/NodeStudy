const pathMap = {
  list : '/api/blog/list',
  detail: '/api/blog/detail',
  new: '/api/blog/new',
  update: '/api/blog/update',
  del: '/api/blog/del'
}

const handleBlogRouter = (req, res) => {
  const method = req.method;

  // 获取博客列表
  if(method === 'GET' && req.path === pathMap.list) {
    return {
      msg: '获取博客列表接口'
    }
  }

  // 获取博客详情
  if(method === 'GET' && req.path === pathMap.detail) {
    return {
      msg: '获取博客详情接口'
    }
  }

  // 新建博客
  if(method === 'POST' && req.path === pathMap.new) {
    return {
      msg: '新建博客'
    }
  }


  // 更新博客
  if(method === 'POST' && req.path === pathMap.update) {
    return {
      msg: '更新博客'
    }
  }

  // 删除博客
  if(method === 'POST' && req.path === pathMap.del) {
    return {
      msg: '删除博客'
    }
  }
}

module.exports = handleBlogRouter;