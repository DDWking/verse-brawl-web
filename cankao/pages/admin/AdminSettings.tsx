import { Save } from "lucide-react";

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">系统设置</h1>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Save className="w-4 h-4" /> 保存设置
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-bold border-b border-border pb-2">管理员信息</h2>
          <div className="space-y-2">
            <label className="text-sm font-medium">用户名</label>
            <input type="text" defaultValue="admin" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">新密码</label>
            <input type="password" placeholder="留空则不修改" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-bold border-b border-border pb-2">官网配置</h2>
          <div className="space-y-2">
            <label className="text-sm font-medium">网站标题</label>
            <input type="text" defaultValue="VerseBrawl - 官方网站" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">底部版权信息</label>
            <input type="text" defaultValue="© 2026 VerseBrawl. All rights reserved." className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">GitHub 链接</label>
            <input type="text" defaultValue="https://github.com" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <div className="font-medium">服务器状态展示</div>
              <div className="text-sm text-muted-foreground">在官网底部展示服务器在线状态</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
