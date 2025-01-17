我来写一个详细的 config.json 配置文档：

# config.json 配置指南

## 基础结构
```json
{
  "site": {
    "title": "网站标题",
    "description": "网站描述",
    "logo": {
      "text": "导航栏显示的文字",
      "href": "点击logo跳转的链接"
    }
  },
  "menuItems": []  // 菜单项数组
}
```

## 菜单项类型

### 1. 单页面菜单 (type: "single")
用于直接显示网站列表的菜单项。

```json
{
  "name": "追踪系统",        // 菜单显示名称
  "href": "#追踪系统",       // 锚点链接
  "icon": "mdi:chart-line",  // 菜单图标
  "type": "single",          // 类型：单页面
  "sites": [                 // 网站列表
    {
      "title": "Binom",      // 网站名称
      "description": "老毛子写的高性能tracker", // 网站描述
      "url": "https://binom.org",  // 网站链接
      "advantages": [        // 网站优势（可选）
        "跳转速度快",
        "价格合理"
      ],
      "related": [          // 相关推荐（可选）
        {
          "title": "Voluum",
          "description": "老牌云追踪系统"
        }
      ]
    }
  ]
}
```

### 2. 标签页菜单 (type: "tabs")
用于包含多个子分类的菜单项。

```json
{
  "name": "流量平台",
  "href": "#流量平台",
  "icon": "mdi:traffic-light",
  "type": "tabs",
  "submenu": [              // 子菜单数组
    {
      "name": "PoP流量",    // 子菜单名称
      "href": "#流量平台-pop", // 子菜单锚点
      "icon": "mdi:popup",  // 子菜单图标
      "sites": [           // 该分类下的网站列表
        {
          "title": "PropellerAds",
          "description": "很多人都在用的平台",
          "url": "https://propellerads.com",
          "advantages": [
            "全球流量覆盖广",
            "支持多种广告形式"
          ]
        }
      ]
    }
  ]
}
```

## 完整示例

```json
{
  "site": {
    "title": "Affiliate导航",
    "description": "专业的Affiliate导航网站",
    "logo": {
      "text": "Affiliate导航",
      "href": "/"
    }
  },
  "menuItems": [
    {
      "name": "追踪系统",
      "href": "#追踪系统",
      "icon": "mdi:chart-line",
      "type": "single",
      "sites": [
        {
          "title": "Binom",
          "description": "高性能追踪系统",
          "url": "https://binom.org",
          "advantages": [
            "跳转速度快",
            "价格合理",
            "功能强大"
          ],
          "related": [
            {
              "title": "Voluum",
              "description": "老牌追踪系统"
            }
          ]
        }
      ]
    },
    {
      "name": "流量平台",
      "href": "#流量平台",
      "icon": "mdi:traffic-light",
      "type": "tabs",
      "submenu": [
        {
          "name": "PoP流量",
          "href": "#流量平台-pop",
          "icon": "mdi:popup",
          "sites": [
            {
              "title": "PropellerAds",
              "description": "全球流量平台",
              "url": "https://propellerads.com",
              "advantages": [
                "流量质量好",
                "价格实惠"
              ]
            }
          ]
        },
        {
          "name": "原生广告",
          "href": "#流量平台-native",
          "icon": "mdi:newspaper",
          "sites": [
            {
              "title": "MGID",
              "description": "全球原生广告平台",
              "url": "https://mgid.com"
            }
          ]
        }
      ]
    }
  ]
}
```

## 字段说明

### 网站配置 (site)
- `title`: 网站标题
- `description`: 网站描述
- `logo.text`: 导航栏显示的文字
- `logo.href`: logo 点击跳转链接

### 菜单项 (menuItems)
- `name`: 菜单名称
- `href`: 锚点链接（以 # 开头）
- `icon`: 菜单图标（使用 MDI 图标）
- `type`: 菜单类型（"single" 或 "tabs"）

### 网站信息 (sites)
- `title`: 网站名称
- `description`: 网站简介
- `url`: 网站链接
- `advantages`: 网站优势（可选数组）
- `related`: 相关推荐（可选数组）

### 子菜单 (submenu)
- `name`: 子菜单名称
- `href`: 子菜单锚点
- `icon`: 子菜单图标
- `sites`: 该分类下的网站列表

## 注意事项
1. href 必须唯一且以 # 开头
2. icon 使用 MDI 图标名称
3. url 必须包含完整的 http(s)://
4. 建议每个分类的 sites 不要超过 12 个
5. description 建议保持在 50 字以内


