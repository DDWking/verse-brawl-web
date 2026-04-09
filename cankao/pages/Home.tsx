import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Users, Zap, Gamepad, Palette, ArrowRight, Download, Play } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img 
            src="https://picsum.photos/seed/pixelart/1920/1080?blur=2" 
            alt="Game Background" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
          >
            VerseBrawl
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-3xl font-medium text-foreground/90 mb-10"
          >
            2D 像素对战，指尖巅峰对决
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/download" 
              className="flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider border-b-4 border-orange-900 hover:bg-primary/90 hover:translate-y-[2px] hover:border-b-2 active:translate-y-[4px] active:border-b-0 transition-all"
            >
              <Download className="w-6 h-6" />
              立即下载
            </Link>
            <Link 
              to="/download" 
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider border-b-4 border-black hover:bg-muted hover:translate-y-[2px] hover:border-b-2 active:translate-y-[4px] active:border-b-0 transition-all"
            >
              <Play className="w-6 h-6" />
              在线试玩
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心亮点</h2>
          <p className="text-muted-foreground">体验前所未有的像素格斗快感</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "多人对战", desc: "支持全球玩家实时匹配，体验酣畅淋漓的竞技对决。" },
            { icon: Zap, title: "丰富技能", desc: "每个角色拥有独特的技能树，自由组合打出华丽连招。" },
            { icon: Gamepad, title: "简洁操作", desc: "易于上手的操作逻辑，硬核的判定机制，兼顾新手与高玩。" },
            { icon: Palette, title: "自定义角色", desc: "海量外观配件，打造属于你独一无二的专属格斗家。" },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest News & Screenshots */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">最新动态</h2>
            <Link to="/announcements" className="text-sm text-primary hover:underline flex items-center gap-1">
              更多 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { title: "v1.2.0 版本更新：全新冰雪地图上线！", date: "2026-04-08", tag: "版本更新" },
              { title: "周末双倍积分活动开启", date: "2026-04-05", tag: "活动" },
            ].map((news, i) => (
              <Link key={i} to="/announcements" className="group bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">{news.tag}</span>
                  <span className="text-xs text-muted-foreground">{news.date}</span>
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{news.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">游戏截图</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/game1/800/450" alt="Screenshot 1" className="rounded-xl border border-border w-full aspect-video object-cover hover:opacity-80 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/game2/800/450" alt="Screenshot 2" className="rounded-xl border border-border w-full aspect-video object-cover hover:opacity-80 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </div>
  );
}
