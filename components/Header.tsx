export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#020617",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Формула Подбора
        </div>

        <nav
          style={{
            display: "flex",
            gap: "25px",
          }}
        >
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>
            Услуги
          </a>

          <a href="#reviews" style={{ color: "white", textDecoration: "none" }}>
            Отзывы
          </a>

          <a href="#contacts" style={{ color: "white", textDecoration: "none" }}>
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}