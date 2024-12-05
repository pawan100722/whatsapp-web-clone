export interface Message {
  isSent: Boolean;
  time: String;
  message: String;
  status: String;
}

export interface Chat{
    username: String,
    contact_info: {
      email: String,
      phone: String,
    },
    profile_picture: String,
    status_summary: String,
    chats: Message[]
  }
