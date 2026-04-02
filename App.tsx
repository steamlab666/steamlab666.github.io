import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart,
  Zap,
  Droplets,
  Layers,
  X,
  Gift,
  Search
} from 'lucide-react';

// 確保圖片路徑在 GitHub Pages 子路徑下絕對正確的輔助函數
const getAssetUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

// 替換為實際的 Google 表單連結
const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSe-ki0cuDIWkJHUdpoQbDdwh9OEwYtVDiGNT6Mwq2pJhuk4iw/viewform"; 

function ReferralPage({ onBack, onOrder }: { onBack: () => void, onOrder: () => void }) {
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

      <div className="max-w-3xl mx-auto px-4 pt-12 pb-12 relative z-10">
        <button 
          onClick={onBack}
          className="text-gray-300 hover:text-white mb-8 flex items-center gap-2 transition-colors"
        >
          ← 返回主頁
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/80 backdrop-blur-md border border-brand-cyan/30 rounded-3xl p-6 md:p-12 shadow-2xl"
        >
          <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mb-6">
            <Gift className="w-8 h-8 text-brand-cyan" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-white leading-tight">
            推薦好友 <span className="text-brand-cyan">現折優惠</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            好東西就是要跟好朋友分享！現在揪團一起買，讓你省更多。
          </p>

          <div className="space-y-4 md:space-y-6 mb-12">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 md:p-6 flex items-start gap-4">
              <div className="bg-brand-cyan text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">1</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">推薦 1 人，現折 100 元</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">每成功推薦 1 位朋友完成下單，你的訂單就可以折抵 100 元。推薦越多，折越多！</p>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 md:p-6 flex items-start gap-4">
              <div className="bg-brand-cyan text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">2</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">最高折抵一半</h3>
                <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-2">
                  <p>
                    <span className="text-brand-cyan font-bold text-lg">⚠️ 折扣上限：最多只能折抵「個人訂單總金額的 50%」！</span>
                  </p>
                  <p>
                    舉例來說，如果你的訂單總金額是 1000 元，最高就能折抵 500 元（等於成功推薦 5 個人）。買越多，能折抵的上限也越高！
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 md:p-6 flex items-start gap-4">
              <div className="bg-brand-cyan text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">3</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">下單時填寫資料</h3>
                <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-2">
                  <p>
                    我們已經在下單表單中設定好專屬欄位，請確實填上你推薦的朋友資料，包含：
                    <span className="block text-brand-cyan font-bold mt-2 mb-2 ml-2">
                      1. 姓名（LINE 的名字或本名）<br/>
                      2. LINE ID<br/>
                      3. 手機號碼
                    </span>
                    我們會在出貨前進行人工核對。
                  </p>
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.3 }}
                    className="block mt-4 text-red-400 font-bold bg-red-950/80 p-4 rounded-xl border-2 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)] relative overflow-hidden"
                  >
                    <motion.div 
                      animate={{ opacity: [0.2, 0.6, 0.2] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 bg-red-500/20"
                    />
                    <div className="relative z-10 flex items-start gap-2">
                      <span className="text-xl shrink-0 mt-0.5">⚠️</span>
                      <p className="leading-relaxed">
                        <span className="text-red-300 underline underline-offset-4">注意：我們會嚴格審核推薦者留下的資料是不是真人，我們保有最終審核權利。</span>
                        <br className="hidden sm:block" />
                        如果審核發現資料不實或查無此人，<span className="text-white bg-red-600 px-1.5 py-0.5 rounded mx-1 inline-block mt-1 sm:mt-0">該筆 100 元折價將不予計算</span>，只有確認是真人的推薦才會算數喔！
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 md:p-6 flex items-start gap-4">
              <div className="bg-brand-cyan text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">4</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">確認成功，直接扣除</h3>
                <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-2">
                  <p>
                    <span className="text-brand-cyan font-bold text-lg">⚠️ 成功推薦的唯一條件：被推薦者「必須成功完成下單」！</span>
                  </p>
                  <p>
                    只要我們核對確認對方已確實下單，就會直接從你的訂單總金額中扣除折扣。不用等回饋金、不用等下次回購，當次直接幫你省現金！
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOrder}
              className="flex-1 bg-brand-cyan text-black py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)] text-center flex items-center justify-center gap-2"
            >
              立即參加 / 前往下單 <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'referral'>('home');
  const [showReferralNotification, setShowReferralNotification] = useState(false);
  const [hasSeenNotification, setHasSeenNotification] = useState(false);
  const [showCompetitorNotice, setShowCompetitorNotice] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasSeenNotification || currentPage !== 'home') return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
      
      if (scrollPercentage > 0.7) {
        setShowReferralNotification(true);
        setHasSeenNotification(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasSeenNotification, currentPage]);

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
  // const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSe-ki0cuDIWkJHUdpoQbDdwh9OEwYtVDiGNT6Mwq2pJhuk4iw/viewform"; 

  if (currentPage === 'referral') {
    return (
      <>
        <ReferralPage 
          onBack={() => {
            setCurrentPage('home');
            window.scrollTo(0, 0);
          }} 
          onOrder={() => setIsOrderModalOpen(true)} 
        />
        {/* Order Modal (Shared) */}
        <AnimatePresence>
          {isOrderModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setIsOrderModalOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-zinc-900 border border-brand-cyan/30 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-blue-500" />
                
                <button 
                  onClick={() => setIsOrderModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center space-y-6 mt-4">
                  <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-brand-cyan" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">下單前請注意</h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    下單前一定要先加入我們的 LINE 客服帳號：<br/>
                    <span className="text-brand-cyan font-bold text-2xl select-all mt-2 inline-block tracking-wider">ray77766</span>
                  </p>

                  <div className="pt-6 space-y-3">
                    <a 
                      href="https://line.me/ti/p/sAUWLZXXpW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#00B900] text-white py-3 rounded-xl font-bold hover:bg-[#009900] transition-colors"
                    >
                      加入 LINE 客服
                    </a>
                    <a 
                      href={GOOGLE_FORM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOrderModalOpen(false)}
                      className="block w-full bg-brand-cyan text-black py-3 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
                    >
                      我已加入，前往下單
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

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
      <div className="fixed bottom-6 left-0 w-full px-4 z-40 pointer-events-none flex justify-center">
        <button 
          onClick={() => setIsOrderModalOpen(true)}
          className="pointer-events-auto bg-brand-cyan text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(0,229,255,0.4)] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all"
        >
          下單按這邊 <ShoppingCart className="w-6 h-6" />
        </button>
      </div>

      {/* Interception Notification */}
      <AnimatePresence>
        {showReferralNotification && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-28 right-4 md:right-8 z-50 max-w-[calc(100vw-2rem)] md:max-w-sm w-full bg-zinc-900 border border-brand-cyan/50 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,229,255,0.25)]"
          >
            <button 
              onClick={() => setShowReferralNotification(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-4">
              <div className="bg-brand-cyan/20 p-3 rounded-full shrink-0">
                <Gift className="w-6 h-6 text-brand-cyan" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-white mb-1">還在猶豫嗎？</h4>
                <p className="text-gray-300 text-sm mb-4">也許你還可以再折一點</p>
                <button 
                  onClick={() => {
                    setShowReferralNotification(false);
                    setCurrentPage('referral');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-brand-cyan text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2"
                >
                  點這裡！！
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 1: Hero */}
      <section className="relative pt-12 pb-20 px-4 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-10 max-w-4xl mx-auto"
          >
            <div className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-sm md:text-lg font-black tracking-widest mb-4 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-red-400">
              🔥 全網最強團購・挑戰最低價 🔥
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">22000口</span>
              <span className="block mt-2 text-white">超大容量怪物</span>
            </h1>
            <p className="text-2xl md:text-4xl text-yellow-400 font-black mt-6 drop-shadow-md">
              買一支抵三支！揪團現省無上限！
            </p>
            <p className="text-lg md:text-2xl text-gray-200 font-medium mt-4 max-w-3xl mx-auto leading-relaxed">
              RELX CREATOR 22K 震撼登場。前衛樂高設計 × 18種神級口味。<br className="hidden md:block"/>
              <span className="text-brand-cyan font-bold">這絕對是你今年看過 CP 值最高的選擇，沒有之一。</span>
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
          </motion.div>
        </div>
      </section>

      {/* Section 2: Group Buy Pricing */}
      <section className="py-24 px-4 relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Market Comparison Highlight */}
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            有比較，才知道我們<span className="text-brand-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">多便宜</span>
          </h2>
          <p className="text-xl text-gray-300">不怕你去外面比價，因為我們絕對是最划算的！</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          
          {/* Competitor Mockup (Actual Screenshot) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[450px] rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-gray-800 cursor-pointer group bg-white"
            onClick={() => setShowCompetitorNotice(true)}
          >
            <img 
              src={getAssetUrl("其他網站.png")} 
              alt="一般網購市價" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Label */}
            <div className="absolute top-8 -left-12 bg-red-600 text-white font-black py-1 px-12 -rotate-45 shadow-lg text-sm tracking-widest z-20 pointer-events-none">
              點圖看得更清楚
            </div>
            
            {/* Click hint - Clean bar at bottom */}
            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white text-center py-3 font-bold flex items-center justify-center gap-2 transition-colors group-hover:bg-brand-cyan group-hover:text-black">
              <Search className="w-5 h-5" />
              市場行情大公開
            </div>
          </motion.div>

          {/* VS Badge */}
          <div className="w-16 h-16 rounded-full bg-brand-cyan text-black font-black flex items-center justify-center text-2xl shrink-0 z-10 lg:-mx-8 my-4 lg:my-0 shadow-[0_0_30px_rgba(0,229,255,0.6)] border-4 border-zinc-900">
            VS
          </div>

          {/* Our Price */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[450px] bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-brand-cyan rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.2)] transform lg:scale-105 z-0 relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="bg-brand-cyan text-black px-4 py-3 text-center font-black tracking-widest text-lg">
              🔥 本站專屬團購價 🔥
            </div>
            <div className="p-8 md:p-10 text-center relative z-10">
              <h4 className="font-bold text-white text-2xl mb-2">22K 超大容量煙彈</h4>
              <div className="text-brand-cyan font-black text-7xl my-6 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                $450
              </div>
              
              <div className="bg-black/40 rounded-xl p-4 mb-8 border border-white/10 text-left space-y-3">
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span>保證正品，絕無假貨</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span>18 種口味最齊全</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span>推薦好友再折 $100</span>
                </div>
              </div>

              <button 
                onClick={() => setIsOrderModalOpen(true)} 
                className="w-full bg-brand-cyan text-black py-4 rounded-xl font-black text-xl hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-105 active:scale-95"
              >
                立刻跟團下單
              </button>
            </div>
          </motion.div>

        </div>

        {/* Pricing & Structure Highlight (Original Info) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-zinc-900/60 border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-md flex flex-col md:flex-row gap-8 items-center mt-16"
        >
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-black leading-tight text-white">
              主機煙彈分離設計<br/>
              <span className="text-brand-cyan">拒絕一次性浪費</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              這不是抽完就丟的拋棄式產品！採用更環保、更省錢的「主機＋煙彈」分離設計。未來只需購買煙彈，長久下來為您省下大筆開銷。
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-black/50 border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <h4 className="text-gray-400 font-bold mb-2 text-xl">專屬主機 (可重複充電)</h4>
            <div className="text-5xl font-black text-white my-2">$350</div>
            <div className="text-brand-cyan font-medium mt-2">搭配煙彈購買最划算</div>
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
      </section>

      {/* Section 3: Flavors Gallery */}
      <section className="py-24 px-6 relative z-10 bg-black/40 border-y border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-cyan/20 text-brand-cyan px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-4">
              18 種神級口味
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">點擊圖片查看完整口味介紹</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              提供極其豐富的口味選擇，滿足各種挑剔味蕾。每一款都經過嚴格測試，為您帶來層次豐富的極致體驗。
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
            {flavors.map((flavor, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:border-brand-cyan/50 transition-all"
                onClick={() => setSelectedImage(flavor.img)}
              >
                <img 
                  src={flavor.img} 
                  alt={flavor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3 md:p-4 pointer-events-none">
                  <h4 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">{flavor.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Advantages */}
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
              <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-xl p-3 md:p-5 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                <p className="text-brand-cyan/90 text-xs sm:text-sm md:text-lg leading-relaxed font-medium">
                  <span className="text-white font-bold block mb-1 md:mb-2">✨ 完美涼度與柔順口感</span>
                  這邊要再補充一個重點，很多人會很怕太涼的口味，可是這次 RELX 收集了將近一年、幾萬個使用者的反饋後，最後做出<span className="text-white font-bold">最完美的涼度調整</span>，絕對適合喜歡不同程度涼感的朋友！更要提醒各位，這次入喉的感覺是絕對<span className="text-white font-bold border-b border-brand-cyan/50">百分百柔順舒服</span>的。
                </p>
              </div>
            </div>
          </motion.div>



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

      {/* Competitor Notice Modal */}
      <AnimatePresence>
        {showCompetitorNotice && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowCompetitorNotice(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-zinc-900 border-2 border-brand-cyan rounded-3xl p-6 md:p-10 max-w-5xl w-full shadow-[0_0_50px_rgba(0,229,255,0.2)] relative overflow-hidden flex flex-col lg:flex-row gap-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowCompetitorNotice(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 rounded-full p-2 transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left: Real Screenshot */}
              <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border-4 border-gray-800 bg-white flex-shrink-0">
                <div className="absolute top-0 left-0 w-full bg-gray-800 text-white text-center py-2 font-black tracking-widest z-10 shadow-md">
                  市場行情大公開
                </div>
                <img 
                  src={getAssetUrl("其他網站.png")} 
                  alt="競品截圖" 
                  className="w-full h-auto mt-10 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right: Strong Comparison */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  真實市場價格比較<br/><span className="text-brand-cyan mt-2 block">幫您省下更多花費</span>
                </h3>
                
                <div className="bg-black/60 p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex flex-col border-b border-white/10 pb-6 gap-2">
                    <span className="text-gray-400 text-xl font-bold">一般網購市價</span>
                    <span className="text-gray-500 font-black text-5xl line-through decoration-gray-500/50">$550</span>
                  </div>
                  <div className="flex flex-col pt-2 gap-2">
                    <span className="text-brand-cyan font-black text-2xl">🔥 我們的團購價</span>
                    <span className="text-brand-cyan font-black text-7xl drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">$450</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-200 text-xl leading-relaxed font-medium">
                    我們直接對接原廠，省去中間商的層層成本，將價格空間直接回饋給您。
                  </p>
                  <p className="text-brand-cyan text-xl font-bold">
                    買一顆現省 $100，買越多省越多！
                  </p>
                </div>

                <button 
                  onClick={() => {
                    setShowCompetitorNotice(false);
                  }}
                  className="w-full bg-brand-cyan text-black py-5 rounded-xl font-black text-2xl hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 active:scale-95 mt-4 flex items-center justify-center gap-2"
                >
                  繼續查看更多團購資訊
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Modal */}
      <AnimatePresence>
        {isOrderModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsOrderModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-zinc-900 border border-brand-cyan/30 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-blue-500" />
              
              <button 
                onClick={() => setIsOrderModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center space-y-6 mt-4">
                <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-brand-cyan" />
                </div>
                
                <h3 className="text-2xl font-bold text-white">下單前請注意</h3>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  下單前一定要先加入我們的 LINE 客服帳號：<br/>
                  <span className="text-brand-cyan font-bold text-2xl select-all mt-2 inline-block tracking-wider">ray77766</span>
                </p>

                <div className="pt-6 space-y-3">
                  <a 
                    href="https://line.me/ti/p/sAUWLZXXpW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#00B900] text-white py-3 rounded-xl font-bold hover:bg-[#009900] transition-colors"
                  >
                    加入 LINE 客服
                  </a>
                  <a 
                    href={GOOGLE_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOrderModalOpen(false)}
                    className="block w-full bg-brand-cyan text-black py-3 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
                  >
                    我已加入，前往下單
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
