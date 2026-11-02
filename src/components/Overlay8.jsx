export default function Overlay8() {
  return (
    <div className="sticky-cta" id="mobilecta">
      <span>
        {"Satu profil."}
        <br />
        <b>{"Lebih banyak peluang."}</b>
      </span>
      <button
        className="btn"
        onClick={(event) => {
          window.auth("Daftar");
        }}
      >
        {"Buat Profil Gratis ↗"}
      </button>
    </div>
  );
}
