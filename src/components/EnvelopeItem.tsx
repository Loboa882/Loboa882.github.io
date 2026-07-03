import { motion } from 'motion/react';
import { LoveItem } from '../types';

interface Props {
  item: LoveItem;
  isOpen: boolean;
  onOpen: () => void;
}

export function EnvelopeItem({ item, isOpen, onOpen }: Props) {
  return (
    <div className="relative w-full max-w-[340px] aspect-[5/3.5] mx-auto flex flex-col items-center justify-end perspective-[1200px] mt-12">
      
      {/* Envelope Back Inner */}
      <div className="absolute inset-0 bg-[#8a7a63] rounded-sm shadow-inner"></div>

      {/* Envelope Top Flap (Behind letter when open) */}
      <motion.div
        initial={false}
        animate={{
          rotateX: isOpen ? 180 : 0,
          zIndex: isOpen ? 0 : 30
        }}
        transition={{ 
          rotateX: { duration: 0.6, ease: "easeInOut", delay: isOpen ? 0 : 0.8 },
          zIndex: { duration: 0, delay: isOpen ? 0.3 : 0.8 }
        }}
        className="absolute top-0 left-0 w-full h-[65%] origin-top"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of the flap (Visible when closed) */}
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.4))' }}>
            <path d="M0,0 L100,0 L50,50 Z" fill="#ab987e" stroke="#9a8569" strokeWidth="0.5"/>
        </svg>
        
        {/* Back of the flap (Visible when opened) */}
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
            <path d="M0,0 L100,0 L50,50 Z" fill="#d0c2ae" />
        </svg>

        {/* Wax Seal */}
        {!isOpen && (
          <button
            onClick={onOpen}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
          >
            <div className="w-16 h-16 bg-[#8b0000] rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-[#5c0000] relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 rounded-full blur-[2px]"></div>
              <div className="absolute inset-1 border border-white/20 rounded-full opacity-50"></div>
              <span className="text-red-200/90 font-serif italic text-3xl relative z-10 drop-shadow-md">C</span>
            </div>
          </button>
        )}
      </motion.div>

      {/* The Letter */}
      <motion.div
        initial={false}
        animate={{
          y: isOpen ? -200 : 0,
        }}
        transition={{
          duration: 0.8, delay: isOpen ? 0.6 : 0, ease: "easeOut"
        }}
        className="absolute bottom-2 left-[5%] w-[90%] h-[95%] p-6 rounded-sm border border-[#4a2e15] flex flex-col z-10 burnt-edges paper-texture shadow-[0_5px_15px_rgba(0,0,0,0.6)]"
      >
        {/* Burnt Details Overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-sm opacity-70" style={{
            background: 'radial-gradient(circle at 10% 10%, rgba(0,0,0,0.25) 0%, transparent 20%), radial-gradient(circle at 85% 85%, rgba(0,0,0,0.3) 0%, transparent 25%), radial-gradient(circle at 50% 95%, rgba(0,0,0,0.2) 0%, transparent 30%)'
        }}></div>

        <motion.div
           animate={{ opacity: isOpen ? 1 : 0 }}
           transition={{ duration: 0.4, delay: isOpen ? 1.0 : 0 }}
           className={`flex-1 flex flex-col relative z-20 overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <h3 className="font-hand text-4xl text-[#2c1e16] mb-4 text-center drop-shadow-sm font-bold shrink-0">{item.title}</h3>
          <div className="overflow-y-auto flex-1 scrollbar-vintage pr-3 pb-4">
            <p className="font-body text-sm sm:text-base text-[#2c1e16]/90 leading-relaxed whitespace-pre-wrap text-justify font-medium">
              {item.content}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Envelope Front Flaps (Left, Right, Bottom) */}
      <div className="absolute inset-0 z-20 pointer-events-none rounded-sm">
        <svg viewBox="0 0 100 70" preserveAspectRatio="none" className="w-full h-full drop-shadow-xl">
           <path d="M0,0 L50,45 L100,0 L100,70 L0,70 Z" fill="#b8a68d" stroke="#a69277" strokeWidth="0.5" filter="drop-shadow(0 0 2px rgba(0,0,0,0.3))"/>
           <path d="M0,70 L50,40 L100,70 Z" fill="#c2b29c" stroke="#a69277" strokeWidth="0.5" filter="drop-shadow(0 -2px 3px rgba(0,0,0,0.2))"/>
        </svg>
      </div>

    </div>
  );
}
