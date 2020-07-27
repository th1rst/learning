import React from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <BackgroundImage />
      <Navigation />
      <div className="recipe-list-container">
        <div className="heading-container">
          <div className="heading-column-1">
            <img className="heading-image" src={require("../images/portrait.png")} alt="portrait of author" />
          </div>
          <div className="heading-column-2">
            <p className="article-heading">Über den Autor</p>
          </div>
        </div>
        <div className="main-text-container">
          1941 geboren und schon immer überzeugter Technik-Fan. Daher kamen nur
          einige, wenige Berufe in Frage. Letztlich hieß es: Fleugzeit- oder
          Computertechnik. Schlussendlich siegten die digitalen Großcomputer des
          damals weltweit zweitgrößten Computerkonzerns und dementsprechend fiel
          meine Berufswahl aus – eine Enscheidung, die ich, trotzd des oft
          extremen Stresses, niemals wirklich bereut habe. Doch was hat das
          alles mit Kochen zu tun? Ganz einfach: Ich esse gerne und reiste viel.
          Da ich aber auch gerne gut esse, wiege ich schon immer ein paar Kilo
          zu viel.
          <br />
          <br />
          Gerade im Ausland dachte ich mir oft:
          <i>“Dieses Rezept möchte ich gerne in die Hände bekommen!”</i> Oder im
          schlechteren Fall:
          <i>
            “Dieses Gericht könnte man aber deutlich besser zubereiten!”
          </i>
          und darum begann ich, wann immer sich gie Gelegenheit ergab, auch mal
          selbst zu kochen. Und weil nämlich die bekannte Aussage von Oscar
          Wilde
          <br />
          <br />
          “Ich habe einen einfachen Geschmack und bin daher stets mit dem Besten
          zufrieden!”
          <br />
          <br />
          auch auf mich im besonderen Maß zutrifft, strebe ich nur zu gerne nach
          dem Bestmöglichen, dem Ultimativen.
          <br />
          <br />
          Damit war ich am Anfang – hier und da – sogar recht erfolgreich. Das
          Problem war jedoch: Beim nächsten Nachkochen wusste ich nicht mehr,
          wie ich es zuvor so gut hinbekam. Darum begann ich, meine Kreationen
          genau als Rezepte zu notieren und immer wieder Verbesserungsnotizen zu
          machen. Kochen ist für mich eine hundertprozentige Rezeptfrage. Die
          oftmals mühsam erarbeitete, hohe Qualität der von mir abgestimmten
          Gerichte will ich immer auf Abruf “aus dem Hut zaubern” können. Für
          mich ist es inaktzeptabel, ein Gericht bei jeder Zubereitung neu
          “erfinden” zu müssen und dann – oh Schreck- das eine oder andere,
          vielleicht sogar wesentliche Gewürz oder eine Komponente vergessen zu
          haben.
          <br />
          <br />
          Nun, über 30 Jahre später, blicken Sie auf eine erlesene
          Zusammenstellung aller Rezepte, die von zeitloser und höchster
          kulinarischer Güte sind.
          <br />
          <br />
          Auf dieser Webseite finden Sie internationale Rezepte der Klasse
          “Rustikale Küche”, jedoch stets in der Optimal- oder Edelversion. Von
          exquisiten, ur-spanischen Gerichten über klassische deutsche
          Hausmannskost, bis hin zum typisch amerikanischen Barbecue inkl.
          authentischer BBQ-Saucen finden Sie heir alles, was der
          anspruchsvolle, gern abwechslungsreich schmeckende Gaumen begehrt. Die
          wunderbar wohlschmeckende Feinschmecker-Exkursion wird mit himmlischen
          Torten und Desserts abgerundet.
        </div>
      </div>
      <Footer />
    </div>
  );
}
