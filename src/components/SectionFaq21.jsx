export default function SectionFaq21() {
  return (
    <section className="section steps-section" id="faq">
      <div className="wrap">
        <div className="center faq-heading">
          <div className="eyebrow">{"Ada yang ingin kamu ketahui?"}</div>
          <h2>{"Kami bantu jawab."}</h2>
        </div>
        <div className="faq">
          <details open={true}>
            <summary>{"Apakah melamar di HireLoop berbayar?"}</summary>
            <p>
              {
                "Tidak. Proses rekrutmen tidak dipungut biaya apa pun. Waspadai pihak yang meminta pembayaran dengan mengatasnamakan HireLoop."
              }
            </p>
          </details>
          <details>
            <summary>{"Dokumen apa yang perlu disiapkan?"}</summary>
            <p>
              {
                "Umumnya KTP, KK, CV, dan ijazah. Periksa detail lowongan karena persyaratan tambahan dapat berbeda pada setiap posisi."
              }
            </p>
          </details>
          <details>
            <summary>{"Bagaimana cara memantau status lamaran?"}</summary>
            <p>
              {
                "Setelah masuk ke portal kandidat, buka Lamaran Saya untuk melihat perkembangan setiap lamaran. Bagian portal pada preview ini berupa ilustrasi."
              }
            </p>
          </details>
          <details>
            <summary>{"Apakah saya bisa melamar beberapa lowongan?"}</summary>
            <p>
              {
                "Bisa. Status dapat berbeda di setiap proyek. Saat kandidat terkunci pada proses Offering atau Hired di satu proyek, proses pada proyek lain mengikuti kebijakan sistem."
              }
            </p>
          </details>
          <details>
            <summary>{"Apakah lamaran bisa dibatalkan?"}</summary>
            <p>
              {
                "Lamaran dapat dibatalkan ketika masih berstatus Baru/Applied. Setelah masuk tahap Screening atau Interview, pembatalan mandiri dinonaktifkan."
              }
            </p>
          </details>
          <details>
            <summary>{"Bagaimana jika kode OTP belum diterima?"}</summary>
            <p>
              {
                "Periksa alamat email dan folder spam. Tunggu waktu kirim ulang pada halaman verifikasi. Pengiriman OTP belum tersedia dalam preview desain ini."
              }
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
