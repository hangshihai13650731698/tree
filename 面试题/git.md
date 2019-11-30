## 初次创建项目常用操作流程（不适用于多人团队开发）
1. 在github上创建项目，可参考《GitHub项目管理基本操作》
2. clone项目到本地(git clone https://github.com/loushengyue/hello-world.git)
3. 编辑内容（在克隆下来的文件夹hello-world内创建或者粘贴项目文件）
4. 在hello-world目录下启动git bash查看项目的状态(git status)
5. 跟踪当前目录下的所有文件(git add ./)
6. 再次查看项目状态(git status)
编写提交信息标题(git commit -m ‘这里是需要自己填写的标题’)
7. 提交到github的远程仓库(git push)
8. 综述： 以上操作属于初次创建项目的流程，通常由项目拥有者（创始人）来完成，并不适用于多人团队开发，因此我们需要了解团队开发中的常见操作过程。

## 已有项目团队开发操作流程
```js
* 方案一：直接在master分支开发，适合项目第一个版本的小团队（3-5人）开发

1. clone项目到本地(git clone https://github.com/loushengyue/hello-world.git，注意：首次克隆后不用执行git pull更新，其他时候只更新不克隆)
2. 更新项目到本地(git pull)
3. 编辑内容（修改原有项目文件或者新增文件）
4. 在hello-world目录下启动git bash查看项目的状态(git status)
5. 跟踪当前目录下的所有文件(git add ./)
6. 再次查看项目状态(git status)
7. 编写提交信息标题(git commit -m ‘这里是需要自己填写的标题’)
8. 提交到github的远程仓库(git push)
```


```js
* 方案二：创建dev分支开发，适合项目版本迭代小型团队开发
1. 事先在GitHub远程库当中创建dev分支，可参考《GitHub项目管理基本操作》
2. clone项目到本地(git clone https://github.com/loushengyue/hello-world.git，注意：首次克隆后不用执行git pull更新，其他时候只更新不克隆)
3. 切换到dev开发分支（git checkout dev）
4. 查看当前分支（git branch -a）
5. 更新项目到本地(git pull)
6. 编辑内容（修改原有项目文件或者新增文件）
7. 在hello-world目录下启动git bash查看项目的状态(git status)
8. 跟踪当前目录下的所有文件(git add ./)
9. 再次查看项目状态(git status)
10. 编写提交信息标题(git commit -m ‘这里是需要自己填写的标题’)
11. 提交到github的远程仓库(git push)
```
注意： 方案二的操作方式通常只适合小团队（3-5人）开发，如果项目分工安排合理可以容纳5-10人的团队，随着参与人员的增多，代码提交冲突的概率会越来越高.
为了减少冲突，我们通常需要在本地创建临时分支来提交代码，虽然步骤稍微繁琐一些，但是可以大大减少冲突，具体流程如下。

### 优化后的方案二:
```js
1. 事先在GitHub远程库当中创建dev分支，可参考《GitHub项目管理基本操作》
2. clone项目到本地(git clone https://github.com/loushengyue/hello-world.git，注意：首次克隆后不用执行git pull更新，其他时候只更新不克隆)
3. 切换到dev开发分支（git checkout dev）
4. 查看当前分支（git branch -a）
5. 更新项目到本地(git pull)
6. 编辑内容（修改原有项目文件或者新增文件）
7. 在hello-world目录下启动git bash查看项目的状态(git status)
8. 跟踪当前目录下的所有文件(git add ./)
9. 再次查看项目状态(git status)
10. 编写提交信息标题(git commit -m ‘这里是需要自己填写的标题’)
11. 提交到github的远程仓库(git push)
注意： 方案二的操作方式通常只适合小团队（3-5人）开发，如果项目分工安排合理可以容纳5-10人的团队，随着参与人员的增多，代码提交冲突的概率会越来越高，为了减少冲突，我们通常需要在本地创建临时分支来提交代码，虽然步骤稍微繁琐一些，但是可以大大减少冲突，具体流程如下。

优化后的方案二：

1. 事先在GitHub远程库当中创建dev分支，可参考《GitHub项目管理基本操作》
2. clone项目到本地(git clone https://github.com/loushengyue/hello-world.git，注意：首次克隆后不用执行git pull更新，其他时候只更新不克隆)
3. 切换到dev开发分支（git checkout dev）
4. 查看当前分支（git branch -a）
5. 更新项目dev分支到本地(git pull)
6. 创建本地临时开发分支（git checkout -b lsy）
7. 编辑内容（修改原有项目文件或者新增文件）
8. 在hello-world目录下启动git bash查看项目的状态(git status)
9. 跟踪当前目录下的所有文件(git add ./)
10. 再次查看项目状态(git status)
11. 编写提交信息标题(git commit -m ‘这里是需要自己填写的标题’)
12. 切换到开发分支dev（git checkout dev）
13. 更新项目dev分支到本地(git pull)
14. 合并lsy临时分支到当前分支（git merge lsy）
15. 提交到github的远程仓库(git push)
16. 此时你可以删除lsy临时分支，也可以保留（若保留，记得每次开发前先将dev分支代码merge到lsy分支）
```
## 解决冲突的三种方法
如图
![](http://dl2.iteye.com/upload/attachment/0127/5899/cf7ae1fc-8757-346a-87be-7d218b1ef390.png)
```html
第一种
手动修改 去掉那些特殊符号

第二种
调用比较工具Beyond Compare 需要配置
.gitconfig 文件 配置软件的位置

第三种
idea修改 后add commit&push
会提示你merge
地址：https://www.iteye.com/blog/lyc984006207-2397909



```
# 老谢的总结

```js
# 项目开发(1.2.3.4)

* 原型图（草图）//1
* 团队项目：git//2
    * 项目初始化工作
        * 目录结果
        * 依赖：vue-router,vuex,axios,element-ui
        * 二次封装
        * 分支
	//git 分支合作开发操作
    * 分支操作

        * 分支类型//1
            * master
            * dev
            * 私有分支
        * 分支命令//2
            * 查看分支：`git branch`//2.1
                > 注意当前分支特点
            * 创建分支: `git branch dev`//2.2
                > 基于当前版本的基础上创建分支
                * 创建分支并关联远程分支：`git branch dev origin/dev`
            * 切换分支：`git checkout dev`//2.3
            * 删除分支：`git branch -d laoxie`//2.4
            

        * 团队协作
            * 合并分支
                1. 把laoxie合并到dev: 
                    1. 切换到dev分支: `git checkout dev`
                    2. 合并：`git merge laoxie`
                2. 把dev推送到 github： `git push origin dev`

            * 更新修改
                1. 拉取dev分支内容：`git pull origin dev`
                2. 合并到私有分支(luoluo)：
                    1. 切换到私有分支
                    2. 合并：`git merge dev`
*查看状态：git status //3
* 优化打包文件//4
    * 按需加载
    * 路由懒加载
```

