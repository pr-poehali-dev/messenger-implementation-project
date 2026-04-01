import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  time: string;
  mine: boolean;
  read: boolean;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMsg: string;
  time: string;
  unread: number;
  online: boolean;
  messages: Message[];
}

const initialChats: Chat[] = [
  {
    id: 1,
    name: "Аня Петрова",
    avatar: "А",
    lastMsg: "Окей, буду к семи! 🎉",
    time: "14:23",
    unread: 2,
    online: true,
    messages: [
      { id: 1, text: "Привет! Ты придёшь на вечеринку?", time: "14:10", mine: false, read: true },
      { id: 2, text: "Да, конечно! А что принести?", time: "14:15", mine: true, read: true },
      { id: 3, text: "Ничего, только себя 😊", time: "14:18", mine: false, read: true },
      { id: 4, text: "Начало в 19:00, адрес скину позже", time: "14:20", mine: false, read: true },
      { id: 5, text: "Окей, буду к семи! 🎉", time: "14:23", mine: false, read: false },
    ],
  },
  {
    id: 2,
    name: "Максим Козлов",
    avatar: "М",
    lastMsg: "Посмотрю вечером",
    time: "13:05",
    unread: 0,
    online: true,
    messages: [
      { id: 1, text: "Привет, как дела?", time: "12:50", mine: true, read: true },
      { id: 2, text: "Норм, работаю над проектом", time: "12:55", mine: false, read: true },
      { id: 3, text: "Скинул тебе файлы в облако", time: "13:00", mine: true, read: true },
      { id: 4, text: "Посмотрю вечером", time: "13:05", mine: false, read: true },
    ],
  },
  {
    id: 3,
    name: "Команда дизайн",
    avatar: "🎨",
    lastMsg: "Катя: принято, делаю правки",
    time: "12:41",
    unread: 5,
    online: false,
    messages: [
      { id: 1, text: "Добрый день! Нужно обсудить новый макет", time: "11:00", mine: false, read: true },
      { id: 2, text: "Да, давайте. Что именно?", time: "11:15", mine: true, read: true },
      { id: 3, text: "Кнопки CTA слишком мелкие на мобайле", time: "11:30", mine: false, read: true },
      { id: 4, text: "Согласен, увеличу размер и padding", time: "12:00", mine: true, read: true },
      { id: 5, text: "Катя: принято, делаю правки", time: "12:41", mine: false, read: false },
    ],
  },
  {
    id: 4,
    name: "Дима Волков",
    avatar: "Д",
    lastMsg: "Спасибо за помощь!",
    time: "вчера",
    unread: 0,
    online: false,
    messages: [
      { id: 1, text: "Можешь помочь с кодом?", time: "вчера", mine: false, read: true },
      { id: 2, text: "Конечно, что нужно?", time: "вчера", mine: true, read: true },
      { id: 3, text: "Разобрался, всё окей", time: "вчера", mine: false, read: true },
      { id: 4, text: "Спасибо за помощь!", time: "вчера", mine: false, read: true },
    ],
  },
  {
    id: 5,
    name: "Оля Смирнова",
    avatar: "О",
    lastMsg: "Увидимся на следующей неделе",
    time: "вчера",
    unread: 0,
    online: false,
    messages: [
      { id: 1, text: "Встреча перенеслась на пятницу", time: "вчера", mine: false, read: true },
      { id: 2, text: "Ок, записала", time: "вчера", mine: true, read: true },
      { id: 3, text: "Увидимся на следующей неделе", time: "вчера", mine: false, read: true },
    ],
  },
  {
    id: 6,
    name: "Сергей Иванов",
    avatar: "С",
    lastMsg: "👍",
    time: "пн",
    unread: 0,
    online: false,
    messages: [
      { id: 1, text: "Отчёт готов, проверь пожалуйста", time: "пн", mine: true, read: true },
      { id: 2, text: "👍", time: "пн", mine: false, read: true },
    ],
  },
];

const avatarColors: Record<string, string> = {
  "А": "#ef4444",
  "М": "#3b82f6",
  "Д": "#8b5cf6",
  "О": "#ec4899",
  "С": "#f59e0b",
  "🎨": "#10b981",
};

