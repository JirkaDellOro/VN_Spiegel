namespace Spiegel_VN {
  export async function HowToMakeChoices(): ƒS.SceneReturn {
    console.log("Let's make some choices!");

    //   let text = {
    //     Narrator: {
    //       T0000: "",
    //       T0001: "",
    //       T0002: ""
    //     },
    //     Aisaka: {
    //       T0000: "Heute wird sich alles um Auswahlmöglichkeiten drehen.",
    //       T0001: "Schön, dass du dabei warst!"
    //     }
    //   };

    //   // ƒS.Sound.fade(sound.nightclub, 1, 2, true);
    //   ƒS.Speech.hide();
    //   await ƒS.Location.show(locations.nightpark);
    //   await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    //   await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
    //   await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 100));
    //   // ƒS.Character.hide(characters.aisaka);
    //   // ƒS.Character.hideAll();
    //   await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0000);
    //   ƒS.Speech.clear();
    //   ƒS.Speech.hide();
    //   await ƒS.update(3);

    //   let firstDialogueElementAnswers = {
    //     iSayOk: "Okay.",
    //     iSayYes: "Ja.",
    //     iSayNo: "Nein."
    //   };

    //   let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");

    //   switch (firstDialogueElement) {
    //     case firstDialogueElementAnswers.iSayOk:
    //       // continue path here
    //       await ƒS.Speech.tell(characters.aisaka, "Hi");
    //       ƒS.Speech.clear();
    //       break;
    //     case firstDialogueElementAnswers.iSayYes:
    //       // continue path here
    //       await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
    //       ƒS.Character.hide(characters.aisaka);
    //       break;
    //     case firstDialogueElementAnswers.iSayNo:
    //       // continue path here
    //       await ƒS.Speech.tell(characters.aisaka, "Hi");
    //       ƒS.Speech.clear();
    //       break;
    //   }

    //   // You can continue your story right after the choice definitions
    //   await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
  }
}
