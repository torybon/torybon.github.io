---
title: 个人博客的起步(3) NexT主题美化
date: 2021-12-31 20:23:00
top: 17
categories:
- 技术
- Hexo
tags:
- Hexo
- nodejs
---
<center><img src="/images/Hexo-NexT-2.png" width=50% height=50% align=center/></center>   

NexT 主题根据个人审美，可以进一步美化，现记录部分美化方式。

<!--more-->

## 🔍 关联导航

☆ {% post_link '个人博客的起步:Hexo(1)' '个人博客的起步：Hexo部署' %}
☆ {% post_link '个人博客的起步:Hexo(2)' '个人博客的起步：NexT主题的应用' %}
★ {% post_link '个人博客的起步:Hexo(3)' '个人博客的起步：NexT主题的美化' %}

## 🌀 基础文件说明

1. ````_config```` 文件是Hexo的基础配置文件
2. ````themes```` 存放下载的主题文件，如NexT
3. ````themes/next/_config.yml```` 主题的配置文件

## 🌀 背景图片

1. 新建````hexo/source/_data/styles.styl````，即在````hexo````目录的````source````文件夹下新建````_data````文件夹，文件夹中新建````styles.styl````，编辑：
    ````
    //背景图片设置
    body {
        background-image: url(/images/background.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
    }
    ````

  1. background-image:url 为图片路径，可以直接使用链接，也可以是图片路径（将自定义图片放入hexo\public\images路径下）
  2. background-repeat：若果背景图片不能全屏，那么是否平铺显示，充满屏幕
  3. background-attachment：背景是否随着网页上下滚动而滚动，fixed 为固定
  4. background-size：图片展示大小，这里设置 100%，100% 的意义为：如果背景图片不能全屏，那么是否通过拉伸的方式将背景强制拉伸至全屏显示

2. 编辑主题配置文件````hexo/themes/next/_config.yml````
    ````
    custom_file_path:
        style: source/_data/styles.styl
    ````

## 🌀 文章透明

在````styles.styl````里添加如下内容：
````
//文章内容的透明度设置
.content-wrap {
  opacity: 0.9;
}
​
//侧边框的透明度设置
.sidebar {
  background-color: transparent;
  opacity: 0.9;
}
​
//菜单栏的透明度设置
.header-inner {
  background: rgba(255,255,255,0.9);
}
````

## 🌀 边框圆角

1. 与新建````styles.styl````类似，新建````variables.styl````
    ````
    // 圆角设置
    $border-radius-inner     = 20px 20px 20px 20px;
    $border-radius           = 20px;
    ````
2. 编辑主题配置文件````hexo/themes/next/_config.yml````
    ````
    custom_file_path:
        variable: source/_data/variables.styl
    ````

## 🌀 Next7.x 黑暗模式

1. 安装````hexo-next-darkmode````插件
    ````
    npm install hexo-next-darkmode --save
    ````
2. 配置 Hexo 插件，在 Next 主题的 _config.yml 配置文件里添加以下内容
    ````
    darkmode_js:
      enable: true
      bottom: '32px' # default: '32px'
      right: 'unset' # default: '32px'
      left: '32px' # default: 'unset'
      time: '0.5s' # default: '0.3s'
      mixColor: 'transparent' # default: '#100f2c'
      backgroundColor: 'transparent' # default: '#100f2c'
      buttonColorDark: '#fff' # default: '#fff'
      buttonColorLight: '#100f2c' # default: '#100f2c'
      isActivated: false # default false
      saveInCookies: true # default: true
      label: '🌓' # default: ''
      autoMatchOsTheme: true # default: true
      libUrl: # Set custom library cdn url for Darkmode.js
    ````
3. 关闭原生的暗黑模式，确保 Next 原生的 darkmode 选项设置为 false

## 🌀 设置首页和归档页的分页

1. 安装必要的插件
    ````
    pm install --save hexo-generator-index
    npm install --save hexo-generator-archive
    ````
2. 修改Hexo的配置文件````hexo/blog/_config.yml````
    ````
    # 这一段默认就有的
    index_generator:
      path: ''
      per_page: 5
      order_by: -date

    # 新增对归档页面的分页设置
    archive_generator:
      per_page: 50
      yearly: true
      monthly: true
    ````

## 修改超链接样式

修改 ````/home/bowen/hexo/blog/themes/next/source/css/_common/components/post````，在最后添加
````
.post-body p a{
    color: #0593d3;
    border-bottom: none;
    border-bottom: 1px solid #0593d3;
    &:hover {
	color: #fc6423;
	border-bottom: none;
	border-bottom: 1px solid #fc6423;
    }
}
````

## 🌀 设置相关文章
[引用：NexT侧边栏配置](https://wylu.me/posts/a2725fd8/)    

1. 在 ````themes/next/source/css/_common/outline/sidebar```` 下新增css ````sidebar-related.styl````
    ````
    .sidebar-related {
      font-size: $font-size-small;

      ol {
        list-style-type: disc;
        margin: 0;
        padding: 0 2px 5px 25px;
        text-align: left;
      }
    }

    .sidebar-related-title {
      margin-top: 20px;
      padding-left: 0;

      li {
        border-bottom-color: $sidebar-highlight;
        color: $sidebar-highlight;
        border-bottom: 1px solid;
        cursor: pointer;
        display: inline-block;
        font-size: $font-size-small;
      }
    }
    ````
2. 修改````themes/next/source/css/_common/outline/sidebar/sidebar.styl````
    ````
      @import 'sidebar-toc' if (hexo-config('toc.enable'));
    + @import 'sidebar-related' if (hexo-config('toc.enable'));
    ````
3. 在````themes/next/layout/_partials/post/````文件夹中添加````post-related-sidebar.swig````
    ````
    {%- set popular_posts = popular_posts_json(theme.related_posts.params, page) %}
    {%- if page.toc.enable and theme.related_posts.enable and (theme.related_posts.display_in_home or not is_index) and popular_posts.json and popular_posts.json.length > 0 %}
    <div>
      <ul class="sidebar-related-title">
        <li>
          {{ theme.related_posts.title or __('post.related_posts') }}
        </li>
      </ul>

      <!--noindex-->
      <div class="sidebar-related">
        <ol>
          {%- for popular_post in popular_posts.json %}
          <li><a href="{{ popular_post.path }}" rel="bookmark"><span class="nav-text">{{ popular_post.title }}</span></a></li>
          {%- endfor %}
        </ol>
      </div>
      <!--/noindex-->
    </div>
    {%- endif %}
    ````
4. 修改侧边栏文件````themes/next/layout/_macro/sidebar.swig````
    ````
    +      <div>
           {%- set display_toc = page.toc.enable and display_toc %}
           {%- if display_toc %}
             {%- set toc = toc(page.content, { "class": "nav", list_number: page.toc.number, max_depth: page.toc.max_depth }) %}
    @@ -36,6 +37,9 @@

             {{- next_inject('sidebar') }}
           </div>
    +      </div>
    +      {{ partial('_partials/post/post-related-sidebar.swig') }}
    ````
5. 删除原始插件的文章结尾的关联文章展示，修改````themes/next/layout/_macro/post.swig````
    ````
    -    {%- if theme.related_posts.enable and (theme.related_posts.display_in_home or not is_index) %}
    -      {{ partial('_partials/post/post-related.swig') }}
    -    {%- endif %}

       {%- if not is_index %}
         {{- next_inject('postBodyEnd') }}
    ````
