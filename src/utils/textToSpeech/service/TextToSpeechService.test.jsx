import textToSpeechService from "./TextToSpeechService";

class SpeechSynthesisUtteranceMock {
  constructor(text) {
    this.text = text;
  }
}

describe("textToSpeechService", () => {
  const synth = {
    speak: jest.fn(),
  };

  beforeAll(() => {
    window.speechSynthesis = synth;
    window.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock;
  });

  afterAll(() => {
    delete window.speechSynthesis;
    delete window.SpeechSynthesisUtterance;
  });

  it("should speak the provided text when both synth and text are provided", () => {
    const text = "*";
    textToSpeechService.speak(text, synth);

    expect(synth.speak).toHaveBeenCalledWith(
      expect.any(SpeechSynthesisUtteranceMock),
    );

    expect(synth.speak.mock.calls[0][0].text).toBe(text);
  });

  it("should speak when text are symbols", () => {
    const text = "*!**";
    textToSpeechService.speak(text, synth);

    expect(synth.speak).toHaveBeenCalledWith(
      expect.any(SpeechSynthesisUtteranceMock),
    );

    expect(synth.speak.mock.calls[0][0].text).toBe(text);
  });

  it("should not speak when synth is not available", () => {
    window.speechSynthesis = null;

    const text = "Hello, world!";
    textToSpeechService.speak(text, synth);

    expect(synth.speak).not.toHaveBeenCalled();
  });

  it("should not speak when text is not provided", () => {
    const text = null;
    textToSpeechService.speak(text);

    expect(synth.speak).not.toHaveBeenCalled();
  });

  it("should not speak when text is empty", () => {
    const text = "";
    textToSpeechService.speak(text, synth);

    expect(synth.speak).not.toHaveBeenCalled();
  });
});
