/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  BatteryCharging, 
  Car, 
  Zap, 
  MapPin, 
  Battery, 
  Wrench, 
  Fuel, 
  ArrowRight, 
  AlertTriangle, 
  Star, 
  Map, 
  Clock, 
  ShieldCheck, 
  Share2, 
  Trophy
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#010e24] border-b-4 border-[#02132b]">
      <div className="centralized-content flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold tracking-tighter text-[#FF8C00] uppercase font-headline">
          Mecânico Marelo
        </div>
        <div className="hidden md:flex gap-8">
          <NavLink className="text-slate-300 font-medium font-label hover:bg-[#152c4e] transition-colors duration-150 px-3 py-1" to="/servicos">Serviços</NavLink>
          <NavLink className="text-slate-300 font-medium font-label hover:bg-[#152c4e] transition-colors duration-150 px-3 py-1" to="/diferenciais">Diferenciais</NavLink>
          <NavLink className="text-slate-300 font-medium font-label hover:bg-[#152c4e] transition-colors duration-150 px-3 py-1" to="/avaliacoes">Depoimentos</NavLink>
        </div>
        <div className="flex gap-4">
          <a href="tel:+554288722501" className="hidden sm:flex items-center gap-2 bg-primary-container text-on-primary font-bold px-4 py-2 uppercase font-label hover:brightness-110 active:scale-95 transition-all cursor-pointer">
            <Phone size={18} fill="currentColor" />
            Ligar Agora
          </a>
          <a href="https://wa.me/554288722501?text=Olá,%20vim%20do%20Site%20Mecanico%20e%20gostaria%20de%20saber%20mais" className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2 uppercase font-label hover:brightness-110 active:scale-95 transition-all cursor-pointer">
            <MessageCircle size={18} fill="currentColor" />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-[921px] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <img 
          alt="Oficina mecânica profissional com Volkswagen Gol" 
          className="w-full h-full object-cover opacity-60" 
          src="/img/mecanicomarelofotocarrogol.png" 
        />
      </div>
      <div className="relative z-20 centralized-content px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-4 py-1 font-label font-bold uppercase tracking-widest text-sm">
            <AlertTriangle size={14} fill="currentColor" />
            Serviço de Emergência Curitiba
          </div>
          <h1 className="text-5xl md:text-8xl font-headline font-bold uppercase leading-none tracking-tighter">
            SOCORRO MECÂNICO <br/>
            <span className="text-primary bg-surface-container-high px-2">24H EM CURITIBA</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light">
            Pane seca, bateria morta ou barulhos estranhos? Nossa equipe tática chega em até 30 minutos para você não ficar na mão.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a 
              className="group flex items-center justify-between gap-8 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-5 text-xl font-bold font-label uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,159,74,0.15)]" 
              href="tel:+554288722501"
            >
              Solicitar Mecânico
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              className="flex items-center gap-4 bg-transparent border-2 border-outline-variant/30 text-on-surface px-8 py-5 text-xl font-bold font-label uppercase hover:bg-surface-bright transition-all" 
              href="https://wa.me/554288722501?text=Olá,%20vim%20do%20Site%20Mecanico%20e%20gostaria%20de%20saber%20mais"
            >
              <MessageCircle />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="hazard-stripes h-4 w-64"></div>
      </div>
    </header>
  );
};

