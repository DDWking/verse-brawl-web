import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Tag, ChevronRight } from "lucide-react";

const announcements = [
  { id: 1, title: "v1.2.0 版本更新：全新冰雪地图上线！", date: "2026-04-08", type: "版本更新", content: "亲爱的玩家们，本次更新带来了全新的冰雪地图，增加了地形滑行的机制。同时修复了部分角色技能判定的bug..." },
  { id: 2, title: "周末双倍积分活动开启", date: "2026-04-05", type: "活动通知", content: "本周末（4月10日-4月11日），参与排位赛将获得双倍积分奖励，快来冲分吧！" },
  { id: 3, title: "4月1日凌晨停机维护公告", date: "2026-03-30", type: "维护公告", content: "为了提供更好的游戏体验，我们将于4月1日凌晨2:00-4:00进行停机维护，预计耗时2小时。" },
  { id: 4, title: "v1.1.5 平衡性调整", date: "2026-03-25", type: "版本更新", content: "削弱了暗影刺客的爆发伤害，提升了元素法师的生存能力..." },
  { id: 5, title: "首届「像素杯」全民挑战赛报名开启", date: "2026-03-15", type: "活动通知", content: "丰厚奖金池等你来拿！即日起至3月底，所有玩家均可报名参与..." },
];

export function Announcements() {
  const [filter, setFilter] = useState("全部");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = filter === "全部" ? announcements : announcements.filter(a => a.type === filter);
  const selected = announcements.find(a => a.id === selectedId);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">公告中心</h1>
        <p className="text-xl text-muted-foreground font-bold">获取最新游戏资讯与活动信息</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* List */}
        <div className={cn("md:col-span-5 lg:col-span-4 flex flex-col gap-4", selectedId ? "hidden md:flex" : "flex")}>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-2">
            {["全部", "版本更新", "活动通知", "维护公告"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-black uppercase tracking-wider transition-all border-b-4 active:border-b-0 active:translate-y-[4px]",
                  filter === f ? "bg-primary text-primary-foreground border-orange-900" : "bg-card border-border hover:bg-muted text-muted-foreground"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map(a => (
              <button
                key={a.id}
                onClick={() => setSelectedId(a.id)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all group",
                  selectedId === a.id ? "bg-primary/10 border-primary" : "bg-card border-border hover:border-primary/50"
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black px-2 py-0.5 bg-background rounded text-primary border-2 border-primary/20 flex items-center gap-1 uppercase">
                    <Tag className="w-3 h-3" /> {a.type}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 font-bold">
                    <Calendar className="w-3 h-3" /> {a.date}
                  </span>
                </div>
                <h3 className="font-black line-clamp-2 group-hover:text-primary transition-colors">{a.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Detail */}
        <div className={cn("md:col-span-7 lg:col-span-8", !selectedId ? "hidden md:block" : "block")}>
          {selected ? (
            <div className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 min-h-[500px]">
              <button 
                className="md:hidden flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground mb-6 uppercase"
                onClick={() => setSelectedId(null)}
              >
                <ChevronRight className="w-4 h-4 rotate-180" /> 返回列表
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-black px-3 py-1 bg-primary/10 text-primary rounded-md border-2 border-primary/20 uppercase">{selected.type}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1 font-bold">
                  <Calendar className="w-4 h-4" /> {selected.date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-8">{selected.title}</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed font-medium">
                <p>{selected.content}</p>
                {/* Mocking more content */}
                <p>感谢大家一直以来对 VerseBrawl 的支持！我们将继续努力，为大家带来更好的游戏体验。</p>
                <p>如有任何问题，请随时通过客服渠道与我们联系。</p>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-8 min-h-[500px] flex items-center justify-center text-muted-foreground">
              请在左侧选择一条公告查看详情
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