export default function Index() {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [activeChatId, setActiveChatId] = useState<number>(1);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeChat = chats.find((c) => c.id === activeChatId)!;
  const filtered = chats.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages.length, activeChatId]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    const newMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      time,
      mine: true,
      read: false,
    };
    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChatId
          ? { ...c, messages: [...c.messages, newMsg], lastMsg: input.trim(), time }
          : c
      )
    );
    setInput("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const selectChat = (id: number) => {
    setActiveChatId(id);
    setChats((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, unread: 0, messages: c.messages.map((m) => ({ ...m, read: true })) }
          : c
      )
    );
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const totalUnread = chats.reduce((acc, c) => acc + c.unread, 0);

  return (
    <div
      className="h-screen flex overflow-hidden font-golos"
      style={{ background: "#0e0e14" }}
    >
      {/* Sidebar */}
      <div
        className={`flex flex-col flex-shrink-0 transition-all duration-300 ${
          sidebarOpen ? "w-80" : "w-0 md:w-16"
        } overflow-hidden`}
        style={{
          background: "#13131c",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Sidebar Header */}
        <div
          className="flex items-center justify-between px-4 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              ✦
            </div>
            <span className="font-bold text-white text-base">Вихрь</span>
            {totalUnread > 0 && (
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: "#6366f1", color: "#fff", minWidth: "18px", textAlign: "center" }}
              >
                {totalUnread}
              </span>
            )}
          </div>
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <Icon name="Edit" size={16} />
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-3 flex-shrink-0">
          <div
            className="flex items-center gap-2 rounded-xl px-3 py-2"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Icon name="Search" size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск..."
              className="bg-transparent text-sm outline-none flex-1 placeholder:text-white/30 text-white/80"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          {filtered.map((chat) => (
            <button
              key={chat.id}
              onClick={() => selectChat(chat.id)}
              className="w-full flex items-center gap-3 px-3 py-3 transition-all duration-150 text-left group"
              style={{
                background: activeChatId === chat.id
                  ? "rgba(99,102,241,0.15)"
                  : "transparent",
                borderLeft: activeChatId === chat.id
                  ? "2px solid #6366f1"
                  : "2px solid transparent",
              }}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg font-semibold text-white"
                  style={{
                    background: avatarColors[chat.avatar] || "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    fontSize: chat.avatar.length > 1 ? "20px" : "15px",
                  }}
                >
                  {chat.avatar}
                </div>
                {chat.online && (
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
                    style={{ background: "#22c55e", borderColor: "#13131c" }}
                  />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-sm text-white/90 truncate">{chat.name}</span>
                  <span className="text-xs flex-shrink-0 ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {chat.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {chat.lastMsg}
                  </span>
                  {chat.unread > 0 && (
                    <span
                      className="ml-2 flex-shrink-0 text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center"
                      style={{ background: "#6366f1", color: "#fff" }}
                    >
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom nav */}
        <div
          className="flex items-center justify-around px-4 py-3 flex-shrink-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { icon: "MessageSquare", active: true },
            { icon: "Users", active: false },
            { icon: "Phone", active: false },
            { icon: "Settings", active: false },
          ].map(({ icon, active }) => (
            <button
              key={icon}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-150"
              style={{
                background: active ? "rgba(99,102,241,0.2)" : "transparent",
                color: active ? "#818cf8" : "rgba(255,255,255,0.3)",
              }}
            >
              <Icon name={icon} size={18} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{
            background: "#13131c",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10 md:hidden"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <Icon name="Menu" size={18} />
          </button>

          <div className="relative flex-shrink-0">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center font-semibold text-white"
              style={{
                background: avatarColors[activeChat.avatar] || "linear-gradient(135deg, #6366f1, #8b5cf6)",
                fontSize: activeChat.avatar.length > 1 ? "18px" : "14px",
              }}
            >
              {activeChat.avatar}
            </div>
            {activeChat.online && (
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
                style={{ background: "#22c55e", borderColor: "#13131c" }}
              />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-semibold text-white text-sm">{activeChat.name}</div>
            <div className="text-xs" style={{ color: activeChat.online ? "#22c55e" : "rgba(255,255,255,0.35)" }}>
              {activeChat.online ? "онлайн" : "был(а) недавно"}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <Icon name="Phone" size={16} />
            </button>
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <Icon name="Video" size={16} />
            </button>
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <Icon name="MoreVertical" size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-4 py-6 space-y-1"
          style={{
            background: "#0e0e14",
            backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.03) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.03) 0%, transparent 60%)`,
          }}
        >
          {/* Date divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
            <span className="text-xs px-3" style={{ color: "rgba(255,255,255,0.25)" }}>сегодня</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>

          {activeChat.messages.map((msg, index) => {
            const prev = activeChat.messages[index - 1];
            const showName = !msg.mine && (!prev || prev.mine);

            return (
              <div
                key={msg.id}
                className={`flex ${msg.mine ? "justify-end" : "justify-start"} animate-fade-in`}
                style={{ animationDuration: "0.2s", marginBottom: "2px" }}
              >
                <div
                  className={`max-w-[70%] flex flex-col ${msg.mine ? "items-end" : "items-start"}`}
                >
                  <div
                    className="px-4 py-2.5 text-sm leading-relaxed"
                    style={
                      msg.mine
                        ? {
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            color: "#fff",
                            borderRadius: "18px 18px 4px 18px",
                          }
                        : {
                            background: "rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.9)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: "18px 18px 18px 4px",
                          }
                    }
                  >
                    {msg.text}
                  </div>
                  <div
                    className="flex items-center gap-1 px-1 mt-1"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    <span className="text-xs">{msg.time}</span>
                    {msg.mine && (
                      <Icon
                        name={msg.read ? "CheckCheck" : "Check"}
                        size={12}
                        style={{ color: msg.read ? "#818cf8" : "rgba(255,255,255,0.3)" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div
          className="px-4 py-3 flex-shrink-0"
          style={{
            background: "#13131c",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="flex items-center gap-2 rounded-2xl px-4 py-2"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <button
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 flex-shrink-0"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Icon name="Smile" size={18} />
            </button>

            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Напишите сообщение..."
              className="flex-1 bg-transparent text-sm outline-none text-white/90 placeholder:text-white/25 py-1"
            />

            <button
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 flex-shrink-0"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Icon name="Paperclip" size={16} />
            </button>

            {input.trim() ? (
              <button
                onClick={sendMessage}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#fff",
                }}
              >
                <Icon name="Send" size={14} />
              </button>
            ) : (
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 flex-shrink-0"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                <Icon name="Mic" size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
      `}</style>
    </div>
  );
}
