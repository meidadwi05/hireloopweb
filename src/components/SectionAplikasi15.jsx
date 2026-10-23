export default function SectionAplikasi15() {
  return (
    <section className="app-section" id="aplikasi">
      <div className="wrap app-grid">
        <div>
          <div className="eyebrow">{"HireLoop di smartphone"}</div>
          <h2>
            {"Kesempatan berikutnya."}
            <br />
            {"Dekat di genggaman."}
          </h2>
          <p>
            {
              "Akses perjalanan rekrutmen melalui PWA HireLoop: profil, lowongan, lamaran, dan informasi seleksi dalam satu pengalaman."
            }
          </p>
          <div className="app-list">
            <span>{"✓ Satu akun untuk web dan PWA"}</span>
            <span>{"✓ Profil kandidat dan generate CV"}</span>
            <span>{"✓ Lamaran, penawaran, dan notifikasi rekrutmen"}</span>
          </div>
          <button
            className="btn"
            onClick={(event) => {
              window.pwaGuide();
            }}
          >
            {"Lihat Cara Akses PWA ↗"}
          </button>
          <p className="qr-note">
            {
              "PWA termasuk cakupan fase pertama. Panel ini memperlihatkan rancangan pengalaman aplikasi."
            }
          </p>
        </div>
        <div
          className="phone"
          aria-label="Mockup aplikasi kandidat, data ilustrasi"
        >
          <div style={{ fontSize: "9px", color: "#7e8eaa" }}>
            {"PREVIEW APLIKASI"}
          </div>
          <h3 style={{ margin: "10px 0 3px" }}>{"Halo, Kandidat 👋"}</h3>
          <div style={{ fontSize: "10px", color: "#7c8aa2" }}>
            {"Siap untuk peluang berikutnya?"}
          </div>
          <div
            className="phone-card"
            style={{ background: "#00205a", color: "white" }}
          >
            <strong>{"Profilmu, peluangmu."}</strong>
            <p style={{ fontSize: "10px", color: "#cbdcf7", margin: "6px 0" }}>
              {"Lengkapi profil untuk siap melamar."}
            </p>
            <div
              style={{
                height: "5px",
                borderRadius: "5px",
                background: "#ffffff22",
              }}
            >
              <div
                style={{
                  height: "5px",
                  width: "75%",
                  background: "#79aaff",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
            <small>{"Contoh kelengkapan profil"}</small>
          </div>
          <strong>{"Lamaran Saya"}</strong>
          <div className="phone-card">
            <b>{"Admin Gudang"}</b>
            <div style={{ color: "#8b9ab1", margin: "5px 0" }}>
              {"Proyek contoh · Bekasi"}
            </div>
            <span className="badge">{"Interview"}</span>
          </div>
          <div className="phone-card">
            <b>{"Operator Produksi"}</b>
            <div style={{ color: "#8b9ab1", margin: "5px 0" }}>
              {"Proyek contoh · Karawang"}
            </div>
            <span
              className="badge"
              style={{ color: "#2461b9", background: "#eaf2ff" }}
            >
              {"Screening"}
            </span>
          </div>
          <div className="phone-nav">
            <span>{"⌂ Beranda"}</span>
            <span>{"▤ Lamaran"}</span>
            <span>{"♙ Profil"}</span>
          </div>
        </div>
        <div className="qr-card">
          <span className="preview-label">{"QR PETUNJUK SEMENTARA"}</span>
          <br />
          <strong>{"Scan untuk petunjuk PWA"}</strong>
          <a href="#petunjuk-pwa" aria-label="Buka petunjuk sementara PWA">
            <img
              src="/pwa-guide-qr.svg"
              alt="QR menuju petunjuk PWA di halaman preview HireLoop"
              width="176"
              height="176"
            />
          </a>
          <p>{"Arahkan kamera HP ke QR, lalu buka tautannya."}</p>
          <button
            className="btn outline"
            onClick={(event) => {
              window.pwaGuide();
            }}
          >
            {"Buka Petunjuk"}
          </button>
          <p className="qr-note">
            {
              "QR ini membuka petunjuk di preview, belum aplikasi PWA asli. Tujuan QR akan diganti setelah URL resmi diberikan."
            }
          </p>
          <p className="qr-note">
            {"Preview privat: gunakan akun pemilik untuk membuka tautan."}
          </p>
        </div>
      </div>
    </section>
  );
}
