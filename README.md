#vue-see
> Picture preview plugin for Vue.js2.0

##Intro/简介
vue-see is an image preview plugin for vue2.x that looks like a WeChat image preview and relies on Photoswipe implementation.
vue-see是一个适用于Vue2.x的图片预览插件，效果类似微信的图片预览，依赖Photoswipe实现。
##Demo/演示
[Live Demo](https://zhaohaodang.github.io/demo/vue-see/#/)
##Install/安装
```bash
npm install vue-see
```
##Usage/使用
```javascript
<template>
    <div>
        <see-box>
            <see-item v-for="(item,index) in imgList" :key="index" :u="item.src" :h="item.h" :w="item.w" :c="item.c"></see-item>
        </see-box>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [{
                src: 'http://blogfile.ifeng.com/uploadfiles/blog_attachment/1308/75/10103075_13773099904967.jpg',
                w: 500,
                h: 365,
                c:'img1'
            }, {
                src: 'http://img.mp.itc.cn/upload/20170526/c6ae4bb96b3043be9d45fa5402a7f96c_th.jpg',
                w: 600,
                h: 336,
                c:'img2'
            }]
        }
    }
}
</script>
```
##Doc/文档
component/组件
* see-box：images wrapper required/多个图片的包裹层，必须
* see-item：image item required/图片列表渲染，必须
| 属性        | 描述   |  是否必须  |
| --------   | -----:  | :----:  |
| imgList     | 图片列表数组 |   true     |
|u			 |	图片url		|	true	|
| key        |   vue推荐使用的列表key   |   false   |
| h        |    图片高度，默认100像素    |  false  |
| w        |    图片宽度，默认100像素    |  false  |
| c        |    图片描述，默认空    |  false  |

##Other/其他


