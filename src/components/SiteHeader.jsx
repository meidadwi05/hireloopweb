export default function SiteHeader() {
  return (
    <header>
      <div className="wrap nav">
        <a
          href="#"
          className="logo supplied-logo"
          aria-label="HireLoop beranda"
        >
          <span className="brand-window">
            <img
              src="/assets/hireloop-logo.png"
              alt="HireLoop"
              width="1872"
              height="512"
              fetchpriority="high"
            />
          </span>
        </a>
        <nav className="links" id="nav">
          <a href="#lowongan">{"Cari Lowongan"}</a>
          <a href="#industri">{"Industri"}</a>
          <a href="#cara">{"Cara Kerja"}</a>
          <a href="#aplikasi">{"Aplikasi"}</a>
          <a href="/untuk-perusahaan/">{"Untuk Perusahaan ↗"}</a>
          <a href="#fokus">{"Tentang Kami"}</a>
          <a
            className="nav-register"
            href="#"
            onClick={(event) => {
              window.auth("Daftar");
              event.preventDefault();
            }}
          >
            {"Buat Profil Gratis"}
          </a>
        </nav>
        <div className="actions">
          <a
            href="#"
            onClick={(event) => {
              window.auth("Masuk");
              event.preventDefault();
            }}
          >
            {"Masuk"}
          </a>
          <button
            className="btn"
            onClick={(event) => {
              window.auth("Daftar");
            }}
          >
            {"Buat Profil Gratis ↗"}
          </button>
        </div>
        <button
          className="menu"
          aria-label="Buka navigasi"
          onClick={(event) => {
            document.getElementById("nav").classList.toggle("open");
          }}
        >
          {"☰"}
        </button>
      </div>
    </header>
  );
}
