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
        Je ne suis pas encore un expert, mais chaque jour je me rapproche un peu plus du développeur que je veux devenir.
        Étudiant à l’<strong>ETNA</strong>, je plonge à fond dans le <strong>développement web fullstack</strong>, le <strong>DevOps</strong> et les <strong>systèmes d’information</strong>. Pas juste pour apprendre des lignes de code, mais pour comprendre comment tout fonctionne en profondeur.
        <br /><br />
        Devenir ce profil rare capable à la fois de coder, de comprendre l’infra et surtout de toujours trouver une solution, même quand ce n’est pas simple. Je crois sincèrement que l’envie et le travail finissent toujours par payer.
        <br /><br />
        Aujourd’hui, je cherche une <strong>alternance</strong> ou un <strong>job étudiant</strong> pour passer à l’étape suivante : me confronter au terrain, apprendre des professionnels et contribuer, même à mon niveau, à des projets qui ont du sens.
        <br /><br />
        Pas parfait, mais déterminé. Curieux, optimiste, et surtout prêt à donner le meilleur.
      </p>
    </section>
  );
}
