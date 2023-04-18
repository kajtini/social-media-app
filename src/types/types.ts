export interface Post {
  title: string;
  description: string;
  uid: string;
  id: string;
  timestamp: { seconds: number; nanoseconds: number };
}

export interface Comment {
  content: string;
  uid: string;
  timestamp: { seconds: number; nanoseconds: number };
  id: string;
}

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
