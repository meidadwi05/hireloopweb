export default function SectionLowongan9() {
  return (
    <section className="section" id="lowongan">
      <div className="wrap">
        <div className="section-top">
          <div>
            <div className="eyebrow">{"Temukan peluangmu"}</div>
            <h2>{"Karier berikutnya dimulai di sini."}</h2>
            <p>{"Pilih pekerjaan yang sesuai dengan minat dan kemampuanmu."}</p>
          </div>
          <button
            className="textlink"
            style={{ border: "0", background: "none" }}
            onClick={(event) => {
              window.resetFilters();
            }}
          >
            {"Reset pencarian ↗"}
          </button>
        </div>
        <div className="tabs" id="tabs"></div>
        <div className="jobs" id="jobs"></div>
        <span className="demo">
          {
            "Preview desain · Seluruh lowongan dan kisaran gaji di bawah adalah data contoh."
          }
        </span>
      </div>
    </section>
  );
}
