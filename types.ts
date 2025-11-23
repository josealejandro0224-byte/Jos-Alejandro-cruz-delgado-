export interface TagExample {
  code: string;
  description: string;
}

export interface HtmlTag {
  name: string;
  description: string;
  category: TopicCategory;
  syntax: string;
  usage: string;
  attributes?: string[];
  example: TagExample;
  bestPractices?: string[];
}

export enum TopicCategory {
  BASICS = 'Fundamentos',
  TEXT = 'Texto y Formato',
  LISTS = 'Listas',
  STRUCTURE = 'Estructura',
  SEMANTICS = 'Semántica Moderna',
  MEDIA = 'Multimedia',
  FORMS = 'Formularios',
  TABLES = 'Tablas',
  PROGRAMMING = 'Scripting & Meta'
}

export interface AIResponse {
  content: string;
  type: 'explanation' | 'quiz' | 'code';
}