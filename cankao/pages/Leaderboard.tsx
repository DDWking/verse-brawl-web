import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { Trophy, Medal, Clock, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const mockData = [
  { rank: 1, name: "PixelKing", score: 9850, time: "120h", message: "无敌是多么寂寞" },
  { rank: 2, name: "ShadowNinja", score: 9200, time: "95h", message: "差一点点..." },
  { rank: 3, name: "MageMaster", score: 8900, time: "110h", message: "魔法会撕裂你" },
  { rank: 4, name: "NoobSlayer", score: 8500, time: "80h", message: "" },
  { rank: 5, name: "ProGamer", score: 8100, time: "150h", message: "肝帝在此" },
  { rank: 6, name: "LuckyBoy", score: 7800, time: "40h", message: "运气也是实力的一部分" },
  { rank: 7, name: "SpeedRunner", score: 7500, time: "30h", message: "" },
  { rank: 8, name: "TankMain", score: 7200, time: "200h", message: "你打不动我" },
  { rank: 9, name: "HealerCarry", score: 6900, time: "60h", message: "" },
  { rank: 10, name: "JustForFun", score: 6500, time: "10h", message: "开心就好" },
];

export function Leaderboard() {
  const [filter, setFilter] = useState("total");

  const chartOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#4a2e23' } },
      axisLabel: { color: '#a39088' }
    },
    yAxis: {
      type: 'category',
      data: mockData.slice(0, 10).map(d => d.name).reverse(),
      axisLabel: { color: '#fff3ed' },
      axisLine: { lineStyle: { color: '#4a2e23' } }
    },
    series: [
      {
        name: '分数',
        type: 'bar',
        data: mockData.slice(0, 10).map(d => d.score).reverse(),
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 1, y2: 0,
            colorStops: [{ offset: 0, color: '#ff5500' }, { offset: 1, color: '#ffaa00' }]
          },
          borderRadius: [0, 4, 4, 0]
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 flex items-center justify-center gap-4 uppercase">
          <Trophy className="w-10 h-10 text-accent" />
          排行榜
        </h1>
        <p className="text-xl text-muted-foreground font-bold">群雄逐鹿，谁能登顶巅峰？</p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-8">
        {[
          { id: "today", label: "今日排行榜" },
          { id: "week", label: "本周排行榜" },
          { id: "total", label: "总排行榜" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all border-b-4 active:border-b-0 active:translate-y-[4px]",
              filter === f.id 
                ? "bg-primary text-primary-foreground border-orange-900" 
                : "bg-card border-border hover:bg-muted text-muted-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Table */}
        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b-2 border-border">
                  <th className="p-4 font-black text-muted-foreground w-16 text-center uppercase">排名</th>
                  <th className="p-4 font-black text-muted-foreground uppercase">玩家昵称</th>
                  <th className="p-4 font-black text-muted-foreground text-right uppercase">分数</th>
                  <th className="p-4 font-black text-muted-foreground text-right uppercase">时长</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((player) => (
                  <tr key={player.rank} className="border-b border-border/50 hover:bg-muted/30 transition-colors group">
                    <td className="p-4 text-center">
                      {player.rank === 1 ? <Medal className="w-8 h-8 text-yellow-400 mx-auto drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" /> :
                       player.rank === 2 ? <Medal className="w-7 h-7 text-gray-400 mx-auto" /> :
                       player.rank === 3 ? <Medal className="w-6 h-6 text-amber-600 mx-auto" /> :
                       <span className="font-mono font-bold text-muted-foreground">{player.rank}</span>}
                    </td>
                    <td className="p-4">
                      <div className="font-black text-lg">{player.name}</div>
                      {player.message && (
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1 font-medium">
                          <MessageSquare className="w-3 h-3" />
                          {player.message}
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-right font-mono text-primary font-black text-xl">{player.score}</td>
                    <td className="p-4 text-right text-sm text-muted-foreground flex items-center justify-end gap-1 font-bold">
                      <Clock className="w-3 h-3" />
                      {player.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
          <h3 className="text-xl font-black mb-4 uppercase tracking-wider">Top 10 分数分布</h3>
          <div className="flex-1 min-h-[400px]">
            <ReactECharts option={chartOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
