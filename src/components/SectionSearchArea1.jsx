export default function SectionSearchArea1() {
  return (
    <div className="search-area">
      <div className="wrap">
        <form className="searchbox" id="search">
          <label className="field">
            <span>{"⌕"}</span>
            <input
              id="keyword"
              aria-label="Posisi atau kata kunci"
              placeholder="Posisi atau kata kunci pekerjaan"
            />
          </label>
          <label className="field">
            <span>{"⌖"}</span>
            <select id="location" aria-label="Lokasi">
              <option value="">{"Semua lokasi"}</option>
              <option>{"Jakarta"}</option>
              <option>{"Bekasi"}</option>
              <option>{"Tangerang"}</option>
              <option>{"Karawang"}</option>
            </select>
          </label>
          <button className="btn" type="submit">
            {"Cari Lowongan →"}
          </button>
        </form>
      </div>
    </div>
  );
}
