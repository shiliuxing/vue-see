var errorMsg = {}
errorMsg.install = function(Vue, options) {
    Vue.component('error', {
        template: '<span style="color:red">111</span>'
    })
}
module.exports = errorMsg