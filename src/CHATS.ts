import { Chat } from "./DTOS/ChatDTO";
import { CONSTANT } from "./CONSTANTS";

export const CHATS: Chat[] = [
  {
    username: "Mike Tyson",
    contact_info: {
      email: "mike@email.com",
      phone: "3433238987",
    },
    profile_picture: "",
    status_summary: CONSTANT.STATUS_SUMMARY_AVAILABLE,
    chats: [
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "Hi",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "Hello",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "How are YOU!!!",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "I AM FINE How are you???????",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
    ],
  },
  {
    username: "The Rock",
    contact_info: {
      email: "dwyane.johnson@email.com",
      phone: "7786543324",
    },
    profile_picture: "",
    status_summary: CONSTANT.STATUS_SUMMARY_SLEEPING,
    chats: [
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "let's goto movie",
        status: CONSTANT.STATUS_MESSAGE_UNREAD,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "I have 2 movie tickets",
        status: CONSTANT.STATUS_MESSAGE_UNREAD,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "It Will be fun!!",
        status: CONSTANT.STATUS_MESSAGE_UNREAD,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "Can you suggest any good movie???",
        status: CONSTANT.STATUS_MESSAGE_UNREAD,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "hello????",
        status: CONSTANT.STATUS_MESSAGE_UNREAD,
      },
    ],
  },
  {
    username: "Natasha",
    contact_info: {
      email: "nat34@ym.com",
      phone: "65656543433",
    },
    profile_picture: "",
    status_summary: CONSTANT.STATUS_SUMMARY_AT_WORK,
    chats: [
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "hi",
        status: CONSTANT.STATUS_MESSAGE_DELIVERED,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "hi",
        status: CONSTANT.STATUS_MESSAGE_DELIVERED,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "where are you??",
        status: CONSTANT.STATUS_MESSAGE_NOT_DELIVERED,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "where are you???",
        status: CONSTANT.STATUS_MESSAGE_DELIVERED,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "I need physics book",
        status: CONSTANT.STATUS_MESSAGE_DELIVERED,
      },
    ],
  },
  {
    username: "John Doe",
    contact_info: {
      email: "john19@exp.com",
      phone: "2223456354",
    },
    profile_picture: "",
    status_summary: CONSTANT.STATUS_SUMMARY_AT_GYM,
    chats: [
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "hi",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "we should hang out!!",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "what about today evening at 5pm?",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "Sure!!!",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "Let's meet near the park at 5pm",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
    ],
  },
  {
    username: "James Smith",
    contact_info: {
      email: "smith.j@pm.co",
      phone: "3323345678",
    },
    profile_picture: "",
    status_summary: CONSTANT.STATUS_SUMMARY_AT_GYM,
    chats: [
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "Who is thAt man with red hat?",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "He was my uncle",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "You never told me that you have a uncle",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "Yes because he lives abroad",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "He is here for a business trip",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "We don't talk much",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "He never likes me and I also not like him much",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "ok OK",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
    ],
  },
  {
    username: "John Snow",
    contact_info: {
      email: "snow22john@exp.com",
      phone: "56563432",
    },
    profile_picture: "",
    status_summary: CONSTANT.STATUS_SUMMARY_AVAILABLE,
    chats: [
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "Have you seen my wallet???",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "I think it is lost!!!",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "wait, what????",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "You have become so careless now",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "Try to find it as soon as possible",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "I have given you 500 rupees yesterday, remember???",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "I want my money back",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
    ],
  },
  {
    username: "Carl Drogo",
    contact_info: {
      email: "drogo@email.com",
      phone: "225487300",
    },
    profile_picture: "",
    status_summary: CONSTANT.STATUS_SUMMARY_AVAILABLE,
    chats: [
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "Have you seen the batman movie?",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: true,
        time: new Date().toISOString(),
        message: "It is soo good. I just love that movie. I have seen it more than 6 times",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "Do you have the movie in you phone or PC??",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "Give me the movie I will watch it too if it is so good",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
      {
        isSent: false,
        time: new Date().toISOString(),
        message: "when you are free?",
        status: CONSTANT.STATUS_MESSAGE_READ,
      },
    ],
  },
];
