import { useState } from "react";
import { Save } from "lucide-react";

export function AdminGameInfo() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">游戏信息管理</h1>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Save className="w-4 h-4" /> 保存更改
        </button>
      </div>

      <div className="flex gap-4 border-b border-border">
        <button 
          className={`pb-2 px-1 font-medium ${activeTab === 'basic' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
          onClick={() => setActiveTab('basic')}
        >
          基础信息
        </button>
        <button 
          className={`pb-2 px-1 font-medium ${activeTab === 'download' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
          onClick={() => setActiveTab('download')}
        >
          下载链接管理
        </button>
      </div>

      {activeTab === 'basic' && (
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6 max-w-3xl">
          <div className="space-y-2">
            <label className="text-sm font-medium">游戏名称</label>
            <input type="text" defaultValue="VerseBrawl" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">核心宣传语</label>
            <input type="text" defaultValue="2D 像素对战，指尖巅峰对决" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">游戏背景介绍</label>
            <textarea rows={4} defaultValue="在像素世界中，操控角色展开实时对战，击败对手获得分数，登顶排行榜。" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary resize-none" />
          </div>
        </div>
      )}

      {activeTab === 'download' && (
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6 max-w-3xl">
          <div className="space-y-2">
            <label className="text-sm font-medium">Windows 版下载链接</label>
            <input type="text" defaultValue="https://example.com/download/windows" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Mac 版下载链接</label>
            <input type="text" defaultValue="https://example.com/download/mac" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">WebGL 试玩链接</label>
            <input type="text" defaultValue="https://example.com/play" className="w-full bg-background border border-border rounded-lg py-2 px-3 focus:outline-none focus:border-primary" />
          </div>
        </div>
      )}
    </div>
  );
}
