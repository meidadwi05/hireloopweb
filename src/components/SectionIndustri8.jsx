export default function SectionIndustri8() {
  return (
    <section className="section steps-section" id="industri">
      <div className="wrap industry-layout">
        <div className="industry-intro">
          <div className="eyebrow">{"Temukan bidangmu"}</div>
          <h2>
            {"Beragam bidang."}
            <br />
            {"Satu tempat"}
            <br />
            {" memulai."}
          </h2>
          <p>{"Jelajahi bidang pekerjaan sesuai minat dan kemampuanmu."}</p>
          <a href="#lowongan" className="textlink">
            {"Jelajahi lowongan "}
            <span>{"↗"}</span>
          </a>
          <p className="small industry-disclaimer">
            {
              "Kategori untuk eksplorasi. Ketersediaan posisi mengikuti lowongan aktif."
            }
          </p>
        </div>
        <div className="industry-list">
          <div className="industry-grid" id="more-industries">
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Produksi");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21V10l6 4V9l6 4V3h5l1 18H3Z"></path>
                  <path d="M7 17h1m3 0h1m4 0h1"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Manufaktur"}</b>
                <small>{"Operator produksi · Quality control"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Gudang & Logistik");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 7 9-5 9 5v10l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v10M7 4l10 5"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Logistik"}</b>
                <small>{"Warehouse · Admin gudang"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Retail");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10V5h18v5M4 11v10h16V11M9 21v-7h6v7M2 5l2 6h4l4-6 4 6h4l2-6"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Retail"}</b>
                <small>{"Kasir · Store crew"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Administrasi");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 3h10l4 4v14H5V3Zm10 0v5h4M8 12h8M8 16h8"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Administrasi"}</b>
                <small>{"Admin operasional · Data entry"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Teknologi Informasi");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <path d="M8 21h8m-4-4v4m-3-9-3-3 3-3m6 6 3-3-3-3"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Teknologi Informasi"}</b>
                <small>{"IT support · Programmer"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Transportasi");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 4h12v13H2V4Zm12 5h4l4 5v3h-8"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="18" r="3"></circle>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Transportasi"}</b>
                <small>{"Driver · Operasional armada"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Customer Service");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 14v-3a9 9 0 0 1 18 0v6a4 4 0 0 1-4 4h-4"></path>
                  <rect x="2" y="10" width="4" height="8" rx="2"></rect>
                  <rect x="18" y="10" width="4" height="8" rx="2"></rect>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Customer Service"}</b>
                <small>{"Contact center · Customer support"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry"
              onClick={(event) => {
                window.selectIndustry("Engineering");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m14 7 3 3 5-5a7 7 0 0 1-9 9l-8 8-3-3 8-8a7 7 0 0 1 9-9l-5 5Z"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Engineering"}</b>
                <small>{"Teknisi · Maintenance"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry extra-industry"
              hidden={true}
              onClick={(event) => {
                window.selectIndustry("FMCG");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10V5h18v5M4 11v10h16V11M9 21v-7h6v7M2 5l2 6h4l4-6 4 6h4l2-6"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Barang Konsumsi / FMCG"}</b>
                <small>{"Merchandiser · Operator packing"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry extra-industry"
              hidden={true}
              onClick={(event) => {
                window.selectIndustry("Energi & Utilitas");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m14 2-10 12h7l-1 8L21 9h-8l1-7Z"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Energi & Utilitas"}</b>
                <small>{"Operator lapangan · Teknisi"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry extra-industry"
              hidden={true}
              onClick={(event) => {
                window.selectIndustry("Perhotelan & Pariwisata");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 21V5h16v16M2 21h20M9 21v-5h6v5M8 9h1m6 0h1M8 12h1m6 0h1"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Perhotelan & Pariwisata"}</b>
                <small>{"Front office · Housekeeping"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry extra-industry"
              hidden={true}
              onClick={(event) => {
                window.selectIndustry("Media & Komunikasi");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 9h5l10-6v18l-10-6H5V9Zm1 6 2 6h4l-2-6M2 10v4"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Media & Komunikasi"}</b>
                <small>{"Content creator · Desainer grafis"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry extra-industry"
              hidden={true}
              onClick={(event) => {
                window.selectIndustry("Pendidikan & Organisasi Nirlaba");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5C8 2 4 3 2 4v16c3-2 7-2 10 0 3-2 7-2 10 0V4c-3-2-7-2-10 1v15Z"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Pendidikan & Organisasi Nirlaba"}</b>
                <small>{"Admin pendidikan · Staf program"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry extra-industry"
              hidden={true}
              onClick={(event) => {
                window.selectIndustry("Jasa Keuangan");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m2 8 10-6 10 6H2Zm1 14h18M5 11v8m7-8v8m7-8v8M2 19h20"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Jasa Keuangan"}</b>
                <small>{"Admin keuangan · Customer service"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
            <button
              className="industry extra-industry"
              hidden={true}
              onClick={(event) => {
                window.selectIndustry("Pemerintahan & Layanan Publik");
              }}
            >
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M2 22v-4a6 6 0 0 1 12 0v4m1-19a4 4 0 0 1 0 8m3 4a6 6 0 0 1 4 5v2"></path>
                </svg>
              </span>
              <span className="industry-copy">
                <b>{"Pemerintahan & Layanan Publik"}</b>
                <small>{"Admin layanan · Petugas operasional"}</small>
              </span>
              <span className="industry-arrow" aria-hidden="true">
                {"↗"}
              </span>
            </button>
          </div>
          <button
            className="industry-toggle textlink"
            aria-expanded="false"
            aria-controls="more-industries"
            onClick={(event) => {
              window.toggleIndustries(event.currentTarget);
            }}
          >
            {"Lihat Semua Industri "}
            <span>{"＋"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
