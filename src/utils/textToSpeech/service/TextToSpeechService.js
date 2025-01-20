const textToSpeechService = {
  speak: (text) => {
    const synth = window.speechSynthesis;
    if (synth && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  },
};

export default textToSpeechService;
