export interface PostInterface {
    id: number;
    reactions: number;
    title: string;
    body: string;
    tags: string[];
  };

  export interface PaginationInterface {
    limit:number;
    total:number;
    page:number;
  };