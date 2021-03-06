// NB: actual message records will look slightly different
export type Message = {
  body: string;
  created_at: string;
  customer_id?: string;
  conversation_id: string;
  user_id?: string;
  // Deprecate
  sender: string;
};

// NB: actual conversation records will look different
export type Conversation = {
  id: string;
  customer: string;
  date: string;
  preview: string;
  messages?: Array<Message>;
};
