import { motion } from 'motion/react';
import { LoveItem } from '../types';

interface Props {
  item: LoveItem;
  isOpen: boolean;
  onOpen: () => void;
}

export function ScrollItem({ item, isOpen, onOpen }: Props) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center perspective-[1200px]">
      <motion.div
        initial={false}
        animate={{ height: isOpen ? '90%' : '80px' }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative w-full max-w-[320px] flex flex-col items-center"
      >
        {/* Top Roller (Wooden Dowel) */}
        <div className="absolute -top-6 w-[120%] h-12 flex items-center justify-center z-20">
           {/* Wood stick extending out */}
           <div className="absolute w-full h-4 bg-gradient-to-b from-[#4a2e15] via-[#8b5a2b] to-[#2c1a0f] rounded-full shadow-xl"></div>
           {/* Rolled paper around the stick */}
           <div className="absolute w-[85%] h-10 bg-[#d4c5b0] rounded-sm paper-texture aged-edges flex items-center justify-center overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.6)] border-b border-[#8b5a2b]">
              <div className="absolute bottom-0 w-full h-3 bg-gradient-to-t from-black/40 to-transparent"></div>
           </div>
        </div>

        {/* Bottom Roller (Wooden Dowel) */}
        <div className="absolute -bottom-6 w-[120%] h-12 flex items-center justify-center z-20">
           {/* Wood stick extending out */}
           <div className="absolute w-full h-4 bg-gradient-to-b from-[#4a2e15] via-[#8b5a2b] to-[#2c1a0f] rounded-full shadow-xl"></div>
           {/* Rolled paper around the stick */}
           <div className="absolute w-[85%] h-10 bg-[#d4c5b0] rounded-sm paper-texture aged-edges flex items-center justify-center overflow-hidden shadow-[0_-5px_20px_rgba(0,0,0,0.6)] border-t border-[#8b5a2b]">
              <div className="absolute top-0 w-full h-3 bg-gradient-to-b from-black/40 to-transparent"></div>
           </div>
        </div>

        {/* Paper Container */}
        <div 
          className="w-full h-full relative overflow-hidden flex flex-col justify-center border-l border-r border-[#6b4423] shadow-2xl"
          style={{
            backgroundColor: '#dcb88e',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/crumpled-paper.png"), url("https://www.transparenttextures.com/patterns/aged-paper.png")',
            backgroundBlendMode: 'multiply',
            boxShadow: 'inset 0 0 60px 20px rgba(92, 58, 33, 0.6), inset 0 0 15px rgba(0,0,0,0.5)'
          }}
        >
          {/* Decorative Inner Border */}
          <div className="absolute inset-4 sm:inset-6 border-2 border-[#5c3a21] opacity-60 pointer-events-none">
             {/* Corner Ornaments */}
             <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#5c3a21]"></div>
             <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#5c3a21]"></div>
             <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#5c3a21]"></div>
             <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#5c3a21]"></div>
          </div>

          {/* Torn/Aged Edges simulation using gradients */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#5c3a21]/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#5c3a21]/50 to-transparent pointer-events-none"></div>

          {/* Content (Visible only when open) */}
          <motion.div
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.6, delay: isOpen ? 1.0 : 0 }}
            className="absolute inset-0 p-10 sm:p-12 overflow-y-auto scrollbar-vintage flex flex-col z-10"
          >
            <h3 className="font-hand text-4xl sm:text-5xl text-[#3a2214] mb-8 text-center drop-shadow-sm">{item.title}</h3>
            <p className="font-body text-[#3a2214]/90 leading-relaxed text-justify indent-8 text-sm sm:text-base whitespace-pre-wrap font-medium">
              {item.content}
            </p>
          </motion.div>
        </div>

        {/* Wax Seal & Ribbon */}
        {!isOpen && (
          <motion.button
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onOpen}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer"
          >
            {/* Ribbon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-10 bg-[#5c0000] -z-10 shadow-lg opacity-90 border-y border-[#3a0000]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/woven.png")' }}></div>

            <div className="w-24 h-24 bg-[#8b0000] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#5c0000] relative overflow-hidden group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-black/10 rounded-full blur-[2px]"></div>
              <div className="absolute inset-2 border border-white/20 rounded-full opacity-50"></div>
              <span className="text-red-200/90 font-serif italic text-4xl relative z-10 drop-shadow-md">{['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][item.id - 1] || item.id}</span>
            </div>
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
