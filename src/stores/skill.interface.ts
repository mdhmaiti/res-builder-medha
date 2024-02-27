export interface ISkillItem {
  name: string;
  level: number | null;
}

export interface ISkillState {
  title: string;
  hasLevel: boolean;
  values: ISkillItem[];
  isEnabled: boolean;

  add: ({ name, level }: { name: string; level: number | null }) => void;
  remove: (index: number) => void;
  get: () => void;
  reset: (name: ISkillItem[]) => void;
  setIsEnabled: (enabled: boolean) => void;
}
