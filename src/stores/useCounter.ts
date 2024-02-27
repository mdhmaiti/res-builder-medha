// this is to handle the progress bar;
// it will be called in the hook for the education experience etc
import create from 'zustand';

interface ICounterStore {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  setCounter: (value: number) => void;
}

export const useCounter = create<ICounterStore>((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () => set((state) => ({ counter: Math.max(0, state.counter - 1) })),
  setCounter: (value) => set({ counter: value }),
}));
//education
export const useEducationCounter = () => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const incrementCounter = () => increaseCounter();
  const decrementCounter = () => decreaseCounter();

  return { incrementCounter, decrementCounter };
};
//experience
export const useExperienceCounter = () => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const incrementCounter = () => increaseCounter();
  const decrementCounter = () => decreaseCounter();

  return { incrementCounter, decrementCounter };
};
//skills
export const useSkillsCounter = () => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const incrementCounter = () => increaseCounter();
  const decrementCounter = () => decreaseCounter();

  return { incrementCounter, decrementCounter };
};
//basics
export const useBasicsCounter = () => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const incrementCounter = () => increaseCounter();
  const decrementCounter = () => decreaseCounter();

  return { incrementCounter, decrementCounter };
};
//activities
export const useActivitiesCounter = () => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const incrementCounter = () => increaseCounter();
  const decrementCounter = () => decreaseCounter();

  return { incrementCounter, decrementCounter };
};
//awards
export const useAwardsCounter = () => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const incrementCounter = () => increaseCounter();
  const decrementCounter = () => decreaseCounter();

  return { incrementCounter, decrementCounter };
};

//voluntering
export const useVolunteringCounter = () => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const incrementCounter = () => increaseCounter();
  const decrementCounter = () => decreaseCounter();

  return { incrementCounter, decrementCounter };
};
