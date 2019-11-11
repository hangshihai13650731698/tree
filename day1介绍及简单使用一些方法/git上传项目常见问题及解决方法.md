# 
git因commit100MB以上大文件导致push失败解决方法
2019-04-02 19:26:17 超神冉 阅读数 508更多
分类专栏： Git  维护技巧
版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
本文链接：https://blog.csdn.net/qq997843911/article/details/88979051
git因commit的记录太大导致push失败解决方法
1 看哪个文件占的大
2 重写commit，删除大文件
需要注意的是，此处可能会报错
解决方案：执行`git stash`即可解决。
3 推送修改后的repo
4 清理和回收空间
如果上述方法不管用
1、移除错误缓存
2、重新提交：
参考文献
1 看哪个文件占的大
报错信息：

Counting objects: 15, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (14/14), done.
Writing objects: 100% (15/15), 382.90 MiB | 1.88 MiB/s, done.
Total 15 (delta 8), reused 0 (delta 0)
remote: Resolving deltas: 100% (8/8), completed with 7 local objects.
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://g
it-lfs.github.com.
remote: error: Trace: 32cfdd82801eb81f072baeca0f5ca78b
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File resultDataset/resultDataset/gplus_combined.csv is 1279.62 MB; this exceeds Git
Hub's file size limit of 100.00 MB
To git@github.com:LiXiaoRan/dataHandle.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'git@github.com:LiXiaoRan/dataHandle.git'

注意这一句：remote: error: File resultDataset/resultDataset/gplus_combined.csv is 1279.62 MB; this exceeds Git可以发现，是gplus_combined.csv 文件太大，超过了100Mb的限制。那么要处理的就是这个文件了。

2 重写commit，删除大文件
git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch resultDataset/resultDataset/gplus_combined.csv' --prune-empty --tag-name-filter cat -- --all
1
需要注意的是，此处可能会报错
出现这个错误

Cannot rewrite branches: You have unstaged changes
1
解决方案：执行git stash即可解决。
3 推送修改后的repo
以强制覆盖的方式推送你的repo, 命令如下:

git push origin master --force
1
4 清理和回收空间
虽然上面我们已经删除了文件, 但是我们的repo里面仍然保留了这些objects, 等待垃圾回收(GC), 所以我们要用命令彻底清除它, 并收回空间，命令如下:

rm -rf .git/refs/original/
 
git reflog expire --expire=now --all
 
git gc --prune=now
彻底解决。

如果上述方法不管用
可以按照以下方法：

1、移除错误缓存
首先应该移除所有错误的 cache，对于文件：

git rm --cached path_of_a_giant_file
1
对于文件夹：

git rm --cached -r path_of_a_giant_dir
1
例如对于我的例子就是这样的：

git rm --cached resultDataset/resultDataset/gplus_combined.csv
1
2、重新提交：
编辑最后提交信息：

git commit --amend
1
修改 log 信息后保存返回。
重新提交

git push
1
参考地址：https://blog.csdn.net/qq997843911/article/details/88979051