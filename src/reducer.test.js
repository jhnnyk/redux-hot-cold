import hotColdReducer from "./reducer";
import { generateAuralUpdate, restartGame, makeGuess } from "./actions";

describe("hotColdReducer", () => {
  it("Should set the initial state when nothing is passed in", () => {
    const state = hotColdReducer(undefined, { type: "__UNKNOWN" });
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.auralStatus).toEqual("");
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
});
