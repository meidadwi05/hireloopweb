export default function SectionHero0() {
  return (
    <section className="hero">
      <div className="hero-photo">
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/assets/interview-hero-mobile.webp"
          />
          <img
            src="/assets/interview-hero.webp"
            alt="Suasana interview kandidat dan perekrut di kantor modern"
            width="1672"
            height="941"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hero-shade" aria-hidden="true"></div>
      <div className="hero-rules" aria-hidden="true"></div>
      <div className="wrap hero-stage">
        <div className="hero-title">
          <div className="pill">
            <span className="dot"></span>
            {" TALENT POOL · CANDIDATE FIRST"}
          </div>
          <h1>
            {"Satu Profil."}
            <br />
            {"Lebih Banyak"}
            <br />
            <span>{"Peluang."}</span>
          </h1>
        </div>
        <div className="hero-bottom">
          <a href="#fokus" className="scroll-cue">
            {"JELAJAHI HIRELOOP "}
            <span>{"↓"}</span>
          </a>
          <div className="hero-description">
            <p className="lead">
              {
                "Bangun profil, buat CV, dan pantau proses seleksimu. Belum cocok di satu posisi? Profilmu dapat dipertimbangkan untuk peluang lain sesuai kemampuan, preferensi, dan persetujuanmu."
              }
            </p>
            <div className="hero-buttons">
              <button
                className="btn"
                onClick={(event) => {
                  window.auth("Daftar");
                }}
              >
                {"Buat Profil Gratis ↗"}
              </button>
              <a className="btn outline" href="#lowongan">
                {"Jelajahi Lowongan →"}
              </a>
            </div>
            <div className="small">
              {"✓ Proses rekrutmen tidak dipungut biaya apa pun"}
            </div>
          </div>
          <div className="hero-note">
            <span className="note-number" aria-hidden="true">
              {"↗"}
            </span>
            <div>
              <b>{"Satu profil, banyak kesempatan"}</b>
              <p>{"Siap untuk peluang berikutnya"}</p>
              <span className="note-rule"></span>
              <b>{"Lamaran terpantau"}</b>
              <p>{"Ikuti prosesnya, tanpa menebak."}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
