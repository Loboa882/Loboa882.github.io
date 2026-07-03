import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollItem } from './components/ScrollItem';
import { EnvelopeItem } from './components/EnvelopeItem';
import { LoveItem } from './types';
import backgroundImage from './assets/images/vintage_collage_background_1783015895127.jpg';
import introLandscape from './assets/images/victorian_flower_landscape_1783016294676.jpg';

// Datos de prueba iniciales
const items: LoveItem[] = [
  { 
    id: 1, 
    type: 'scroll', 
    title: 'Capítulo I', 
    previewText: 'Para empezar...', 
    content: 'Para dar comienzo a estas misivas, deseo expresarte cuán grato y hermoso ha resultado para mí el haberte conocido durante este tiempo. A decir verdad, en cada instante compartido he hallado un deleite que no podrías imaginar. He llegado a comprender que, en mi interior, están floreciendo profundos sentimientos hacia ti; y, por supuesto, es mi intención permitir que sigan creciendo, pues anhelo abrirme a la posibilidad de tenerte presente en mi vida.' 
  },
  { 
    id: 2, 
    type: 'scroll', 
    title: 'Capítulo II', 
    previewText: 'Qué nombre tan hermoso...', 
    content: '"Melany"... qué nombre tan singular y hermoso. Es el nombre de la damisela que me cautiva día tras día. Me encuentro dispuesto a entregarme por completo para que logres comprender que no existe nadie en este vasto mundo que despierte mi interés como tú lo haces. Melany, me fascina que seas tan auténticamente tú. Si bien es cierto que nuestra historia apenas comienza, tengo la certeza de que llegará el momento en que, al mirarte, podré afirmar con total honestidad que no hay un solo rasgo de tu ser que no me deje maravillado.' 
  },
  { 
    id: 3, 
    type: 'scroll', 
    title: 'Capítulo III', 
    previewText: 'Soy un fastidioso...', 
    content: 'Reconozco ser, en ocasiones, algo impertinente... De tal aseveración no cabe duda alguna. Sin embargo, me has profesado una infinita paciencia y te guardo un inmenso aprecio, pues comprendo que tolerar mis ocurrencias no es labor sencilla. Sospecho, no obstante, que dicha paciencia nace del hecho de que, en el fondo, te resulto grato, aunque aún no lo admitas. Te has convertido en alguien de suma importancia para mí, Melany; una persona que dota a mis días de una alegría sumamente bella, y a quien deseo, con fervor, brindarle esa misma dicha, pues es lo que justamente mereces.' 
  },
  { 
    id: 4, 
    type: 'scroll', 
    title: 'Capítulo IV', 
    previewText: 'Y pensar que todo comenzó...', 
    content: 'Y pensar que toda esta ventura dio inicio con un simple mensaje automatizado. Melany, eres verdaderamente hermosa. Me fascina cada ápice de tu ser: esos rizos encantadores que adornan tu semblante, esos ojos en los que irremediablemente me pierdo, esos labios que me inspiran el más ferviente deseo de probarlos, esas mejillas de inmensa ternura y esa nariz de suma delicadeza. El resto de tu figura no es menos admirable; eres una mujer bellísima a la que anhelo apreciar con cada uno de mis sentidos. Además, posees algo que te vuelve aún más deslumbrante: una personalidad arrolladora que me mantiene en absoluto cautiverio. Eres una dama segura de sí misma, dotada de orgullo y metas claras; capaz y de gran fortaleza, pero que, a su vez, prodiga un inmenso cariño a quienes la rodean. Tienes el noble don de demostrar, a tu manera, lo importante que alguien es para ti. Eres, por añadidura, responsable, dedicada, de brillante inteligencia y firme criterio; una joven que, al igual que yo, sabe ser deliciosamente impertinente (y debo confesar que me encanta que seas así). Divertida y chispeante, pero sobre todo, lo que te erige como la mujer más hermosa del mundo es que eres genuina; una dama sincera que prefiere mostrarse tal cual es, antes que ocultarse tras máscaras vanas. Para mí, ese es tu mayor encanto: el simple y maravilloso hecho de ser Melany.' 
  },
  { 
    id: 5, 
    type: 'scroll', 
    title: 'Capítulo V', 
    previewText: 'Lo que siento por ti...', 
    content: 'A través de cada una de estas misivas he procurado comunicarte el hondo sentir de mi corazón. Sinceramente, Melany, te has vuelto una presencia indispensable en mi vida. En cada instante, abrigo la esperanza de recibir noticias tuyas; anhelo el momento de verte, de salir y deleitarnos mutuamente con nuestra compañía. Deseo, con toda el alma, poder mirarte a los ojos y confesarte de la manera más pura y sincera cuánto me gustas; ansiando compartir a tu lado un sinfín de vivencias.' 
  },
  { 
    id: 6, 
    type: 'envelope', 
    title: 'Para ti', 
    previewText: 'Una confesión final...', 
    content: 'Mi niña hermosa,\n\nEres una chica maravillosa, absolutamente increíble; me has encantado desde el principio, me fascinaste. Retomo en estas líneas aquello que te he confesado antes: cuán inmensa ha sido tu paciencia frente a mis impertinencias, y lo profundamente preciosa y hermosa que me resultas ante mis ojos.\n\nMi anhelo contigo es forjar algo real, algo sincero y verdadero. No busco un romance efímero ni pasajero, sino una relación fructífera y perdurable; un vínculo amoroso donde podamos ser nosotros mismos sin que el afecto nos consuma o nos quite nuestra esencia. Deseo aquella conexión de la que te he hablado tiempo atrás: una que nos nutra, que nos conceda la libertad de ser, pero manteniéndonos profundamente unidos.\n\nQuiero que seamos dos almas que, sin invadir la vida del otro, se acompañen en el andar; ser un refugio y una ayuda, jamás un obstáculo. Deseo fervientemente poder apoyarte, ser tu pilar cuando me necesites, y saber que estarás allí para mí en mi propia adversidad. Que hallemos consuelo mutuo en las horas aciagas y celebremos juntos cada triunfo. Que, aun forjando nuestros propios destinos y transitando nuestros caminos individuales, podamos caminar de la mano y ser alguien sumamente especial en la historia del otro. Pues lo más sublime de un romance es poder disfrutar plenamente de la vida propia y de nuestra relación, al mismo tiempo. Un verdadero compañero de vida está allí para hacer la existencia más amena. Y eso quiero que seamos. Yo quiero que eso logremos.\n\nAsí que, Melany... me gustas, me encantas, me fascinas.\n\nPor ahora seguimos conociéndonos, tejiendo afectos y descubriendo cada aspecto del otro. Pero abrigo la esperanza de que, algún día, miremos hacia el pasado y podamos decir: "Todo empezó con un simple mensaje". En aquel entonces no se sabía lo que iba a llegar; de hecho, hasta tú misma decías que no iba a llegar a nada. Pero mira dónde estamos ahora.\n\nY todo... todo empezó con un simple mensaje.' 
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [introStage, setIntroStage] = useState<'intro' | 'black' | 'main'>('intro');

  useEffect(() => {
    if (introStage === 'intro') {
      const timer = setTimeout(() => {
        setIntroStage('black');
      }, 7000); // 7 seconds of the landscape and text
      return () => clearTimeout(timer);
    } else if (introStage === 'black') {
      const timer = setTimeout(() => {
        setIntroStage('main');
      }, 2000); // 2 seconds of pure black
      return () => clearTimeout(timer);
    }
  }, [introStage]);

  const currentItem = items[currentIndex];

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setIsOpen(false);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsOpen(false);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleBreakSeal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {introStage !== 'main' && (
          <motion.div
            key="intro-screen"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <AnimatePresence>
              {introStage === 'intro' && (
                <motion.div
                  key="intro-content"
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${introLandscape})` }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 2 }}
                      className="font-hand text-5xl md:text-7xl text-[#f4e8d4] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    >
                      Esto es para ti,
                    </motion.h1>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.5, duration: 2 }}
                      className="font-hand text-7xl md:text-9xl text-[#f4e8d4] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mt-6"
                    >
                      Melany
                    </motion.h2>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-[#1a1614]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: introStage === 'main' ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Título Superior */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 md:top-12 text-center z-10"
      >
        <h1 className="font-hand text-5xl md:text-6xl text-vintage-paper tracking-wider opacity-90 drop-shadow-lg text-center">
          Para ti mi niña hermosa
        </h1>
        <p className="font-serif italic text-vintage-paper/60 mt-2">Me encantas Melany</p>
      </motion.div>

      {/* Contenedor Principal del Carrusel */}
      <div className="relative w-full max-w-4xl mt-12 flex flex-row items-center justify-between z-10">
        
        {/* Botón Anterior */}
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 md:p-4 text-vintage-paper/50 hover:text-vintage-paper transition-colors disabled:opacity-0"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>

        {/* Área Central de Animación (Pergamino o Sobre) */}
        <div className="relative w-full max-w-md h-[500px] flex items-center justify-center mx-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {currentItem.type === 'scroll' ? (
                <ScrollItem item={currentItem} isOpen={isOpen} onOpen={handleBreakSeal} />
              ) : (
                <EnvelopeItem item={currentItem} isOpen={isOpen} onOpen={handleBreakSeal} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botón Siguiente */}
        <button 
          onClick={handleNext}
          disabled={currentIndex === items.length - 1}
          className="p-2 md:p-4 text-vintage-paper/50 hover:text-vintage-paper transition-colors disabled:opacity-0"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      </div>

      {/* Indicadores de progreso */}
      <div className="absolute bottom-10 flex space-x-3 z-10">
        {items.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-vintage-paper scale-125' : 'bg-vintage-paper/30'}`}
          />
        ))}
      </div>
      </motion.div>
    </>
  );
}
