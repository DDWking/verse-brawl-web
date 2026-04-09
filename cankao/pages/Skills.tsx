import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Shield, Sword, Zap, Wind } from "lucide-react";

const characters = [
  {
    id: "warrior",
    name: "狂战士",
    title: "近战绞肉机",
    desc: "高血量、高攻击，适合正面交锋。拥有强大的突进和控制能力。",
    stats: { hp: 90, atk: 85, spd: 40, diff: 30 },
    avatar: "https://picsum.photos/seed/warrior/200/200",
    skills: [
      { name: "冲锋", icon: Wind, desc: "向前冲刺并撞击敌人，造成中等伤害并眩晕 1 秒。" },
      { name: "旋风斩", icon: Sword, desc: "挥舞武器旋转，对周围敌人造成持续伤害，期间免疫减速。" },
      { name: "不屈意志", icon: Shield, desc: "短时间内大幅提升防御力，并将受到的部分伤害转化为生命值。" },
    ]
  },
  {
    id: "assassin",
    name: "暗影刺客",
    title: "无形之刃",
    desc: "极高的机动性和爆发伤害，但身板脆弱。考验玩家的操作精度。",
    stats: { hp: 40, atk: 95, spd: 90, diff: 80 },
    avatar: "https://picsum.photos/seed/assassin/200/200",
    skills: [
      { name: "暗影步", icon: Wind, desc: "瞬间移动到目标背后，下一次攻击必定暴击。" },
      { name: "毒刃", icon: Sword, desc: "投掷淬毒匕首，造成伤害并使目标持续流血减速。" },
      { name: "致命连击", icon: Zap, desc: "对单体目标进行快速的五连击，若目标血量低于 30% 则直接斩杀。" },
    ]
  },
  {
    id: "mage",
    name: "元素法师",
    title: "掌控雷电",
    desc: "擅长远程消耗和范围控制，需要保持安全距离输出。",
    stats: { hp: 50, atk: 80, spd: 50, diff: 60 },
    avatar: "https://picsum.photos/seed/mage/200/200",
    skills: [
      { name: "火球术", icon: Zap, desc: "发射一枚火球，命中后爆炸造成范围伤害。" },
      { name: "冰霜新星", icon: Shield, desc: "冻结周围的敌人 2 秒，并造成少量伤害。" },
      { name: "雷霆万钧", icon: Zap, desc: "召唤大范围雷电轰击区域，对区域内敌人造成毁灭性打击。" },
    ]
  }
];

export function Skills() {
  const [activeChar, setActiveChar] = useState(characters[0]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">角色技能</h1>
        <p className="text-xl text-muted-foreground">了解每个角色的特性，选择你的本命英雄</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Character List */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0">
          {characters.map((char) => (
            <button
              key={char.id}
              onClick={() => setActiveChar(char)}
              className={cn(
                "flex items-center gap-4 p-3 rounded-xl border text-left transition-all min-w-[200px] lg:min-w-0",
                activeChar.id === char.id 
                  ? "bg-primary/10 border-primary" 
                  : "bg-card border-border hover:border-primary/50"
              )}
            >
              <img src={char.avatar} alt={char.name} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold">{char.name}</div>
                <div className="text-xs text-muted-foreground">{char.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Character Details */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChar.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-card border-2 border-border rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <img 
                  src={activeChar.avatar} 
                  alt={activeChar.name} 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-2xl border-4 border-primary"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-black mb-2 uppercase tracking-wider">{activeChar.name}</h2>
                  <p className="text-primary font-bold mb-4 uppercase tracking-widest">{activeChar.title}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-medium">{activeChar.desc}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    {[
                      { label: "生存能力", val: activeChar.stats.hp, color: "bg-green-500" },
                      { label: "输出能力", val: activeChar.stats.atk, color: "bg-red-500" },
                      { label: "机动性", val: activeChar.stats.spd, color: "bg-blue-500" },
                      { label: "上手难度", val: activeChar.stats.diff, color: "bg-purple-500" },
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1 font-bold uppercase tracking-wider">
                          <span className="text-muted-foreground">{stat.label}</span>
                          <span className="font-mono text-primary">{stat.val}</span>
                        </div>
                        <div className="h-3 bg-background border border-border rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", stat.color)} style={{ width: `${stat.val}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 border-b border-border pb-2">核心技能</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activeChar.skills.map((skill, i) => (
                    <div key={i} className="bg-background border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <skill.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-bold text-lg">{skill.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