const PainPoints = () => {
  const points = [
    {
      icon: BatteryCharging,
      title: "Bateria Descarregada",
      description: "Luzes acesas ou tempo parado? Realizamos a recarga (chupeta) ou a troca imediata com as melhores marcas do mercado.",
      badge: "Atendimento Imediato",
      color: "bg-surface-container-high"
    },
    {
      icon: Car,
      title: "Carro não liga",
      description: "Pode ser motor de partida, alternador ou sistema de injeção. Diagnosticamos e resolvemos o problema no local.",
      badge: "Diagnóstico Mobile",
      color: "bg-surface-container-highest"
    },
    {
      icon: Zap,
      title: "Pane Elétrica / Mecânica",
      description: "Superaquecimento, correias rompidas ou fusíveis queimados. Nossa oficina móvel está pronta para qualquer imprevisto.",
      badge: "Especialistas 24h",
      color: "bg-surface-container-high"
    }
  ];

  return (
    <section className="py-32 bg-surface-container-low">
      <div className="centralized-content px-6">
        <div className="mb-16">
          <h2 className="text-sm text-secondary font-bold font-label mb-4 uppercase tracking-widest">Está passando por isso?</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold uppercase">Seu carro parou?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              whileHover={{ backgroundColor: "var(--color-surface-bright)" }}
              className={`${point.color} p-10 space-y-6 transition-colors group cursor-default`}
            >
              <point.icon size={48} className="text-primary" fill="currentColor" fillOpacity={0.2} />
              <h4 className="text-2xl font-headline font-bold uppercase">{point.title}</h4>
              <p className="text-on-surface-variant font-body">{point.description}</p>
              <div className="pt-4 border-t border-outline-variant/20">
                <span className="text-secondary font-bold font-label text-sm uppercase">{point.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceList = [
    { icon: MapPin, title: "Socorro no Local", desc: "Chegamos onde você estiver." },
    { icon: Battery, title: "Troca de Bateria", desc: "Baterias novas com garantia." },
    { icon: Wrench, title: "Mecânica Emergencial", desc: "Consertos rápidos na hora." },
    { icon: Fuel, title: "Auxílio Combustível", desc: "Pane seca? Nós levamos até você." }
  ];

  return (
    <section className="py-32 bg-surface" id="servicos">
      <div className="centralized-content px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 hazard-stripes opacity-20"></div>
            <img 
              className="w-full aspect-square object-cover border-l-8 border-primary relative z-10" 
              alt="Mecânico profissional trabalhando em motor" 
              src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1000" 
            />
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase leading-none">Nossos Serviços</h2>
              <p className="text-on-surface-variant max-w-md">Equipamentos de ponta e mecânicos certificados para garantir sua segurança em qualquer lugar de Curitiba.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {serviceList.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-surface-container-high p-3 shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold font-headline uppercase">{item.title}</h5>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentiators = () => {
  return (
    <section className="py-20 bg-surface-container-low border-y border-outline-variant/10" id="diferenciais">
      <div className="centralized-content px-6 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex items-center gap-6">
          <div className="text-6xl font-headline font-bold text-primary">30</div>
          <div className="font-headline font-bold uppercase leading-tight">
            Minutos <br/>
            <span className="text-on-surface-variant text-sm font-normal">Tempo médio de chegada</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-6xl font-headline font-bold text-secondary">24</div>
          <div className="font-headline font-bold uppercase leading-tight">
            Horas <br/>
            <span className="text-on-surface-variant text-sm font-normal">Sempre online e prontos</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-6xl font-headline font-bold text-primary">100%</div>
          <div className="font-headline font-bold uppercase leading-tight">
            Transparente <br/>
            <span className="text-on-surface-variant text-sm font-normal">Preço justo sem surpresas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ricardo S.",
      location: "Bairro Cabral, Curitiba",
      text: '"Meu carro parou no meio da Linha Verde às 2 da manhã. Em 20 minutos o Marelo chegou e resolveu a pane elétrica ali mesmo. Salvou minha noite!"'
    },
    {
      name: "Amanda M.",
      location: "Bairro Batel, Curitiba",
      text: '"Preço justo e atendimento profissional. Não tentaram me empurrar peças desnecessárias. Trocaram a bateria e testaram o alternador na hora."'
    },
    {
      name: "Carlos Alberto",
      location: "São José dos Pinhais",
      text: '"O melhor socorro 24h da região. Muito educados e rápidos. Recomendo para todos os meus amigos."'
    }
  ];

  return (
    <section className="py-32" id="avaliacoes">
      <div className="centralized-content px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase">Quem confia, aprova</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-surface-container-high p-8 border-l-4 border-secondary">
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-on-surface italic mb-6">{rev.text}</p>
              <div className="font-bold uppercase font-headline">{rev.name}</div>
              <div className="text-sm text-on-surface-variant">{rev.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 opacity-10">
        <div className="hazard-stripes w-full h-full transform scale-150 rotate-12"></div>
      </div>
      <div className="relative z-10 centralized-content px-6 text-center space-y-10">
        <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter">
          NÃO PERCA TEMPO, <br/>
          <span className="text-secondary">CHAME AGORA!</span>
        </h2>
        <p className="text-xl text-on-surface-variant max-w-4xl mx-auto">
          Estamos com equipes prontas em pontos estratégicos de Curitiba para te atender com velocidade máxima.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a className="bg-secondary text-on-secondary px-10 py-6 text-2xl font-bold font-label uppercase hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-4" href="tel:+554288722501">
            <Phone />
            Ligar: (42) 8872-2501
          </a>
          <a className="bg-[#25D366] text-white px-10 py-6 text-2xl font-bold font-label uppercase hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-4" href="https://wa.me/554288722501?text=Olá,%20vim%20do%20Site%20Mecanico%20e%20gostaria%20de%20saber%20mais">
            <MessageCircle />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="h-[400px] w-full grayscale contrast-125 opacity-70">
      <div className="w-full h-full bg-surface-container-high flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hazard-stripes opacity-5"></div>
        <div className="z-10 text-center px-6">
          <MapPin size={64} className="text-primary mb-4 mx-auto" fill="currentColor" fillOpacity={0.2} />
          <h4 className="font-headline font-bold uppercase text-2xl">Atendimento em toda Curitiba e Região</h4>
          <p className="text-on-surface-variant">São José dos Pinhais • Pinhais • Colombo • Araucária</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-[#010e24] border-t-8 border-[#02132b]">
      <div className="centralized-content px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-xl font-bold text-[#FF8C00] uppercase font-headline">Mecânico Marelo</div>
          <p className="text-sm text-slate-400 font-body max-w-xs">
            © 2024 Mecânico Marelo - Atendimento 24h em Curitiba. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-400 font-label uppercase text-sm hover:text-[#FF8C00] transition-colors" href="#">Termos de Uso</a>
          <a className="text-slate-400 font-label uppercase text-sm hover:text-[#FF8C00] transition-colors" href="#">Privacidade</a>
          <a className="text-secondary font-label uppercase text-sm hover:text-[#FF8C00] transition-colors font-bold" href="#">Emergência</a>
        </div>
        <div className="flex gap-6">
          <Share2 className="text-slate-400 hover:text-primary transition-colors cursor-pointer" size={24} />
          <Trophy className="text-slate-400 hover:text-primary transition-colors cursor-pointer" size={24} />
        </div>
      </div>
    </footer>
  );
};

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
      <div className="hidden lg:flex items-center gap-3 bg-secondary text-on-secondary p-3 emergency-pulse">
        <Clock size={18} />
        <div className="text-xs font-bold uppercase font-label">Mecânicos Online em Curitiba</div>
      </div>
      <a className="w-16 h-16 bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all rounded-none" href="https://wa.me/554288722501?text=Olá,%20vim%20do%20Site%20Mecanico%20e%20gostaria%20de%20saber%20mais">
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden z-[90] bg-surface-container-highest border-t-2 border-primary">
      <a className="flex items-center justify-center gap-3 py-4 text-on-surface font-bold uppercase font-label" href="tel:+554288722501">
        <Phone className="text-primary" />
        Ligar para Emergência
      </a>
    </div>
  );
};

export default function App() {
  const { pathname } = window.location;

  useEffect(() => {
    if (pathname !== '/') {
      const id = pathname.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Differentiators />
      <Testimonials />
      <FinalCTA />
      <MapSection />
      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </div>
  );
}
