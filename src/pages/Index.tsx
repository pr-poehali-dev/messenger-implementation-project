import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState<number | null>(null);

  const features = [
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      desc: "Запускаем проекты в 30 раз быстрее традиционной разработки. Идея сегодня — сайт завтра.",
    },
    {
      icon: "Layers",
      title: "Готовые компоненты",
      desc: "Библиотека профессиональных блоков для любого типа бизнеса. Выбирай и собирай.",
    },
    {
      icon: "Shield",
      title: "Надёжно и стабильно",
      desc: "Производительный хостинг, SSL-сертификат и техподдержка включены в каждый тариф.",
    },
    {
      icon: "Sparkles",
      title: "ИИ на вашей стороне",
      desc: "Искусственный интеллект помогает дорабатывать сайт по вашим пожеланиям в чате.",
    },
    {
      icon: "Globe",
      title: "Своё доменное имя",
      desc: "Подключите любой домен в несколько кликов или получите бесплатный поддомен.",
    },
    {
      icon: "TrendingUp",
      title: "SEO из коробки",
      desc: "Все страницы оптимизированы для поисковых систем с первого дня запуска.",
    },
  ];

  const stats = [
    { value: "30×", label: "быстрее разработки" },
    { value: "2 000+", label: "запущенных проектов" },
    { value: "98%", label: "довольных клиентов" },
    { value: "24/7", label: "поддержка и мониторинг" },
  ];

  return (
    <div
      className="min-h-screen font-golos text-white overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0f0d1a 40%, #0a0f1a 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-pulse-glow"
          style={{
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
            top: "-200px",
            right: "-100px",
          }}
        />
        <div
          className="absolute animate-pulse-glow"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
            bottom: "10%",
            left: "-150px",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute animate-pulse-glow"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            top: "50%",
            left: "45%",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* Nav */}
      <nav
        className="relative z-50 flex items-center justify-between px-6 md:px-16 py-6"
        style={{ borderBottom: "1px solid rgba(245,158,11,0.08)" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
          >
            <span className="text-black font-bold text-sm">П</span>
          </div>
          <span className="font-bold text-lg tracking-tight">Поехали</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          <a href="#features" className="hover:text-white transition-colors">Возможности</a>
          <a href="#stats" className="hover:text-white transition-colors">Результаты</a>
          <a href="#cta" className="hover:text-white transition-colors">Тарифы</a>
        </div>
        <button
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            color: "#0a0a0f",
          }}
        >
          Начать бесплатно
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 text-center px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.3)",
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs font-medium" style={{ color: "#fbbf24" }}>
            Новая эра веб-разработки
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-cormorant font-semibold leading-none mb-6 animate-fade-in"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          Сайт вашей мечты —{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d, #f59e0b, #fbbf24)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}
          >
            за один день
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{
            color: "rgba(255,255,255,0.55)",
            lineHeight: "1.7",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          Мы создаём профессиональные сайты с помощью ИИ — быстро, красиво и без технических знаний.
          Просто опишите идею, и мы воплотим её в жизнь.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <button
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#0a0a0f",
              boxShadow: "0 0 40px rgba(245,158,11,0.3)",
            }}
          >
            Запустить проект
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <Icon name="Play" size={16} />
            Смотреть демо
          </button>
        </div>

        {/* Floating geometric decoration */}
        <div className="absolute top-20 left-10 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "0s" }}>
          <div
            className="w-16 h-16 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.4), transparent)",
              border: "1px solid rgba(245,158,11,0.3)",
              transform: "rotate(15deg)",
            }}
          />
        </div>
        <div className="absolute top-32 right-12 opacity-15 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
          <div
            className="w-10 h-10 rounded-full"
            style={{
              background: "rgba(99,102,241,0.5)",
              border: "1px solid rgba(99,102,241,0.4)",
            }}
          />
        </div>
        <div className="absolute bottom-16 left-1/4 opacity-10 animate-float hidden lg:block" style={{ animationDelay: "4s" }}>
          <div
            className="w-20 h-1"
            style={{ background: "linear-gradient(90deg, transparent, #f59e0b, transparent)" }}
          />
        </div>
      </section>

      {/* Stats */}
      <section
        id="stats"
        className="relative z-10 px-6 md:px-16 py-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.1 * i}s`, opacity: 0 }}
            >
              <div
                className="font-cormorant font-bold mb-1"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#f59e0b" }}
            >
              Почему Поехали
            </p>
            <h2
              className="font-cormorant font-semibold"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}
            >
              Всё что нужно —
              <br />
              <span className="italic" style={{ color: "rgba(255,255,255,0.5)" }}>в одном месте</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl cursor-default transition-all duration-500 animate-fade-in"
                style={{
                  background: hovered === i
                    ? "rgba(245,158,11,0.07)"
                    : "rgba(255,255,255,0.03)",
                  border: hovered === i
                    ? "1px solid rgba(245,158,11,0.25)"
                    : "1px solid rgba(255,255,255,0.06)",
                  animationDelay: `${0.1 * i}s`,
                  opacity: 0,
                  transform: hovered === i ? "translateY(-4px)" : "none",
                  boxShadow: hovered === i ? "0 20px 60px rgba(245,158,11,0.08)" : "none",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: hovered === i
                      ? "linear-gradient(135deg, #f59e0b, #d97706)"
                      : "rgba(245,158,11,0.12)",
                  }}
                >
                  <Icon
                    name={f.icon}
                    fallback="Star"
                    size={20}
                    style={{ color: hovered === i ? "#0a0a0f" : "#f59e0b" }}
                  />
                </div>
                <h3 className="font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {f.desc}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(245,158,11,0.15), transparent 70%)",
                    borderRadius: "0 1rem 0 0",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider with label */}
      <div className="relative z-10 flex items-center gap-6 px-6 md:px-16 py-4">
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Начни сегодня
        </span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
      </div>

      {/* CTA Section */}
      <section id="cta" className="relative z-10 px-6 md:px-16 py-24">
        <div
          className="max-w-3xl mx-auto text-center rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(245,158,11,0.15)",
          }}
        >
          {/* BG glow inside card */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center top, rgba(245,158,11,0.07) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.25)",
              }}
            >
              <Icon name="Rocket" size={14} style={{ color: "#fbbf24" }} />
              <span className="text-xs font-semibold" style={{ color: "#fbbf24" }}>
                Бесплатный старт
              </span>
            </div>

            <h2
              className="font-cormorant font-semibold mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.15" }}
            >
              Готовы запустить
              <br />
              <span className="italic" style={{ color: "#fbbf24" }}>ваш проект?</span>
            </h2>

            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}>
              Оставьте email — и мы свяжемся с вами в течение часа.
              <br />
              Первая консультация бесплатно.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваш@email.com"
                className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid rgba(245,158,11,0.5)")}
                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.12)")}
              />
              <button
                className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                  color: "#0a0a0f",
                  boxShadow: "0 0 30px rgba(245,158,11,0.25)",
                }}
              >
                Поехали! 🚀
              </button>
            </div>

            <p className="text-xs mt-5" style={{ color: "rgba(255,255,255,0.25)" }}>
              Никакого спама. Только результат.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-10 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
          >
            <span className="text-black font-bold text-xs">П</span>
          </div>
          <span className="font-semibold text-sm">Поехали</span>
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          © 2025 Поехали. Создаём сайты быстро и красиво.
        </p>
      </footer>
    </div>
  );
};

export default Index;