export default function FloatingTelegram() {
  return (
    <a
      href="https://t.me/My_StepStyle"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#229ED9",
        color: "white",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        fontWeight: "bold",
        boxShadow: "0 10px 25px rgba(0,0,0,.3)",
        zIndex: 9999,
      }}
    >
      TG
    </a>
  );
}