export default function SectionPetunjukPwa17() {
  return (
    <section className="section" id="petunjuk-pwa">
      <div className="wrap">
        <div className="eyebrow">{"Panduan akses"}</div>
        <h2>{"Pasang dari browser smartphone."}</h2>
        <p>
          {
            "Langkah berikut berlaku saat membuka URL aplikasi PWA resmi HireLoop. Jangan memasang halaman preview ini sebagai aplikasi."
          }
        </p>
        <div
          className="steps"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}
        >
          <article>
            <div className="step-no">{"01"}</div>
            <h3>{"Buka aplikasi resmi"}</h3>
            <p>
              {
                "URL PWA resmi belum ditautkan pada preview ini. QR sementara hanya menuju panduan ini."
              }
            </p>
          </article>
          <article>
            <div className="step-no">{"02"}</div>
            <h3>{"Android"}</h3>
            <p>
              {
                "Di Chrome, pilih “Instal aplikasi” atau “Tambahkan ke layar utama” jika tersedia."
              }
            </p>
          </article>
          <article>
            <div className="step-no">{"03"}</div>
            <h3>{"iPhone"}</h3>
            <p>
              {
                "Di Safari, buka menu Bagikan lalu pilih “Tambahkan ke Layar Utama”."
              }
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
