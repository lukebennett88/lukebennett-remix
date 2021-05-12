export interface SanityPost {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: 'post';
  _updatedAt: Date;
  // eslint-disable-next-line @typescript-eslint/ban-types
  body: [object];
  description: string;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
}
