export default function LeadForm() {
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
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Оставить заявку
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "40px",
          }}
        >
          Расскажите какой автомобиль ищете, и мы свяжемся с вами.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Ваше имя"
            style={{
              padding: "16px",
              borderRadius: "10px",
              border: "1px solid #374151",
              background: "#1f2937",
              color: "white",
            }}
          />

          <input
            type="tel"
            placeholder="Телефон"
            style={{
              padding: "16px",
              borderRadius: "10px",
              border: "1px solid #374151",
              background: "#1f2937",
              color: "white",
            }}
          />

          <textarea
            placeholder="Какой автомобиль ищете?"
            rows={5}
            style={{
              padding: "16px",
              borderRadius: "10px",
              border: "1px solid #374151",
              background: "#1f2937",
              color: "white",
            }}
          />

          <a
            href="https://t.me/My_StepStyle"
            target="_blank"
            style={{
              background: "#dc2626",
              color: "white",
              textDecoration: "none",
              padding: "18px",
              borderRadius: "10px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Отправить заявку через Telegram
          </a>
        </form>
      </div>
    </section>
  );
}