export default function Reviews() {
  const reviews = [
    {
      name: "Алексей",
      text: "Нашли отличный автомобиль за неделю. Проверили всё до мелочей. Очень доволен.",
    },
    {
      name: "Дмитрий",
      text: "Сэкономили больше 100 тысяч рублей благодаря грамотной диагностике и торгу.",
    },
    {
      name: "Екатерина",
      text: "Подобрали автомобиль под ключ. Всё честно и прозрачно.",
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
          Отзывы клиентов
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "30px",
                borderRadius: "16px",
                border: "1px solid #334155",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                {review.text}
              </p>

              <strong>{review.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}