export interface Country {
  name: string;
  code: string;
}

export interface RegisterObject {
  handle: string;
  group?: string;
  country: string;
}

export interface Visitors {
  handle: string;
  group?: string;
  country: string;
  created: string;
}
