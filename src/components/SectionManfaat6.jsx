export default function SectionManfaat6() {
  return (
    <section className="section journey-section" id="manfaat">
      <div className="journey-banner">
        <div className="journey-photo">
          <picture>
            <source
              media="(max-width:600px)"
              srcSet="/assets/handshake-journey-mobile.webp"
            />
            <img
              src="/assets/handshake-journey.webp"
              alt="Dua profesional berjabat tangan setelah pertemuan di kantor modern"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div className="journey-shade" aria-hidden="true"></div>
        <div className="wrap journey-banner-inner">
          <div className="benefits-heading">
            <div className="eyebrow">{"Lebih dari satu lamaran"}</div>
            <h2>
              {"Profilmu punya perjalanan."}
              <br />
              {"Bukan sekadar sekali melamar."}
            </h2>
            <p>
              {
                "Bangun kesiapanmu hari ini, buka kesempatan untuk langkah berikutnya."
              }
            </p>
          </div>
        </div>
      </div>
      <div className="wrap journey-benefits">
        <div className="bento">
          <article>
            <div className="eyebrow" style={{ color: "#8abaff" }}>
              {"Peluang berkelanjutan"}
            </div>
            <h3>
              {"Belum cocok di satu posisi?"}
              <br />
              {"Masih ada kesempatan lain."}
            </h3>
            <p>
              {
                "Profilmu tetap menjadi bagian dari talent pool dan dapat dipertimbangkan untuk posisi atau proyek lain sesuai kecocokan dan persetujuanmu."
              }
            </p>
            <div className="mini-journey">
              <span>{"Profil kandidat"}</span>
              {"→"}
              <span>{"Seleksi posisi A"}</span>
              {"→"}
              <span>{"Peluang posisi B"}</span>
            </div>
            <p style={{ fontSize: "11px", marginTop: "20px" }}>
              {"Rekomendasi bukan jaminan diterima bekerja."}
            </p>
          </article>
          <article>
            <div className="eyebrow">{"Generate CV"}</div>
            <h3>
              {"Profil lengkap."}
              <br />
              {"CV siap digunakan."}
            </h3>
            <p>
              {
                "Gunakan informasi profil untuk menghasilkan CV yang mendukung perjalanan melamarmu."
              }
            </p>
            <div className="cv-mini" aria-hidden="true">
              <b style={{ fontSize: "12px" }}>{"CURRICULUM VITAE"}</b>
              <div className="cv-line" style={{ width: "55%" }}></div>
              <div className="cv-line"></div>
              <div className="cv-line" style={{ width: "80%" }}></div>
              <div className="cv-line"></div>
            </div>
          </article>
          <article>
            <div className="eyebrow">{"Proses lebih jelas"}</div>
            <h3>
              {"Ikuti perkembangan."}
              <br />
              {"Siapkan langkahmu."}
            </h3>
            <p>
              {
                "Pantau lamaran, informasi interview, dan penawaran dalam satu tempat."
              }
            </p>
            <div className="notice">{"Screening → Interview → Finalisasi"}</div>
            <a href="#aplikasi" className="textlink">
              {"Kenali aplikasi kandidat ↗"}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
