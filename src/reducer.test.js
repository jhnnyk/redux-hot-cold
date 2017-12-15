import hotColdReducer from "./reducer";
import { generateAuralUpdate, restartGame, makeGuess } from "./actions";

describe("hotColdReducer", () => {
  it("Should set the initial state when nothing is passed in", () => {
    const state = hotColdReducer(undefined, { type: "__UNKNOWN" });
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.auralStatus).toEqual("");
    expect(state.correctAnswer).toBeLessThan(101);
    expect(state.correctAnswer).toBeGreaterThan(0);
  });

  it("Should return the current state on an unknown action", () => {
    let currentState = {};
    const state = hotColdReducer(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("makeGuess", () => {
    it("Should add a guess", () => {
      let state;
      state = hotColdReducer(state, makeGuess(34));
      expect(state.guesses).toEqual([34]);
    });
  });

  describe("restartGame", () => {
    it("Should reset the state", () => {
      let state;
      state = hotColdReducer(state, makeGuess(34));
      expect(state.guesses).toEqual([34]);
      state = hotColdReducer(state, restartGame());
      expect(state.guesses).toEqual([]);
    });
  });

  describe("generateAuralUpdate", () => {
    it("Should update the aural status", () => {
      let state;
      state = hotColdReducer(state, makeGuess(34));
      state = hotColdReducer(state, generateAuralUpdate());
      expect(state.auralStatus).not.toEqual("");
    });
  });
});
