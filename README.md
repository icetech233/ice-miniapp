

### 配置项目私有信息

1. 创建 `project.private.config.json` 文件
2. 将配置中的 `"appid": "wx-xxxx"` 替换为你的真实小程序 AppID

完整配置示例：
```json
{
  "libVersion": "2.32.3",
  "projectname": "miniprogram-1",
  "appid": "wx-xxxx",
  "setting": {
    "urlCheck": false,
    "coverView": false,
    "lazyloadPlaceholderEnable": false,
    "skylineRenderEnable": true,
    "preloadBackgroundData": false,
    "autoAudits": false,
    "useApiHook": true,
    "showShadowRootInWxmlPanel": false,
    "useStaticServer": false,
    "useLanDebug": false,
    "showES6CompileOption": false,
    "compileHotReLoad": true,
    "bigPackageSizeSupport": true,
    "checkInvalidKey": true,
    "ignoreDevUnusedFiles": true
  }
}
```
