import { Group } from "three";

import { StepResult } from "./types";

export const rotateWholeGroupCorrectionStep = {
  name: "rotate-whole-group",
  action: (group: Group): StepResult => {
    if (group.rotation.x === 0 && group.rotation.y === 0 && group.rotation.z === 0) {
      return {
        didApply: false,
        topLevelMessage: {
          level: "info",
          message: "Group was already rotated to 0,0,0. No correction needed.",
        },
      };
    }

    group.rotation.x = 0;
    group.rotation.y = 0;
    group.rotation.z = 0;
    group.updateMatrixWorld(true);

    return {
      didApply: true,
      topLevelMessage: { level: "info", message: "Rotated whole imported group to 0,0,0" },
    };
  },
} as const;
