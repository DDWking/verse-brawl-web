import { useState } from "react";
import { Edit, Trash2, Check, X, Download } from "lucide-react";

export function AdminLeaderboard() {
  const [activeTab, setActiveTab] = useState("scores");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">排行榜管理</h1>
        <button className="flex items-center gap-2 bg-secondary text-secondary-foreground border border-border px-4 py-2 rounded-lg font-medium hover:bg-muted transition-colors">
          <Download className="w-4 h-4" /> 导出数据
        </button>
      </div>

      <div className="flex gap-4 border-b border-border">
        <button 
          className={`pb-2 px-1 font-medium ${activeTab === 'scores' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
          onClick={() => setActiveTab('scores')}
        >
          玩家分数管理
        </button>
        <button 
          className={`pb-2 px-1 font-medium ${activeTab === 'messages' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
          onClick={() => setActiveTab('messages')}
        >
          寄语审核 <span className="ml-1 bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5 rounded-full">3</span>
        </button>
      </div>

      {activeTab === 'scores' && (
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="p-4 font-medium text-muted-foreground w-16 text-center">排名</th>
                <th className="p-4 font-medium text-muted-foreground">玩家昵称</th>
                <th className="p-4 font-medium text-muted-foreground">分数</th>
                <th className="p-4 font-medium text-muted-foreground w-32 text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, name: "PixelKing", score: 9850 },
                { rank: 2, name: "ShadowNinja", score: 9200 },
                { rank: 3, name: "MageMaster", score: 8900 },
              ].map((item) => (
                <tr key={item.rank} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-center text-muted-foreground">{item.rank}</td>
                  <td className="p-4 font-medium">{item.name}</td>
                  <td className="p-4 font-mono text-primary">{item.score}</td>
                  <td className="p-4 text-right space-x-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors" title="修改分数">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-destructive transition-colors" title="删除记录">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: 1, name: "NoobSlayer", message: "菜就多练", time: "2026-04-09 10:23" },
            { id: 2, name: "SpeedRunner", message: "我的剑刃渴望鲜血", time: "2026-04-09 09:15" },
            { id: 3, name: "HealerCarry", message: "带妹上分，滴滴", time: "2026-04-08 22:40" },
          ].map((msg) => (
            <div key={msg.id} className="bg-card border border-border rounded-xl p-4 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold">{msg.name}</div>
                  <div className="text-xs text-muted-foreground">{msg.time}</div>
                </div>
              </div>
              <div className="bg-muted p-3 rounded-lg text-sm mb-4">"{msg.message}"</div>
              <div className="flex gap-2 mt-auto justify-end">
                <button className="flex items-center gap-1 px-3 py-1.5 bg-destructive/10 text-destructive rounded-md text-sm hover:bg-destructive/20 transition-colors">
                  <X className="w-4 h-4" /> 拒绝
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-green-500/10 text-green-500 rounded-md text-sm hover:bg-green-500/20 transition-colors">
                  <Check className="w-4 h-4" /> 通过
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
