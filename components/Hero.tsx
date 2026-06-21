export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #000000 0%, #111827 50%, #000000 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#991b1b",
                padding: "8px 16px",
                borderRadius: "999px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Иваново и Ивановская область
            </div>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                fontWeight: "bold",
                marginBottom: "25px",
              }}
            >
              ФОРМУЛА
              <span
                style={{
                  color: "#ef4444",
                  display: "block",
                }}
              >
                ПОДБОРА
              </span>
            </h1>

            <p
              style={{
                fontSize: "24px",
                color: "#cbd5e1",
                maxWidth: "700px",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              Профессиональный автоподбор, диагностика и проверка автомобилей
              перед покупкой. Помогаем купить действительно хороший автомобиль,
              а не проблему на колесах.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "50px",
              }}
            >
              <a
                href="https://t.me/My_StepStyle"
                target="_blank"
                style={{
                  background: "#dc2626",
                  color: "white",
                  textDecoration: "none",
                  padding: "16px 30px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                }}
              >
                Написать в Telegram
              </a>

              <a
                href="tel:+79158493710"
                style={{
                  border: "2px solid #dc2626",
                  color: "white",
                  textDecoration: "none",
                  padding: "16px 30px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                }}
              >
                📞 +7 (915) 849-37-10
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "25px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "42px",
                    color: "#ef4444",
                    fontWeight: "bold",
                  }}
                >
                  300+
                </div>

                <div style={{ color: "#cbd5e1" }}>
                  Проверенных автомобилей
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "42px",
                    color: "#ef4444",
                    fontWeight: "bold",
                  }}
                >
                  5+
                </div>

                <div style={{ color: "#cbd5e1" }}>
                  Лет опыта
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "42px",
                    color: "#ef4444",
                    fontWeight: "bold",
                  }}
                >
                  100%
                </div>

                <div style={{ color: "#cbd5e1" }}>
                  Честная диагностика
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}