import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section id="about" className={`aboutContainer ${isVisible ? 'fadeIn' : ''}`}>
      <h2 className="aboutTitle">À propos de moi</h2>
      <p className="aboutDescription">
        🎓 Étudiant passionné à l’<strong>ETNA</strong>, je me spécialise dans le <strong>développement web fullstack</strong> et la <strong>data science</strong>.
        Toujours curieux des nouvelles technologies, j’aime concevoir des projets modernes et techniques.
        <br /><br />
        Actuellement en recherche d’une <strong>alternance</strong> et d’un <strong>job étudiant</strong>, je suis prêt à relever de nouveaux défis et à contribuer activement à des projets innovants.
      </p>
    </section>
  );
}
