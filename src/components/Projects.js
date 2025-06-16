export default function Projects() {
  return (
    <section id="projects">
      <h2>Mes projets</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        <div>
          <h3>Projet Verdana</h3>
          <p>Back-end et front-end d'un système de capteurs pour plantes (PostgreSQL, React, Node.js)</p>
          <a href="https://github.com/tonpseudo/verdana" target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
        <div>
          <h3>CRM Fullstack</h3>
          <p>Mini CRM avec Next.js, Prisma et PostgreSQL — Authentification, gestion client, dashboard</p>
          <a href="https://github.com/tonpseudo/crm-next" target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
      </div>
    </section>
  );
}
