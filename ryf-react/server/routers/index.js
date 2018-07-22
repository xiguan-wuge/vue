const router = require('koa-router')();
const koaBody = require('koa-body');
const User = require('../model/user');
router.get('/', async (ctx) => {
  ctx.body = '首页';
});
router.get('/users', async (ctx) => {
  const users = await User.findAll({
    where: {
      isdelete: 0
    }
  })
  ctx.body = users;
});

router.post('/user', koaBody(), async (ctx) => {
  // 后端要拿到前端传来的数据 
  // console.log(ctx.request.body);
  const user = await User.build(ctx.request.body).save();
  ctx.body = user;
});

router.put('/user/:id', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const user = await User.findById(ctx.params.id);
  await user.update({ ...body })
  ctx.body = user;
})


module.exports = router;
