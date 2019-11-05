## 上拉刷新下拉加载组件

``` javascript
import { scroller } from 'yyzone'

export default {
    methods: {
        init() {
            // 初始化scroller list
            this.$refs.scroller._initList()
        }
        refresh(done) {
            // 获取数据之后
            if(没有更多数据) {
                this.$refs.scroller.finishInfinite(true)
            } else {
                this.$refs.scroller.finishInfinite(false)
            }
            done()
        },
        infinite(done) {
            // 获取数据之后
            if(没有更多数据) {
                this.$refs.scroller.finishInfinite(true)
            } else {
                this.$refs.scroller.finishInfinite(false)
            }
            done()
        }
    }
}
```

``` html
<scroller 
    ref="scroller"
    :pullUpLoad="true"
    :pullDownRefresh="true"
    @refresh="refresh"
    @infinite="infinite">
    <div></div>
    // 此处的empty 为没有数据的时候的自定义插槽 需要自己写样式
    <div slot="empty">

    </div>
<scroller>
```

属性|描述|默认值|类型
-|-|-|-
pullUpLoad|是否开启上拉加载| false| Boolean
pullDownRefresh|是否开启下拉加载| false| Boolean
listenScroll|是否派发滚动监听|false|Boolean

方法|描述|返回值|类型
-|-|-|-
refresh|下拉刷新回调| -| -
infinite|上拉加载回调| -| -
scroll|滚动回调| -|-
_initList|scroll初始化调用|-|-
finishInfinite|scroll加载数据之后调用| -| -
