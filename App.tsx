import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart,
  Zap,
  Droplets,
  Layers,
  X
} from 'lucide-react';

// 確保圖片路徑在 GitHub Pages 子路徑下絕對正確的輔助函數
const getAssetUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const flavors = [
    { name: "海鹽檸檬", img: getAssetUrl("口味1 海鹽檸檬.jpeg") },
    { name: "清爽薄荷", img: getAssetUrl("口味2 清爽薄荷.jpeg") },
    { name: "香甜桃子", img: getAssetUrl("口味3 香甜桃子.jpeg") },
    { name: "西瓜冰", img: getAssetUrl("口味4 西瓜冰.jpeg") },
    { name: "礦泉水", img: getAssetUrl("口味5 礦泉水.jpeg") },
    { name: "梅子可樂", img: getAssetUrl("口味6 梅子可樂.jpeg") },
    { name: "沙士汽水", img: getAssetUrl("口味7 沙士汽水.jpeg") },
    { name: "茉香芭樂", img: getAssetUrl("口味8 茉香芭樂.jpeg") },
    { name: "茉香西瓜", img: getAssetUrl("口味9茉香西瓜.jpeg") },
    { name: "酸梅青檸汁", img: getAssetUrl("口味10 酸梅青檸汁.47.00.jpeg") },
    { name: "鐵觀音", img: getAssetUrl("口味11 鐵觀音.47.12.jpeg") },
    { name: "極涼青提", img: getAssetUrl("口味12 極涼青提.47.13.jpeg") },
    { name: "貴妃荔枝", img: getAssetUrl("口味13 貴妃荔枝.47.14.jpeg") },
    { name: "青提鐵觀音", img: getAssetUrl("口味14 青提鐵觀音.47.24.jpeg") },
    { name: "巨峰葡萄", img: getAssetUrl("口味15 巨峰葡萄.47.25.jpeg") },
    { name: "百香果茶", img: getAssetUrl("口味16 百香果茶.47.27.jpeg") },
    { name: "甘草芭樂", img: getAssetUrl("口味17 甘草芭樂.47.28.jpeg") },
    { name: "極涼青檸", img: getAssetUrl("口味18 極涼青檸.47.29.jpeg") },
  ];

  // 替換為實際的 Google 表單連結
  const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdfDbGpWrzSaL1PgdjGZoAOwa9FI3A0FSXj5JahRP1WMBfg1A/viewform?usp=publish-editor"; 

  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-cyan selection:text-black pb-24 relative">
      
      {/* Global Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-[#004080] overflow-hidden">
        {/* 3D Layered Blocks - Left Side */}
        <div className="absolute top-[-5%] left-[-5%] w-[40vw] h-[25vh] bg-[#004080] shadow-[15px_15px_30px_rgba(0,0,0,0.4)]" />
        <div className="absolute top-[15%] left-[5%] w-[25vw] h-[35vh] bg-[#004080] shadow-[20px_20px_40px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-[45%] left-[-10%] w-[30vw] h-[40vh] bg-[#004080] shadow-[15px_15px_30px_rgba(0,0,0,0.4)]" />
        <div className="absolute bottom-[-5%] left-[15%] w-[25vw] h-[20vh] bg-[#004080] shadow-[15px_15px_30px_rgba(0,0,0,0.4)]" />
        
        {/* 3D Layered Blocks - Right Side */}
        <div className="absolute top-[-10%] right-[10%] w-[35vw] h-[20vh] bg-[#004080] shadow-[15px_15px_30px_rgba(0,0,0,0.4)]" />
        <div className="absolute top-[10%] right-[-5%] w-[20vw] h-[45vh] bg-[#004080] shadow-[20px_20px_40px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-[60%] right-[25%] w-[15vw] h-[15vw] bg-[#004080] shadow-[15px_15px_30px_rgba(0,0,0,0.4)]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[40vw] h-[35vh] bg-[#004080] shadow-[15px_15px_30px_rgba(0,0,0,0.4)]" />
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 left-0 w-full px-4 z-50 pointer-events-none flex justify-center">
        <a 
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-brand-cyan text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(0,229,255,0.4)] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all"
        >
          下單按這邊 <ShoppingCart className="w-6 h-6" />
        </a>
      </div>

      {/* Section 1: Hero */}
      <section className="relative pt-12 pb-20 px-4 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-10 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              RELX CREATOR <span className="text-brand-cyan">22K</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-medium">
              突破極限的超大容量 × 前衛潮流設計
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-3xl mb-16"
          >
            <img 
              src={getAssetUrl("大封面.png")}
              alt="RELX CREATOR 22K" 
              className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl mx-auto space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              市場罕見 22,000 口超大容量，讓您告別頻繁更換的煩惱。搭載智能顯示螢幕與可調式功率，隨心掌控每一口的濃郁度。不只是實用的設備，更是展現個人品味的潮流單品。
            </p>
            
            <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-2xl p-5 md:p-8 w-full shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-cyan mb-3 md:mb-4 tracking-tight md:tracking-wider whitespace-nowrap">
                🔥 四月最強團購 🔥
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed">
                跟團保證 <span className="text-brand-cyan font-bold border-b-2 border-brand-cyan whitespace-nowrap">遠低於市場行情價格</span>，絕對划算！
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Advantages */}
      <section className="py-24 relative z-10">
        <div className="space-y-24 md:space-y-32">
          
          {/* Advantage 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full flex flex-col items-center text-center py-20 md:py-32 overflow-hidden border-y border-white/10 bg-zinc-900/40 backdrop-blur-sm shadow-2xl"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] pointer-events-none opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[18rem] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none tracking-tighter">
              22000
            </div>

            <div className="relative z-10 w-full max-w-4xl space-y-8 md:space-y-10 px-6">
              <motion.h2 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl"
              >
                超越同級的<br/>
                <motion.span 
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-brand-cyan drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] inline-block"
                >
                  超大容量
                </motion.span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-100 text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto font-medium"
              >
                市場同類型產品中的絕對強項。讓您告別頻繁更換的煩惱，享受更持久、更純粹的體驗，CP 值無可挑剔。
              </motion.p>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto px-6 space-y-24 md:space-y-32 w-full">
            {/* Capacity Comparison Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900/90 to-black border-2 border-brand-cyan/60 p-8 md:p-12 lg:p-16 shadow-[0_0_60px_rgba(0,229,255,0.25)] backdrop-blur-xl flex flex-col lg:flex-row gap-10 items-center"
            >
              {/* Glowing background accent */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="w-full lg:w-1/2 relative z-10">
                <img
                  src={getAssetUrl("容量比較.png")}
                  alt="容量比較"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                  onClick={() => setSelectedImage(getAssetUrl('容量比較.png'))}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-6 relative z-10">
                <div className="inline-block bg-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm md:text-base font-bold tracking-wider border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                  ⚠️ 殘酷真相大公開
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
                  容量直逼 <span className="text-brand-cyan text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">3倍</span><br/>
                  價格卻只多 <span className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">$150</span>
                </h2>
                <div className="space-y-5 text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                  <p>
                    目前市面上最紅的競品，若要達到我們 <span className="text-white font-bold text-xl md:text-2xl">22,000 口</span> 的超大容量，您必須購買 <span className="text-red-400 font-bold text-xl md:text-2xl">3 支</span>，花費絕對 <span className="text-red-400 font-bold underline decoration-red-500/50 underline-offset-4 text-xl md:text-2xl">超過 $1,000 元</span>！
                  </p>
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    這次專屬團購，您只需要多花區區 <span className="text-yellow-400 font-bold text-2xl">$150</span>，就能直接擁有近 3 倍的持久享受。
                    <br/><span className="text-brand-cyan font-black block mt-3 text-xl md:text-2xl">聰明人的選擇，CP 值徹底碾壓市場！</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Advantage 2 */}
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row md:flex-row-reverse gap-4 md:gap-16 items-center"
          >
            <div className="w-1/2 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
              <img 
                src={getAssetUrl("小封面.jpeg")}
                alt="前衛設計" 
                className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => setSelectedImage(getAssetUrl('小封面.jpeg'))}
              />
            </div>
            <div className="w-1/2 space-y-3 md:space-y-6">
              <div className="inline-block bg-brand-cyan/20 text-brand-cyan px-2 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold tracking-wider">02 / DESIGN</div>
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold leading-tight">前衛設計<br/><span className="text-brand-cyan">市面罕見</span></h2>
              <p className="text-gray-200 text-xs sm:text-sm md:text-xl leading-relaxed">
                市面上唯一樂高概念的組裝設計，讓大容量的主機再也不是礙手礙腳的體積，換彈更直覺更快速；<br className="hidden md:block" />
                不僅是為了新潮好玩，更考慮到煙彈漏油問題並全面提升霧化效果，給你市面上其他商品沒有的口感。
              </p>
            </div>
          </motion.div>

          {/* Advantage 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row gap-4 md:gap-16 items-center"
          >
            <div className="w-1/2 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
              <img 
                src={getAssetUrl("產品照.png")}
                alt="豐富口味" 
                className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => setSelectedImage(getAssetUrl('產品照.png'))}
              />
            </div>
            <div className="w-1/2 space-y-3 md:space-y-6">
              <div className="inline-block bg-brand-cyan/20 text-brand-cyan px-2 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold tracking-wider">03 / FLAVORS</div>
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold leading-tight">百變口味<br/><span className="text-brand-cyan">隨心所欲</span></h2>
              <p className="text-gray-200 text-xs sm:text-sm md:text-xl leading-relaxed">
                提供極其豐富的口味選擇，滿足各種挑剔味蕾。口味的多樣性與完整度，本身就是我們最大的賣點之一。
              </p>
            </div>
          </motion.div>

          {/* Pricing & Structure Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-[2rem] bg-zinc-900/60 border border-white/10 p-8 md:p-12 lg:p-16 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row-reverse gap-10 items-center"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 relative z-10">
              <img
                src={getAssetUrl("價格表.png")}
                alt="價格表"
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                onClick={() => setSelectedImage(getAssetUrl('價格表.png'))}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Text & Pricing */}
            <div className="w-full lg:w-1/2 space-y-8 relative z-10">
              <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm md:text-base font-bold tracking-wider border border-yellow-500/30">
                💰 破盤團購價公開
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
                主機煙彈分離設計<br/>
                <span className="text-brand-cyan">拒絕一次性浪費</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                這不是抽完就丟的拋棄式產品！採用更環保、更省錢的「主機＋煙彈」分離設計。未來只需購買煙彈，長久下來為您省下大筆開銷。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Device Price */}
                <div className="bg-black/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                  <h4 className="text-gray-400 font-bold mb-2">專屬主機</h4>
                  <div className="text-4xl font-black text-white">$350</div>
                  <div className="text-sm text-gray-500 mt-2">可重複充電使用</div>
                </div>

                {/* Pod Price */}
                <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-2xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">低於市價</div>
                  <h4 className="text-brand-cyan font-bold mb-2">22K 超大容量煙彈</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg text-gray-500 line-through">$500+</span>
                    <span className="text-4xl font-black text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">$450</span>
                  </div>
                  <div className="text-sm text-brand-cyan/80 mt-2">市面行情皆破五百，團購最划算</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Price Banner / LINE CTA */}
          <motion.a 
            href="https://line.me/ti/p/sAUWLZXXpW"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="block relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-brand-cyan/30 p-8 md:p-12 text-center hover:scale-[1.02] hover:border-[#00B900]/50 transition-all cursor-pointer group shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#00B900]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">超殺團購價現正開放中 <span className="text-brand-cyan">立刻搶購</span></h3>
              <p className="text-gray-200 text-lg mb-8">名額有限，錯過不再！點擊下方按鈕加入群組，獲取專屬優惠。</p>
              
              <div className="inline-flex items-center gap-3 bg-[#00B900] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-[0_0_20px_rgba(0,185,0,0.3)] group-hover:shadow-[0_0_30px_rgba(0,185,0,0.5)] transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.254c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065-.043-.043-.068-.099-.068-.161v-5.237c0-.129.104-.233.233-.233h.871zm10.59 0c.129 0 .233.105.233.234v5.237c0 .129-.104.233-.233.233h-.871c-.129 0-.234-.104-.234-.233v-3.388l-2.258 3.468c-.035.053-.092.086-.153.086h-.827c-.129 0-.233-.104-.233-.233v-5.237c0-.129.104-.233.233-.233h.871c.129 0 .233.105.233.234v3.366l2.233-3.432c.036-.055.094-.088.157-.088h.849zm-4.706 0c.129 0 .234.105.234.234v5.237c0 .129-.105.233-.234.233h-.871c-.129 0-.234-.104-.234-.233v-5.237c0-.129.105-.233.234-.233h.871zm4.942 0c.129 0 .234.105.234.234v.842c0 .129-.105.234-.234.234h-2.254v1.138h2.254c.129 0 .234.104.234.233v.842c0 .129-.105.234-.234.234h-2.254v1.207h2.254c.129 0 .234.105.234.234v.842c0 .129-.105.233-.234.233h-3.363c-.063 0-.12-.025-.162-.065-.043-.043-.068-.099-.068-.161v-5.237c0-.129.105-.233.234-.233h3.363z"/>
                </svg>
                點擊這裡加入我們私密團購群組
              </div>
            </div>
          </motion.a>

          </div>
        </div>
      </section>

      {/* Section 3: Flavors Gallery */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">完整口味展示</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              多種精心調配的專屬口味，每一款都經過嚴格測試，為您帶來層次豐富的極致體驗。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {flavors.map((flavor, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-white/5 cursor-pointer"
                onClick={() => setSelectedImage(flavor.img)}
              >
                <img 
                  src={flavor.img} 
                  alt={flavor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-4 md:p-6 pointer-events-none">
                  <h4 className="text-white font-bold text-base md:text-lg leading-tight">{flavor.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
