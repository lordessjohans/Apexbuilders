export interface Project {
  id: string;
  name: string;
  clientName: string;
  status: 'planning' | 'in-progress' | 'completed';
  progress: number;
  startDate: string;
  estimatedCompletion: string;
}

export interface FinishOption {
  id: string;
  category: string;
  name: string;
  price: number;
  image: string;
  selected?: boolean;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  date: string;
  size: string;
}

export interface Message {
  id: string;
  sender: 'client' | 'builder';
  text: string;
  timestamp: string;
}
