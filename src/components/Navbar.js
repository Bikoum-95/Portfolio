import Image from 'next/image'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px', backgroundColor: '#161b22', position: 'sticky', top: 0, zIndex: 1000
    }}>
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        <a href="https://github.com/tonpseudo" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/tonprofil" target="_blank">LinkedIn</a>
      </div>
    </nav>
  )
}
