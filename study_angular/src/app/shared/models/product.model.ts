export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sustainabilityScore: number; // 0-100 ESG score (relevant to Worldly)
  description?: string;
}

export interface AsyncState<T> {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: T;
  error: string | null;
}

export type TopicId =
  | 'ngrx' | 'rxjs' | 'angular-core' | 'typescript'
  | 'architecture' | 'performance' | 'testing' | 'behavioral';

export interface StudyTopic {
  id: TopicId;
  title: string;
  icon: string;
  level: 'critical' | 'high' | 'medium' | 'complementary';
  subtopics: string[];
  route: string;
}
