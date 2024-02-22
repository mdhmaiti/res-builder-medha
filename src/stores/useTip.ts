import create, { SetState } from 'zustand';

// Define the state type
// interface TipState1 {
//   isTipVisible1: boolean;
// }
// interface TipState2 {
//   isTipVisible2: boolean;
// }
// interface TipState3 {
//   isTipVisible3: boolean;
// }
// interface TipState4 {
//   isTipVisible4: boolean;
// }
// interface TipState5 {
//   isTipVisible5: boolean;
// }
// interface TipState6 {
//   isTipVisible6: boolean;
// }

interface TipState {
  isTipVisible1: boolean;
  isTipVisible2: boolean;
  isTipVisible3: boolean;
  isTipVisible4: boolean;
  isTipVisible5: boolean;
  isTipVisible6: boolean;
}

// Define the store
export const useTipPersonal = create((set: SetState<TipState>) => ({
  isTipVisible1: false,
  showTip1: () =>
    set(() => ({
      // Keep other tip visibilities as they are
      isTipVisible1: true, // Set the current tip visibility to true
    })),
  hideTip1: () => set({ isTipVisible1: false }),
}));

export const useTipSkillExp = create((set: SetState<TipState>) => ({
  isTipVisible2: false,
  showTip2: () => set({ isTipVisible2: true }),
  hideTip2: () => set({ isTipVisible2: false }),
}));

export const useTipEducation = create((set: SetState<TipState>) => ({
  isTipVisible3: false,
  showTip3: () => set({ isTipVisible3: true }),
  hideTip3: () => set({ isTipVisible3: false }),
}));

export const useTipExperience = create((set: SetState<TipState>) => ({
  isTipVisible4: false,
  showTip4: () => set({ isTipVisible4: true }),
  hideTip4: () => set({ isTipVisible4: false }),
}));
export const useTipAchievements = create((set: SetState<TipState>) => ({
  isTipVisible5: false,
  showTip5: () => set({ isTipVisible5: true }),
  hideTip5: () => set({ isTipVisible5: false }),
}));
export const useTipProjects = create((set: SetState<TipState>) => ({
  isTipVisible6: false,
  showTip6: () => set({ isTipVisible6: true }),
  hideTip6: () => set({ isTipVisible6: false }),
}));
