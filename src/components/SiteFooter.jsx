export default function SiteFooter() {
  return (
    <footer className="pactum-footer">
      <div className="wrap">
        <div className="footgrid">
          <div className="footer-brand">
            <a href="#" className="logo" aria-label="HireLoop beranda">
              <span className="brand-window">
                <img
                  src="/assets/hireloop-logo.png"
                  alt="HireLoop"
                  width="1872"
                  height="512"
                  loading="lazy"
                />
              </span>
            </a>
            <p>
              {
                "Temukan peluang kerja yang sesuai, lamar lebih mudah, pantau setiap tahap."
              }
            </p>
            <span className="small">{"Rekrutmen tanpa biaya."}</span>
          </div>
          <div>
            <h4>{"Jelajahi"}</h4>
            <a href="#lowongan">{"Cari Lowongan"}</a>
            <a href="#industri">{"Bidang Industri"}</a>
            <a href="#cara">{"Cara Melamar"}</a>
            <a href="#fokus">{"Tentang HireLoop"}</a>
          </div>
          <div>
            <h4>{"Untuk Kandidat"}</h4>
            <a
              href="#"
              onClick={(event) => {
                window.auth("Daftar");
                event.preventDefault();
              }}
            >
              {"Buat Profil Gratis"}
            </a>
            <a
              href="#"
              onClick={(event) => {
                window.auth("Masuk");
                event.preventDefault();
              }}
            >
              {"Masuk Akun"}
            </a>
            <a href="#aplikasi">{"Aplikasi PWA"}</a>
            <a href="#petunjuk-pwa">{"Panduan Akses"}</a>
          </div>
          <div>
            <h4>{"Bantuan"}</h4>
            <a href="#faq">{"Pertanyaan Umum"}</a>
            <a href="/untuk-perusahaan/">{"Untuk Perusahaan ↗"}</a>
            <a
              href="#"
              onClick={(event) => {
                window.legal("Kebijakan Privasi");
                event.preventDefault();
              }}
            >
              {"Kebijakan Privasi"}
            </a>
            <a
              href="#"
              onClick={(event) => {
                window.legal("Syarat & Ketentuan");
                event.preventDefault();
              }}
            >
              {"Syarat & Ketentuan"}
            </a>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          <span className="footer-brand-text">{"HireLoop"}</span>
          <span className="footer-brand-arrow">{"↗"}</span>
        </div>
        <div className="copyright">
          <span>{"© 2026 HireLoop. All rights reserved."}</span>
          <span>{"Preview UI/UX · Candidate first"}</span>
          <a href="#" aria-label="Kembali ke atas">
            {"Kembali ke atas ↑"}
          </a>
        </div>
      </div>
    </footer>
  );
}
