网站由网页构成 由超链接连接

web app mobile native app(ios,android)

多页应用 很多应用 会跳转 重新刷新页面

多页应用缺点：
  - 用户体验极差：
    每次点击链接，都要等待http请求及响应，是整个页面的刷新，页面白一下，如果传输时间大于0.5秒，会看到明显的白屏
  - 相同的HTML片段重复被下载

解决方法：
  1. preventDefault a
  2. href attriute
  3. jquery ajax 动态得到http内容
  4. p content img arc $('').content,$('').src('')
   

  SPA Single Page Application（单页应用）

- 页面的状态 可以对应一个路由？
    SPA 解决了用户体验的问题，但却带来另一个及其严重的问题
    浏览记录没有了

  history 
    如何为每个状态改变 （路由状态）.产生一个url(路由),并且声称一次浏览历史记录，让SPA 的访问，更像传统的请求，location 浏览器的地址栏上的操作乐意使用了。

  如何主动去设置history？

  一个对应多个页面状态，每个页面都会有一个route 路由（地址，状态数据），又会对应一个组件 ，
  vue单页应用开发，有route响应 匹配相应的组件显示，再一直组件化的过程
