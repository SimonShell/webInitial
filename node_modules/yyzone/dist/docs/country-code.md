## 选择国际电话区号组件
``` javascript
import { CountryCodeMobile, CountryCodeWeb } from 'yyzone'
```
``` html
<country-code-mobile 
    v-model="isDisplay" 
    :on-select="handleSelect">
</country-code-mobile>

<country-code-web 
    :on-select="handleSelect">
    <div>
        请选择
    </div>
</country-code-web>
```

属性|描述|返回值
-|-|-
onSelect|选择code回调| country: 'china', code: '+86', value: '中国'
