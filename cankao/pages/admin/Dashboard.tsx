import { Users, Eye, Trophy, Megaphone, Server, Activity, HardDrive, Clock, Gamepad2 } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">数据概览</h1>
        <p className="text-muted-foreground">欢迎回来，管理员。以下是今日的游戏数据。</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "今日访问量 (PV)", value: "12,450", icon: Eye, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "总注册玩家", value: "8,234", icon: Users, color: "text-green-500", bg: "bg-green-500/10" },
          { label: "排行榜上榜人数", value: "1,000", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-500/10" },
          { label: "已发布公告", value: "24", icon: Megaphone, color: "text-purple-500", bg: "bg-purple-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Server Status */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-primary" /> 服务器状态
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "CPU 使用率", value: "32%", icon: Activity, status: "normal" },
            { label: "内存使用率", value: "68%", icon: Server, status: "warning" },
            { label: "磁盘占用", value: "45%", icon: HardDrive, status: "normal" },
            { label: "运行时长", value: "45天 12小时", icon: Clock, status: "normal" },
          ].map((stat, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
              <div className={`p-2 rounded-lg ${stat.status === 'warning' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-primary/10 text-primary'}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-lg font-bold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">快捷操作</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="bg-card border border-border rounded-xl p-4 text-left hover:border-primary/50 transition-colors">
            <Megaphone className="w-6 h-6 text-primary mb-2" />
            <div className="font-bold">发布新公告</div>
            <div className="text-xs text-muted-foreground mt-1">前往公告管理页面</div>
          </button>
          <button className="bg-card border border-border rounded-xl p-4 text-left hover:border-primary/50 transition-colors">
            <Trophy className="w-6 h-6 text-accent mb-2" />
            <div className="font-bold">审核玩家寄语</div>
            <div className="text-xs text-muted-foreground mt-1">有 3 条待审核寄语</div>
          </button>
          <button className="bg-card border border-border rounded-xl p-4 text-left hover:border-primary/50 transition-colors">
            <Gamepad2 className="w-6 h-6 text-green-500 mb-2" />
            <div className="font-bold">更新游戏版本</div>
            <div className="text-xs text-muted-foreground mt-1">修改下载链接与说明</div>
          </button>
        </div>
      </div>
    </div>
  );
}
