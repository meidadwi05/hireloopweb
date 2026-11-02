export default function SectionFokus5() {
  return (
    <section
      className="purpose-section"
      id="fokus"
      aria-labelledby="purpose-heading"
    >
      <div className="wrap">
        <div className="eyebrow">{"SATU PROFIL. PELUANG BERKELANJUTAN."}</div>
        <h2 className="scroll-statement" id="purpose-heading">
          {
            "Kebanyakan job board berhenti di tombol Lamar. Kami mengambil jalan lain. Kami tidak cuma membukakan pintu. HireLoop bertanggung jawab atas seluruh proses rekrutmen, dari menyaring dan mengatur interview, sampai penawaran, lalu mengantarmu ke meja kerjamu di hari pertama. Lamaranmu belum selesai sampai kamu duduk di sana."
          }
        </h2>
        <div className="purpose-detail">
          <div>
            <span className="eyebrow">{"Fokus kami, langkah kariermu."}</span>
            <p className="purpose-caption">
              {"Lebih siap melamar."}
              <br />
              {"Lebih jelas melangkah."}
            </p>
          </div>
          <div className="purpose-explanation">
            <h3>
              {"Dari potensi yang kamu punya,"}
              <br />
              {"ke peluang yang bisa kamu tuju."}
            </h3>
            <p>
              {
                "HireLoop menghubungkan pencari kerja dengan peluang di berbagai proyek dan bidang pekerjaan. Bangun satu profil kandidat, siapkan CV, lalu temukan lowongan sesuai kemampuan dan preferensimu."
              }
            </p>
            <p>
              {
                "Belum cocok di satu posisi? Perjalananmu tidak berhenti di situ. Profilmu dapat dipertimbangkan untuk kesempatan lain sesuai kecocokan dan persetujuanmu, sementara setiap lamaran bisa kamu pantau prosesnya."
              }
            </p>
            <a className="textlink" href="#lowongan">
              {"Temukan peluangmu "}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
        </div>
        <div
          className="purpose-solutions"
          aria-label="Manfaat HireLoop untuk kandidat"
        >
          <div>
            <span className="solution-index">{"01"}</span>
            <h3>{"Tunjukkan potensimu."}</h3>
            <p>
              {
                "Satu profil dan CV untuk memperkenalkan kemampuanmu dengan lebih baik."
              }
            </p>
          </div>
          <div>
            <span className="solution-index">{"02"}</span>
            <h3>{"Temukan arahmu."}</h3>
            <p>
              {
                "Jelajahi peluang berdasarkan posisi, lokasi, dan preferensi pekerjaan."
              }
            </p>
          </div>
          <div>
            <span className="solution-index">{"03"}</span>
            <h3>{"Ketahui langkahmu."}</h3>
            <p>
              {
                "Pantau perkembangan lamaran dan siapkan diri untuk tahap berikutnya."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
