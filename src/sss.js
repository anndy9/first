//自定义插件
var MyPlugin = new Object;

MyPlugin.install = function (Vue, options) {
    
    Vue.prototype.$myMethod = function (methodOptions) {
        console.log(methodOptions);
    }
}

export default MyPlugin;