export default function Services() {
  const services = [
    {
      title: "Разовая проверка автомобиля",
      description:
        "Полная диагностика автомобиля перед покупкой: кузов, техника, электроника и юридическая проверка.",
    },
    {
      title: "Автоподбор под ключ",
      description:
        "Подберём лучший автомобиль под ваш бюджет и требования, проверим и сопроводим сделку.",
    },
    {
      title: "Выездная диагностика",
      description:
        "Проверка автомобиля на месте продажи в Иваново и области.",
    },
    {
      title: "Помощь в торге",
      description:
        "Находим недостатки автомобиля и помогаем снизить цену при покупке.",
    },
    {
      title: "Проверка истории",
      description:
        "Проверка ДТП, ограничений, залогов, пробега и юридической чистоты.",
    },
    {
      title: "Сопровождение сделки",
      description:
        "Контроль оформления документов и безопасное проведение сделки.",
    },
  ];

  return (
    <section id="reviews"
      style={{
        background: "#111827",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "50px",
          }}
        >
          Наши услуги
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#1f2937",
                padding: "25px",
                borderRadius: "16px",
                border: "1px solid #374151",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "15px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.6",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}