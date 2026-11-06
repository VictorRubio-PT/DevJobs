export default function seachbar({ value, onChange }) {
    return (
        <section className="search-section container">
            <label htmlFor="search" className="search-label">
                <input
                    type="search"
                    id="busca"
                    placeholder="Ex: React, Node.js, Python"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </section>
    );
}