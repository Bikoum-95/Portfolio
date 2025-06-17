export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px', backgroundColor: '#161b22', position: 'sticky', top: 0, zIndex: 1000
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
        <a href="/CV-DF.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        <a href="https://github.com/Bikoum-95" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/soren-bikoumou-b1b840357/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
}
