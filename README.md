# MyBin

对原来的koa后端进行了重构，将路由，数据库等分开。

将路由组件独立出来放在index.js中，数据库相关的函数在db文件夹下；

controllers.js扫描controller文件夹中的路由组件并一一注册