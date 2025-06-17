export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#161b22',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#about" style={{ color: '#58a6ff', textDecoration: 'none' }}>À propos</a>
        <a href="#projects" style={{ color: '#58a6ff', textDecoration: 'none' }}>Projets</a>
        <a href="#contact" style={{ color: '#58a6ff', textDecoration: 'none' }}>Contact</a>
        <a href="/CV-DF.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#58a6ff', textDecoration: 'none' }}>CV</a>
        <a href="https://github.com/Bikoum-95" target="_blank" rel="noopener noreferrer" style={{ color: '#58a6ff', textDecoration: 'none' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/soren-bikoumou-b1b840357/" target="_blank" rel="noopener noreferrer" style={{ color: '#58a6ff', textDecoration: 'none' }}>LinkedIn</a>
      </div>
    </nav>
  );
}
