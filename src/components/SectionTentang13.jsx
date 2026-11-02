export default function SectionTentang13() {
  return (
    <section className="section" id="tentang">
      <div className="wrap about-grid">
        <div className="status-card">
          <div className="eyebrow">{"Gambaran portal kandidat"}</div>
          <h3 style={{ fontSize: "23px", marginBottom: "0" }}>
            {"Satu tempat, setiap perkembangan."}
          </h3>
          <div className="timeline">
            <b style={{ fontSize: "14px" }}>{"Lamaran Saya"}</b>
            <p style={{ fontSize: "12px", marginTop: "3px" }}>
              {"Admin Gudang · Proyek contoh Bekasi"}
            </p>
            <div className="status-line">
              <span>{"✓"}</span>
              {"Lamaran terkirim"}
              <small>{"Selesai"}</small>
            </div>
            <div className="status-line">
              <span>{"✓"}</span>
              {"Screening"}
              <small>{"Selesai"}</small>
            </div>
            <div className="status-line current">
              <span>{"3"}</span>
              <b>{"Interview"}</b>
              <small>{"Dalam proses"}</small>
            </div>
            <div className="status-line">
              <span style={{ background: "#f0f3f7", color: "#9caabd" }}>
                {"4"}
              </span>
              {"Finalisasi"}
              <small>{"Menunggu"}</small>
            </div>
          </div>
          <div className="small" style={{ marginTop: "15px" }}>
            {"Ilustrasi tampilan · bukan status lamaran aktual"}
          </div>
        </div>
        <div>
          <div className="eyebrow">{"Kenali HireLoop"}</div>
          <h2>
            {"Peluang yang sesuai."}
            <br />
            {"Proses yang lebih jelas."}
          </h2>
          <p>
            {
              "HireLoop dirancang untuk menghubungkan pencari kerja dengan peluang di berbagai proyek, mulai dari produksi hingga posisi profesional."
            }
          </p>
          <div className="benefit">
            <b>{"✓"}</b>
            {"Persyaratan pekerjaan mudah dipahami"}
          </div>
          <div className="benefit">
            <b>{"✓"}</b>
            {"Status proses tersedia per lamaran"}
          </div>
          <div className="benefit">
            <b>{"✓"}</b>
            {"Profil kandidat untuk berbagai peluang"}
          </div>
          <a href="#lowongan" className="textlink">
            {"Jelajahi peluang kerja →"}
          </a>
        </div>
      </div>
    </section>
  );
}
