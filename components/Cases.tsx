export default function Cases() {
  const cases = [
    {
      car: "Kia Sportage 2020",
      result: "Снижение цены на 85 000 ₽",
      description:
        "Обнаружены вторичные окрасы и износ подвески. Клиент получил хорошую скидку.",
    },
    {
      car: "Toyota Camry 2019",
      result: "Отказ от покупки",
      description:
        "Выявлены серьёзные последствия ДТП и проблемы с безопасностью.",
    },
    {
      car: "Skoda Octavia 2021",
      result: "Успешная покупка",
      description:
        "Автомобиль полностью соответствовал заявленному состоянию.",
    },
  ];

  return (
    <section
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
          Реальные кейсы
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {cases.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#1f2937",
                padding: "30px",
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
                {item.car}
              </h3>

              <div
                style={{
                  color: "#ef4444",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                {item.result}
              </div>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.6",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}