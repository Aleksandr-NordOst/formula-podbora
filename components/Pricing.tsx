export default function Pricing() {
  const prices = [
    {
      service: "Разовая проверка автомобиля",
      price: "от 3 000 ₽",
    },
    {
      service: "Автоподбор под ключ",
      price: "от 25 000 ₽",
    },
    {
      service: "Эксперт на день",
      price: "от 10 000 ₽",
    },
  ];

  return (
    <section
      style={{
        background: "#0f172a",
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
          Стоимость услуг
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {prices.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #334155",
              }}
            >
              <div>{item.service}</div>

              <div
                style={{
                  color: "#ef4444",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}