# vue-see
> Picture preview plugin for Vue.js2.0

## Intro/简介
vue-see is an image preview plugin for vue2.x that looks like a WeChat image preview and relies on Photoswipe implementation.
vue-see是一个适用于Vue2.x的图片预览插件，效果类似微信的图片预览，依赖Photoswipe实现。
## Update/更新
- 20170720 [支持自定义PhotoSwipe参数](https://github.com/zhaohaodang/vue-see/releases/tag/1.2.0)
## Demo/演示
[Live Demo](https://zhaohaodang.github.io/demo/vue-see/#/)
## Install/安装
```bash
npm install vue-see
```
## Usage/使用
main.js
```javascript
import VueSee from 'vue-see'
var options={}
Vue.use(VueSee,options)
```
[查看参数列表](http://photoswipe.com/documentation/options.html)

demo.vue
```html
<template>
    <div>
        <see-box>
            <see-item v-for="(item,index) in imgList" :key="index" :img="item"></see-item>
        </see-box>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [{
                u: 'http://blogfile.ifeng.com/uploadfiles/blog_attachment/1308/75/10103075_13773099904967.jpg',
                w: 500,
                h: 365,
                c:'img1'
            }, {
                u: 'http://img.mp.itc.cn/upload/20170526/c6ae4bb96b3043be9d45fa5402a7f96c_th.jpg',
                w: 600,
                h: 336,
                c:'img2'
            }]
        }
    }
}
</script>
```
## Doc/文档
component/组件

* see-box：images wrapper required/多个图片的包裹层，必须
* see-item：image item required/图片列表渲染，必须

property/属性

* see-item 组件属性

  * imgList：Image list array, required/图片列表数组，必需
  * :img：image information, object, required/图片信息对象，必需，标识符不可修改
  * :key：recommended list key,not required/推荐使用的列表key，非必需

* img 对象属性(unchangeable  key name/键名不可修改)

  * u：Image url,required/图片url，必需
  * w：Image width, default 100 pixels,not required /图片宽度，默认100像素，非必需
  * h：Image height, default 100 pixels,not required/图片高度，默认100像素，非必需
  * c：Image description, default '',not required/图片描述，默认空，非必需
> 建议正确设置图片宽高，达到最佳效果

## Other/其他

* [基于Vue2.0高仿微信App的单页应用](https://github.com/zhaohaodang/vue-WeChat)


