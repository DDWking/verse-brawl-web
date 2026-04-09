import { Download as DownloadIcon, Play, Monitor, Apple, HelpCircle } from "lucide-react";

export function Download() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl flex flex-col gap-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">下载与试玩</h1>
        <p className="text-xl text-muted-foreground">选择适合你的方式，立即加入战斗</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Download Card */}
        <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <DownloadIcon className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">下载客户端</h2>
          <p className="text-muted-foreground mb-8">获得最完整的游戏体验，支持更高帧率与画质设置。</p>
          
          <div className="flex flex-col gap-4 w-full mt-auto">
            <button className="flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 rounded-xl font-black uppercase tracking-wider border-b-4 border-orange-900 hover:bg-primary/90 hover:translate-y-[2px] hover:border-b-2 active:translate-y-[4px] active:border-b-0 transition-all">
              <Monitor className="w-5 h-5" />
              Windows 版下载 (v1.2.0)
            </button>
            <button className="flex items-center justify-center gap-3 bg-secondary text-secondary-foreground py-4 rounded-xl font-black uppercase tracking-wider border-b-4 border-black hover:bg-muted hover:translate-y-[2px] hover:border-b-2 active:translate-y-[4px] active:border-b-0 transition-all">
              <Apple className="w-5 h-5" />
              Mac 版下载 (v1.2.0)
            </button>
          </div>
        </div>

        {/* WebGL Card */}
        <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
            <Play className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-2xl font-bold mb-2">在线试玩</h2>
          <p className="text-muted-foreground mb-8">无需下载，直接在浏览器中体验核心对战玩法。</p>
          
          <div className="w-full mt-auto">
            <button className="w-full flex items-center justify-center gap-3 bg-accent text-accent-foreground py-4 rounded-xl font-black uppercase tracking-wider border-b-4 border-yellow-700 hover:bg-accent/90 hover:translate-y-[2px] hover:border-b-2 active:translate-y-[4px] active:border-b-0 transition-all">
              <Play className="w-5 h-5" />
              启动 WebGL 试玩
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              * 试玩版可能存在性能限制，推荐使用 Chrome 或 Edge 浏览器。
            </p>
          </div>
        </div>
      </div>

      {/* Requirements & FAQ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-primary" /> 配置要求
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground bg-card border border-border p-6 rounded-2xl">
            <li className="flex justify-between border-b border-border pb-2">
              <span>操作系统</span>
              <span className="text-foreground">Windows 10 / macOS 11+</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span>处理器</span>
              <span className="text-foreground">Intel Core i3 或同等性能</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span>内存</span>
              <span className="text-foreground">4 GB RAM</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span>显卡</span>
              <span className="text-foreground">支持 OpenGL 3.3 的独立显卡</span>
            </li>
            <li className="flex justify-between">
              <span>存储空间</span>
              <span className="text-foreground">500 MB 可用空间</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" /> 常见问题
          </h3>
          <div className="space-y-4">
            {[
              { q: "下载后提示文件损坏怎么办？", a: "请尝试重新下载，或检查杀毒软件是否误拦截。" },
              { q: "Mac 版提示无法验证开发者？", a: "请在系统设置 -> 隐私与安全性中，点击“仍要打开”。" },
              { q: "WebGL 试玩加载卡在 90%？", a: "请清除浏览器缓存后重试，或尝试更换网络环境。" },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border p-4 rounded-xl">
                <div className="font-bold text-sm mb-1">Q: {faq.q}</div>
                <div className="text-sm text-muted-foreground">A: {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
