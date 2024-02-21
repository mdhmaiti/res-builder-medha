import create, { SetState } from 'zustand';

// Define the state type
interface TipState1 {
  isTipVisible1: boolean;
}
interface TipState2 {
  isTipVisible2: boolean;
}
interface TipState3 {
  isTipVisible3: boolean;
}
interface TipState4 {
  isTipVisible4: boolean;
}
interface TipState5 {
  isTipVisible5: boolean;
}
interface TipState6 {
  isTipVisible6: boolean;
}

// Define the store
export const useTipPersonal = create((set: SetState<TipState1>) => ({
  isTipVisible1: false,
  showTip: () => set({ isTipVisible1: true }),
  hideTip: () => set({ isTipVisible1: false }),
}));

export const useTipSkillExp = create((set: SetState<TipState2>) => ({
  isTipVisible2: false,
  showTip: () => set({ isTipVisible2: true }),
  hideTip: () => set({ isTipVisible2: false }),
}));

export const useTipEducation = create((set: SetState<TipState3>) => ({
  isTipVisible3: false,
  showTip: () => set({ isTipVisible3: true }),
  hideTip: () => set({ isTipVisible3: false }),
}));

export const useTipExperience = create((set: SetState<TipState4>) => ({
  isTipVisible4: false,
  showTip: () => set({ isTipVisible4: true }),
  hideTip: () => set({ isTipVisible4: false }),
}));
export const useTipAchievements = create((set: SetState<TipState5>) => ({
  isTipVisible5: false,
  showTip: () => set({ isTipVisible5: true }),
  hideTip: () => set({ isTipVisible5: false }),
}));
export const useTipProjects = create((set: SetState<TipState6>) => ({
  isTipVisible6: false,
  showTip: () => set({ isTipVisible6: true }),
  hideTip: () => set({ isTipVisible6: false }),
}));
