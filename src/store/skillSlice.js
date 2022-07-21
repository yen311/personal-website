import { createSlice } from '@reduxjs/toolkit';
import SkillData from '../data/SkillsData';
const initialState = { skills: SkillData };

const skillSlice = createSlice({
  name: 'skill',
  initialState: initialState,
  reducers: {
    findSoftWareSkills(state) {
      state.skills = SkillData.filter((skill) => skill.group === 'development');
    },
    findDataSkills(state) {
      state.skills = SkillData.filter((skill) => skill.group === 'Data');
    },
    findSoftSkills(state) {
      state.skills = SkillData.filter((skill) => skill.group === 'Soft');
    },
    findAllSkills(state) {
      state.skills = SkillData;
    },
    findOtherSkills(state) {
      state.skills = SkillData.filter((skill) => skill.group === 'Other');
    },
  },
});

export const skillAction = skillSlice.actions;
export default skillSlice;
