import { Github, Mail, Code2, Server, Globe } from "lucide-react";

export function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">关于作者</h1>
        <p className="text-xl text-muted-foreground font-bold">独立开发者，热爱游戏与代码</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile */}
        <div className="md:col-span-1">
          <div className="bg-card border-2 border-border rounded-3xl p-6 text-center sticky top-24">
            <img 
              src="https://picsum.photos/seed/author/400/400" 
              alt="Author" 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary object-cover"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-2xl font-black mb-1 uppercase tracking-wider">Alex Dev</h2>
            <p className="text-sm text-primary font-bold mb-4 uppercase tracking-widest">全栈开发 / 独立游戏制作人</p>
            <p className="text-sm text-muted-foreground mb-6 font-medium">
              网络工程专业，全栈开发爱好者，专注前后端分离与云服务部署。
            </p>
            
            <div className="flex justify-center gap-4">
              <a href="#" className="p-3 bg-background border-2 border-border rounded-xl hover:border-primary hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-background border-2 border-border rounded-xl hover:border-primary hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-background border-2 border-border rounded-xl hover:border-primary hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-card border-2 border-border rounded-3xl p-8">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 uppercase tracking-wider">
              <Code2 className="w-6 h-6 text-primary" /> 技术栈展示
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-black mb-3 text-sm text-muted-foreground uppercase tracking-wider">游戏端 (Client)</h4>
                <div className="flex flex-wrap gap-2">
                  {["Unity 2022", "C#", "Photon PUN 2", "DOTween"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary border-2 border-primary/20 rounded-lg text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-black mb-3 text-sm text-muted-foreground uppercase tracking-wider">官网前端 (Frontend)</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind CSS", "Vite", "ECharts"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 text-accent border-2 border-accent/20 rounded-lg text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-black mb-3 text-sm text-muted-foreground uppercase tracking-wider">服务端 (Backend)</h4>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "MySQL", "Redis", "Docker", "Nginx"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-green-500/10 text-green-500 border-2 border-green-500/20 rounded-lg text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-card border-2 border-border rounded-3xl p-8">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 uppercase tracking-wider">
              <Server className="w-6 h-6 text-primary" /> 项目说明
            </h3>
            <div className="prose prose-invert max-w-none text-muted-foreground font-medium">
              <p>
                <strong>开发初衷：</strong> VerseBrawl 是我作为独立开发者尝试的第一个完整的联机对战游戏项目。旨在通过实践掌握 Unity 联机开发以及全栈 Web 技术的整合。
              </p>
              <p>
                <strong>官网目的：</strong> 本网站主要用于展示游戏特色、提供下载入口，并作为玩家查看排行榜和最新公告的枢纽。同时，后台管理系统方便我对游戏数据进行简单的维护。
              </p>
              <p>
                <strong>后续计划：</strong>
              </p>
              <ul>
                <li>完善更多角色和技能设计。</li>
                <li>增加好友系统和组队匹配功能。</li>
                <li>优化 WebGL 端的性能表现。</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
