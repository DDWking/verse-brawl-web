import { useState } from "react";
import { Plus, Edit, Trash2, Eye, ArrowUp } from "lucide-react";

export function AdminAnnouncements() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">公告管理</h1>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> 新增公告
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-4 font-medium text-muted-foreground w-16 text-center">ID</th>
              <th className="p-4 font-medium text-muted-foreground">标题</th>
              <th className="p-4 font-medium text-muted-foreground w-32">分类</th>
              <th className="p-4 font-medium text-muted-foreground w-32">发布时间</th>
              <th className="p-4 font-medium text-muted-foreground w-48 text-right">操作</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, title: "v1.2.0 版本更新：全新冰雪地图上线！", type: "版本更新", date: "2026-04-08", isTop: true },
              { id: 2, title: "周末双倍积分活动开启", type: "活动通知", date: "2026-04-05", isTop: false },
              { id: 3, title: "4月1日凌晨停机维护公告", type: "维护公告", date: "2026-03-30", isTop: false },
            ].map((item) => (
              <tr key={item.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-center text-muted-foreground">{item.id}</td>
                <td className="p-4 font-medium flex items-center gap-2">
                  {item.isTop && <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-[10px] rounded border border-accent/30">置顶</span>}
                  {item.title}
                </td>
                <td className="p-4 text-sm text-muted-foreground">{item.type}</td>
                <td className="p-4 text-sm text-muted-foreground">{item.date}</td>
                <td className="p-4 text-right space-x-2">
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors" title="预览">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-accent transition-colors" title="置顶/取消置顶">
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors" title="编辑">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-destructive transition-colors" title="删除">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
