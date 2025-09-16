import React, { useState, useEffect } from 'react';
import { Play, Users, DollarSign, MessageCircle, ExternalLink } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 17, minutes: 40, seconds: 0 });

  const [marketCap, setMarketCap] = useState('N/A');
  const [holders, setHolders] = useState('LOADING...');

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
        
        if (totalSeconds <= 0) {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        const newTotalSeconds = totalSeconds - 1;
        const hours = Math.floor(newTotalSeconds / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const ScrollingBanner = () => (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 py-2 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap text-white font-bold text-lg">
        🚀 GOING TO THE MOON — JOIN NOW 🚀 DIAMOND HANDS ONLY 💎 GOING TO THE MOON — JOIN NOW 🚀 DIAMOND HANDS ONLY 💎 GOING TO THE MOON — JOIN NOW 🚀
      </div>
    </div>
  );

  const BuyButton = ({ size = 'normal', className = '' }) => (
    <button className={`
      ${size === 'massive' ? 'text-4xl px-16 py-8' : 'text-2xl px-8 py-4'}
      bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
      text-white font-black rounded-2xl 
      animate-pulse hover:animate-bounce
      transform hover:scale-110 transition-all duration-300
      shadow-[0_0_30px_rgba(236,72,153,0.8)]
      hover:shadow-[0_0_50px_rgba(236,72,153,1)]
      border-4 border-white
      ${className}
    `}>
      💰 BUY NOW 💰
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scrolling Banner */}
      <ScrollingBanner />
      
      {/* HERO Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="text-center z-10">
          {/* Logo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl animate-bounce">
            🧠
          </div>

          {/* Coin Name */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            $GIGABRAIN
          </h1>

          {/* Countdown Timer */}
          <div className="mb-12">
            <p className="text-2xl font-bold mb-4 text-pink-400">STREAM STARTS IN:</p>
            <div className="flex justify-center space-x-4">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl border-2 border-cyan-400">
                <div className="text-4xl font-black">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-sm">HOURS</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl border-2 border-cyan-400">
                <div className="text-4xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-sm">MINS</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl border-2 border-cyan-400">
                <div className="text-4xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-sm">SECS</div>
              </div>
            </div>
          </div>

          {/* Hero CTA */}
          <BuyButton />
        </div>
      </section>

      {/* LIVE Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            🔴 LIVE NOW 🔴
          </h2>

          {/* Video Placeholder */}
          <div className="bg-gray-900 aspect-video rounded-2xl mb-8 border-4 border-pink-500 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30"></div>
            <div className="text-center z-10">
              <Play size={80} className="mx-auto mb-4 text-pink-400" />
              <p className="text-2xl font-bold">STREAM LOADING...</p>
              <p className="text-lg text-gray-400">STREAM STARTING SOON</p>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-6 rounded-2xl border-2 border-cyan-400 text-center">
              <DollarSign size={40} className="mx-auto mb-2 text-green-400" />
              <div className="text-3xl font-black text-green-400">{marketCap}</div>
              <div className="text-lg font-bold">MARKET CAP</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-6 rounded-2xl border-2 border-cyan-400 text-center">
              <Users size={40} className="mx-auto mb-2 text-cyan-400" />
              <div className="text-3xl font-black text-cyan-400">{holders}</div>
              <div className="text-lg font-bold">HOLDERS</div>
            </div>
          </div>

          {/* Massive Buy Button */}
          <div className="text-center">
            <BuyButton size="massive" />
          </div>
        </div>
      </section>

      {/* STORY Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-pink-900/20 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            THE STORY 📖
          </h2>

          <p className="text-2xl font-bold mb-8 text-pink-300">
            Born from chaos, destined for billions. 🧠⚡
          </p>

          <p className="text-xl mb-12 text-gray-300">
            $GIGABRAIN isn't just a token—it's a revolution of degens who think different.
          </p>

          {/* Perks */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-cyan-400 mb-6">EARLY HOLDER PERKS 🎁</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl border border-pink-500">
                <div className="text-4xl mb-2">👑</div>
                <div className="font-bold text-lg">VIP Discord</div>
                <div className="text-sm text-gray-400">Exclusive alpha drops</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl border border-pink-500">
                <div className="text-4xl mb-2">🔥</div>
                <div className="font-bold text-lg">Superchat Burns</div>
                <div className="text-sm text-gray-400">Your tips = token burns</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl border border-pink-500">
                <div className="text-4xl mb-2">🖼️</div>
                <div className="font-bold text-lg">NFT Moments</div>
                <div className="text-sm text-gray-400">Legendary stream clips</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-cyan-900/20 to-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            JOIN THE CULT 🤝
          </h2>

          <p className="text-xl mb-8 text-pink-300 font-bold">
            Only holders get access 🔐
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://discord.gg/zHVy47uucK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-800 text-white font-bold text-xl px-8 py-4 rounded-2xl hover:scale-105 transition-transform border-2 border-pink-400"
            >
              <MessageCircle size={24} />
              Discord
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t-2 border-pink-500 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-bold text-gray-400 mb-4">
            ⚠️ DISCLAIMER ⚠️
          </p>
          <p className="text-gray-500">
            This is not financial advice. Pure chaos. Enter at your own risk. 
            $GIGABRAIN is a meme token with no intrinsic value. DYOR. 
            We're all going to make it... or lose it all. 🎲
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;