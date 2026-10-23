export default function SectionMulai23() {
  return (
    <section
      className="cta footer-banner"
      id="mulai"
      aria-labelledby="closing-title"
    >
      <div className="footer-photo">
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/assets/meeting-footer-mobile.webp"
          />
          <img
            src="/assets/meeting-footer.webp"
            alt="Suasana meeting yang tenang di kantor modern"
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="footer-photo-shade" aria-hidden="true"></div>
      <div className="wrap closing-content">
        <h2 id="closing-title">
          <span className="closing-line">
            <span className="closing-line-inner">
              {"Peluang baru menunggumu."}
            </span>
          </span>
        </h2>
        <p>
          {"Satu profil untuk melamar hari ini dan membuka peluang berikutnya."}
        </p>
        <button
          className="btn footer-button"
          onClick={(event) => {
            window.auth("Daftar");
          }}
        >
          <span className="button-copy">
            <span>{"Buat Profil Gratis"}</span>
            <span aria-hidden="true">{"Buat Profil Gratis"}</span>
          </span>
          <span className="button-arrow" aria-hidden="true">
            {"↗"}
          </span>
        </button>
      </div>
    </section>
  );
}
