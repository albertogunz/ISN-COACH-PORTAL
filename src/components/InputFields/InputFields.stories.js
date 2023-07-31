import { InputFields } from ".";

export default {
  title: "Components/InputFields",
  component: InputFields,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4", "variant-8", "variant-7", "variant-6"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    overlapGroupClassName: {},
    errorMessageClassName: {},
    text: "Name",
    boxClassName: {},
    keyFieldClassName: {},
    startCursorClassName: {},
    maskLayerClassName: {},
    maskLayer: "https://generation-sessions.s3.amazonaws.com/c7a0c04b2482b52ca59165cd311cc388/img/mask-layer-9@2x.png",
    endCursorClassName: {},
    endCursor:
      "https://generation-sessions.s3.amazonaws.com/c7a0c04b2482b52ca59165cd311cc388/img/start-cursor-9@2x.png",
  },
};
