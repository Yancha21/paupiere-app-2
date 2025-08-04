import { useState } from "react";

const pathologies = [
  {
    title: "Blépharite",
    content: 
- Appliquer des compresses chaudes pendant 5 à 10 minutes matin et soir pour fluidifier les sécrétions des glandes de Meibomius.
- Nettoyer délicatement les paupières avec une compresse humide ou un produit adapté (Blephaclean®, Blephasol®, etc.).
- Masser doucement la base des cils de haut en bas pour favoriser le drainage.
- Éviter le maquillage pendant les périodes inflammatoires pour limiter l'irritation.
- Un traitement de fond peut être proposé (oméga-3, cycles réguliers de chaleur et massage).`
  },
  {
    title: "Chalazion",
    content: `
- Appliquer des compresses chaudes (compresses imbibées ou masque chauffant) 2 à 3 fois par jour pendant 10 minutes pour assouplir la glande obstruée.
- Masser la paupière en direction du bord libre après chaque compresse pour favoriser le drainage du chalazion.
- Ne pas tenter de percer ou gratter la lésion.
- Éviter les lentilles de contact et le maquillage en période de poussée.
- Si le chalazion persiste plus de 2 à 3 semaines, consulter un ophtalmologiste (possibilité d’injection ou chirurgie).`
  },
  {
    title: "Conjonctivite",
    content: `
- Se laver les mains soigneusement avant et après chaque soin oculaire.
- Nettoyer les sécrétions à l’aide de sérum physiologique et d’une compresse stérile en allant de l’intérieur vers l’extérieur de l’œil.
- Appliquer le collyre prescrit en respectant la durée du traitement, même si les symptômes régressent rapidement.
- Ne pas se frotter les yeux pour éviter la propagation.
- Ne pas partager serviettes, oreillers, ou produits oculaires.
- Éviter les lentilles de contact pendant la durée des symptômes.`
  },
  {
    title: "Conseils post-IVT",
    content: `
- Ne pas se frotter l’œil dans les heures suivant l’injection intravitréenne (IVT).
- Une sensation de gêne, rougeur ou corps étranger est normale pendant 24-48h.
- Utiliser les collyres prescrits (souvent antibiotique ou anti-inflammatoire) selon les modalités indiquées.
- Éviter les environnements poussiéreux ou sales pendant 2-3 jours.
- Ne pas aller à la piscine ou à la mer pendant 48h.
- Consulter immédiatement en cas de douleur importante, baisse de vision, photophobie, mouches lumineuses ou sécrétions abondantes.`
  },
  {
    title: "Chirurgie",
    content: `
### Post-opératoire chirurgie de la cornée (PK, greffe, cross-linking, etc.)
- Porter une coque de protection, notamment la nuit, pendant plusieurs jours selon les consignes du chirurgien.
- Ne pas se frotter l’œil pour éviter tout traumatisme.
- Appliquer les collyres prescrits : antibiotiques, anti-inflammatoires, et lubrifiants, selon les fréquences indiquées.
- Éviter l’eau dans l’œil (douche, piscine, mer), la poussière et les environnements irritants.
- Ne pas porter de lentilles sans avis médical.
- Signaler immédiatement rougeur, douleur intense, baisse visuelle ou photophobie.

### Post-opératoire chirurgie de la rétine (vitrectomie, décollement de rétine)
- Respecter rigoureusement la position indiquée (face vers le sol, côté gauche/droit) s’il y a une bulle de gaz.
- Ne pas prendre l’avion ni monter en altitude tant que la bulle persiste.
- Appliquer les collyres prescrits (antibiotiques, corticoïdes, mydriatiques) selon le protocole.
- Porter une coque protectrice en cas de risque de traumatisme.
- Éviter les efforts physiques, secousses, déplacements brusques.
- Surveiller l’apparition de points noirs, douleurs, ou baisse de vision rapide.

### Post-opératoire chirurgie palpébrale (blépharoplastie, entropion, ectropion, etc.)
- Appliquer du froid local régulièrement pendant les 48 premières heures pour limiter l’œdème et les ecchymoses (poches de gel froid ou sachet de petits pois sur compresse).
- Nettoyer doucement les croûtes ou les sécrétions avec du sérum physiologique et une compresse propre sans frotter.
- Appliquer la pommade antibiotique prescrite sur les sutures selon les recommandations.
- Dormir la tête surélevée avec un ou deux oreillers pour limiter l’enflure.
- Éviter toute activité physique intense, le port de charges, et le maquillage jusqu’à cicatrisation complète (souvent 10-15 jours).
- Revenir aux rendez-vous post-opératoires pour retrait de fils ou contrôle de cicatrisation.`
  }
];

export default function PaupiereApp() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4 text-center">
      <h1 className="text-2xl font-semibold">Prenez soin de vos paupières avec des conseils simples et adaptés.</h1>
      <div className="space-y-4">
        {pathologies.map((item, index) => (
          <Card key={index} className="text-left">
            <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
              <AccordionItem value={item.title}>
                <button className="w-full flex justify-between items-center p-4" onClick={() => setOpenItem(openItem === item.title ? null : item.title)}>
                  <span className="font-medium text-lg">{item.title}</span>
                  <ChevronDown className={`transition-transform ${openItem === item.title ? "rotate-180" : "rotate-0"}`} />
                </button>
                {openItem === item.title && (
                  <CardContent className="p-4 whitespace-pre-wrap text-sm text-gray-700">
                    {item.content}
                  </CardContent>
                )}
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>
    </div>
  );
}
