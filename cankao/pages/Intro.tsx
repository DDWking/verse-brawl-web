import { motion } from "motion/react";
import { Keyboard, Mouse, Swords, Trophy, Globe, Zap, Users } from "lucide-react";

export function Intro() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl flex flex-col gap-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black tracking-tight"
        >
          游戏介绍
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          在像素世界中，操控角色展开实时对战，击败对手获得分数，登顶排行榜。
        </motion.p>
      </div>

      {/* Gameplay Steps */}
      <section>
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3 uppercase tracking-wider">
          <Swords className="w-8 h-8 text-primary" />
          核心玩法
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "1", title: "选择角色", desc: "挑选适合你的像素英雄" },
            { step: "2", title: "匹配对手", desc: "全球同服，极速匹配" },
            { step: "3", title: "释放技能", desc: "华丽连招，策略博弈" },
            { step: "4", title: "击败对手", desc: "清空敌人血条" },
            { step: "5", title: "获得分数", desc: "提升段位，登顶榜单" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-2 border-border rounded-xl p-6 text-center relative overflow-hidden group hover:border-primary transition-colors"
            >
              <div className="absolute -right-4 -top-4 text-6xl font-black text-muted/20 group-hover:text-primary/10 transition-colors">
                {item.step}
              </div>
              <h3 className="text-lg font-black mb-2 relative z-10">{item.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Controls */}
      <section className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-wider">操作说明</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg"><Keyboard className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-black uppercase tracking-wider">键盘操作</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b-2 border-border pb-2">
                <span className="text-muted-foreground font-bold">移动</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">W</kbd>
                  <kbd className="px-2 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">A</kbd>
                  <kbd className="px-2 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">S</kbd>
                  <kbd className="px-2 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">D</kbd>
                </div>
              </li>
              <li className="flex justify-between items-center border-b-2 border-border pb-2">
                <span className="text-muted-foreground font-bold">跳跃</span>
                <kbd className="px-6 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">Space</kbd>
              </li>
              <li className="flex justify-between items-center border-b-2 border-border pb-2">
                <span className="text-muted-foreground font-bold">技能 1/2/3</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">Q</kbd>
                  <kbd className="px-2 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">E</kbd>
                  <kbd className="px-2 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">R</kbd>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg"><Mouse className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-black uppercase tracking-wider">鼠标操作</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b-2 border-border pb-2">
                <span className="text-muted-foreground font-bold">普通攻击</span>
                <kbd className="px-3 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">左键</kbd>
              </li>
              <li className="flex justify-between items-center border-b-2 border-border pb-2">
                <span className="text-muted-foreground font-bold">特殊攻击</span>
                <kbd className="px-3 py-1 bg-background border-b-4 border-border rounded text-sm font-black text-primary">右键</kbd>
              </li>
              <li className="flex justify-between items-center border-b-2 border-border pb-2">
                <span className="text-muted-foreground font-bold">瞄准</span>
                <span className="text-sm font-black text-primary">鼠标移动</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section>
        <h2 className="text-3xl font-black mb-8 uppercase tracking-wider">游戏特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Zap, title: "轻量化体积", desc: "极小的客户端体积，秒下载秒安装，随时随地开启对局。" },
            { icon: Swords, title: "流畅对战", desc: "优化的网络同步算法，确保每一击都精准判定，告别延迟卡顿。" },
            { icon: Users, title: "多种角色可选", desc: "战士、法师、刺客等多种定位，总有一款适合你的战斗风格。" },
            { icon: Globe, title: "技能组合丰富", desc: "自由搭配技能，创造属于你的独门连招，打对手一个措手不及。" },
            { icon: Trophy, title: "排行榜实时更新", desc: "全球玩家同台竞技，分数实时变动，为了荣誉而战。" },
          ].map((feature, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
