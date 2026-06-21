export default function Contacts() {
  return (
    <section
      id="contacts"
      style={{
        background: "#020617",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Контакты
      </h2>

      <p>Иваново и Ивановская область</p>

      <p style={{ marginTop: "15px" }}>
        <a
          href="tel:+79158493710"
          style={{
            color: "#60a5fa",
            textDecoration: "none",
          }}
        >
          +7 (915) 849-37-10
        </a>
      </p>

      <p style={{ marginTop: "15px" }}>
        <a
          href="https://t.me/My_StepStyle"
          target="_blank"
          style={{
            color: "#60a5fa",
            textDecoration: "none",
          }}
        >
          Telegram
        </a>
      </p>
    </section>
  );
}