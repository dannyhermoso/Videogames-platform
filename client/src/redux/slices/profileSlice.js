import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: {
      id: "",
      profileVisibility: [
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
        "Loading...",
      ],
      nationality: ["Loading...", "Loading..."],
      friends: [],
      image: "first-render",
      backgroundImage: "first-render",
    },
    profilePageData: {},
    friendRequests: [],
    otherUserGames: [],
  },
  reducers: {
    profileDetails: (state, action) => {
      state.profileData = action.payload.user;
    },
    friendRequests: (state, action) => {
      return { ...state, friendRequests: action.payload.user.friendRequests };
    },
    otherUserProfileDetails: (state, action) => {
      if (state.profileData.id === action.payload.user.id) {
        return { ...state, profilePageData: action.payload.user };
      }

      let a = state.profileData.friends.filter(
        (x) => x === action.payload.user.id
      );

      let c = a.length > 0 ? true : false;

      //Si sos amigo del chabon el new object deberia chequear si el atributo no es publico entonces fijate si es para solo amigos
      const newObject = {
        ...action.payload.user,
        username:
          action.payload.user.profileVisibility[0] === "Public"
            ? action.payload.user.username
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.username
            : null,
        name:
          action.payload.user.profileVisibility[1] === "Public"
            ? action.payload.user.name
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.name
            : null,
        age:
          action.payload.user.profileVisibility[2] === "Public"
            ? action.payload.user.age
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.age
            : null,
        nationality:
          action.payload.user.profileVisibility[3] === "Public"
            ? action.payload.user.nationality
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.nationality
            : null,
        friends:
          action.payload.user.profileVisibility[4] === "Public"
            ? action.payload.user.friends
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.friends
            : null,
        reviews:
          action.payload.user.profileVisibility[5] === "Public"
            ? action.payload.user.reviews
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.reviews
            : null,
        createdAt:
          action.payload.user.profileVisibility[6] === "Public"
            ? action.payload.user.createdAt
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.createdAt
            : null,
        purchasedGames:
          action.payload.user.profileVisibility[7] === "Public"
            ? action.payload.user.purchasedGames
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.purchasedGames
            : null,
        posts:
          action.payload.user.profileVisibility[8] === "Public"
            ? action.payload.user.posts
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.posts
            : null,
        image:
          action.payload.user.profileVisibility[9] === "Public"
            ? action.payload.user.image
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.image
            : null,
        backgroundImage:
          action.payload.user.profileVisibility[10] === "Public"
            ? action.payload.user.backgroundImage
            : action.payload.user.profileVisibility[0] === "Friends" && c
            ? action.payload.user.backgroundImage
            : null,
      };
      state.profilePageData = { ...newObject };
    },
    cleanUpProfileSlice: (state) => {
      return {
        profileData: {
          id: "",
          profileVisibility: [
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
            "Loading...",
          ],
          nationality: ["Loading...", "Loading..."],
          friends: [],
          image: "first-render",
          backgroundImage: "first-render",
        },
        profilePageData: {},
        friendRequests: [],
        otherUserGames: [],
      };
    },
    getGamesUser: (state, action) => {
      state.otherUserGames = action.payload.games;
    },
  },
});

export const {
  profileDetails,
  otherUserProfileDetails,
  friendRequests,
  cleanUpProfileSlice,
  getGamesUser,
} = profileSlice.actions;
export default profileSlice.reducer;