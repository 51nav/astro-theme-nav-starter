设置步骤： 在 GitHub 上生成 Personal Access Token： 访问 https://github.com/settings/tokens 点击 "Generate new token (classic)" 选择 "repo" 权限 生成并复制 token 在 Astro-nav 仓库添加 secret： 访问 https://github.com/51nav/Astro-nav/settings/secrets/actions 点击 "New repository secret" Name: GIT_TOKEN Value: 粘贴刚才生成的 token 点击 "Add secret" 这样设置的优点： 不需要生成和管理 SSH 密钥 更容易设置和维护 可以更精细地控制权限

name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout source repo
        uses: actions/checkout@v4

      - name: Install and Build
        uses: withastro/action@v3

      - name: Deploy to GitHub Pages repo
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.GIT_TOKEN }}
          external_repository:${{ secrets.GIT_REPO }} 
          publish_branch: main
          publish_dir: ./dist

## 设置步骤：

在 GitHub 上生成 Personal Access Token：

访问 https://github.com/settings/tokens
点击 "Generate new token (classic)"
选择 "repo" 权限
生成并复制 token
在 Astro-nav 仓库添加 secret：

访问 https://github.com/51nav/Astro-nav/settings/secrets/actions
点击 "New repository secret"
1.
Name: GIT_TOKEN
Value: 粘贴刚才生成的 token
点击 "Add secret"
2.
Name: GIT_REPO
Value: 51nav/51nav.github.io         你想部署的仓库位置 

这样设置的优点：
不需要生成和管理 SSH 密钥
更容易设置和维护
可以更精细地控制权限


> 主要需要修改 `astro.config.mjs` 中的几个关键配置：

```typescript:astro.config.mjs
export default defineConfig({
  // 1. 修改为您的实际网站地址
  site: 'https://your-website.com',  // 例如: https://nav.yourdomain.com
  integrations: [
    tailwind(),
    sitemap({
      // 2. 自定义 sitemap 配置
      changefreq: 'weekly',     // 更新频率，根据您更新导航的频率调整
      priority: 0.7,            // 网页优先级
      lastmod: new Date(),      // 最后修改时间
      // 3. 过滤规则
      filter: (page) => !page.includes('/admin/'), // 排除管理页面
    })
  ]
});
```

## 配置说明：

1. **site 配置**
   - 将 `https://your-website.com` 替换为您的实际网站域名
   - 这个配置对生成正确的 sitemap 和绝对路径 URL 很重要

2. **sitemap 配置**
   - `changefreq`: 可选值有 'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never'
   - `priority`: 0.0 到 1.0 之间的值，表示页面重要性
   - `lastmod`: 最后修改时间，可以设置为具体的日期

3. **部署注意事项**：
   - 确保您的域名已经正确解析
   - 如果使用 HTTPS，需要确保有有效的 SSL 证书
   - 建议使用静态托管服务，如 Vercel、Netlify 或 GitHub Pages

4. **构建命令**：
   ```bash
   npm run build  # 构建网站
   npm run preview  # 本地预览构建结果
   ```

5. **部署平台建议**：
   - Vercel: 零配置部署，自动 HTTPS
   - Netlify: 类似 Vercel，提供免费 CDN
   - GitHub Pages: 适合个人项目，免费托管

如果您使用特定的部署平台，可能需要创建相应的配置文件，例如：

- Vercel: `vercel.json`
- Netlify: `netlify.toml`
- GitHub Pages: 需要配置 `.github/workflows/deploy.yml`

这些配置确保了：
- 网站能被搜索引擎正确索引
- 所有页面都有正确的 URL
- 网站地图自动生成和更新
- 静态资源正确加载
