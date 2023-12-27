export type GraphNode<T> = {
  node: T;
};

export type BaseApiResponse<T> = {
  [key: string]: {
    edges: GraphNode<T>[];
  };
};
