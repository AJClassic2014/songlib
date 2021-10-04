const defaultState = {
  regVisible: false,
  loginVisible: false,

  isPlay: false,

  song: {
    id: 1,
    img: "https://album1.cdn107.com/ca/1f/ca1f90d3101fafdab26d628e02982022_md.jpg",
    name: "此生不换 - 青鸟飞鱼",
    url: "此生不换 - 青鸟飞鱼.mp3",
  },

  songs: [
    {
      id: 1,
      img: "https://album1.cdn107.com/ca/1f/ca1f90d3101fafdab26d628e02982022_md.jpg",
      name: "此生不换 - 青鸟飞鱼",
      url: "此生不换 - 青鸟飞鱼.mp3",
    },
    {
      id: 2,
      img: "https://album1.cdn107.com/ca/1f/ca1f90d3101fafdab26d628e02982022_md.jpg",
      name: "可惜不是你 - 梁静茹",
      url: "可惜不是你 - 梁静茹.mp3",
    },
  ],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "changeReg":
      return {
        ...state,
        regVisible: action.val,
      };
    case "changeLogin":
      return {
        ...state,
        loginVisible: action.val,
      };

    case "onPauseOrPlay":
      return {
        ...state,
        isPlay: action.val,
      };

    case "onChangeSong":
      return {
        ...state,
        song: action.val,
      };
    default:
      return state;
  }
};