## icons说明
MDI (Material Design Icons) 图标可以在以下网站查看和搜索：
1.官方网站：
https://pictogrammers.com/library/mdi/
这里可以搜索所有可用的图标，并且显示图标的名称

2.常用图标示例：

## 导航相关
mdi:home                 // 首页
mdi:menu                 // 菜单
mdi:cog                  // 设置
mdi:magnify             // 搜索

# 功能类
mdi:chart-line          // 图表/追踪
mdi:eye                 // 查看/SPY
mdi:traffic-light       // 流量
mdi:handshake          // 合作/联盟
mdi:rocket             // 发布/启动
mdi:star               // 收藏/星标
mdi:heart              // 喜欢
mdi:share              // 分享

# 媒体类
mdi:facebook           // Facebook
mdi:twitter           // Twitter
mdi:google            // Google
mdi:youtube           // YouTube
mdi:instagram         // Instagram

# 广告类
mdi:advertisement     // 广告
mdi:bullhorn          // 推广
mdi:target           // 目标
mdi:cash             // 支付/收益
mdi:chart-bar        // 数据统计

# 其他常用
mdi:account          // 用户
mdi:bell             // 通知
mdi:calendar        // 日历
mdi:clock           // 时钟
mdi:email           // 邮件
mdi:file            // 文件
mdi:folder          // 文件夹
mdi:link            // 链接


## 菜单映射配置 (categoryMap)

`categoryMap` 用于将中文菜单名称映射到英文路径，这对于 URL 的规范性和国际化很重要。

### 配置结构
```json
{
  "categoryMap": {
    "中文菜单名": "english-path"
  }
}
```

### 当前配置示例
```json
{
  "categoryMap": {
    "追踪系统": "tracking",
    "SPY服务": "spy",
    "流量平台": "traffic",
    "综合性联盟": "networks"
  }
}
```

### 配置说明

1. **映射规则**
   - 键(key): 必须与菜单项的 `name` 属性完全匹配
   - 值(value): 用作 URL 路径的英文标识符
   
2. **使用场景**
   - 生成面包屑导航链接
   - 生成锚点链接
   - URL 路由匹配

3. **添加新菜单映射**
   ```json
   {
     "categoryMap": {
       "追踪系统": "tracking",
       "SPY服务": "spy",
       "流量平台": "traffic",
       "综合性联盟": "networks",
       "新菜单名称": "new-category"  // 添加新映射
     }
   }
   ```

4. **命名规范**
   - 使用小写字母
   - 多个单词用连字符(-)连接
   - 避免使用特殊字符和空格
   - 保持简短且有描述性

5. **注意事项**
   - 添加新映射后需要同时更新相应的菜单配置
   - 确保映射值唯一，避免重复
   - 修改现有映射需要同时更新所有相关链接

### 完整示例

```json
{
  "site": {
    "title": "Affiliate导航",
    "description": "无忧导航"
  },
  "categoryMap": {
    "追踪系统": "tracking",
    "SPY服务": "spy",
    "流量平台": "traffic",
    "综合性联盟": "networks"
  },
  "menuItems": [
    {
      "name": "追踪系统",
      "href": "#tracking",  // 使用映射值
      "icon": "mdi:chart-line",
      "type": "single"
    }
  ]
}
```

### 使用方法

1. **添加新类别**
   ```json
   // 1. 在 categoryMap 中添加映射
   "categoryMap": {
     "新类别": "new-category"
   }

   // 2. 在 menuItems 中添加对应菜单
   "menuItems": [
     {
       "name": "新类别",
       "href": "#new-category",
       "icon": "mdi:icon-name",
       "type": "single"
     }
   ]
   ```

2. **修改现有类别**
   ```json
   // 1. 更新 categoryMap
   "categoryMap": {
     "追踪系统": "tracker"  // 修改映射值
   }

   // 2. 更新对应菜单的 href
   "menuItems": [
     {
       "name": "追踪系统",
       "href": "#tracker",  // 同步修改
       "icon": "mdi:chart-line",
       "type": "single"
     }
   ]
   ```

### 技术实现

此映射在以下组件中使用：
1. `[slug].astro`: 用于生成面包屑导航
2. `Sidebar.astro`: 用于生成菜单链接
3. 其他需要处理类别路由的组件

```typescript
// 使用示例
const getCategoryHref = (category: string) => {
  return config.categoryMap[category] || category;
};
```
```


